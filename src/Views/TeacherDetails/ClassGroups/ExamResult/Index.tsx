import React, { useEffect, useState } from 'react';
import UserDetailsWrapper from '../../../../Containers/Dashboard/UserDetailsWrapper';
import CardContainer from '../../../../Containers/Cards/CardContainer';
import PercentageProgress from '../../../../components/Dashobard/PercentageProgress';
import TwoColTable from '../../../../components/Dashobard/TwoColTable';
import ProfileFeedbackCard from '../../../../components/Dashobard/ProfileFeedbackCard';
import commonImg from '../../../../Assets/images';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { checkValue } from '../../../../Helper/checkValue';
import { checkValueReturn0 } from '../../../../Helper/checkValueReturn0';
import { getClassGroupExamResultAPIcall } from '../../../../Redux/Actions/classAction';
import ProfileTitle from '../../../../components/Dashobard/ProfileTitle';

const Index = () => {
    const [showMore, setShowMore] = useState(false);
    const [active, setActive] = useState(0);
    const handleDetails = (i: number) => {
        setShowMore(true);
        setActive(i);
    };
    const [examResultData, setExamResultData] = useState<any>([]);
    const [extraExamResultData, setExtraExamResultData] = useState([]);
    const [teacherdata, setTeacherdata] = useState<any>({ name: '', staffId: 0 });
    const examResult = useSelector((state: any) => state.classReducer.classGroupExamResult);
    const findRoutes = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('teacherData')) {
                const classId = (findRoutes as any).state.teacherData.classGroupId;
                setTeacherdata((findRoutes as any).state.teacherData);
                dispatch(getClassGroupExamResultAPIcall(classId, 1));
            }
        }
    }, []);



    useEffect(() => {
        if (examResult) {
            const data = examResult.map((item: any, i: number) => {
                return {
                    rowNumber: i,
                    col1: item.title,
                    col2: <PercentageProgress percent={`${Number(item.ExamStudents[0].percentage).toFixed(2)}%`} />,
                };
            });
            setExamResultData(data);

            const result = examResult.map((item: any) => {
                return item.ExamStudents.map((subitem: any) => {
                    return {
                        image: subitem?.Student?.User?.profile ? subitem?.Student?.User?.profile : commonImg.photo,
                        title: checkValue(subitem?.Student?.firstName) + ' ' + checkValue(subitem?.Student?.lastName),
                        linkName: 'View feedback',
                        percent: checkValueReturn0(subitem?.percentage) + '%',
                        // linkTo: '/dashboard/feedback',
                        comment: subitem?.comment,
                        hideComment: false
                    };
                });
            });
            setExtraExamResultData(result);
        }
    }, [examResult]);

    const handleFeedback =(i:number) => {
        const data:any = [...extraExamResultData];
        data[active][i].hideComment = !data[active][i].hideComment;
        setExtraExamResultData(data); 
    }

    const handleTerms = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value!==""){
            dispatch(getClassGroupExamResultAPIcall(teacherdata?.classGroupId, e.target.value));
        }
    };

    return (
        <UserDetailsWrapper>
            <div className="row row__margin">
                <div className="col-md-12 pb-0 colum__spacing">
                    <CardContainer>
                        <ProfileTitle
                            onChange={handleTerms}
                            hideProfile={true}
                            data={{
                                name: teacherdata?.teachersName,
                                class: teacherdata?.class + ' - ' + teacherdata?.yearGroup,
                            }}
                            hideBtns={true}
                            showDropDown={true}
                        />
                        {/* <HeadingSubHeadingOneBtn
                            title="Exam Results"
                            subtitle={`${teacherdata?.teachersName} - Classes - ${teacherdata?.class} - ${teacherdata?.yearGroup}`}
                            linkTo=""
                        /> */}
                    </CardContainer>
                </div>
            </div>

            {examResult?.length > 0 ? (
                <div className="row row__margin">
                    <div className={`col-md-${showMore ? '8' : '12'} colum__spacing`}>
                        <CardContainer>
                            <TwoColTable
                                rowClick={handleDetails}
                                color="#5FB475"
                                data={examResultData && examResultData}
                                colWidth1="75%"
                                colWidth2="20%"
                                tableName=""
                                colHead1="Exam"
                                colHead2="Completed"
                                height="unset"
                                linkTo=""
                            />
                        </CardContainer>
                    </div>
                    <div className="col-md-4 colum__spacing">
                        {showMore && (
                            <CardContainer>
                                <ProfileFeedbackCard
                                    headingOne={examResultData.length > 0 ? examResultData[active].col1 : 'N/A'}
                                    headingTwo={`Report - Test ${active + 1}`}
                                    data={extraExamResultData.length > 0 ? extraExamResultData[active] : []}
                                    handleFeedback={handleFeedback}
                              />
                            </CardContainer>
                        )}
                    </div>
                </div>
            ) : (
                <div className="row row__margin">
                    <div className={`col-md-12 colum__spacing`}>
                        <CardContainer>
                            <div style={{ textAlign: 'center', padding: '2rem' }}>No Data Found</div>
                        </CardContainer>
                    </div>
                </div>
            )}
        </UserDetailsWrapper>
    );
};

export default Index;
