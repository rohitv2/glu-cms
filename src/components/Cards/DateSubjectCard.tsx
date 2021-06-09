import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DateTimeCard from './DateTimeCard';
import TitlePrimary from '../Typographies/TitlePrimary';
import { DateSubjectCardElement, TeacherLink } from './types';
import RatingCard from './RatingCard';

const useStyles = makeStyles({
    textContainer: {
        marginBottom: '0.625rem',
    },
    text: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    link: {
        color: 'unset',
        '&:hover': {
            color: 'unset',
        },
    },
});

interface IDateSubjectCard extends DateSubjectCardElement, TeacherLink {
    link?: string;
}

const DateSubjectCard: FC<IDateSubjectCard> = ({
    date,
    subject,
    startTime,
    endTime,
    description,
    subTitle,
    name,
    link,
    rating,
    teacherLink,
    teacherId,
    text,
}) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container className={classes.textContainer}>
                <Grid container direction="column" item xs={6}>
                    <DateTimeCard date={date} startTime={startTime} endTime={endTime} />
                </Grid>
                <Grid container direction="column" item xs={6}>
                    {link ? (
                        <Link to={link} className={classes.link}>
                            <TitlePrimary>
                                {subject}
                                <br />
                                {description}
                            </TitlePrimary>
                        </Link>
                    ) : (
                        <TitlePrimary>
                            {subject}
                            <br />
                            {description}
                        </TitlePrimary>
                    )}
                </Grid>
            </Grid>
            <Grid container>
                <Grid container item xs={6}>
                    <Typography className={classes.text}>{subTitle}</Typography>
                </Grid>
                <Grid container item xs={6}>
                    {name ? (
                        <Link to={teacherLink + `/${teacherId}`} className={classes.link}>
                            <Typography className={classes.text}>
                                {name}
                                {rating && <RatingCard rating={rating} leftSpace rightSpace={false} />}
                            </Typography>
                        </Link>
                    ) : (
                        <Typography className={classes.text}>{text}</Typography>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(DateSubjectCard);
