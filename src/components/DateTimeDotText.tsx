import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const DateTimeDotText = () => {
    return (
        <div className="date__time">
            <FiberManualRecord className="title" />
            <Typography className="date">24/07/20 - 9.30am</Typography>
        </div>
    );
};

export default DateTimeDotText;
