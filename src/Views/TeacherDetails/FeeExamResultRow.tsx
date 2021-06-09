import React from 'react';
import TwoColTable from '../../components/Dashobard/TwoColTable';
import HistogramChart from '../../components/Dashobard/HistogramChart';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const FeeExamResultRow = () => {
    const data = [
        { col1: 'January', col2: 'Success' },
        { col1: 'Fabruary', col2: 'Success' },
        { col1: 'March', col2: 'Success' },
        { col1: 'April', col2: 'Success' },
    ];
    const route = useHistory();
    const gotoPage = () => {
        route.push('/dashboard/student-details/exam');
    };
    const histogramData =  [400,300,800,200,500,700,400,200,900,100];
    const xAxisData = ['7 Red', '8 Blue', '9 Set 4', '9 Set 4', '8 Blue', '9 Set 4', '7 Set 4', '8 Blue', '9 Set 4', '9 Set 4',];
    return (
        <div className="row row__margin">
            <div className="d-flex col-md-12 colum__spacing">
                <div className="bg-white exm-pdng">
                    <div className="row">
                        <div className="col-md-12 pr-5">
                            <Typography className="exam_heading pt-4">Exam Results</Typography>
                            <HistogramChart xAxis={xAxisData} data={histogramData} goto={gotoPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeExamResultRow;
