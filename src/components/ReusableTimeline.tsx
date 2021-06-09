import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    date:string,
    time1:string,
    time2:string,
    subject:string,
    desc:string,
    subheading1:string,
    subheading2:string
}
const ReusableTimeline: React.FunctionComponent<props> = ({ date, time1,time2,subject,desc,subheading1,subheading2}) => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <Typography className="text">{date}</Typography>
                    <Typography className="text">{time1}</Typography>
                    <Typography className="text">{time2}</Typography>
                </div>
                <div className="col-6">
                    <Typography className="text">{subject}</Typography>
                    <Typography className="text">{desc}</Typography>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Typography className="subtext">{subheading1}</Typography>
                </div>
                <div className="col-6">
                    <Typography className="subtext">{subheading2}</Typography>
                </div>
            </div>
        </div>
    );
};

export default ReusableTimeline;
