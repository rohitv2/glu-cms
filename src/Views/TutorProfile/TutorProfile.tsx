import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import { getTeacherSkills, getTeacherExperience, getTeacherEducation } from '../../Redux/Actions/teacherAction';
import PageFooter from '../../components/PageFooter';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import useMenuList from '../../Hooks/useMenuList';

const TempComp: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const teacherSkill = useSelector((state: rootReducerType) => state.teacherReducer.teacherSkill);
    const teacherExperience = useSelector((state:rootReducerType) => state.teacherReducer.teacherExperience);
    const teacherEducation = useSelector((state:rootReducerType) => state.teacherReducer.teacherEducation);
    const tutorData = useSelector((state:any) => state.teacherReducer.teacherData);
    const menu = useMenuList('tutor');

    useEffect(() => {
        dispatch(getTeacherSkills());
        dispatch(getTeacherExperience());
        dispatch(getTeacherEducation());
    }, []);
    
    return (
        <NavigationMenu
            tutorProfileText={true}
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            colorWhite={true}
            background={'brown'}
        >
            <div className="profile_container">
                <div className="main_container p-0">
                    <BackgroundTemplate imgSrc={tutorData && tutorData.User.profile} />
                </div>
                <div className="profile_container_1">
                    {/* Reusable Component From Here */}
                    <div className="row">
                        <div className="col-md-6 order-md-1 order-2 p-0">
                            <Typography className="profile_container_1_text1">Limited Availability</Typography>
                        </div>
                        <div className="col-md-6 order-md-2 order-1 p-0">
                            <div className="profile_container_1_subcontainer">
                                <Typography className="profile_container_1_text2">
                                    {tutorData && tutorData.bio}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="row profile_horizontalline"></div>
                    <div className="profile_container_1_2">
                        {/* Reusable from here */}
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="about_tag">
                                    <Typography className="profile_container_1_2_text1">About</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 border-coloumn1 p-0">
                                <div className="row">
                                    <div className="col-6 pr-0">
                                        <div className="profile_container_1_2_subcontainer1">
                                            <div className="top_sm_border_container">
                                                <div className="top_sm_border mr-1"></div>
                                            </div>
                                            <Typography className="subtext1">Experience</Typography>
                                            {teacherExperience &&
                                                teacherExperience.map((val:any) => (
                                                    <div className="profile_container_1_2_subcontainer1_row1">
                                                        <Typography className="subtext2">{`${
                                                            new Date(val.Experience.startDate).toString().split(' ')[3]
                                                        }-${
                                                            val.Experience.stillWorking
                                                                ? 'Present'
                                                                : new Date(val.Experience.startDate)
                                                                      .toString()
                                                                      .split(' ')[3]
                                                        }`}</Typography>
                                                        <Typography className="subtext3">
                                                            {val.Experience.workPlace}
                                                            <br></br>
                                                            {val.Experience.department}
                                                        </Typography>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="profile_container_1_2_subcontainer2 left_border">
                                            <div className="top_sm_border_container">
                                                <div className="top_sm_border mr-1"></div>
                                            </div>
                                            <Typography className="subtext1">Education</Typography>
                                            {teacherEducation &&
                                                teacherEducation.map((val:any) => (
                                                    <div className="profile_container_1_2_subcontainer2_row2">
                                                        <Typography className="subtext3">
                                                            {val.QualificationDetail.school}
                                                            <br></br>
                                                            {val.QualificationDetail.qualification}
                                                        </Typography>
                                                        <br></br>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="profile_container_1_2_subcontainer3 ">
                                        <div className="col-md-12">
                                            <div className="profile_container_1_2_subcontainer3_row3 left_sm_border">
                                                <div className="small_screen_padding">
                                                    <div className="reusable_skills_container">
                                                        <Typography className="skillTag_text">Skills</Typography>

                                                        <div className="row skills">
                                                            {teacherSkill &&
                                                                teacherSkill.map((val: any) => (
                                                                    <Typography key={val.id} className="skillset">
                                                                        {val.skillName}
                                                                    </Typography>
                                                                ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
        </NavigationMenu>
    );
};

export default TempComp;
