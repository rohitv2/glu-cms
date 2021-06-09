import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
const useStyles = makeStyles(({
    thumbnail:{
        cursor: "pointer"
    }
}));
interface props {
    heading?: string;
    subHeading?: string;
    imgSrc?: any;
    linkurl?: string;
    click?: () => void;
    subjectName?:string;
}
const TutorMyClass: React.FunctionComponent<props> = ({ heading, subHeading, imgSrc, linkurl, click, subjectName }) => {
const classes = useStyles();
    return (
        <div className={`reusableImageRating ${classes.thumbnail}`} onClick={click}>
            <div className="sec">
                <img src={imgSrc} width="100%" height="300px" style={{ objectFit: 'cover' }} alt="" />
                <div className="img_caption">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={linkurl}>
                        <Typography className="tutor_myclasses_smalltext">{heading}</Typography>
                        <Typography className="tutor_myclasses_smalltext">{subjectName}</Typography>
                    </Link>
                </div>
                <div className="star_rating">
                    <StarRateSharpIcon />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={linkurl}>
                        <Typography className="tutor_myclasses_xstext star_pos">{subHeading}</Typography>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default TutorMyClass;
