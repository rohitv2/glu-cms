import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    title: React.ReactNode,
    subtitle: React.ReactNode
}
const TitleSubtitle: React.FunctionComponent<props> = ({title, subtitle}) => {
    return (
        <div className="title__subtitle">
            <Typography className="title">{title}</Typography>
    <Typography className="subtitle">{subtitle}</Typography>
        </div>
    );
};

export default TitleSubtitle;
