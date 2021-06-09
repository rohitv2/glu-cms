import React, { useEffect, useState } from 'react';
import StudentList from './StudentList';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../../Assets/images';
import { checkValue } from '../../../Helper/checkValue';
import { useLocation } from 'react-router';
import { getAllStudentClassGroupIdAPIcall } from '../../../Redux/Actions/classAction';

const Index = () => {
    const dispatch = useDispatch();
    const students = useSelector((state: any) => state.classReducer.classGroupStudent);
    const [studentList, setStudentList] = useState([]);
    const [teacherdata, setTeacherdata] = useState({ name: '' });
    const [teacherMode, setTeacherMode] = useState(false);
    const findRoutes = useLocation();

    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('forTeacher')) {
                setTeacherdata((findRoutes as any).state.teacherData);
                dispatch(getAllStudentClassGroupIdAPIcall((findRoutes as any).state.teacherData.classGroupId));
                setTeacherMode(true);
            }
        }
    }, []);

    useEffect(() => {
        if (students) {
            const data = students.map((element: any) => {
                return {
                    profile: element.profileImage ? element.profileImage : commonImg.photo,
                    yearGroup: checkValue(element?.yearGroup),
                    formGroup: checkValue(element?.formGroup),
                    name: checkValue(element?.firstName) + ' ' + checkValue(element?.lastName),
                    id: element?.studentId,
                    firstName: checkValue(element?.firstName),
                    lastName: checkValue(element?.lastName),
                    hwCompleted: checkValue(Number(element?.averageHomeworkPercentage).toFixed(2))+'%',
                    examAverage: checkValue(Number(element?.averageExamPercent).toFixed(2))+'%'
                };
            });
            setStudentList(data);
        }
    }, [students]);

    return <StudentList students={studentList} teacherMode={teacherMode} teacherdata={teacherdata} />;
};

export default Index;
