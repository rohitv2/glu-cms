import React, { FC, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import FormGroup from '../../../components/Form/FormGroup';
import FormControlInput from '../../../components/Form/FormControlInput';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import { useFormik } from 'formik';
import { SubmitChallengeForm } from '../../../Interfaces/tutor/forms';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { OnSubmitChallenge } from './ReviewCard';
import TextPrimary from '../../../components/Typographies/TextPrimary';

const useStyles = makeStyles({
    challengeContainer: {
        paddingTop: '2.625rem',
    },
    submit: {
        marginRight: '1.25rem',
    },
    cancel: {
        fontSize: '1.25rem',
    },
});

const initialValues: SubmitChallengeForm = {
    challenge: true,
    challengeDescription: '',
};

interface IChallengeForm {
    id: number;
    onSubmitChallenge: OnSubmitChallenge;
    toggleForm: () => void;
    toggleSubmitted: () => void;
    isForm: boolean;
    isSubmitted: boolean;
}

const ChallengeForm: FC<IChallengeForm> = ({
    id,
    onSubmitChallenge,
    toggleSubmitted,
    toggleForm,
    isForm,
    isSubmitted,
}) => {
    const classes = useStyles();
    const { values, submitForm, handleChange } = useFormik({
        initialValues,
        onSubmit: (values: SubmitChallengeForm) => {
            onSubmitChallenge(id, values, () => {
                toggleForm();
                toggleSubmitted();
            });
        },
    });
    return (
        <Fragment>
            {isForm && (
                <Grid container direction="column" className={classes.challengeContainer}>
                    <Grid container>
                        <FormGroup container item xs={10}>
                            <FormControlInput
                                fullWidth
                                id="review-challenge"
                                name="challengeDescription"
                                onChange={handleChange}
                                value={values.challengeDescription}
                                label="Challenge"
                                fontSizeVariant={2}
                            />
                        </FormGroup>
                    </Grid>
                    <Grid container>
                        <ButtonPrimary
                            variant="outlined"
                            outlinedVariant={2}
                            className={classes.submit}
                            onClick={submitForm}
                        >
                            Submit
                        </ButtonPrimary>
                        <ButtonPrimary color="secondary" className={classes.cancel} onClick={toggleForm}>
                            Cancel
                        </ButtonPrimary>
                    </Grid>
                </Grid>
            )}
            {isSubmitted && (
                <Grid container direction="column" className={classes.challengeContainer}>
                    <TextPrimary>
                        Challenge submitted.
                        <br />
                        We will be in contact to resolve this soon.
                    </TextPrimary>
                </Grid>
            )}
        </Fragment>
    );
};

export default ChallengeForm;
