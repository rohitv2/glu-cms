import React from 'react';
import { Grid } from '@material-ui/core';
import SelectFieldUnderline from '../../Inputs/SelectFieldUnderline';

const Filter = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Year Group"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Year Group"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Year Group"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Year Group"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
    </Grid>
    );
}

export default Filter;
