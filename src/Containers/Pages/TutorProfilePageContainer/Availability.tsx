import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardsGrid from '../../CardsGrid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import CardsGridContainer from '../../CardsGridContainer';
import FormControlSelect from '../../../components/Form/FormControlSelect';
import FormControlInput from '../../../components/Form/FormControlInput';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import useSubjects from '../../../Hooks/students/useSubjects';
import { useFormik } from 'formik';
import { AvailabilityCardElement } from '../../../components/Cards/types';

const useStyles = makeStyles({
    limited: {
        fontSize: '1.5625rem',
        lineHeight: '1.5625rem',
        paddingLeft: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
            content: '""',
            display: 'block',
            width: '0.5em',
            height: '0.5em',
            background: '#FF0000',
            borderRadius: '50%',
            position: 'absolute',
            left: 0,
        },
    },
    descriptionContainer: {
        marginBottom: '4.0625rem',
    },
    formGroupContainer: {
        marginBottom: '2.5rem'
    },
    button: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        paddingLeft: '3.25rem',
        paddingRight: '3.25rem',
        marginRight: '1.25rem'
    },
    price: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        color: '#5F5F5F'
    },
});

interface IAvailability extends AvailabilityCardElement {}

const Availability: FC<IAvailability> = ({ about }) => {
    const classes = useStyles();
    const { subjectsOptions } = useSubjects();

    const { values, handleChange } = useFormik({
        initialValues: {
            subject: 0,
            date: new Date(),
            startTime: new Date(),
            endTime: new Date(),
        },
    })

    return (
        <CardsGridContainer paddingTopVariant={2} paddingBottomVariant={2}>
            <CardsGrid rows={2}>
                <Grid container direction="column">
                    <Typography className={classes.limited}>Limited Availablitiy</Typography>
                </Grid>
                <Grid container>
                    <Grid container direction="column">
                        <Grid container direction="column" className={classes.descriptionContainer}>
                            <TitlePrimary>{about}</TitlePrimary>
                        </Grid>
                        <Grid container>
                            <Grid container direction="column" item xs={6}>
                                <Grid container className={classes.formGroupContainer}>
                                    <FormControlSelect
                                        fullWidth
                                        name="subject"
                                        value={values.subject}
                                        options={subjectsOptions}
                                        onChange={handleChange}
                                        placeholder="Maths"
                                        label="Subject"
                                        fontSizeVariant={2}
                                    />
                                </Grid>
                                <Grid container className={classes.formGroupContainer}>
                                    <FormControlInput
                                        fullWidth
                                        id="tutor_book_date"
                                        name="date"
                                        value={values.date}
                                        onChange={handleChange}
                                        label="Date"
                                        placeholder="10/07/20"
                                        date
                                        fontSizeVariant={2}
                                    />
                                </Grid>
                                <Grid container className={classes.formGroupContainer}>
                                    <CardsGrid rows={2}>
                                        <Grid container>
                                            <FormControlInput
                                                fullWidth
                                                id="tutor_book_start-time"
                                                name="startTime"
                                                value={values.startTime}
                                                onChange={handleChange}
                                                label="Start Time"
                                                placeholder="10.00am"
                                                time
                                                fontSizeVariant={2}
                                            />
                                        </Grid>
                                        <Grid container>
                                            <FormControlInput
                                                fullWidth
                                                id="tutor_book_end-time"
                                                name="endTime"
                                                value={values.endTime}
                                                onChange={handleChange}
                                                label="End Time"
                                                placeholder="12.30am"
                                                time
                                                fontSizeVariant={2}
                                            />
                                        </Grid>
                                    </CardsGrid>
                                </Grid>
                                <Grid container alignItems="center">
                                    <ButtonPrimary variant="outlined" className={classes.button}>
                                        Book
                                    </ButtonPrimary>
                                    <Typography className={classes.price}>AED200</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardsGrid>
        </CardsGridContainer>
    );
};

export default Availability;
