import React, { FC } from 'react';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import FormGroup from '../../../../components/Form/FormGroup';
import FormControlInput, { OnInputChange } from '../../../../components/Form/FormControlInput';
import CardsGrid from '../../../CardsGrid';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { EducationForm } from '../../../../Interfaces/students/forms';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        padding: '3.125rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
        },
    },
    button: {
        fontSize: '1.25rem',
        position: 'absolute',
        right: 0,
        zIndex: 1,
    },
});

interface IFormLayout {
    onCancelClick: () => void;
    values: EducationForm;
    onChange: OnInputChange,
    onSubmit: () => void;
}

const FormLayout: FC<IFormLayout> = ({ onCancelClick, onChange, onSubmit, values }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <ButtonPrimary color="secondary" className={classes.button} onClick={onCancelClick}>
                Cancel
            </ButtonPrimary>
            <FormGroup>
                <FormControlInput
                    fullWidth
                    id="edit-education_school"
                    name="school"
                    value={values.school}
                    onChange={onChange}
                    label="School/College"
                    fontSizeVariant={2}
                />
            </FormGroup>
            <FormGroup>
                <FormControlInput
                    fullWidth
                    id="edit-education_qualification"
                    name="qualification"
                    value={values.qualification}
                    onChange={onChange}
                    label="Qualification"
                    fontSizeVariant={2}
                />
            </FormGroup>
            <FormGroup>
                <FormControlInput
                    fullWidth
                    id="edit-education_study"
                    name="fieldOfStudy"
                    value={values.fieldOfStudy}
                    onChange={onChange}
                    label="Field of Study"
                    fontSizeVariant={2}
                />
            </FormGroup>
            <FormGroup>
                <CardsGrid rows={2}>
                    <FormControlInput
                        fullWidth
                        id="edit-education_startDate"
                        name="startDate"
                        value={values.startDate}
                        onChange={onChange}
                        label="Start Date"
                        fontSizeVariant={2}
                        date
                    />
                    <FormControlInput
                        fullWidth
                        id="edit-education_endDate"
                        name="endDate"
                        value={values.endDate}
                        onChange={onChange}
                        label="End Date"
                        fontSizeVariant={2}
                        date
                    />
                </CardsGrid>
            </FormGroup>
            <ButtonPrimary variant="outlined" outlinedVariant={2} onClick={onSubmit}>
                Save
            </ButtonPrimary>
        </Grid>
    )
}

export default FormLayout
