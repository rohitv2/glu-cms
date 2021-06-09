import React, { useEffect, useState } from 'react';
import UserDetailsWrapper from '../../../../Containers/Dashboard/UserDetailsWrapper';
import AttendenceRow from '../../../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../../../components/Dashobard/UserDetails/PresentRow';
import HeadingSubHeadingOneBtn from '../../../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';
import Attendance from './Attendance';
import commonImg from '../../../../Assets/images';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { teacherStudentAttendanceAPIcall } from '../../../../Redux/Actions/cmsTeacherAction';
import { getDate3Letter } from '../../../../Helper/getDateString';
import moment from "moment";
import { checkValue } from '../../../../Helper/checkValue';

const Index = () => {
    const [studentData, setStudentData] = useState({
        id: 0,
        teacherName: '',
        studentName: '',
        className:'',
        city: 'kanpur',
    });
    const [attendance, setAttendance] = useState<any>({
        presentPercentage: 0,
        absentPrecentage: 0,
        absent: 0,
        present: 0
    });
    const [studentPresent, setStudentPresent] = useState([]);
    const teacherStudentAttendance = useSelector((state: any) => state.cmsReducer.teacherStudentAttendance);
    const findRoutes = useLocation();
    const dispatch = useDispatch();
    const handleDateRange = (data: any) => {
        const startDate = moment(data[0].startDate).format('YYYY-MM-DD');
        const endDate =  moment(data[0].endDate).format('YYYY-MM-DD');
        dispatch(teacherStudentAttendanceAPIcall(studentData.id, startDate, endDate));
    };
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('studentData')) {
                const teacher = (findRoutes as any).state.teacherData;
                const student = (findRoutes as any).state.studentData;
                const data = {
                    id: student.studentId,
                    teacherName: teacher.teachersName,
                    studentName: student.name,
                    className: teacher.class + '-'+teacher.yearGroup,
                    city: 'kanpur',
                };
                dispatch(teacherStudentAttendanceAPIcall(student.studentId, '', ''));
                setStudentData(data);
            }
        }
    }, []);
    useEffect(() => {
        if (teacherStudentAttendance) {
            setAttendance({
                ...attendance,
                presentPercentage: Number(teacherStudentAttendance.presentPercentage).toFixed(2),
                absentPrecentage: Number(teacherStudentAttendance.absentPrecentage).toFixed(2),
                absent: teacherStudentAttendance.absent,
                present: teacherStudentAttendance.present
            });
            const data = teacherStudentAttendance.result.map((item: any) => {
                const checkDate = new Date(item.createdAt).getDate();
                return {
                    date: getDate3Letter(new Date(item.createdAt)),
                    day: moment(item.createdAt).format('dddd'),
                    dateNum: checkDate > 9 ? checkDate : `0${checkDate}`,
                    status: checkValue(item.status),
                    color: item.status === 'present' ? '#5EC1A6' : '#E28989',
                };
            });
            setStudentPresent(data);
        }
    }, [teacherStudentAttendance]);
    return (
        <UserDetailsWrapper>
            <HeadingSubHeadingOneBtn
                title="Attendace"
                subtitle={`${studentData.teacherName} -${studentData.className}`}
                buttonText="Print"
                linkTo="/dashboard"
                personName={studentData.studentName}
                personTitle={studentData.city}
                image={commonImg.blueshirtman}
                showPerticular={true}
            />
            <AttendenceRow dateRange={handleDateRange} attendance={attendance} />
            <PresentRow attendance={attendance} />
            <Attendance attendance={studentPresent} />
        </UserDetailsWrapper>
    );
};

export default Index;
