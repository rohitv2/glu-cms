import React from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

interface props {
    image: string;
    title?: React.ReactNode;
    subtitle?: string;
    dateTime?: React.ReactNode;
    linkTo?: string;
}
const ImageThumbnail: React.FunctionComponent<props> = ({ image, title, subtitle, dateTime, linkTo }) => {
    const routes = useHistory();
    const handleRoute = () => {
        if(linkTo!=='' && linkTo!==undefined){
            routes.push(linkTo);
        }
    };
    return (
        <div className="image-thumbnail-container">
            <div className="image-thumbnail" onClick={handleRoute}>
                {/* <LazyLoadImage alt="" width="100%" effect="blur" src={image} /> */}
                <img className="image" src={image} alt=""/>
            </div>
            {dateTime}
            <Typography className="title">{title}</Typography>
            <Typography className="subtitle">{subtitle}</Typography>
        </div>
    );
};

export default ImageThumbnail;
