import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btnText: {
        fontSize: '20px',
        color: '#5F5F5F',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',

        '&:hover': {
            cursor: 'pointer',
        },
    },
});

interface prop {
    text: string;
    onClick?: () => void;
}
const SmallTextButton: React.FC<prop> = ({ text, ...props }) => {
    const classes = useStyles();

    return (
        <div {...props} className={classes.btnText}>
            {text}
        </div>
    );
};

export default SmallTextButton;
