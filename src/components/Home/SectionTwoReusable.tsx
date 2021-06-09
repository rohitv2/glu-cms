import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    image: string;
    title: string;
    msg: React.ReactNode;
    mobileImg?: string;
    desktopTitle?: string;
    leftTitle?: string;
}
const SectionTwoReusable: React.FunctionComponent<props> = ({
    image,
    title,
    msg,
    mobileImg,
    desktopTitle,
    leftTitle,
}) => {
    return (
        <div className="section-two">
            <div className="opacity-bg"></div>
            <img className="ear-ring-girl-mobile" src={mobileImg} alt="" />
            <img className="ear-ring-girl" src={image} alt="" />
            <Typography className="left__title">{leftTitle}</Typography>
            <div className="img-overlay-container">
                <Typography className="title mobile-title">{title}</Typography>
                <Typography className="title">{desktopTitle}</Typography>
                <Typography className="msg">{msg}</Typography>
            </div>
        </div>
    );
};

export default SectionTwoReusable;
