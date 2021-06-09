import React, { useEffect, useState } from 'react';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import SmallCard from '../../components/SmallCard';
import PageFooter from '../../components/PageFooter';
import ResuableTimeline from '../../components/ReusableTimeline';
import ReusableLandscape from '../../components/ReusableLandscape';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import CalendarComponent from '../../components/CalendarComponent';
import ClassesCarousel from '../../Containers/Pages/DashboardPageContainer/Personal/ClassesCarousel';
import useReviews from '../../Hooks/tutor/useReviews';
import { whiteboard } from '../../Utility/baseurls';
import useRecordClasses from '../../Hooks/tutor/useRecordClasses';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { getTeacherDetails } from '../../Redux/Actions/teacherAction';
import { whiteboardRandomLink } from '../../Helper/whiteboardRandomLink';
import useSessionsCount from '../../Hooks/tutor/useSessionsCount';
import useSales from '../../Hooks/tutor/useSales';
import { clearTutorSubjectList, freelanceRecordClassRes } from '../../Redux/Actions/freelanceTeacherAction';
import { useUpcomingClassesFilter } from '../../Hooks/tutor/useUpcomingClassesFilter';

const PersonalDashboard: React.FunctionComponent = () => {
    const { classAverage } = useReviews();
    const [totalRecordedClass, setTotalRecordClasses] = useState(0);
    const onlyShowTwo: any = useUpcomingClassesFilter(true);
    const yourDay: any = useUpcomingClassesFilter(false);
    const { recordClass } = useRecordClasses(false);
    const { occupiedStudents, studentsCount } = useSessionsCount();
    const { overall } = useSales();

    const tutorDetail: any = useSelector((state: any) => state.teacherReducer.teacherData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (recordClass) {
            setTotalRecordClasses(recordClass.length);
        }
    }, [recordClass]);

    useEffect(() => {
        dispatch(getTeacherDetails());
        dispatch(clearTutorSubjectList());
        return ()=>{
            dispatch(freelanceRecordClassRes(null))
        }
    }, []);


    return (
        <>
            <div className="main_container">
                <div className="main_container_dashboard">
                    <div className="row set__margin">
                        <div className="col-md-6 p-0">
                            <div className="main_container_dashboard_col1 bg-white">
                                <ReusableLandscape
                                    imgSrc={commonImg.tutorDashboard}
                                    title1={'Upcomming Classes'}
                                    content={
                                        <ClassesCarousel
                                            paddingTop
                                            data={onlyShowTwo.slice(0, 4)}
                                            teacherLink="/tutor/"
                                        />
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-md-6  p-0">
                            <div className="main_container_dashboard_col2">
                                <div className="card__row card_row1">
                                    <SmallCard
                                        linkurl={'/tutor/my-classes'}
                                        mainHeading={'My Classes'}
                                        subHeading1={'Published'}
                                        subHeading2={totalRecordedClass}
                                    />
                                    <SmallCard
                                        linkurl={'/tutor/record-class'}
                                        mainHeading={'Record Class'}
                                        subHeading1={'Create and Publish'}
                                        subHeading2={`${totalRecordedClass}/20 Spaces`}
                                    />
                                </div>
                                <div className="card__row card_row2">
                                    <SmallCard
                                        linkurl={'/tutor/availability'}
                                        mainHeading={'Availability'}
                                        subHeading1={'Status'}
                                        subHeading2={'Limited Availability'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reusable Component  */}
                    <div className="row">
                        <div className="col-md-6  p-0">
                            <div className="main_container_dashboard_col3">
                                <div className="card__row card_row3">
                                    <SmallCard
                                        linkurl={'/tutor/statistic'}
                                        mainHeading={'Statistics'}
                                        subHeading1={'Average monthly sales'}
                                        subHeading2={`AED${overall.salesAverage}`}
                                    />
                                    <SmallCard
                                        linkurl={'/tutor/reviews'}
                                        mainHeading={'Reviews'}
                                        subHeading1={'Current Rating'}
                                        subHeading2={classAverage}
                                    />
                                </div>
                                <div className="card__row card_row4">
                                    <SmallCard
                                        whiteboard={true}
                                        linkurl={whiteboard + whiteboardRandomLink()}
                                        mainHeading={'Whiteboard'}
                                        subHeading1={'Try out what the class will be like'}
                                        subHeading2={''}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* start */}
                        <CalendarComponent
                            mainHeading={moment().format('dddd DD MMMM YYYY')}
                            heading1={'Upcomming Classes'}
                            heading2={'Total Spaces'}
                            subHeading1={onlyShowTwo.length}
                            subHeading2={`${occupiedStudents}/${studentsCount}`}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 p-0">
                            <div className="main_container_dashboard_col5">
                                <div className="card__row card_row5">
                                    <SmallCard
                                        linkurl={'/tutor/wallet'}
                                        mainHeading={'Wallet'}
                                        subHeading1={'Balance'}
                                        subHeading2={'AED15,740'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BackgroundTemplate imgSrc={tutorDetail && tutorDetail.User.profile} />

                <div className="second_component">
                    <div className="main_container3">
                        <div className=" row horizontalline"></div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="main_container_col11">
                                    <div className="personal_container_day_time">
                                        <div className="personal_container_day">
                                            <Typography className="subtext">Your Day</Typography>
                                        </div>
                                        <div className="personal_container_time">
                                            <Typography className="subtext">
                                                {yourDay.length ? yourDay[0].startTime : 'N/A'}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="main_container_col12">
                                    <div className="main_subcontainer_timeline">
                                        {yourDay.map((item: any, i: number) => {
                                            if (String(item.date) === String(moment(new Date()).format('DD/MM/YY'))) {
                                                return (
                                                    <>
                                                        <div key={i} className="timeline_container1">
                                                            <ResuableTimeline
                                                                date={item.date}
                                                                time1={item.startTime}
                                                                time2={item.endTime}
                                                                subject={item.subject}
                                                                subheading1={item.duration}
                                                                desc={item.description}
                                                                subheading2={item.text}
                                                            />
                                                        </div>
                                                        <div className="horizontalline"></div>
                                                    </>
                                                );
                                            } else return;
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonWhiteFooter">
                    <PageFooter />
                </div>
            </div>
        </>
    );
};
export default PersonalDashboard;
