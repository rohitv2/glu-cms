import React from 'react';
import TwoColTable from '../../components/Dashobard/TwoColTable';
import HistogramChart from '../../components/Dashobard/HistogramChart';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

interface props {
    barData?: any;
    toalPercent?: string | number;
    studentId?: string | number;
    studentDetails?:any
}
const FeeExamResultRow: React.FC<props> = ({ barData, toalPercent, studentId, studentDetails }) => {
    const data = [
        { col1: 'January', col2: 'Success' },
        { col1: 'Fabruary', col2: 'Success' },
        { col1: 'March', col2: 'Success' },
        { col1: 'April', col2: 'Success' },
    ];
    const route = useHistory();
    const gotoPage = () => {
        route.push({
            pathname: '/dashboard/student-details/exam',
            state: {
                id: studentId,
                studentDetails: studentDetails
            },
        });
    };
    const xAxisData = ['First Term exam', 'Second Term Exam', 'Third Term Exam'];
    return (
        <div className="row row__margin">
            <div className="col-lg-5 d-flex col-md-12 colum__spacing">
                <TwoColTable linkTo="" color="#5FB475" data={data} tableName="Fee Details" colHead1="Month" colHead2="Status" />
            </div>
            <div className="col-lg-7 d-flex col-md-12 colum__spacing">
                <div className="bg-white exm-pdng">
                    <div className="row">
                        <div className="col-md-9 bdr_right">
                            <Typography className="exam_heading">Exam Results</Typography>
                            <HistogramChart xAxis={xAxisData} data={barData} goto={gotoPage} />
                        </div>
                        <div className="col-md-3 d-flex align-content-center justify-content-center">
                            <div className="align-self-center">
                                <Typography className="percent">{toalPercent}%</Typography>
                                <Typography className="title">Year Average</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeExamResultRow;
