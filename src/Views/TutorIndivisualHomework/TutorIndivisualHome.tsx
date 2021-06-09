import React, { useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import ReusableSubmissions from './ReusableSubmissions';
import PlayBanner from '../../components/PlayBanner';
import PageFooter from '../../components/PageFooter';

import { useDispatch, useSelector } from 'react-redux';
import { getHomeworkById, deleteHomeworkById } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router';
import useMenuList from '../../Hooks/useMenuList';
import moment from 'moment';

interface Props {
    match: any;
}

const TutorRecord: React.FunctionComponent<Props> = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const homeworkData = useSelector((state: { teacherReducer: any }) => state.teacherReducer.singleHomework);
    let param;
    useEffect(() => {
        param = match.params.id;
        dispatch(getHomeworkById(param));
    }, []);
    const menu = useMenuList('tutor');
    const studentArray = homeworkData
        ? homeworkData.studentData.map(
              (student: any) =>
                  `${student?.Student?.firstName ? student.Student.firstName : 'NAME MISSING'} ${
                      student?.Student?.lastName ? student.Student.lastName : ''
                  }`
          )
        : [];
    const halfArray = (arr: any, num: any) => {
        if (num === 0) {
            let hafarr = [];
            let iter = Math.ceil(arr.length / 2);
            for (let i = 0; i < iter; i++) {
                hafarr.push(arr[i]);
            }
            return hafarr;
        }
        if (num === 1) {
            let seconfHafArr = [];
            let iter = Math.ceil(arr.length / 2);
            for (let i = iter; i < arr.length; i++) {
                seconfHafArr.push(arr[i]);
            }
            return seconfHafArr;
        }
        return null;
    };
    const student1Array = halfArray(studentArray, 0);
    const student2Array = halfArray(studentArray, 1);
    let subArr =
        homeworkData &&
        homeworkData.studentData.map((el: any) => {
            return {
                name: `${el?.Student?.firstName ? el.Student.firstName : 'NAME MISSING'} ${
                    el?.Student?.lastName ? el.Student.lastName : ''
                }`,
                date: moment(el.date).format('MM/DD/YY'),
                time: moment(el.date).format('LT'),
                isComplete: el.isComplete ? 'Submitted' : 'Incomplete',
                isEdit:
                    el.isComplete == true && el.comment == null
                        ? 'Mark'
                        : el.isComplete == true && el.comment != null
                        ? 'Edit'
                        : '',
                studentId: el.studentId,
                isSubmitted: el.isSubmitted,
                studentComment: el.studentComment,
                homeworkDocument: el.homeworkDocument,
            };
        });
    subArr =
        subArr &&
        subArr.map((el: any) => {
            return { ...el, homeworkId: homeworkData ? homeworkData.homeworkData[0]?.id : '' };
        });
    const submissionArray = subArr;
    const resourcesArray = [
        {
            title: 'AQA Algebra',
            subtitle: 'Download',
            resource: homeworkData && homeworkData.homeworkData[0]?.resource,
        },
    ];

    return (
        <NavigationMenu
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            background="secondary"
        >
            <div className="tutor_indivisual_homework">
                <div className="container_1">
                    <div className="container_1_1">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <Typography className="leftText">Assignment</Typography>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="container_1_1_rightcontainer">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Typography className="rightTitle">
                                                {homeworkData
                                                    ? homeworkData?.homeworkData[0]?.Subject?.subjectName
                                                    : ''}
                                                .<br></br>
                                                {homeworkData ? homeworkData?.homeworkData[0]?.title : ''}
                                            </Typography>
                                        </div>
                                        <div className="col-md-12">
                                            <div style={{ cursor: 'pointer' }} className="button_container">
                                                <Typography
                                                    onClick={() => {
                                                        history.push({
                                                            pathname: '/tutor/set-homework',
                                                            state: {
                                                                id: match.params.id,
                                                            },
                                                        });
                                                    }}
                                                    className="smallText1"
                                                >
                                                    Edit
                                                </Typography>

                                                <Typography
                                                    onClick={() => {
                                                        dispatch(deleteHomeworkById(match.params.id, history));
                                                    }}
                                                    className="smallText2"
                                                >
                                                    Cancel
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_2">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="leftText">
                                Due<br></br> {homeworkData ? homeworkData?.homeworkData[0]?.dueDate.split('T')[0] : ''}{' '}
                                <br></br>
                                {homeworkData ? `${homeworkData.homeworkData[0]?.endTime.substring(0, 5)}am` : ''}
                            </Typography>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="rightContainer_2">
                                <Typography className="paraText">
                                    {homeworkData ? homeworkData.homeworkData[0]?.description : ''}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resources_play_container_3">
                    <div className="row horizontalline_md"></div>
                    <div className="resources_play_container_3_1">
                        <PlayBanner
                            heading={'Resources'}
                            subHeading1={'Resource'}
                            subHeading2={'Audio Clips'}
                            subText2={'Extract from AQA Algebra'}
                            isDivider={true}
                            resourcesArray={resourcesArray}
                        />
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="leftTextPadding">
                                    <Typography className="leftText ">Students</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 borderLineMain">
                                <div className="students_container">
                                    <div className="row">
                                        <div className="col-6 p-0">
                                            <div className="resources_container_1">
                                                {student1Array &&
                                                    student1Array.map((val, index) => (
                                                        <div key={index} className="col-md-12">
                                                            <Typography className="textArray">{val}</Typography>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className="col-6 p-0 left_md_border">
                                            <div className="resources_container_2">
                                                <div className="row">
                                                    {student2Array &&
                                                        student2Array.map((val, index) => (
                                                            <div key={index} className="col-md-12">
                                                                <Typography className="textArray">{val}</Typography>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="horizontalline_new"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="col-md-6 p-0">
                                    <div className="leftTextPadding">
                                        <Typography className="leftText ">Hand In</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 borderLineMain">
                                <div className="students_container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Typography className="textArray">
                                                Submissions{' '}
                                                {homeworkData
                                                    ? `${homeworkData.submission}/${
                                                          homeworkData.missing + homeworkData.submission
                                                      }`
                                                    : ''}
                                            </Typography>
                                        </div>
                                        <div className="col-md-12">
                                            {homeworkData &&
                                                submissionArray
                                                    .filter(
                                                        (hw: any) =>
                                                            hw.isComplete == 'Submitted' ||
                                                            hw.homeworkDocument != null ||
                                                            hw.studentComment != null
                                                    )
                                                    .map((val: any, index: any) => (
                                                        <>
                                                            <div className="submissions">
                                                                <ReusableSubmissions
                                                                    date={val.date}
                                                                    isComplete={val.isComplete}
                                                                    time={val.time}
                                                                    isEdit={val.isEdit}
                                                                    name={val.name}
                                                                    homeworkId={val.homeworkId}
                                                                    studentId={val.studentId}
                                                                    isSubmitted={val.isSubmitted}
                                                                />
                                                            </div>
                                                            {val.isComplete != 'Submitted' ? (
                                                                <Typography className="complete_text">
                                                                    In Complete
                                                                </Typography>
                                                            ) : (
                                                                <Typography className="complete_text">
                                                                    Complete
                                                                </Typography>
                                                            )}
                                                        </>
                                                    ))}
                                        </div>
                                        {/* <div className="complete">
                                            <div className="col-md-12">
                                                <div className="complete_button">
                                                    <Typography className="complete_text">Complete</Typography>
                                                </div>
                                            </div>
                                        </div> */}
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

export default TutorRecord;

