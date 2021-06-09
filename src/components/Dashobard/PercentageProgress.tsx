import React from 'react';
import { Box, makeStyles, Grid, Typography } from '@material-ui/core';
import { colors } from '../../Styles/colors';

interface props {
    percent?: string;
}
const PercentageProgress: React.FunctionComponent<props> = ({ percent }) => {
    const useStyle = makeStyles(() => ({
        parentBox: {
            width: '80%',
            height: '1rem',
            backgroundColor: colors.darkGray,
        },
        childBox: {
            width: percent,
            height: '1rem',
            backgroundColor: colors.darkPrimary,
        },
        percentHeading: {
            fontSize: '1.25rem',
            color: '#000',
        },
    }));
    const classes = useStyle();
    return (
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Typography className={classes.percentHeading}>{percent}</Typography>
            <Box component="div" className={classes.parentBox}>
                <Box component="div" className={classes.childBox}></Box>
            </Box>
        </Grid>
    );
};

export default PercentageProgress;
