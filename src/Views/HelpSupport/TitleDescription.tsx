import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    title?: string;
    description?: string;
    rowNo: string;
}
const TitleDescription: React.FunctionComponent<props> = ({ title, description, rowNo }) => {
    return (
        <>
            <div className="account-container">
                <p count={rowNo} className="title">{title}</p>
                <Typography className="desc">{description}</Typography>
                <hr className="line" />
            </div>
        </>
    );
};

export default TitleDescription;
