import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    root:{
        height: '100vh'
    },
    heading: {
        fontSize: '3rem',
        color: colors.primary,
    },
});

const ModuleNotFound = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <Typography className={classes.heading}>Page Not Found</Typography>
        </Grid>
    );
};

export default ModuleNotFound;
