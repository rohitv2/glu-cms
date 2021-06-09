import React from 'react';
import { makeStyles, TextareaAutosize } from '@material-ui/core';

interface props {
    noOfRows: number;
    width?: string;
}

const useStyles = makeStyles({
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

const ReusableTextArea: React.FunctionComponent<props> = ({ noOfRows }) => {
    const classes = useStyles();

    return (
        <div>
            <TextareaAutosize rowsMin={noOfRows} className={classes.textareaClass} />
        </div>
    );
};

export default ReusableTextArea;
