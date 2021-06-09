import React, { useEffect, useState } from 'react';
import StudentList from './StudentList';
import { useDispatch, useSelector } from 'react-redux';
import { getallStudentAPIcall, studentInfo } from '../../Redux/Actions/studentAction';
import commonImg from '../../Assets/images';
import { checkValue } from '../../Helper/checkValue';
import { useLocation } from 'react-router';
import { getAllStudentTeacherAPIcall } from '../../Redux/Actions/teacherAction';

const Index = () => {
    const dispatch = useDispatch();
    const students = useSelector((state: any) => state.studentReducer.studentData);
    const [studentList, setStudentList] = useState([]);
    const [teacherdata, setTeacherdata] = useState({ name: '' });
    const [teacherMode, setTeacherMode] = useState(false);
    const findRoutes = useLocation();

    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('forTeacher')) {
                setTeacherdata((findRoutes as any).state.teacherData);
                dispatch(getAllStudentTeacherAPIcall((findRoutes as any).state.teacherData.staffId));
                setTeacherMode(true);
            } else {
                dispatch(getallStudentAPIcall());
            }
        }
        return ()=>{
            dispatch(studentInfo(null))
        }
    }, []);

    useEffect(() => {
        if (students) {
            const data = students.map((element: any) => {
                return {
                    profile: element.student?.User?.profile ? element.student?.User?.profile : commonImg.photo,
                    yearGroup: checkValue(element?.student?.SectionStudent?.ClassSection?.Class?.title),
                    formGroup: checkValue(element?.student?.SectionStudent?.ClassSection?.Section?.sectionName),
                    yearId: checkValue(element?.student?.SectionStudent?.ClassSection?.Class?.id),
                    formId: checkValue(element?.student?.SectionStudent?.ClassSection?.Section?.sectionName),
                    email: checkValue(element?.student?.User?.email),
                    gender: checkValue(element.student?.gender),
                    name: checkValue(element.student?.firstName) + ' ' + checkValue(element.student?.lastName),
                    id: element?.student?.id,
                    firstName: checkValue(element.student?.firstName),
                    lastName: checkValue(element.student?.lastName),
                    fatherName: checkValue(element.student?.fatherName),
                    motherName: checkValue(element.student?.motherName),
                };
            });
            setStudentList(data);
        }
    }, [students]);

    return <StudentList students={studentList} teacherMode={teacherMode} teacherdata={teacherdata} />;
};

export default Index;
