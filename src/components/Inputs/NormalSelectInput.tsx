import React from 'react';
import { Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    select: {
        '&:before': {
            // normal
            borderBottom: 'none',
        },
        '&:after': {
            // focused
            borderBottom: `none`,
        },
        '&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before': {
            // hover
            borderBottom: `none`,
        },
    },
}));
const NormalSelectInput = () => {
    const classes = useStyle();
    return (
        <Select className={classes.select}>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
        </Select>
    );
};

export default NormalSelectInput;
