import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    present?: string;
    status?: string;
}
const PresetGridCol: React.FunctionComponent<props> = ({ present, status }) => {
    return (
        <div className="present_grid">
            <Typography className="percent">{present}</Typography>
            <Typography className="status">{status}</Typography>
        </div>
    );
};

export default PresetGridCol;
