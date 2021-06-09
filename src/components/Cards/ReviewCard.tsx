import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextPrimary from '../Typographies/TextPrimary';
import RatingCard from './RatingCard';
import { ReviewSecondaryCardElement } from './types';

const useStyles = makeStyles({
    title: {
        marginBottom: '1.5625rem',
    },
    text: {
        color: '#5F5F5F',
    },
});

interface IReviewSecondaryCard extends ReviewSecondaryCardElement {}

const ReviewSecondaryCard: FC<IReviewSecondaryCard> = ({ name, rating, text }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <TextPrimary className={classes.title}>
                {name}
                <br />
                <RatingCard rating={rating} />
            </TextPrimary>
            <TextPrimary className={classes.text}>{text}</TextPrimary>
        </Grid>
    );
};

export default memo(ReviewSecondaryCard);
