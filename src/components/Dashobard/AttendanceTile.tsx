import React from 'react';
import { Typography } from '@material-ui/core';

interface AttendanceTileProps {
    value: number;
}
const AttendanceTile: React.FunctionComponent<AttendanceTileProps> = ({ value }) => {
    return (
        <div className="attendance-tile-container">
            <div className="attendance-wrapper">
                <div style={{width: `${value}%`}} className="attendance"></div>
            </div>
            <Typography className="total">{value}%</Typography>
        </div>
    );
};

export default AttendanceTile;
