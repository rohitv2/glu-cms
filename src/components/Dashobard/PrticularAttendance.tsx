import React from 'react';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    root: {
        padding: '1.687rem',
        borderBottom: `1px solid ${colors.borderGray}`,
    },
    dateNum: {
        fontSize: '1.875rem',
        lineHeight: '1.875rem',
        color: colors.black,
        width: '8rem',
    },
    parentWidth: {
        width: '15rem',
    },
    rightParentWidth: {
        width: '13rem',
    },
    dayDate: {
        fontSize: '1.25rem',
        lineHeight: '1.8rem',
        color: colors.black,
    },
    status: {
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: '1.25rem',
        color: colors.black,
    },
    mark: {
        backgroundColor: (props: any) => props.color,
        borderRadius: '50%',
        width: '1rem',
        height: '1rem',
        marginRight: '1.25rem',
    },
});
interface props {
    date?: string;
    dateNum?: string;
    day?: string;
    status?: string;
    color?: string;
}
const PrticularAttendance: React.FunctionComponent<props> = ({ date, dateNum, day, status, color }) => {
    const classes = useStyles({ color });

    return (
        <Grid container alignItems="center" justify="space-between" className={classes.root}>
            <Grid container alignItems="center" justify="flex-start" className={classes.parentWidth}>
                <Typography className={classes.dateNum}>{dateNum}</Typography>
                <Box component="div">
                    <Typography className={classes.dayDate}>{day}</Typography>
                    <Typography className={classes.dayDate}>{date}</Typography>
                </Box>
            </Grid>
            <Grid container alignItems="center" justify="flex-start" className={classes.rightParentWidth}>
                <Box component="div" className={classes.mark}></Box>
                <Typography className={classes.status}>{status}</Typography>
            </Grid>
        </Grid>
    );
};

export default PrticularAttendance;
