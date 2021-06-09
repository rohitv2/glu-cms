import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    heading: string,
    title: string,
    subtitle: string
}
const BorderCardContainer: React.FunctionComponent<props> = ({heading, title, subtitle}) => {
    return (
        <div className="border-card-container">
                        <Typography className="heading">{heading}</Typography>
                        <Typography className="title">{title}</Typography>
                        <Typography className="subtitle">{subtitle}</Typography>
                    </div>
    );
}

export default BorderCardContainer;
