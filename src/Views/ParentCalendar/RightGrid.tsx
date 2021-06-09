import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import LiveClass from './LiveClass';
import UpcomingClass from './UpcomingClass';

const useStyles = makeStyles({
    h1: {
        font: 'normal normal normal 80px/80px CircularXXWeb',
        height: '11.125rem',
    },
    hr: {
        marginTop: '2.71875rem',
        marginBottom: '2.59375rem',
    },
});

const RightGrid = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <Typography className={classes.h1}>11th August 2020</Typography>
            <LiveClass />
            <hr className={classes.hr} />
            <UpcomingClass />
            <hr className={classes.hr} />
            <UpcomingClass />
            <hr className={classes.hr} />
            <UpcomingClass />
            <hr className={classes.hr} />
            <UpcomingClass />
        </Grid>
    );
};

export default RightGrid;
