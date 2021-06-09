import React from 'react';
import { Grid, Typography, makeStyles, Link } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    bodyStyles: {
        height: '100%',
        padding: '2.5rem',
    },
    hrDivStyle: {
        marginTop: '2rem',
        padding: '2.5rem',
    },
    hrDivStyle2: {
        marginTop: '1rem',
        padding: '1rem',
    },
    description: {
        fontSize: '3rem',
    },
    leftGrid: {
        borderRight: '1.5px solid #00000029',
    },
    schoolDetails: {
        fontSize: '3rem',
        lineHeight: 1,
        marginBottom: '5rem',
    },
    details: {
        fontSize: '1.6rem',
        width: '90%',
        marginBottom: '3rem',
        color: 'grey',
    },
    readMoreLink: {
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: 'inherit',
    },
    social: {
        fontSize: '2rem',
        lineHeight: 1,
    },
    socialId: {
        fontSize: '1.8rem',
        color: 'grey',
    },
});

const SchoolInfo = () => {
    const classes = useStyles();
    const stateData = useSelector((state: any) => state.teacherReducer.teacherSchoolInfo);
    return (
        <div>
            <div className={classes.hrDivStyle}>
                <hr />
            </div>
            <Grid container spacing={6} className={classes.bodyStyles}>
                <Grid item xs={12} sm={12} md={6} className={classes.leftGrid}>
                    <Typography className={classes.description}>School Details</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography className={classes.schoolDetails}>
                        {stateData && stateData.School.location.split(',')[0]} , <br />
                        {stateData && stateData.School.location.split(',')[1]} <br />{' '}
                        {stateData && stateData.School.location.split(',')[2]} <br />{' '}
                        {stateData && stateData.School.location.split(',')[3]}
                    </Typography>
                    <Typography className={classes.details}>{stateData && stateData.School.bio}</Typography>
                    {/* <Typography>
                        <Link href="#" className={classes.readMoreLink}>
                            Read More
                        </Link>
                    </Typography> */}
                    <div className={classes.hrDivStyle2}>
                        <hr />
                    </div>
                    <p>
                        <Typography className={classes.social}>Instagram</Typography>
                        <Typography className={classes.socialId}>
                            {stateData && stateData.School.instagramUrl}
                        </Typography>
                    </p>
                    <p>
                        <Typography className={classes.social}>Facebook</Typography>
                        <Typography className={classes.socialId}>
                            {stateData && stateData.School.facebookUrl}
                        </Typography>
                    </p>
                    <p>
                        <Typography className={classes.social}>Twitter</Typography>
                        <Typography className={classes.socialId}>{stateData && stateData.School.twitterUrl}</Typography>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default SchoolInfo;
