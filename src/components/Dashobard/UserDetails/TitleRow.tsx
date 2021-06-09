import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    title: string;
    style?:any;
}
const TitleRow: React.FunctionComponent<props> = ({ title, ...props }) => {
    return (
        <div className="title-row">
            <Typography {...props} className="title">{title}</Typography>
        </div>
    );
};

export default TitleRow;
