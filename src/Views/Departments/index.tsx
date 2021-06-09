import React, { useEffect, useState } from 'react';

import Departments from './Departments';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [departments, setDepartments] = useState([]);
    const departmentList = useSelector((state: any) => state.schoolReducer.departmentList);

    useEffect(() => {
        dispatch(getAllDepartmentAPIcall());
    }, []);



    useEffect(() => {
        if (departmentList) {
            const data = departmentList.map((item: any) => {
                const teachers = item.teachers.map((subItem: any) => {
                    return subItem.firstName + ' ' + subItem.lastName;
                });
                return {
                    id: item.data.id,
                    students: item.data.Students.length,
                    teachers: item.teachers.length,
                    hod: teachers.join(', '),
                    department: item.data.departmentName,
                    teacherDetails: item.teachers
                };
            });
            setDepartments(data);
        }
    }, [departmentList]);

    return <Departments departmentList={departments} />;

};

export default index;
