import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    heading: string;
    title: string;
}
const BoxContainer: React.FunctionComponent<props> = ({ heading, title }) => {
    return (
        <div className="box-container">
            <Typography className="heading">{heading}</Typography>
            <Typography className="title">{title}</Typography>
        </div>
    );
};

export default BoxContainer;
