import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import TagsContainer from '../../components/TagsContainer';
import BigBanner from '../../components/BigBanner';
import PageFooter from '../../components/PageFooter';
import PlayBanner from '../../components/PlayBanner';
import ActivityBanner from '../../components/ActivityBanner';
import useMenuList from '../../Hooks/useMenuList';
import { useLocation, useHistory } from 'react-router-dom';

const TutorClass: React.FunctionComponent = () => {
    const menu = useMenuList('tutor');
    const student1Array = ['Toby Frost ', 'Lugain Rfidah', ' Jack Marshall', 'Mia Adams', 'Jen Holden'];
    const student2Array = ['Ainsley Adams', 'Arthor Smith ', 'Rohan Rai', 'Joshua Lee', 'Shehan Chu'];
    const ArrayTags = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];

    const [classDetail, setClassDetail] = useState<any>();
    const [tagsArray, setTagsArray] = useState([]);
    const [resourcesArray, setResources] = useState<any>([]);
    const [studentArray,setStudentArray] = useState<any[]>()
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('upcomingClassDetails')) {
            const data = (location as any)?.state?.upcomingClassDetails;
            setClassDetail(data);
            if (data?.tags) {
                const totalTags = data.tags.map((item: any) => {
                    return item.tag;
                });
                setTagsArray(totalTags);
            }
            if (data?.resources) {
                const resourceData = [
                    {
                        resource: data?.resources,
                        title: data?.subjectName,
                        subtitle: 'Download',
                    },
                ];
                setResources(resourceData);
            }

            if(data?.students){
                const stData = data?.students?.map((item: any)=>{
                    return{
                        name : item.name,
                        id : item.id
                    }
                })
                setStudentArray(stData)
            }
        }
    }, []);


    return (
        <NavigationMenu
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            background="secondary"
        >
            <div className="tutor_upcoming_class_container">
                <ActivityBanner
                    heading={'Upcoming Classes'}
                    editData={classDetail}
                    image={classDetail ? classDetail.coverImg : commonImg.tutorDashboard}
                    date={classDetail ? classDetail.scheduledOn : ''}
                    startTime={classDetail ? classDetail.start : ''}
                    endTime={classDetail ? classDetail.end : ''}
                    activityDesc={classDetail ? classDetail.description : ''}
                    coverImg={classDetail ? classDetail.coverImg : ''}
                    resources={classDetail ? classDetail.resources : ''}
                    sessionName={classDetail ? classDetail.sessionName : ''}
                    tags={classDetail ? classDetail.tags : ''}
                    maxNumberOfStudents={classDetail ? classDetail.maxNumberOfStudents : ''}
                    price={classDetail ? classDetail.price : ''}
                    subjectName={classDetail ? classDetail.subjectName : ''}
                    sessionRoutine={classDetail ? classDetail.sessionRoutine : ''}
                    id={classDetail ? classDetail.id : ''}
                    button1={'Edit'}
                    button2={'Delete'}
                />
                {/* <div className="tutor_upcoming_class_subcontainer_1">
                    <div className="container-fluid">
                        <div className="tutor_upcoming_class_subcontainer_1_1">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <Typography className="upcomingText">Upcoming Classes</Typography>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="tutor_upcoming_image_container">
                                        <div className="row">
                                            <div className="col-12">
                                                <img
                                                    className="img img-fluid"
                                                    src={commonImg.tutorDashboard}
                                                    width="350px"
                                                    height="250px"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutor_upcoming_class_subcontainer_1_2">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <Typography className="upcomingText">29/07/20 </Typography>
                                    <Typography className="upcomingText">9am-</Typography>
                                    <Typography className="upcomingText">10.15am</Typography>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="tutor_upcoming_bigText_container">
                                        <div className="row">
                                            <div className="col-12">
                                                <Typography className="upcomingBigText">
                                                    Geography. Igneous, Sedimentary, and Metamorphic rocks
                                                </Typography>
                                            </div>

                                            <div className="col-12">
                                                <div className="tutor_upcoming_editDelete_container">
                                                    <Typography className="edit_text">Edit</Typography>
                                                    <Typography className="delete_text">Delete</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="tutor_upcoming_class_subcontainer_2">
                    <BigBanner
                        heading={'Class Summary'}
                        description={
                            classDetail ? classDetail.description : ''
                            // 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam erat.'
                        }
                    />
                </div>
                <div className="tutor_upcoming_class_subcontainer_3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0"></div>
                            <div className="col-md-6 p-0 left_tags_border">
                                <div className="tutor_upcoming_tags_container">
                                    <TagsContainer heading={'Tags'} tagsArray={tagsArray ? tagsArray : []} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tutor_upcoming_class_subcontainer_4">
                    <div className="horizontalline_new col-12"></div>
                    <div className="container-fluid">
                        <div className="tutor_upcoming_playbanner">
                            <PlayBanner
                                heading={'Resources'}
                                subHeading1={'Text Books'}
                                subHeading2={'Audio Clips'}
                                subText2={'Reading from Sedimentary Pertology'}
                                isDivider={true}
                                resourcesArray={resourcesArray}
                            />
                        </div>






                        <div className="student_list_reusable">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="student_number">
                                        <Typography className="student_number_text">0/{classDetail ? classDetail.maxNumberOfStudents : 0} Spaces</Typography>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0 left_border">

                                    <div className="row">
                                        <div className="col-12 p-0 ">
                                            <div className="class_student_div">
                                                    {studentArray?.map((val, index) => (
                                                            <Typography key={index} className="class_student_name">
                                                                {val.name}
                                                            </Typography>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="student_list_reusable_display">
                                        <div className="row">
                                            <div className="col-6 p-0 ">
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
                                                                    <Typography
                                                                        key={index}
                                                                        className="student_name_text"
                                                                    >
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
                                    </div> */}
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

export default TutorClass;
