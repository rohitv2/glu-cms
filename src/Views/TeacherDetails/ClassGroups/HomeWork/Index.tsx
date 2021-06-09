import React, { useEffect, useState } from 'react';
import HeadingSubHeadingOneBtn from '../../../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';
import UserDetailsWrapper from '../../../../Containers/Dashboard/UserDetailsWrapper';
import CardContainer from '../../../../Containers/Cards/CardContainer';
import PercentageProgress from '../../../../components/Dashobard/PercentageProgress';
import TwoColTable from '../../../../components/Dashobard/TwoColTable';
import ProfileFeedbackCard from '../../../../components/Dashobard/ProfileFeedbackCard';
import commonImg from '../../../../Assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { checkValue } from '../../../../Helper/checkValue';
import { classGroupHomeworkCmsAPIcall } from '../../../../Redux/Actions/classAction';
import { rootReducerType } from '../../../../Interfaces/reducerInterfaces';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(({
    sticky:{
        position: 'sticky',
        top: '7rem'
    }
}))

const Index = () => {
    const classes = useStyles();
    const [showMore, setShowMore] = useState(false);
    const [active, setActive] = useState(0);
    const handleDetails = (i: number) => {
        setShowMore(true);
        setActive(i);
    };
    const [homeworkResultData, setHomeworkResultData] = useState<any>([]);
    const [extrahomeworkResultData, setExtraHomeworkResultData] = useState([]);
    const [teacherdata, setTeacherdata] = useState<any>({ name: '', staffId: 0 });
    const homeworkData = useSelector((state: rootReducerType) => state.classReducer.classGroupHomework);
    const findRoutes = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('teacherData')) {
                setTeacherdata((findRoutes as any).state.teacherData);
                dispatch(classGroupHomeworkCmsAPIcall((findRoutes as any).state.teacherData.classGroupId));
            }
        }
    }, []);

    useEffect(() => {
        if (homeworkData) {
            const data = homeworkData.map((item: any, i: number) => {
                return {
                    rowNumber: i,
                    col1: item.homework.title,
                    col2: <PercentageProgress percent={`${Number(item.homework.completePercent).toFixed(0)}%`} />,
                };
            });
            setHomeworkResultData(data);

            const result = homeworkData.map((item: any) => {
                return item.students.map((subitem: any) => {
                    return {
                        image: subitem?.Student?.User?.profile ? subitem?.Student?.User?.profile : commonImg.photo,
                        title: checkValue(subitem?.Student?.firstName) + ' ' + checkValue(subitem?.Student?.lastName),
                        linkName: 'View feedback',
                        percent: subitem.isComplete ? 'Completed' : 'Incompleted',
                        linkTo: '',
                        comment: subitem?.comment,
                        hideComment: false,
                    };
                });
            });
            setExtraHomeworkResultData(result);
        }
    }, [homeworkData]);

    const handleFeedback = (i: number) => {
        const data: any = [...extrahomeworkResultData];
        data[active][i].hideComment = !data[active][i].hideComment;
        setExtraHomeworkResultData(data);
    };
    return (
        <UserDetailsWrapper>
            <div className="row row__margin">
                <div className="col-md-12 pb-0 colum__spacing">
                    <CardContainer>
                        <HeadingSubHeadingOneBtn
                            title="Homework"
                            subtitle={`${teacherdata?.teachersName} - ${teacherdata?.class} - ${teacherdata.yearGroup}`}
                            linkTo=""
                        />
                    </CardContainer>
                    <CardContainer>
                        {homeworkResultData.length === 0 && (
                            <Typography style={{ padding: '2rem', textAlign: 'center' }}>No Data Found</Typography>
                        )}
                    </CardContainer>
                </div>
            </div>
            <div className="row row__margin">
                {homeworkResultData.length ? (
                    <>
                        <div className={`col-md-${showMore ? '8' : '12'} colum__spacing`}>
                            <CardContainer>
                                <TwoColTable
                                    rowClick={handleDetails}
                                    color="#5FB475"
                                    data={homeworkResultData}
                                    colWidth1="75%"
                                    colWidth2="20%"
                                    tableName=""
                                    colHead1="Homework"
                                    colHead2="Completed"
                                    height="unset"
                                    linkTo=""
                                />
                            </CardContainer>
                        </div>
                        <div className="col-md-4 colum__spacing">
                            {showMore && (
                                <CardContainer exClass={classes.sticky}>
                                    <ProfileFeedbackCard
                                        headingOne={
                                            homeworkResultData.length > 0 ? homeworkResultData[active].col1 : 'N/A'
                                        }
                                        headingTwo={`Report - Test ${active + 1}`}
                                        data={extrahomeworkResultData.length > 0 ? extrahomeworkResultData[active] : []}
                                        handleFeedback={handleFeedback}
                                    />
                                </CardContainer>
                            )}
                        </div>
                    </>
                ) : null}
            </div>
        </UserDetailsWrapper>
    );
};

export default Index;
