import React from 'react';
import { Grid, Typography, makeStyles, useMediaQuery, Link } from '@material-ui/core';
import imgObj from '../../Assets/images';

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
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <div>
            <Grid container spacing={2} className={classes.bodyStyles}>
                <Grid item xs={12} sm={6} className={classes.leftGrid}>
                    {isSmallScreen ? (
                        <Typography className={classes.smallScreenStyles}>GEMS School</Typography>
                    ) : (
                        <Typography className={classes.medScreenStyles}>GEMS School</Typography>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} className={classes.rightGrid}>
                    <div className={classes.imgBox}>
                        <img src={imgObj.laptopLady} className={classes.img} />
                    </div>

                    <Typography className={classes.headTextTop}>Dubai, UAE</Typography>
                    <Typography className={classes.headText}>(+971) 4 123 6987</Typography>
                    <Typography>
                        <Link className={classes.linkText} href="#">
                            gemsschool.ae
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default SchoolInfo;
