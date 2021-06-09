import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import { RecommendationCardElement, TeacherLink } from './types';
import ButtonPrimary from '../Button/ButtonPrimary';

const useStyles = makeStyles({
    root: {
        paddingTop: '2.8125rem',
        paddingBottom: '4.375rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            paddingBottom: 0,
            borderBottom: 0,
        },
    },
    titleContainer: {
        marginBottom: '1.875rem',
    },
    infoText: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    infoContainer: {
        marginBottom: '1.75rem',
    },
    descriptionText: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        color: '#5F5F5F',
    },
    submittedContainer: {
        paddingTop: '1.25rem',
    },
    submitted: {
        fontSize: '1rem',
        fontFamily: 'CircularXXMonoWeb-Regular',
    },
    doneIcon: {
        verticalAlign: '-0.25em',
        marginRight: '0.625rem',
    },
    link: {
        color: 'unset',
        '&:hover': {
            color: 'unset',
        },
    },
    buttonsContainer: {
        paddingTop: '1.25rem',
    },
});

interface IRecommendationCard extends RecommendationCardElement, TeacherLink {
    onAccept: (id: number) => void;
    onCancel: (id: number) => void;
}

const RecommendationCard: FC<IRecommendationCard> = ({
    id,
    title,
    subject,
    date,
    name,
    description,
    teacherLink,
    isAccepted,
    isSuggested,
    onAccept,
    onCancel,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container direction="column">
                <Grid container direction="column" className={classes.titleContainer}>
                    <TitlePrimary>
                        {title}
                        <br />
                        {subject}
                    </TitlePrimary>
                </Grid>
                <Grid container className={classes.infoContainer}>
                    <Grid container direction="column" item xs={4}>
                        <Typography className={classes.infoText}>Date</Typography>
                        <Typography className={classes.infoText}>{date}</Typography>
                    </Grid>
                    <Grid container direction="column" item xs={8}>
                        <Typography className={classes.infoText}>Teacher</Typography>
                        <Link to={teacherLink} className={classes.link}>
                            <Typography className={classes.infoText}>{name}</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography className={classes.descriptionText}>{description}</Typography>
                </Grid>
                <Grid container className={classes.buttonsContainer}>
                    {isSuggested && (
                        <ButtonPrimary variant="outlined" outlinedVariant={2} onClick={() => onAccept(id)}>
                            Accept
                        </ButtonPrimary>
                    )}
                    {isAccepted && (
                        <ButtonPrimary variant="outlined" outlinedVariant={2} onClick={() => onCancel(id)}>
                            Cancel
                        </ButtonPrimary>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(RecommendationCard);
