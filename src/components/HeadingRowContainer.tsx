import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface props{
    title: string;
    link: string;
    linkTo: string;
}
const HeadingRowContainer: React.FunctionComponent<props> = ({title, link , linkTo}) => {
    return (
        <div className="heading-row-container">
        <Typography className="title">{title}</Typography>
        <Link to={linkTo} className="subtitle">
            {link}
        </Link>
    </div>
    );
}

export default HeadingRowContainer;
