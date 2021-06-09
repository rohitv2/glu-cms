import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import RatingCard from '../../../components/Cards/RatingCard';
import ReviewCard from '../../../components/Cards/ReviewCard';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import { TutorProfileReviews } from '../types';
import CardsGrid from '../../CardsGrid';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    container: {
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        paddingTop: '3.125rem'
    },
    reviewContainer: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
        paddingLeft: '3.125rem'
    },
    button: {
        fontSize: '1.25rem',
        position: 'absolute',
        right: '3.125rem',
        top: '12.3rem',
        zIndex: 1
    },
});

interface IReviews extends TutorProfileReviews {}

const Reviews: FC<IReviews> = ({ rating, reviews }) => {
    const classes = useStyles();
    return (
        <CardsGridContainer rootClassName={classes.root}>
            <CardsGrid rootClassName={classes.container}>
                <Grid container direction="column">
                    <TitlePrimary>
                        Reviews
                        <br /> <RatingCard rating={rating} />
                    </TitlePrimary>
                </Grid>
                {reviews.map((review) => (
                    <Grid key={review.id} container className={classes.reviewContainer}>
                        <ReviewCard {...review} />
                    </Grid>
                ))}
            </CardsGrid>
            <ButtonPrimary color="secondary" className={classes.button}>
                Review
            </ButtonPrimary>
        </CardsGridContainer>
    );
};

Reviews.defaultProps = {
    reviews: []
}

export default memo(Reviews);
