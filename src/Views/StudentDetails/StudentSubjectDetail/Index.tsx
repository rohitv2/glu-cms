import React, { useEffect, useState } from 'react';
import ProfileTitle from '../../../components/Dashobard/ProfileTitle';
import TwoColTable from '../../../components/Dashobard/TwoColTable';
import PercentageProgress from '../../../components/Dashobard/PercentageProgress';
import CompNcomp from '../../../components/Dashobard/CompNcomp';
import AssignmentDetails from '../../../components/Dashobard/UserDetails/AssignmentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { studentTermResultAPIcall } from '../../../Redux/Actions/studentAction';
import { checkValue } from '../../../Helper/checkValue';

const Index = () => {
    const [showMoreDetail, setShowMoreDetails] = useState(false);
    const termResult = useSelector((state: any) => state.studentReducer.studentTermResult);
    const [termData, setTermData] = useState([]);
    const handleRowClick = () => {
        setShowMoreDetails(true);
    };
    const [studentId, setStudentId] = useState(0);
    const [studentDetails, setStudentDetails] = useState({ name: '' });
    const [term, setTerm] = useState('1');
    const handleTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(studentTermResultAPIcall(studentId, e.target.value));
        setTerm(e.target.value);
    };
    const dispatch = useDispatch();
    const routes = useLocation();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any)?.state?.hasOwnProperty('id')) {
                setStudentId((routes as any).state.id);
                setStudentDetails((routes as any).state.studentDetails);
                dispatch(studentTermResultAPIcall((routes as any).state.id, term));
            }
        }
    }, []);
    useEffect(() => {}, []);
    useEffect(() => {
        if (termResult) {
            const data = termResult.map((item: any) => {
                return {
                    col1: checkValue(item.Subject.subjectName),
                    col2: <PercentageProgress percent={`${checkValue(Number(item.percentage).toFixed(2))}%`} />,
                };
            });
            setTermData(data);
        }
    }, [termResult]);
    const moreDetails = [
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
    ];
    return (
        <div className="details-wrapper change_card_pd">
            <ProfileTitle
                hideBtns={true}
                value={term}
                data={studentDetails}
                onChange={handleTerm}
                showDropDown={true}
                detailName="Exam Results"
            />
            <div className="row row__margin">
                <div className={`col-md-${showMoreDetail ? '8' : '12'} colum__spacing`}>
                    <TwoColTable
                        rowClick={handleRowClick}
                        color="#5FB475"
                        data={termData}
                        colWidth1="75%"
                        colWidth2="20%"
                        tableName=""
                        colHead1="Subjects"
                        colHead2="Average"
                        height="unset"
                        linkTo=""
                    >
                        <CompNcomp completed="completed" notCompleted="Not completed" />
                    </TwoColTable>
                </div>
                {showMoreDetail && (
                    <div className={`col-md-4 colum__spacing`}>
                        <AssignmentDetails showTerm={true} showButton={false} data={moreDetails} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
