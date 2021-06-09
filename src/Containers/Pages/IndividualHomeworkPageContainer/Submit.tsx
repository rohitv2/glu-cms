import React, { FC, useEffect, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import FormGroup from '../../../components/Form/FormGroup';
import FormControlUpload from '../../../components/Form/FormControlUpload';
import Grid from '@material-ui/core/Grid';
import FormControlInput from '../../../components/Form/FormControlInput';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useFormik } from 'formik';
import useFileUpload from '../../../Hooks/useFileUploadHomeWork';
import { SubmitHomeworkForm } from '../../../Interfaces/students/forms';
import FullScreenLoader from '../../../components/Loaders/FullScreenLoader';

const useStyles = makeStyles({
    submitContainer: {
        paddingTop: '3.125rem',
        paddingBottom: '5rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    submitTitle: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        marginBottom: '1.5625rem',
    },
    offlineSubmittedContainer: {
        paddingTop: '3.125rem',
    },
});

export type OnUploadComplete = (formData: SubmitHomeworkForm) => void;
export type OnSubmitPhysically = (value: boolean) => void;

interface ISubmit {
    onComplete: OnUploadComplete;
    onSubmitPhysically: OnSubmitPhysically;
    isSubmitted: boolean;
    isSubmittedPhysically: boolean;
    comment: string;
}

const Submit: FC<ISubmit> = ({ onComplete, isSubmitted, comment, onSubmitPhysically, isSubmittedPhysically }) => {
    const classes = useStyles();
    const { file, setFile, upload, isLoading } = useFileUpload((fileName, { comment }: any) => {
        onComplete({ fileName, comment });
    });

    const { values, handleChange, submitForm, setValues } = useFormik({
        initialValues: {
            comment: '',
        },
        onSubmit: (values) => {
            if (file) {
                return upload(values);
            }
            onComplete(values);
        },
    });

    useEffect(() => {
        setValues({ comment });
    }, [comment]);

    return (
        <Fragment>
            <Grid container direction="column" className={classes.submitContainer}>
                {isLoading && <FullScreenLoader />}
                <Typography className={classes.submitTitle}>Homework</Typography>
                <FormGroup>
                    <FormControlUpload isUploadButton={false} max={500} onChange={setFile} value={file} />
                </FormGroup>
                <FormGroup marginBottomVariant={2}>
                    <Grid container>
                        <Grid container item xs={10}>
                            <FormControlInput
                                fullWidth
                                label="Comment"
                                id="submit-comment"
                                name="comment"
                                value={values.comment}
                                onChange={handleChange}
                                fontSizeVariant={2}
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
                <ButtonPrimary variant="outlined" outlinedVariant={2} onClick={submitForm}>
                    {isSubmitted ? 'Resubmit' : 'Submit'}
                </ButtonPrimary>
            </Grid>
            <Grid container direction="column" className={classes.offlineSubmittedContainer}>
                <Typography className={classes.submitTitle}>Submitted your homework physically?</Typography>
                <ButtonPrimary
                    variant="outlined"
                    outlinedVariant={2}
                    disabled={isSubmittedPhysically}
                    onClick={() => onSubmitPhysically(true)}
                >
                    {isSubmittedPhysically ? 'Completed' : 'Complete'}
                </ButtonPrimary>
            </Grid>
        </Fragment>
    );
};

export default Submit;
