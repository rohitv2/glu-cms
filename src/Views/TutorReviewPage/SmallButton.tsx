import React from 'react';
import {  makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        border: '1.2px solid #A8A8A8',
        display: 'inline',
        fontSize: '1rem',
        padding: '0.3rem 0rem',
        fontFamily: 'inherit',
        textTransform: 'capitalize',
    },
    submitBtn: {
        width: '9.375rem',
        textAlign: 'center',
    },
    btnDiv: {
        display: 'inline-block',
        marginRight: '0.3rem',
        marginTop: '0.5rem',
    },
});

interface btnProps {
    label: string;
    onpress?: () => void;
    isSubmit?: true;
}

const SmallButton: React.FunctionComponent<btnProps> = ({ label, onpress }) => {
    const classes = useStyles();
    return (
        <div className={classes.btnDiv}>
            <Button className={`${classes.btn} ${classes.btnDiv}`}>{label}</Button>
        </div>
    );
};

export default SmallButton;
