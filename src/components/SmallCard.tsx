import React from 'react';
import { Typography } from '@material-ui/core';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import { Link } from 'react-router-dom';
interface props {
    mainHeading?: string;
    subHeading1?: string;
    subHeading2?: string | number;
    linkurl?: string;
    whiteboard?: boolean;
}
const SmallCard: React.FunctionComponent<props> = ({ mainHeading, subHeading1, subHeading2, linkurl, whiteboard }) => {
    return (
        <div className="small__card">
            {whiteboard ? (
                <a style={{ textDecoration: 'none' }} href={linkurl}>
                    <Typography className="heading">{mainHeading}</Typography>
                </a>
            ) : (
                <Link style={{ textDecoration: 'none' }} to={linkurl}>
                    <Typography className="heading">{mainHeading}</Typography>
                </Link>
            )}

            <Typography className="title first__title">{subHeading1}</Typography>

            <Typography className="title second_title">
                {mainHeading === 'Reviews' && <StarRateSharpIcon style={{ color: 'black', marginRight: '0.5rem' }} />}
                {/* {mainHeading === 'Availablity' && (
                    <FiberManualRecordSharpIcon style={{ color: '#2267FF', marginRight: '0.5rem' }} />
                )} */}
                {subHeading2}
            </Typography>
        </div>
    );
};

export default SmallCard;
