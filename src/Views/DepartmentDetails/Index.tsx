import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation,useHistory } from 'react-router-dom';
import AttendenceRow from '../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../components/Dashobard/UserDetails/PresentRow';
import UserDetailsWrapper from '../../Containers/Dashboard/UserDetailsWrapper';
import FeeExamResultRow from '../../components/Dashobard/UserDetails/FeeExamResultRow'
import SubjectHomeworkRowThreeCol from '../../components/Dashobard/UserDetails/SubjectHomeworkRowThreeCol';
import SessionRow from '../../components/Dashobard/UserDetails/SessionRow';
import HeadingSubHeadingOneBtn from '../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';
import {
        getALlClassGroupByDepartmentApiCall,
        getEventByDepartmentAPiCall,
    } from '../../Redux/Actions/schoolTeacherAction'
import TimeTableCalendar from '../../components/Dashobard/UserDetails/TimeTableCalendar';
import { createEvent } from '../../Helper/schools/createEvent'
import {
    getAllFeedbacksOnDepartmentAPIcall,
    getAllHomeworkOnDepartmentAPIcall,
    getMeritByDepartmentApiCall,
    getAllAttendanceOfDepartmentAPIcall,
    getExamResultForDepartmentAPIcall,
} from '../../Redux/Actions/schoolAction';
import moment from 'moment';
import {checkStatus} from '../../Helper/schools/meritSanction'
import { checkValue } from '../../Helper/checkValue';

const Index: React.FunctionComponent = () => {
    const history: any = useHistory()
    const routes: any = useLocation();
    const dispatch = useDispatch();
    const [events, setEvents] = useState<any[]>();
    const [selectedDate, setSelectedDate] = useState<any>(moment(new Date()).format('YYYY-MM-DD'));
    const homework = useSelector((state: any) => state.schoolReducer.departmentHomework);
    const feedback = useSelector((state: any) => state.schoolReducer.departmentFeedack);
    const departementClassgroup = useSelector((state: any) => state.schoolTeacherReducer.departmentClassGroup)
    const departmentEventList = useSelector((state: any) => state.schoolTeacherReducer.departmentEventList)
    const meritSanctionList =useSelector((state: any)=> state.schoolReducer.meritSanctionList)
    const allExamResultDepartment = useSelector((state: any)=> state.schoolReducer.allExamResultDepartment)
    const [homeworkData, setHomeworkData] = useState({ complete: 0, incomplete: 0 });
    const [feedbackData, setFeedbackData] = useState([]);
    const [departmentDetails, setDepartmentDetails] = useState<any>();
    const [classGroupSet ,setClassGroupSet] = useState<any>()
    const [merit,setMerit] = useState<any[]>()
    const allAttendanceDepartment = useSelector((state: any)=> state.schoolReducer.allAttendanceDepartment)
    const [examData, setExamData] = useState({ xData: [], yData: [] });
    const [depExamDetails, setDepExamDetails] = useState([]);


    useEffect(() => {
        if (routes.state?.details) {
            const data = routes.state?.details;
            dispatch(getALlClassGroupByDepartmentApiCall(data?.id))
            dispatch(getMeritByDepartmentApiCall(data?.id))
            dispatch(getExamResultForDepartmentAPIcall(data?.id))
            setDepartmentDetails(data);
        }
    }, []);

    const [attendanceRow, setAttendanceRow] = useState({
        absent: 0,
        present: 0,
        absentPercentage: 0,
        presentPercentage: 0,
        onTime: 0,
        late: 0,
    });


    useEffect(()=>{
        if(allAttendanceDepartment){
            setAttendanceRow({
                absent: allAttendanceDepartment.absent,
                present: allAttendanceDepartment.present,
                absentPercentage: allAttendanceDepartment.absentPrecentage,
                presentPercentage: allAttendanceDepartment.attendance,
                onTime: 0,
                late: 0,
            });
        }
    },[allAttendanceDepartment])

    useEffect(()=>{
        if(allExamResultDepartment){
            const examDataArray = allExamResultDepartment?.examResult;
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
                setDepExamDetails(tempTeacherData);
                setExamData({ xData: x, yData: y });
            }
        }
    },[allExamResultDepartment])

    useEffect(()=>{
        if(meritSanctionList){
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
        }
    },[meritSanctionList])

    useEffect(() => {
        if (departmentEventList) {
            let events = [];
            events = createEvent(departmentEventList);
            setEvents(events);
        }
    }, [departmentEventList]);

    useEffect(() => {
        if (routes.state?.details) {
            const data = routes.state?.details;
            dispatch(getEventByDepartmentAPiCall(data?.id, selectedDate))
        }
    }, [, selectedDate, setSelectedDate]);

    useEffect(()=>{
        if(departementClassgroup){
            const data  = departementClassgroup?.map((item: any)=>{
                const teachers = item.ClassGroupTeachers?.map((subItem: any) => {
                    return subItem?.Teacher?.firstName + ' ' + subItem?.Teacher?.lastName;
                });
                return{
                    col1: item.classGroupName,
                    col2 : item?.Class?.title,
                    col3: teachers.join(", "),
                    id : item?.classGroupId,
                    classGroupId : item?.classGroupId,
                    teachersName: teachers.join(', '),
                    class: checkValue(item?.classGroupName),
                    yearGroup: checkValue(item?.Class?.title),
                    staffId: item?.id,
                }
            })
            setClassGroupSet(data)
        }
    },[departementClassgroup])

    useEffect(() => {
        if (homework) {
            setHomeworkData({ complete: homework?.isCompleted, incomplete: homework?.isNotCompleted });
        }
    }, [homework]);

    useEffect(() => {
        if (feedback) {
            const data: any = [];
            feedback.map((item: any) => {
                item.examFeedbacks.map((subItem: any) => {
                    data.push({ col1: moment(subItem?.commentedOn).format('MM/DD/YYYY'), col2: subItem?.subjectName });
                });

                item.homeWorkFeedbacks.map((subItem: any) => {
                    data.push({ col1:  moment(subItem?.commentedOn).format('MM/DD/YYYY'), col2: subItem?.subjectName });
                });
            });
            setFeedbackData(data);
        }
    }, [feedback]);

    const handleDateRange = (data: any) => {
        const startDate = moment(new Date(data[0].startDate)).format('YYYY-MM-DD');
        const endDate = moment(new Date(data[0].endDate)).format('YYYY-MM-DD');
        if (departmentDetails?.id && startDate !== endDate) {
            dispatch(getAllHomeworkOnDepartmentAPIcall(departmentDetails?.id, startDate, endDate));
            dispatch(getAllFeedbacksOnDepartmentAPIcall(departmentDetails?.id, startDate, endDate));
            dispatch(getAllAttendanceOfDepartmentAPIcall(departmentDetails?.id, startDate, endDate))
        }
    };

    const handleDateFilter = (value: string) => {
        setSelectedDate(moment(value).format('YYYY-MM-DD'));
    };

    const handleRowClick = (i: number | string) => {
        history.push({
            pathname: '/dashboard/class-groups/class-group-details',
            state: {
                details: classGroupSet && classGroupSet[i],
            },
        });
    };
    

    const gotoExamDetails = (e: any) => {
        history.push({
            pathname: '/dashboard/class-groups/class-group-details/exam-results',
            state: {
                teacherData: depExamDetails[e.point.index],
            },
        });
    };


    return (
        <UserDetailsWrapper>
            <HeadingSubHeadingOneBtn
                title= {departmentDetails?.department}
                subtitle={"Head of Department: " + departmentDetails?.hod}
                buttonText="Print"
                linkTo="/dashboard"
            />
            <AttendenceRow attendance={attendanceRow} dateRange={handleDateRange} />
            <PresentRow />
            <SubjectHomeworkRowThreeCol
                data={classGroupSet}
                tableName="Class Groups"
                colHead1="Class"
                colHead2="Year Group"
                colHead3="Teacher"
                homeworkData={homeworkData}
                handleRowClick={handleRowClick}
            />
            <FeeExamResultRow  
                xData={examData.xData} 
                yData={examData.yData}
                gotoExamDetails={gotoExamDetails}
            />
            <SessionRow 
                feedback={feedbackData}
                merit={merit && merit}
                data = {departmentDetails}
                keyname="department"
            />

            <TimeTableCalendar eventArray={events && events} getDate={handleDateFilter} />
        </UserDetailsWrapper>
    );
};

export default Index;
