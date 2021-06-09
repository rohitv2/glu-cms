import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Icons } from '../../Assets/Icons';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

const useStyles = makeStyles({
    parent: {
        height: '100vh',
        background: 'rgba(0,0,0,0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        backdropFilter: 'blur(2px)',
    },
    logo: {
        width: '10rem',
        height: '10rem',
        animation: 'zoomeffect 2s infinite',
    },
});

const Spinner = () => {
    const classes = useStyles();
    const loader = useSelector((state: rootReducerType) => state.uiReducer.loader);
    return (
        <React.Fragment>
            {loader && (
                <Grid container alignItems="center" justify="center" className={classes.parent}>
                    <img src={Icons.logo} className={classes.logo} alt="" />
                </Grid>
            )}
        </React.Fragment>
    );
};

export default Spinner;
