import React from 'react';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import ExtraCurricularBanner from './ExtraCurricularBanner';
import BigBanner from '../../components/BigBanner';
import { Link } from 'react-router-dom';
import MadeBy from '../Footer/MadeBy';
import TagsContainer from '../../components/TagsContainer';
import PlayBanner from '../../components/PlayBanner';
import ActivityBanner from '../../components/ActivityBanner'
import commonImg from '../../Assets/images';
import useMenuList from '../../Hooks/useMenuList';
const menu = useMenuList('tutor')
const student1Array = ['Toby Frost ', 'Lugain Rfidah', ' Jack Marshall', 'Mia Adams', 'Jen Holden'];
const student2Array = ['Ainsley Adams', 'Arthor Smith ', 'Rohan Rai', 'Joshua Lee', 'Shehan Chu'];
const ArrayTags = ['Boxing', 'Training', 'Beginner', 'Entry Level', 'Getting Started', 'Sports', 'Fitness'];
const resourcesArray=[
    {
        title:"Mike Tyson, Undisputed Truth",
        subtitle:"Download"
    }
]
const TutorIndividualExtraCurricular2: React.FunctionComponent = () => {
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'} background="secondary">
            <div className="tutor-individual-curricular-2">
                <ActivityBanner heading={"Extra Curricular"} image={commonImg.jumpinggirl} date={"29/07/20"} startTime={"4pm"} endTime={"4.30pm"} activityDesc={"Boxing. Training techniques for begginers"} button1={"Edit"} button2={"Cancel"} />
                {/* <div className="reusable_activity_banner">
                    <div className="activity_banner">
                        <div className="sec1">
                            <Typography className="activity_text">Extra Curricular</Typography>
                        </div>
                        <div className="sec2">
                            <img src={commonImg.jumpinggirl} height="393px" width="393px" className="img-fluid" />
                        </div>
                        <div className="sec3">
                            <Typography className="activity_text">29/07/20</Typography>
                            <Typography className="activity_text">4pm-</Typography>
                            <Typography className="activity_text">4.30pm</Typography>
                        </div>
                        <div className="sec4">
                            <Typography className="activity_bigtext">
                                Boxing. Training techniques for begginers
                            </Typography>
                            <div className="edit_delete_container">
                                <Typography className="activity_smalltext pr-3">Edit</Typography>
                                <Typography className="activity_smalltext">Cancel</Typography>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="tutor_indivisual_curricular2_container1">
                    <BigBanner
                        heading={'Class Today'}
                        description={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam erat.'
                        }
                    />
                </div>
                <div className="tutor_indivisual_curricular2_container2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0"></div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="extra_curricular_tagContainer">
                                    <TagsContainer heading={'Tags'} tagsArray={ArrayTags} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tutor_indivisual_curricular2_container3">
                    <div className="horizontalline_new"></div>
                </div>
                <div className="tutor_individual_curricular2_container4">
                    <div className="container-fluid">
                        <PlayBanner
                            heading={'Resources'}
                            subHeading1={'Text Books'}
                            subHeading2={'Audio Clips'}
                            subText2={'Reading from Concrete Wave'}
                            isDivider={true}
                            resourcesArray={resourcesArray}
                        />
                    </div>
                </div>
                <div className="tutor_individual_curricular2_container5">
                    <div className="container-fluid">
                <div className="student_list_reusable">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="student_number">
                                    <Typography className="student_number_text">8/20 Spaces</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="student_list_reusable_display">
                                    <div className="row">
                                        <div className="col-6 p-0">
                                            {student1Array.map((val, index) => (
                                                <div className="col-12">
                                                    <Typography key={index} className="student_name_text">
                                                        {val}
                                                    </Typography>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-6 p-0 students_left_border">
                                            <div className="right_container">
                                                <div className="row">
                                                    <div className="col-12 p-0">
                                                        {student2Array.map((val, index) => (
                                                            <div className="col-12">
                                                                <Typography key={index} className="student_name_text">
                                                                    {val}
                                                                </Typography>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invite_student_button">
                                        <div className="row">
                                            <div className="">
                                                <div className="invite_button">
                                                    <Typography className="invite_text">Invite</Typography>
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
            <div className="commonFooter">
                <PageFooter/>
            </div>
        </NavigationMenu>
    );
};

export default TutorIndividualExtraCurricular2;
