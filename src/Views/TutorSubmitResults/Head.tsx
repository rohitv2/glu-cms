import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
const useStyles = makeStyles({
    subTitle: {
        fontSize: '2.625rem',
    },
    title: {
        fontSize: '5rem',
        lineHeight: 1,
    },
    hr: {
        marginTop: '8rem',
    },
});

const Head = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={6}>
                <Grid item md={6}>
                    <Typography className={classes.subTitle}>Submit Exam Results</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography className={classes.title}>Submit scores and results for an exam.</Typography>
                </Grid>
                <hr />
            </Grid>
            <hr className={classes.hr} />
        </div>
    );
};

export default Head;
