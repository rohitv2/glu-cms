import React, { FC } from 'react';
import { LatestReviewCardElement } from './types';
import Grid from '@material-ui/core/Grid';
import TitleBig from '../../../components/Typographies/TitleBig';
import capitalize from 'lodash/capitalize';
import RatingCard from '../../../components/Cards/RatingCard';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useToggle from '../../../Hooks/useToggle';
import ChallengeForm from './ChallengeForm';
import { OnSubmitChallenge } from './ReviewCard';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '4.375rem',
    },
    latestReviewText: {
        marginBottom: '1.25rem',
    },
    latestReviewDetails: {
        marginBottom: '1.5rem',
    },
    button: {
        fontSize: '1.25rem',
    },
    titleRating: {
        display: 'flex',
        alignItems: 'center',
        '& i': {
            fontSize: '0.3em',
        },
    },
});

interface ILastReview extends LatestReviewCardElement {
    onSubmitChallenge: OnSubmitChallenge;
}

const LastReview: FC<ILastReview> = ({
    id,
    rating,
    role,
    description,
    subject,
    name,
    onSubmitChallenge,
    isSubmitted: isAlreadySubmitted,
}) => {
    const classes = useStyles();
    const [isForm, toggleForm] = useToggle(false);
    const [isSubmitted, toggleSubmitted] = useToggle(false);

    return (
        <Grid container direction="column">
            <Grid container direction="column" className={classes.titleContainer}>
                <TitleBig>
                    {name}, {capitalize(role)}
                    <br />
                    <RatingCard rating={rating} iconPlacement="right" rootClassName={classes.titleRating} />
                </TitleBig>
            </Grid>
            <Grid container direction="column">
                <TitlePrimary className={classes.latestReviewText}>{description}</TitlePrimary>
                <TextPrimary className={classes.latestReviewDetails}>Class, {subject}</TextPrimary>
                {!isSubmitted && !isAlreadySubmitted && !isForm && (
                    <ButtonPrimary color="secondary" className={classes.button} onClick={toggleForm}>
                        Challenge
                    </ButtonPrimary>
                )}
                <ChallengeForm
                    id={id}
                    onSubmitChallenge={onSubmitChallenge}
                    toggleForm={toggleForm}
                    toggleSubmitted={toggleSubmitted}
                    isForm={isForm}
                    isSubmitted={isSubmitted || isAlreadySubmitted}
                />
            </Grid>
        </Grid>
    );
};

export default LastReview;
