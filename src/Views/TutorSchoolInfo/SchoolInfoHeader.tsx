import React from 'react';
import { Grid, Typography, makeStyles, useMediaQuery, Link } from '@material-ui/core';
import imgObj from '../../Assets/images';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    bodyStyles: {
        backgroundColor: '#f7f7f7',
        height: '100%',
        padding: '2.5rem',
        margin: 0,
    },
    leftGrid: {
        height: 'auto',
        justifyContent: 'center',
    },
    rightGrid: {
        height: '100%',
    },
    medScreenStyles: {
        fontSize: '3rem',
        marginTop: '50%',
    },
    smallScreenStyles: {
        marginTop: '3rem',
        fontSize: '3rem',
    },
    imgBox: {
        marginBottom: '5rem',
        width: '46%',
    },
    headTextTop: {
        lineHeight: '1',
        fontSize: '5rem',
    },
    headText: {
        fontSize: '5rem',
        lineHeight: '1',
        marginBottom: '5.5rem',
    },
    linkText: {
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: 'inherit',
    },
    img: {
        width: '100%',
    },
});

const SchoolInfo = () => {
    const stateData = useSelector((state: any) => state.teacherReducer.teacherSchoolInfo);
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <div>
            <Grid container spacing={2} className={classes.bodyStyles}>
                <Grid item xs={12} sm={6} className={classes.leftGrid}>
                    {isSmallScreen ? (
                        <Typography className={classes.smallScreenStyles}>GEMS School</Typography>
                    ) : (
                        <Typography className={classes.medScreenStyles}>
                            {stateData && stateData.School.schoolName}
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} className={classes.rightGrid}>
                    <div className={classes.imgBox}>
                        <img src={imgObj.laptopLady} className={classes.img} />
                    </div>

                    <Typography className={classes.headTextTop}>
                        {stateData && stateData.School.location.split(',')[3]}
                    </Typography>
                    <Typography className={classes.headText}>{stateData && stateData.School.phoneNumber}</Typography>
                    <Typography>
                        <Link className={classes.linkText} href={stateData && stateData.School.website}>
                            {stateData &&
                                stateData.School.website.split('/')[stateData.School.website.split('/').length - 1]}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default SchoolInfo;
