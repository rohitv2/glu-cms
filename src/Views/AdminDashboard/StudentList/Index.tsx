import React, { useEffect, useState } from 'react';
import TeacherList from '../../TeacherList';
import { useDispatch, useSelector } from 'react-redux';
import { getallStudentAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import StudentList from './StudentList';

const Index = () => {
    const dispatch = useDispatch();
    const student = useSelector((state: any) => state.superAdminReducer.studentList);
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        dispatch(getallStudentAPIcall());
    }, []);
    useEffect(() => {
        if (student) {
            const data = student.map((element: any, i:number) => {
                return {
                    index: i,
                    userId: checkValue(element.userId),
                    studentId: checkValue(element.studentId),
                    firstName: checkValue(element.firstName),
                    lastName: checkValue(element.lastName),
                    gender: checkValue(element.gender),
                    phoneNumber: checkValue(element.phoneNumber),
                    location: checkValue(element.location),
                    registeredOn: checkValue(element.registeredOn),
                    isVerified: checkValue(element.isVerified),
                    isActive: checkValue(element.isActive),
                    isEmailVerified: checkValue(element.isEmailVerified), 
                };
            });
            
            setStudentList(data);
        }
    }, [student]);

    return <StudentList studentList={studentList}/>
};

export default Index;
