import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    title?: string;
}
const WelcomeText: React.FunctionComponent<props> = ({ title }) => {
    return (
        <div className="welcome-text">
            <Typography className="title">{title}</Typography>
        </div>
    );
};

export default WelcomeText;
