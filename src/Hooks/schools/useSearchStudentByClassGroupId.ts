import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { getAllStudentByClassGroupIdAPIcall } from '../../Redux/Actions/studentAction';

export const useSearchStudentByClassGroupId = (classGroupId: any, search: string) => {
    const dispatch = useDispatch();
    const searchStudents = useSelector((state: any) => state.studentReducer.studentsByClassGroupId);
    const [studentsByClassGroup, setStudentsByClassGroup] = useState([]);
    const [searchStudentData, setSearchStudentData] = useState([]);

    useEffect(() => {
        if (![null, undefined, ''].includes(classGroupId)) {
            dispatch(getAllStudentByClassGroupIdAPIcall(classGroupId));
        }
    }, [classGroupId]);

    const filterResult = (data: any) => {
        const result: any = [];
        data.forEach((item: any) => {
            item.ClassGroupStudents.forEach((element:any) => {
                if(element?.Student){
                    const temp = {
                    name: element?.Student?.firstName + ' ' + element?.Student?.lastName,
                    profile: element?.Student?.User?.profile ? element?.Student?.User?.profile : commonImg.photo,
                    id: element.studentId,
                };
                result.push(temp);
            }
            });
        });
        return result;
    };

    useEffect(() => {
        if (searchStudents) {
            const data = filterResult(searchStudents);
            setStudentsByClassGroup(data);
        }
    }, [searchStudents]);

    useEffect(() => {
        if (![null, ''].includes(search)) {
            const result = studentsByClassGroup.filter((item: any) => {
                if (
                    String(item.firstName + item.lastName)
                        .toLocaleLowerCase()
                        .search(search.toLocaleLowerCase()) > -1
                ) {
                    return item;
                }
            });
            setSearchStudentData(result);
        } else {
            setSearchStudentData(studentsByClassGroup);
        }
    }, [search]);

    return useMemo(() => {
        return { studentsByClassGroup, searchStudentData };
    }, [studentsByClassGroup, searchStudentData]);
};
