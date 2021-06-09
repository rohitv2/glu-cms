import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { getTeacherRecommendation, getTeacherRecommendationCount } from '../../Redux/Actions/teacherAction';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableSubmittedList from './ReusableSubmittedList';
import PageFooter from '../../components/PageFooter';
import useMenuList from '../../Hooks/useMenuList';
const TutorClass: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const teacherRecommend = useSelector((state: rootReducerType) => state.teacherReducer.teacherRecommendations);
    const teacherRecommendCount = useSelector(
        (state: rootReducerType) => state.teacherReducer.teacherRecommendationCount
    );
    const [recoData, setRecoData] = useState<any>('');
    const menu = useMenuList('tutor');
    useEffect(() => {
        dispatch(getTeacherRecommendation());
    }, []);
    useEffect(() => {
        dispatch(getTeacherRecommendationCount());
    }, []);
    useEffect(() => {
        setRecoData(teacherRecommend && teacherRecommend);
    }, [teacherRecommend]);
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="tutor_total_recommend">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="total_recommend_container_1">
                                <div className="header_text_container">
                                    <div className="header_text_1">
                                        <Typography className="total_recommend_text">Recommendations</Typography>
                                    </div>
                                    <div className="header_text_2">
                                        <Typography className="total_recommend_text">Suggested</Typography>
                                    </div>
                                </div>
                                <div className="number_container">
                                    <div className="suggested_number_container">
                                        <div className="suggested_number">
                                            <Typography className="total_recommend_text">
                                                {teacherRecommendCount && teacherRecommendCount.data.suggest}
                                            </Typography>
                                        </div>
                                        <div className="suggest_text">
                                            <Typography className="total_recommend_smalltext">Suggested</Typography>
                                        </div>
                                    </div>
                                    <div className="accepted_number_container">
                                        <div className="accepted_number">
                                            <Typography className="total_recommend_text">
                                                {teacherRecommendCount && teacherRecommendCount.data.accepted}
                                            </Typography>
                                        </div>
                                        <div className="accepted_text">
                                            <Typography className="total_recommend_smalltext">Accepted</Typography>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/tutor/recommend" style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="create_button">
                                        <Typography className="total_recommend_smalltext">Create</Typography>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 left_border">
                            <div className="total_recommend_container_2">
                                <div className="big_text">
                                    <Typography className="total_recommend_bigtext">
                                        Total Recommended<br></br>
                                        {teacherRecommend && teacherRecommend.length}
                                    </Typography>
                                </div>
                                <div className="total_recommend_list_container">
                                    {recoData &&
                                        recoData.map((val: any) => (
                                            <>
                                                <ReusableSubmittedList
                                                    id={val.id}
                                                    subject={val.subject}
                                                    desc={val.class}
                                                    SubmittedDate={new Date(val.submitted).toString()}
                                                    // studentsNum={val.RecommendedStudents.length}
                                                    studentList={val.RecommendedStudents}
                                                    DisplayAccepted={false}
                                                />
                                            </>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="recommend_accepted_text">
                                <Typography className="total_recommend_text">Accepted</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 left_border">
                            <div className="total_recommend_container_3">
                                {false &&
                                    recoData.map((val: any) => (
                                        <>
                                            <ReusableSubmittedList
                                                subject={val.subject}
                                                desc={val.class}
                                                SubmittedDate={val.submitted}
                                                studentList={val.RecommendedStudents}
                                                DisplayAccepted={true}
                                            />
                                        </>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commonWhiteFooter">
                <PageFooter />
            </div>
        </NavigationMenu>
    );
};

export default TutorClass;
