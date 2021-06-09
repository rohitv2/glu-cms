import React, {FC, ReactNode, memo } from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../Assets/images';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const useStyles = makeStyles({
    nextClassContainer:{
        paddingTop: '6.125rem',
        paddingBottom: '8.187rem',
        paddingLeft: '3.125rem',
        paddingRight: '10.437rem',
    },
    titleAndDropdown:{
        marginTop: '1.625rem',
    },
    title:{
        fontSize: '2.625rem',
        lineHeight: '2.812rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    subTitle:{
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        paddingTop: '0.362rem',
    },
    nextClassimage:{
        marginTop: '1.625rem',
        '& img':{
            height: '20rem', 
        }
    },
    dateAndSubjectTutorContainer:{
        height: '30px',
    },
    dateTime:{
        width: '10.875rem',
        marginTop: '1.625rem',
    },
    subjectTutor:{
        marginTop: '1.625rem',
    },
    dropdown:{
        alignItems: 'center',
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontFamily: 'CircularXXWeb-Book',
        letterSpacing: '0px',
        color: '#5f5f5f',
    },
});

const NextClass:  FC = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} direction="row" className={classes.nextClassContainer}>
                <Grid item container lg={2} md={12} xs={12} direction="column" className={classes.titleAndDropdown}> 
                    <Grid item>
                        <Typography className={classes.title}>
                            Next Class
                        </Typography>
                    </Grid>
                    <Grid container className={classes.dropdown}>
                        <Typography variant="h5">
                            Child 1 
                        </Typography>
                        <Typography variant="h5">
                            <ExpandMoreIcon 
                                style={{fontSize:"3rem"}} />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={6} sm={8} xs={12} className={classes.nextClassimage}>
                    <LazyLoadImage 
                        alt=""
                        effect="blur"
                        src={commonImg.running} /> 
                </Grid> 
                <Grid container item lg={3} md={4} sm={4} xs={12} direction="column" className={classes.dateTime}>
                    <Typography className={classes.title}>
                        19/07/20 <br /> 9am- 10.15am
                    </Typography>
                    <Typography className={classes.subTitle}>75mins</Typography>
                </Grid>
                <Grid container item lg={3} md={12} xs={12} direction="column"  className={classes.subjectTutor}>
                    <Typography className={classes.title}>
                        PE. <br /> Creating a running <br /> plan for a 5K race
                    </Typography>
                    <Typography className={classes.subTitle}>Harriet Earl</Typography>
                </Grid>
                
        </Grid>
    );
};

export default NextClass;
