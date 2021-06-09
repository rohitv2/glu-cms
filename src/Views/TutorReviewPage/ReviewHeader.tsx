import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
    headingSecondary: {
        fontSize: '2.625rem',
    },
    headingPrimary: {
        fontSize: '5rem',
    },
});

interface props {
    name: string;
}

const TutorReviewHeader: React.FunctionComponent<props> = ({ name }) => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Typography className={classes.headingSecondary}>Review {name}</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography className={classes.headingPrimary}>What did you think to</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default TutorReviewHeader;
