import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { filterStudentAPIcall } from '../../Redux/Actions/studentAction';

export const useSearchStudentYearFromId = (yearGroupId: string | null, formGroupId: string | null, search: string) => {
    const totalStudents = useSelector((state: any) => state.studentReducer.studentData);
    const [totalStudentList, setStudentList] = useState([]);
    const [studentSearchResult, setStudentSearchResult] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        if (yearGroupId && formGroupId) {
            dispatch(filterStudentAPIcall(yearGroupId, formGroupId, '', '', ''));
        }
    }, [yearGroupId, formGroupId]);

    const filterResult = (search: any) => {
        const result = totalStudentList.filter((item: any) => {
            if (String(item.name).toLocaleLowerCase().search(search.toLocaleLowerCase()) > -1) {
                return item;
            }
        });
        return result;
    };

    useEffect(() => {
        if (totalStudents) {
            const data = totalStudents.map((element: any) => {
                return {
                    profile: element.student?.User?.profile ? element.student?.User?.profile : commonImg.photo,
                    name: element.student?.firstName + ' ' + element.student?.lastName,
                    id: element?.student?.id,
                };
            });
            setStudentList(data);
        }
    }, [totalStudents]);

    useEffect(() => {
        if (search !== '') {
            const data = filterResult(search);
            setStudentSearchResult(data);
        } else if (search === '') {
            setStudentSearchResult(totalStudentList);
        }
    }, [search]);

    return useMemo(() => {
        return { studentSearchResult, totalStudentList };
    }, [studentSearchResult, totalStudentList]);
};
