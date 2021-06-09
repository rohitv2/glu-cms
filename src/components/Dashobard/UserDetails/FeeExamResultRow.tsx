import React from 'react';
import { Typography } from '@material-ui/core';
import HistogramChart from '../HistogramChart';


interface props{
    xData: any,
    yData: any,
    gotoExamDetails: (e:any)=>void
}

const FeeExamResultRow: React.FC<props> = ({xData, yData, gotoExamDetails}) => {
    return (
        <div className="row row__margin">
            <div className="d-flex col-md-12 colum__spacing">
                <div className="bg-white exm-pdng">
                    <div className="row">
                        <div className="col-md-12 pr-5">
                            <Typography className="exam_heading pt-4">Exam Results</Typography>
                            <HistogramChart xAxis={xData} data={yData} goto={gotoExamDetails} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeExamResultRow;
