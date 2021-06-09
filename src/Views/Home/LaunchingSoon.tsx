import React from 'react';
import { Typography } from '@material-ui/core';

const LaunchingSoon: React.FunctionComponent = () => {
    return (
        <div className="launching-soon-container">
            <Typography className="title">Launching Soon</Typography>
            <Typography variant="h1" className="for">
                For Schools, <br /> Teachers, Parents <br /> and Students
            </Typography>
        </div>
    );
};

export default LaunchingSoon;
