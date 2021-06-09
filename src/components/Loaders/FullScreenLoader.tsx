import React, { FC, memo } from 'react';
import Div100vh from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        zIndex: 2000,
        top: 0,
        left: 0,
        backdropFilter: 'blur(10px)'
    },
});

const FullScreenLoader: FC = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" alignItems="center" component={Div100vh} className={classes.root}>
            <CircularProgress />
        </Grid>
    );
};

export default memo(FullScreenLoader);
