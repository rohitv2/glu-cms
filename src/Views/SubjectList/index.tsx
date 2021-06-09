import React, { useState, useEffect } from 'react';
import SubjectList from './SubjectList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClassGropsAPIcall } from '../../Redux/Actions/subjectAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { checkValue } from '../../Helper/checkValue';

const index: React.FunctionComponent = () => {
    const [subjectList, setSubjectList] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllClassGropsAPIcall());
    }, []);

    const classGroupList = useSelector((state: rootReducerType) => state.subjectReducer.classGroupList);
    useEffect(() => {
        if (classGroupList) {
            const data = classGroupList.map((item: any) => {
                const teachers = item.ClassGroupTeachers.map((subItem: any) => {
                    return subItem.Teacher.firstName + ' ' + subItem.Teacher.lastName;
                });
                return {
                    classGroupId: item.id,
                    class: checkValue(item?.classGroupName),
                    children: checkValue(item?.ClassGroupStudents.length),
                    yearGroup: checkValue(item?.Class?.title),
                    yearGroupId:item?.yearGroupId,
                    teacher: checkValue(item?.ClassGroupTeachers.length),
                    teachers:item?.ClassGroupTeachers ,
                    department: checkValue(item?.Department.departmentName),
                    departmentId:item?.departmentId,
                    students: item?.ClassGroupStudents,
                    subjectId:item?.Subject?.id,
                    id: item?.id,
                    staffId : item?.id,
                    teachersName: teachers.join(', ')
                };
            });
            setSubjectList(data);
        }
    }, [classGroupList]);
    
    return <SubjectList subjects={subjectList} />;
    
};

export default index;
