import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import capitalize from 'lodash/capitalize';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import RatingCard from '../../../components/Cards/RatingCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import { ReviewCardElement } from './types';
import useToggle from '../../../Hooks/useToggle';
import { SubmitChallengeForm } from '../../../Interfaces/tutor/forms';
import ChallengeForm from './ChallengeForm';

const useStyles = makeStyles({
    root: {
        paddingTop: '3.125rem',
        paddingBottom: '4.6875rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        position: 'relative',
    },
    infoContainer: {
        marginBottom: '1.75rem',
    },
    description: {
        color: '#5F5F5F',
    },
    button: {
        position: 'absolute',
        top: '3.125rem',
        right: 0,
        fontSize: '1.25rem',
    },
    challengeContainer: {
        paddingTop: '2.625rem',
    },
});

export type OnSubmitChallenge = (id: number, data: SubmitChallengeForm, cb: () => void) => void;

interface IReviewCard extends ReviewCardElement {
    onSubmitChallenge: OnSubmitChallenge;
}

const ReviewCard: FC<IReviewCard> = ({
    name,
    role,
    rating,
    title,
    subject,
    description,
    onSubmitChallenge,
    id,
    isSubmitted: isAlreadySubmitted,
}) => {
    const classes = useStyles();
    const [isForm, toggleForm] = useToggle(false);
    const [isSubmitted, toggleSubmitted] = useToggle(isAlreadySubmitted);
    return (
        <Grid container direction="column" className={classes.root}>
            {!isForm && !isSubmitted && (
                <ButtonPrimary className={classes.button} color="secondary" onClick={toggleForm}>
                    Challenge
                </ButtonPrimary>
            )}
            <Grid container direction="column" className={classes.infoContainer}>
                <Grid container>
                    <Grid container item xs={5}>
                        <TextPrimary>
                            {name}, {capitalize(role)}
                        </TextPrimary>
                    </Grid>
                    <Grid container item xs={5}>
                        <TextPrimary>{title}</TextPrimary>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container item xs={5}>
                        <TextPrimary>
                            <RatingCard rating={rating} />
                        </TextPrimary>
                    </Grid>
                    <Grid container item xs={7}>
                        <TextPrimary>{subject}</TextPrimary>
                    </Grid>
                </Grid>
            </Grid>
            <TextPrimary className={classes.description}>{description}</TextPrimary>
            <ChallengeForm
                id={id}
                onSubmitChallenge={onSubmitChallenge}
                toggleForm={toggleForm}
                toggleSubmitted={toggleSubmitted}
                isForm={isForm}
                isSubmitted={isSubmitted}
            />
        </Grid>
    );
};

export default ReviewCard;
