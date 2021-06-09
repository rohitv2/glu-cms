import React from 'react';
import { Typography } from '@material-ui/core';

const Contact: React.FunctionComponent = () => {
    return (
        <div className="contact-container">
            <Typography className="heading">Sara Lee</Typography>
            <Typography className="title">Sara.lee@skool.com</Typography>
            <Typography className="title">ID: XAV4D78</Typography>
            <Typography className="subtitle">Member since July, 2018</Typography>
        </div>
    );
};

export default Contact;
