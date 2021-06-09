import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    leftGrid: {},
    confirm: {
        marginTop: '50.5625rem',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1.53125rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginRight: '1.875rem',
        fontFamily: 'CircularXXWeb-Book',
    },
});

const LeftGrid = () => {
    return <div></div>;
};

export default LeftGrid;
