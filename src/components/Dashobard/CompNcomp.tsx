import React from 'react';
import { Grid, makeStyles, Typography, Box } from '@material-ui/core';
import { colors } from '../../Styles/colors';

interface props {
    completed?: string;
    notCompleted?: string;
}
const CompNcomp: React.FunctionComponent<props> = ({ completed, notCompleted }) => {
    const useStyle = makeStyles(() => ({
        box: {
            width: '20rem',
            marginTop: '2rem'
        },
        childBox: {
            display: 'flex',
        },
        comp: {
            width: '1rem',
            height: '1rem',
            backgroundColor: colors.darkPrimary,
            borderRadius: '1rem',
        },
        notComp: {
            width: '1rem',
            height: '1rem',
            backgroundColor: colors.darkGray,
            borderRadius: '1rem',
        },
        percentHeading: {
            fontSize: '1.25rem',
            color: '#000',
            paddingLeft:'1rem'
        },
    }));
    const classes = useStyle();
    return (
        <Grid container className={classes.box} direction="row" justify="space-between" alignItems="center">
            <Grid direction="row" justify="space-between" className={classes.childBox} alignItems="center">
                <Box component="div" className={classes.comp}></Box>
                <Typography component="p" className={classes.percentHeading}>
                    {completed}
                </Typography>
            </Grid>
            <Grid direction="row" justify="space-between" className={classes.childBox} alignItems="center">
                <Box component="div" className={classes.notComp}></Box>
                <Typography component="p" className={classes.percentHeading}>
                    {notCompleted}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default CompNcomp;
