import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import Details from './Details';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
    },

    addPhotoBox: {
        marginLeft: '3.125rem',

        display: 'inline-block',
        transform: 'translateY(0.4rem)',
    },
    addPhotoText: {
        fontSize: '1.5625rem',
        width: '100%',
        height: '33px',
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
        fontFamily: 'CircularXXWeb-Book',
    },
    smallText: {
        display: 'inline-block',
        marginLeft: '1.875rem',
        transform: 'translateY(-0.1rem)',
        fontFamily: 'CircularXXWeb-Book',
    },
    bio: {
        marginTop: '5.726875rem',
        width: '100%',
        marginBottom: '5.3125rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    bioText: {
        fontSize: '1.5625rem',
        lineHeight: '1.8125rem',
        fontFamily: 'CircularXXWeb-Book',
        marginBottom: '1rem',
    },
    pad: {},
    input: {
        display: 'none',
    },
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3.0625rem, #ccc 3rem, white 3.0625rem)',
        lineHeight: '3rem',
        border: 'none',
        width: '100%',
        height: '14rem',
        color: 'inherit',
        fontFamily: 'CircularXXWeb-Book',

        fontSize: '2.625rem',
        '&:hover': {
            border: 'none',
            cursor: 'text',
        },
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
        font: 'normal normal normal 42px/62px CircularXXWeb;',
    },
});

const LeftGrid = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.headerText}>Profile Image</Typography>
            <div className={classes.pad}>
                <Details />
                <Experience />
                <Education />
                <Skills />
            </div>
        </div>
    );
};

export default LeftGrid;
