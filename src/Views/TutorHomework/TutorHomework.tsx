import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import List from './HomeworkStatusList';
import { useDispatch, useSelector } from 'react-redux';
import { getTeacherHomework, getTeacherHomeworkCount } from '../../Redux/Actions/teacherAction';
import ReusableSmallButton from '../../components/ReusableSmallButton';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import useMenuList from '../../Hooks/useMenuList';
const TutorHomework: React.FunctionComponent = () => {
    const menu = useMenuList('tutor');
    const dispatch = useDispatch();
    const teacherHomework = useSelector((state: rootReducerType) => state.teacherReducer.teacherHomework);
    const teacherHomeworkCount = useSelector((state: any) => state.teacherReducer.teacherHomeworkCount);
    useEffect(() => {
        dispatch(getTeacherHomework());
        dispatch(getTeacherHomeworkCount());
    }, []);

    const ListArray =
        teacherHomework &&
        teacherHomework.filter((el: any) => {
            const timee = el.homework.endTime.split(':');
            let milliSec = parseInt(timee[0]) * 60 * 60 * 1000 + parseInt(timee[1]) * 60 * 1000;

            const dat = new Date(el.homework.dueDate).getTime();
            return dat + milliSec > Date.now();
        });
    const List2Array =
        teacherHomework &&
        teacherHomework.filter((el: any) => {
            const dat = new Date(el.homework.dueDate).getTime();
            const timee = el.homework.endTime.split(':');
            let milliSec = parseInt(timee[0]) * 60 * 60 * 1000 + parseInt(timee[1]) * 60 * 1000;
            return dat + milliSec < Date.now();
        });
    return (
        <>
            <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
                <div className="tutor_homework_main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="tutor_homework_header_container">
                                    <div className="tutor_homework_main_header">
                                        <div className="header_content_1">
                                            <Typography className="tutor_homework_main_text">Homework</Typography>
                                        </div>
                                        <div className="header_content_2">
                                            <Typography className="tutor_homework_main_text">Active</Typography>
                                        </div>
                                    </div>
                                    <div className="tutor_homework_number_count">
                                        <div className="submissions_count">
                                            <Typography className="tutor_homework_main_text">
                                                {teacherHomeworkCount ? teacherHomeworkCount.submission : ' '}
                                            </Typography>
                                            <Typography className="tutor_homewwork_main_xstext">Submissions</Typography>
                                        </div>
                                        <div className="missing_count">
                                            <Typography className="tutor_homework_main_text">
                                                {teacherHomeworkCount ? teacherHomeworkCount.missing : ' '}
                                            </Typography>
                                            <Typography className="tutor_homewwork_main_xstext">Missing</Typography>
                                        </div>
                                    </div>
                                    <div className="create_button">
                                        <ReusableSmallButton linkurl={'/tutor/set-homework'} heading={'Create'} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="tutor_homework_main_container">
                                    <div className="tutor_homework_main_header">
                                        <Typography className="tutor_homework_main_lgtext">
                                            Total Assignments<br></br>
                                            {teacherHomework && teacherHomework.length}
                                        </Typography>
                                    </div>
                                    <div className="tutor_homework_main_list">
                                        {ListArray &&
                                            ListArray.map((val: any) => (
                                                <>
                                                    <List
                                                        subject={val?.homework.title}
                                                        submissions={`${val?.submission}/${
                                                            val?.missing + val?.submission
                                                        }`}
                                                        date={val?.homework?.dueDate?.toString()?.substring(0, 10)}
                                                        desc={val?.homework?.description}
                                                        subjectDesc={val?.homework?.Subject?.subjectName}
                                                        linkurl={`/tutor/individual-homework/${val?.homework?.id}`}
                                                        isSubmitted={true}
                                                        DueOrComplete={'Due'}
                                                    />
                                                    <div className="homework_horizontalline"></div>
                                                </>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="previous_homework">
                                    <Typography className="tutor_homework_main_text">Previous</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="tutor_homework_main_container">
                                    <div className="tutor_homework_main_list">
                                        {List2Array &&
                                            List2Array.map((val: any, index: any) => (
                                                <>
                                                    <List
                                                        subject={val?.homework?.title}
                                                        submissions={`${val?.submission}/${
                                                            val?.missing + val?.submission
                                                        }`}
                                                        date={val?.homework?.dueDate.toString().substring(0, 10)}
                                                        desc={val?.homework?.description}
                                                        subjectDesc={val?.homework?.Subject?.subjectName}
                                                        linkurl={`/tutor/individual-homework/${val?.homework?.id}`}
                                                        isSubmitted={true}
                                                        DueOrComplete={'Due'}
                                                    />

                                                    {index !== List2Array.length - 1 && (
                                                        <div className="homework_horizontalline"></div>
                                                    )}
                                                </>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commonFooter">
                        <PageFooter padding={false} />
                    </div>
                </div>
            </NavigationMenu>
        </>
    );
};

export default TutorHomework;
