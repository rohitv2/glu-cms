import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';

interface props {
    icon: ReactNode;
    title: string;
}
const TitleRow: React.FunctionComponent<props> = ({ icon, title }) => {
    return (
        <div className="title-row">
            {icon}
            <Typography className="title">{title}</Typography>
        </div>
    );
};

export default TitleRow;
