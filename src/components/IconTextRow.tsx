import React from 'react';
import { FavoriteBorder } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

interface props {
    icon?: React.ReactNode;
    title?: string;
}
const IconTextRow: React.FunctionComponent<props> = ({ icon, title }) => {
    return (
        <div className="icontext__container">
            {icon}
            <Typography className="text">{title}</Typography>
        </div>
    );
};

export default IconTextRow;
