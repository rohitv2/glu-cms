import React from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const SortDropdown = () => {
    return (
        <div className="sort__container">
            <ExpandMore className="icon" />
            <Typography className="text">Sort</Typography>
        </div>
    );
};

export default SortDropdown;
