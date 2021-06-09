import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    pdBox: {
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        paddingBottom:'2rem',
        paddingTop:'2rem'
    },
});

interface props {
    children?: React.ReactNode;
}
const PdBox: React.FC<props> = ({ children }) => {
    const classes = useStyles();
    return <Box className={classes.pdBox}>{children}</Box>;
};

export default PdBox;
