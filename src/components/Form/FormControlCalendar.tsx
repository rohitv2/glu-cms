import React, { FC, memo } from 'react';
import ReactCalendar from 'react-calendar';
import Grid from '@material-ui/core/Grid';

const FormControlCalendar: FC = () => {
    return (
        <Grid container>
            <ReactCalendar value={new Date()} />
        </Grid>
    );
};

export default memo(FormControlCalendar);
