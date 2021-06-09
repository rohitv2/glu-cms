import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import TextPrimary from '../Typographies/TextPrimary';
import LinearProgress from '@material-ui/core/LinearProgress';
import { IndividualSubjectCardElement, TeacherLink } from './types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        paddingBottom: '3.125rem',
        marginBottom: '3.125rem',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        '&:last-child': {
            marginBottom: 0,
            borderBottom: 0,
            paddingBottom: 0,
        },
    },
    titleContainer: {
        marginBottom: '1.875rem',
    },
    infoContainer: {
        marginBottom: '2.125rem',
    },
    progress: {
        width: '100%',
        background: '#CFCFCF',
        '& .MuiLinearProgress-bar': {
            background: '#2267FF',
        },
    },
    link: {
        color: 'unset',
        '&:hover': {
            color: 'unset',
        },
    },
});

interface IIndividualSubjectCard extends IndividualSubjectCardElement, TeacherLink {}

const IndividualSubjectCard: FC<IIndividualSubjectCard> = ({
    startTime,
    endTime,
    subject,
    classroom,
    name,
    progress,
    teacherLink
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.titleContainer}>
                <TitlePrimary>
                    {startTime}-{endTime}
                    <br />
                    {subject}
                </TitlePrimary>
            </Grid>
            <Grid container className={classes.infoContainer}>
                <Grid container item xs={5} direction="column">
                    <TextPrimary>Classroom</TextPrimary>
                    <TextPrimary>{classroom}</TextPrimary>
                </Grid>
                <Grid container item xs={7} direction="column">
                    <TextPrimary>Teacher</TextPrimary>
                    <Link to={teacherLink} className={classes.link}>
                        <TextPrimary>{name}</TextPrimary>
                    </Link>
                </Grid>
            </Grid>
            <Grid container item xs={6}>
                <LinearProgress variant="determinate" value={progress} className={classes.progress} />
            </Grid>
        </Grid>
    );
};

export default IndividualSubjectCard;
