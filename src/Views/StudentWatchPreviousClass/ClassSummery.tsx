import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    description?: any;
}
const ClassSummery: React.FC<props> = ({ description }) => {
    return (
        <div className="class__summary__container">
            <div className="row">
                <div className="col-md-6 mb-2">
                    <Typography className="title">
                        Class <br /> Summary
                    </Typography>
                </div>
                <div className="col-md-6 mb-2">
                    <Typography className="summery__heading">Description</Typography>
                    <Typography className="summery__title">
                       {description}
                    </Typography>
                    {/* <Typography className="read__more">Read more</Typography> */}
                </div>
            </div>
        </div>
    );
};

export default ClassSummery;
