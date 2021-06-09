import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    image: string;
    title: string;
    msg: React.ReactNode;
    leftText?: string
}
const ImageOverlay: React.FunctionComponent<props> = ({ image, title, msg, leftText }) => {
    return (
        <div className="image__overlay image-thumbnail">
            <img className="img" src={image} alt="" />
            <Typography className="left__text">{leftText}</Typography>
            <div className="img-overlay-container">
                <Typography className="title">{title}</Typography>
                <Typography className="msg">{msg}</Typography>
            </div>
        </div>
    );
};

export default ImageOverlay;