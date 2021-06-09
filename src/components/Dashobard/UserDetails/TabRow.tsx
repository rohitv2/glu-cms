import React, { useState } from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    parent:{
        width:'15rem',
        marginBottom:'2rem'
    },
    tabInactive: {
        color: '#5F5F5F80',
        fontSize: '1.25rem',
        cursor:'pointer',
    },
    tabActive: {
        color: '#145DFF',
    },
}));
const TabRow = () => {
    const classes = useStyle();
    const [defineClass, setDefineClass] = useState([
        `${classes.tabActive} ${classes.tabInactive}`,
        classes.tabInactive,
        classes.tabInactive,
    ]);
    const handleDefine = (i: number) => {
        const define = [classes.tabInactive, classes.tabInactive, classes.tabInactive];
        define[i] = `${classes.tabActive} ${classes.tabInactive}`;
        setDefineClass([...define]);
    };
    return (
        <Grid container direction="row" className={classes.parent} justify="space-between" alignItems="center">
            {defineClass.map((item: string, i: number) => (
                <Box component="div" className={item} onClick={() => handleDefine(i)}>
                    Term {i + 1}
                </Box>
            ))}
        </Grid>
    );
};

export default TabRow;
