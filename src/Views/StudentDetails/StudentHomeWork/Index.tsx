import React, { useEffect, useState } from 'react';
import ProfileTitle from '../../../components/Dashobard/ProfileTitle';
import TwoColTable from '../../../components/Dashobard/TwoColTable';
import PercentageProgress from '../../../components/Dashobard/PercentageProgress';
import CompNcomp from '../../../components/Dashobard/CompNcomp';
import AssignmentDetails from '../../../components/Dashobard/UserDetails/AssignmentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { studentSubjectHomeworkAPIcall } from '../../../Redux/Actions/studentAction';
import { rootReducerType } from '../../../Interfaces/reducerInterfaces';
import moment from 'moment';

const Index = () => {
    const [showMoreDetail, setShowMoreDetails] = useState(false);
    const [studentDetails, setStudentDetails] = useState({ name: '' });
    const [hwData, setHwData] = useState([]);
    const [subHwData, setSubHwData] = useState([]);
    const [active, setActive] = useState(0);
    const homeworkDetails = useSelector((state: rootReducerType) => state.studentReducer.studentMoreHomework);
    const dispatch = useDispatch();
    const routes = useLocation();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any)?.state?.hasOwnProperty('id')) {
                dispatch(studentSubjectHomeworkAPIcall((routes as any)?.state?.id));
                setStudentDetails((routes as any).state.studentDetails);
            }
        }
    }, []);
    useEffect(() => {
        if (homeworkDetails) {
            const data = homeworkDetails.map((item: any) => {
                return { col1: item.subjectName, col2: <PercentageProgress percent={Number(item.totalpercent).toFixed(2) + '%'} /> };
            });
            setHwData(data);
            const subData = homeworkDetails.map((item: any) => {
                return item.subData.map((subItem: any) => {
                    return {
                        name: subItem.title,
                        date: moment(subItem.dueDate).format('MM-MMM-YYYY'),
                        status: subItem.MarkHomeworks[0].isComplete ? 'Completed' : 'Incompleted',
                        color: subItem.MarkHomeworks[0].isComplete ? '#7fcb4b' : '#ffafaf',
                    };
                });
            });
            setSubHwData(subData);
        }
    }, [homeworkDetails]);
    const handleRowClick = (i:number) => {
        setShowMoreDetails(true);
        setActive(i);
    };
    return (
        <div className="details-wrapper change_card_pd">
            <ProfileTitle hideBtns={true} data={studentDetails} detailName="Homework" />
            <div className="row row__margin">
                <div className={`col-md-${showMoreDetail ? '8' : '12'} colum__spacing`}>
                    <TwoColTable
                        rowClick={handleRowClick}
                        color="#5FB475"
                        data={hwData}
                        colWidth1="75%"
                        colWidth2="20%"
                        tableName=""
                        colHead1="Subjects"
                        colHead2="Completed"
                        height="unset"
                        linkTo=""
                    >
                        <CompNcomp completed="completed" notCompleted="Incompleted" />
                    </TwoColTable>
                </div>
                {showMoreDetail && (
                    <div className={`col-md-4 colum__spacing`}>
                        <AssignmentDetails showButton={true} data={subHwData.length ? subHwData[active] : []} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
