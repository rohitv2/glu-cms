import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import LiveClass from './LiveClass';
import UpcomingClass from './UpcomingClass';
import moment from 'moment';

interface props {
    totalClasses?: any;
    selectedDate: Date;
}
const useStyles = makeStyles({
    h1: {
        font: 'normal normal normal 80px/80px CircularXXWeb',
        height: '11.125rem',
    },
    hr: {
        marginTop: '2.71875rem',
        marginBottom: '2.59375rem',
    },
    notFound: {
        fontSize: '2rem',
        textAlign: 'center',
        fontWeight: 500
    },
});

const RightGrid: React.FC<props> = ({ totalClasses, selectedDate }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <div style={{ paddingLeft: '1rem' }}>
                {totalClasses.map((item: any, i: number) => {
                    if (i == 0) {
                        return (
                            <>
                                <Typography className={classes.h1}>
                                    {moment(selectedDate, 'DD/MM/YYYY').format('DD MMMM YYYY')}
                                </Typography>
                                <LiveClass data={item} />
                                <hr className={classes.hr} />
                            </>
                        );
                    } else {
                        return (
                            <>
                                <UpcomingClass data={item} />
                                <hr className={classes.hr} />
                            </>
                        );
                    }
                })}
                {totalClasses.length ? '' : <Typography className={classes.notFound}>No data found</Typography>}
            </div>
        </Grid>
    );
};

export default RightGrid;
