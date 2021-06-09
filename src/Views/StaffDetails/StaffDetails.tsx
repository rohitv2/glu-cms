import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ProfileTitle from '../../components/Dashobard/ProfileTitle';
import AttendenceRow from '../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../components/Dashobard/UserDetails/PresentRow';
import SubjectHomeworkRow from '../../components/Dashobard/UserDetails/SubjectHomeworkRow';
import FeeExamResultRow from './FeeExamResultRow';
import ECArow from '../../components/Dashobard/UserDetails/ECArow';
import UserDetailsWrapper from '../../Containers/Dashboard/UserDetailsWrapper';
import {
    getAllclassGroupOfTeacherAPIcall,
    getAllTeacherHomeworkAPIcall,
    getTeacherExamResultAPIcall,
} from '../../Redux/Actions/schoolTeacherAction';
import { checkValue } from '../../Helper/checkValue';
import TimeTableCalendar from '../../components/Dashobard/UserDetails/TimeTableCalendar';
import { getTutorTimeTableAPIcall } from '../../Redux/Actions/schoolAction';
import moment from 'moment';
import { createEvent } from '../../Helper/schools/createEvent'
import { teacherAttendanceAPIcall } from '../../Redux/Actions/cmsTeacherAction';
import { formatTutorFeedback} from '../../Helper/schools/feedBack'
import {checkStatus} from '../../Helper/schools/meritSanction'
import {getMeritSanctionByTeacher,getFeedBackTeacher} from '../../Redux/Actions/schoolAction'


const StaffDetails: React.FunctionComponent = () => {
    const findState: any = useLocation();
    const routes = useHistory();
    const dispatch = useDispatch();
    const [teacherData, setTeacherData] = useState<any>();
    const [classGroupSet, setClassGroupSet] = useState<any>();
    const [events, setEvents] = useState<any[]>();
    const [selectedDate, setSelectedDate] = useState<any>(moment(new Date()).format('YYYY-MM-DD'));
    const [homeworkDetails, setHomeworkDetails] = useState<any>({ complete: 0, incomplete: 1 });
    const [examData, setExamData] = useState({ xData: [], yData: [] });
    const [teacherExamDetails, setTeacherExamDetails] = useState([]);
    const classGroups = useSelector((state: any) => state.schoolTeacherReducer.classGroupOfTeacher);
    const homework = useSelector((state: any) => state.schoolTeacherReducer.teacherHomework);
    const examResult = useSelector((state: any) => state.schoolTeacherReducer.teacherExamResult);
    const teacherTimeTableList = useSelector((state: any) => state.schoolReducer.teacherTimeTableList);
    const teacherAttendance = useSelector((state: any) => state.cmsReducer.teacherAttendance);
    const [attendanceRow, setAttendanceRow] = useState({
        absent: 0,
        present: 0,
        absentPercentage: 0,
        presentPercentage: 0,
        onTime: 0,
        late: 0,
    });
    const [merit,setMerit] = useState<any[]>()
    const [feedBack,setFeedBack] = useState<any[]>()
    const feedBackDetails = useSelector((state: any)=>state.schoolReducer.feedBackDetails)
    const meritSanctionList = useSelector((state: any) => state.schoolReducer.meritSanctionList)


    useEffect(() => {
        if (findState?.state?.teacherData) {
            const infoData = findState.state?.teacherData;
            dispatch(getAllclassGroupOfTeacherAPIcall(infoData.staffId));
            dispatch(getAllTeacherHomeworkAPIcall(infoData.staffId));
            dispatch(getTeacherExamResultAPIcall(infoData.staffId));
            setTeacherData(infoData);
            dispatch(getMeritSanctionByTeacher(infoData.staffId))
            dispatch(getFeedBackTeacher(infoData.staffId))
        }
    }, []);

    useEffect(()=>{
        if(feedBackDetails){
            let resultArray = formatTutorFeedback([feedBackDetails])
            let result = resultArray?.map((item: any)=>{
                return{
                    col1 : moment(item?.date).format("DD/MM/YYYY"),
                    col2: item?.name
                }
            })
            setFeedBack(result)
        }
    },[feedBackDetails])

    useEffect(()=>{
        if(meritSanctionList){
            let result = meritSanctionList.map((item: any)=>{
                if(item?.merit === true || item?.sanction===true){
                    return{
                        col1 : moment(item?.createdAt).format("DD/MM/YYYY"),
                        col2: checkStatus(item.merit,item.sanction),
                    }
                }  
            }).filter(function( element : any) {
                return element !== undefined;
            })
             setMerit(result)
        }
    },[meritSanctionList])

    useEffect(() => {
        if (findState?.state?.teacherData) {
            const infoData = findState.state?.teacherData;
            dispatch(getTutorTimeTableAPIcall(infoData.id, selectedDate));
        }
    }, [, selectedDate, setSelectedDate]);


    useEffect(() => {
        if (classGroups) {
            const data = classGroups.map((item: any) => {
                const teachers = item.ClassGroupTeachers.map((subItem: any) => {
                    return subItem.Teacher.firstName + ' ' + subItem.Teacher.lastName;
                });
                return {
                    col1: item.Subject?.subjectName,
                    col2: item.classGroupName,
                    classGroupId: item?.id,
                    class: checkValue(item?.classGroupName),
                    children: checkValue(item?.ClassGroupStudents.length),
                    yearGroup: checkValue(item?.Class?.title),
                    teacher: checkValue(item?.ClassGroupTeachers.length),
                    id: item?.id,
                    teachersName: teachers.join(', '),
                };

            });
            setClassGroupSet(data);
        }
    }, [classGroups]);

    useEffect(() => {
        if (homework) {
            if (homework?.completedHomework !== 0 && homework?.incompletedHomework !== 0) {
                setHomeworkDetails({
                    complete: homework?.completedHomework,
                    incomplete: homework?.incompletedHomework,
                });
            }
        }
    }, [homework]);

    useEffect(() => {
        const examDataArray = examResult?.examResult;
        if (examDataArray) {
            const x: any = [];
            const y: any = [];
            const tempTeacherData: any = [];
            examDataArray.forEach((item: any) => {
                x.push(item?.data?.classGroupName);
                y.push(item?.percent);
                if (item.data.Exams.length > 0) {
                    const tempExam = item.data.Exams[0];
                    const data = {
                        classGroupId: tempExam?.classGroupId,
                        class: checkValue(item?.data?.classGroupName),
                        yearGroup: '',
                        teachersName: tempExam?.Teacher?.firstName + ' ' + tempExam?.Teacher?.lastName,
                    };
                    tempTeacherData.push(data);
                }
            });
            setTeacherExamDetails(tempTeacherData);
            setExamData({ xData: x, yData: y });
        }
    }, [examResult]);


    useEffect(() => {
        if (teacherTimeTableList) {
            let events = [];
            events = createEvent(teacherTimeTableList);
            setEvents(events);
        }
    }, [teacherTimeTableList]);

    useEffect(() => {
        if (teacherAttendance) {
            setAttendanceRow({
                absent: teacherAttendance.absent,
                present: teacherAttendance.present,
                absentPercentage: teacherAttendance.absentPrecentage,
                presentPercentage: teacherAttendance.attendance,
                onTime: 0,
                late: 0,
            });
        }
    }, [teacherAttendance]);

    const handleRowClick = (i: number | string) => {
        routes.push({
            pathname: '/dashboard/class-groups/class-group-details',
            state: {
                details: classGroupSet[i],
            },
        });
    };

    const handleHomework = () => {
        routes.push({
            pathname: '/dashboard/teacher-details/homework',
            state: {
                teacherData: teacherData,
            },
        });
    };

    const gotoExamDetails = (e: any) => {
        routes.push({
            pathname: '/dashboard/class-groups/class-group-details/exam-results',
            state: {
                teacherData: teacherExamDetails[e.point.index],
            },
        });
    };

    const handleDateFilter = (value: string) => {
        setSelectedDate(moment(value).format('YYYY-MM-DD'));
    };

    const handleDateRange = (data: any) => {
        const startDate = moment(data[0].startDate).format('YYYY-MM-DD');
        const endDate = moment(data[0].endDate).format('YYYY-MM-DD');
        if (teacherData?.staffId && startDate && endDate) {
            dispatch(teacherAttendanceAPIcall(teacherData?.staffId, startDate, endDate));
        }
    };

    return (
        <UserDetailsWrapper>
            <ProfileTitle data={{ name: teacherData?.name, profile: teacherData?.profile }} />
            <AttendenceRow attendance={attendanceRow} dateRange={handleDateRange} />
            <PresentRow attendance={attendanceRow} />
            <SubjectHomeworkRow
                data={classGroupSet}
                hwDetails={homeworkDetails}
                tableName="Class Groups"
                colHead1="Subject"
                colHead2="Class"
                handleRowClick={handleRowClick}
                gotoScreen={handleHomework}
            />
            <FeeExamResultRow xData={examData.xData} yData={examData.yData} gotoExamDetails={gotoExamDetails} />
            <ECArow 
                merit={merit} 
                feedback={feedBack}
                data ={teacherData && teacherData} 
            />
            <TimeTableCalendar eventArray={events && events} getDate={handleDateFilter} />
        </UserDetailsWrapper>
    );
};

export default StaffDetails;
