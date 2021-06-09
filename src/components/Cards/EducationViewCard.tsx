import React, { FC } from 'react';
import { EducationViewCardElement } from './types';
import Grid from '@material-ui/core/Grid';
import TextPrimary from '../Typographies/TextPrimary';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        marginBottom: '1.875rem',
        '&:last-child': {
            marginBottom: 0,
        },
    },
});

interface IEducationViewCard extends EducationViewCardElement {}

const EducationViewCard: FC<IEducationViewCard> = ({ title, position, level }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <TextPrimary>{title}</TextPrimary>
            <TextPrimary>{position}</TextPrimary>
            <TextPrimary>{level}</TextPrimary>
        </Grid>
    );
};

export default EducationViewCard;
