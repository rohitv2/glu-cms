import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import SmallCard from '../../components/SmallCard';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import ProgressBar from './ProgressBar';
import PageFooter from '../../components/PageFooter';
import CalendarComponent from '../../components/CalendarComponent';
import { whiteboard } from '../../Utility/baseurls';
import { useDispatch, useSelector } from 'react-redux';
import { whiteboardRandomLink } from '../../Helper/whiteboardRandomLink';
import { getTutorSchoolInfo } from '../../Redux/Actions/teacherAction';
import { getTeacherHomework } from '../../Redux/Actions/teacherAction';
import { getTeacherRecommendation,getTutorExamList,getTutorTimeTable} from '../../Redux/Actions/teacherAction';
import { freelanceRecordClassRes, getAllFreelanceRecordedClassAPIcall } from '../../Redux/Actions/freelanceTeacherAction';
import moment from 'moment';
import {dataToProgressBar} from '../../Helper/tutor/progressBarData';
import useSchoolSessionCount from '../../Hooks/tutor/useSchoolSessionCount'

const PersonalDashboard2: React.FunctionComponent = () => {
    const [totalRecordedClass, setTotalRecordClasses] = useState([]);
    const tutorDetail: any = useSelector((state: any) => state.teacherReducer.teacherData);
    const stateData = useSelector((state: any) => state.teacherReducer.teacherSchoolInfo);
    const teacherRecommend = useSelector((state: any) => state.teacherReducer.teacherRecommendations);
    const teacherHomework = useSelector((state: any) => state.teacherReducer.teacherHomework);
    const recordedClasses = useSelector((state: any) => state.freelanceTeacherReducer.totalRecordedClass);
    const examListArray = useSelector((state: any) => state.teacherReducer.filterExamListBySubject.data);
    const schoolTimeTableToday = useSelector((state : any) =>dataToProgressBar(state.teacherReducer.tutorTimeTable.data))
    const [marksDue,setMarksDue] = useState()
    const {sessionsCount , studentsCount , occupiedStudents} = useSchoolSessionCount()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTeacherHomework());
        dispatch(getTutorSchoolInfo());
        dispatch(getTeacherRecommendation());
        dispatch(getTutorExamList())
        dispatch(getTutorTimeTable(moment(new Date()).format("YYYY-MM-DD")))
    }, []);
    useEffect(() => {
        dispatch(getAllFreelanceRecordedClassAPIcall(0));
        return ()=>{
            dispatch(freelanceRecordClassRes(null))
        }
    }, []);
    useEffect(() => {
        if (recordedClasses?.hasOwnProperty('TeacherLoggedInSessions')) {
            setTotalRecordClasses(recordedClasses.TeacherLoggedInSessions);
        }
    }, [recordedClasses]);
    useEffect(() => {
        let count:any = 0;
        if (examListArray) {
            for (let i = 0; i < examListArray.length; i++) {
                for (let j = 0; j < examListArray[i].exam.ExamStudents.length; j++) {
                    if (examListArray[i].exam.ExamStudents[j].percentage === null) {
                        count++;
                    }
                }
            }
            setMarksDue(count);
        }
    }, [examListArray]);

    return (
        <div className="personal_school">
            <div className="personal_school_container">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col1">
                            <div className="card__row card_row1">
                                <SmallCard
                                    linkurl={'/tutor/my-classes'}
                                    mainHeading={'My Classes'}
                                    subHeading1={'Published'}
                                    subHeading2={totalRecordedClass?.length}
                                />
                                <SmallCard
                                    linkurl={'/tutor/record-class'}
                                    mainHeading={'Record Class'}
                                    subHeading1={'Create and publish'}
                                    subHeading2={'a new class'}
                                />
                            </div>
                            <div className="card__row card_row2">
                                <SmallCard
                                    linkurl={'/tutor/extra-curriculam'}
                                    mainHeading={'Extra Curricular'}
                                    subHeading1={'Published'}
                                    subHeading2={'13'}
                                />
                                <SmallCard
                                    whiteboard={true}
                                    linkurl={whiteboard + whiteboardRandomLink()}
                                    mainHeading={'Whiteboard'}
                                    subHeading1={'Try out what the class '}
                                    subHeading2={'be like'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col2">
                            <div className="card__row card_row3">
                                {/* <SmallCard
                                    linkurl={'/tutor/availability'}
                                    mainHeading={'Availability'}
                                    subHeading1={'Status'}
                                    subHeading2={'Limited Availability'}
                                /> */}
                                <SmallCard
                                    linkurl={'/tutor/homework'}
                                    mainHeading={'Homework'}
                                    subHeading1={'Assigned'}
                                    subHeading2={teacherHomework && teacherHomework.length}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row set__margin">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col3 ">
                            <div className="card__row card_row4">
                                <SmallCard
                                    linkurl={'/tutor/exams'}
                                    mainHeading={'Exam Results'}
                                    subHeading1={'Marks Due'}
                                    subHeading2={marksDue}
                                />
                                <SmallCard
                                    linkurl={'/tutor/total-recommendations'}
                                    mainHeading={'Recommendations'}
                                    subHeading1={'Total'}
                                    subHeading2={teacherRecommend && teacherRecommend.length}
                                />
                            </div>
                        </div>
                    </div>

                    <CalendarComponent
                        mainHeading={moment().format('dddd DD MMMM YYYY')}
                        heading1={'Upcomming Classes'}
                        heading2={'Total Spaces'}
                        subHeading1={sessionsCount}
                        subHeading2={`${occupiedStudents}/${studentsCount}`}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col4 "></div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col5">
                            <div className="card__row card_row5">
                                <SmallCard
                                    linkurl={'/tutor/school-table'}
                                    mainHeading={'School Timetable'}
                                    subHeading1={'Classes Today'}
                                    subHeading2={schoolTimeTableToday && schoolTimeTableToday.length}
                                />
                                <SmallCard
                                    linkurl={'/tutor/school-info'}
                                    mainHeading={'School Info'}
                                    subHeading1={stateData && stateData.School.schoolName}
                                    subHeading2={stateData && stateData.School.location}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal_school_background">
                <div className="main_container p-0">
                    <BackgroundTemplate imgSrc={tutorDetail && tutorDetail.User.profile} />
                </div>
            </div>

            <div className="personal_school_container_2">
                <div className="tutor_dash_line row"></div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_2_col6">
                            <Typography className="subtext">Your Day</Typography>
                            <Typography className="subtext">{schoolTimeTableToday[0] ? schoolTimeTableToday[0].startTime : "00:00"}</Typography>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_2_col7">
                            <div className="main_subcontainer">
                            {
                                    schoolTimeTableToday.length > 0 ?
                                    (schoolTimeTableToday.map((item,index) => (
                                        <>
                                            <ProgressBar
                                                time={item.time}
                                                subject={item.subjectName}
                                                typeClassroom={'Classroom'}
                                                type={'Attendance'}
                                                typeNumber={item.attendance}
                                                classType={item.roomName}
                                                progress={item.progressBar}
                                                // onClickRegister={(e) => onClickRegister(e,item)}
                                            />
                                            {index < schoolTimeTableToday.length - 1 && (
                                                (<div className="row school_horizontalline"></div>) 
                                            )}
                                        </>
                                        ))
                                    ): "No Data Found"
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commonWhiteFooter">
                <PageFooter />
            </div>
        </div>
    );
};
export default PersonalDashboard2;
