import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface props {
    image: string;
    title: string;
    msg: React.ReactNode;
    mobileImg?: string;
    desktopTitle?: string;
    leftTitle?: string;
}

const useStyles = makeStyles((theme) => ({
    sectionTwo:{
        position: 'relative',
        display: 'flex',
        maxHeight: '100vh',
        height: "100vh",
    },
    opacityBG:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.23)",
    },
    bannerMobile:{
        display: "none",
        objectFit: "cover",
    },
    bannnerImage:{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "50% 15%",
    },
    leftTitle: {
        position: 'absolute',
        left: '3.062rem',
        bottom: '20.1rem',
        fontSize: '5rem',
        textShadow: '0 0 0.029rem white',
        color: 'transparent',
        textRendering: 'geometricPrecision',
        fontFamily: 'CircularXXWeb-Book',
        minWidth: '100px',
        [theme.breakpoints.down('xs')]: {
            bottom: '30.1rem',
          },
    },
    imgOverlayContainer:{
        position: 'absolute',
        bottom: '11.187rem',
        left: '51%',
        width: "43rem",
        [theme.breakpoints.down('xs')]: {
            left: 0,
            bottom: "2rem",
            paddingLeft: '3.062rem',
            width: "100vw",
          },
          [theme.breakpoints.down('sm')]: {
            width: "38rem",
          },
          ['@media (max-width:769px)']: { 
            width: "28rem",
          },
          ['@media (max-width:590px)']: { 
            width: "100%",
          }
    },
    title:{
        textShadow: '0 0 0.029rem white',
        color: 'transparent',
        textRendering: 'geometricPrecision', 
        fontSize: '1.562rem',
        lineHeight: '3.5rem',
        transition: 'all 0.5s',
        fontFamily: 'CircularXXWeb-Book',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.862rem',
            width: "100%"
          },
    },
    maessage:{
        fontSize: '5rem',
        transition: 'all 0.5s',
        textShadow: '0 0 0.029rem white',
        color: 'transparent',       
        fontFamily: 'CircularXXWeb-Book',
        lineHeight: '5rem',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '2rem'
          },
        ["@media (max-width: 379px"]:{
            fontSize:"4rem",
            lineHeight:"4rem",
        }
    }
}));
const HomeBanner: React.FunctionComponent<props> = ({
    image,
    title,
    msg,
    mobileImg,
    desktopTitle,
    leftTitle,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.sectionTwo} xs={12}>
            {/* <div className={classes.opacityBG}></div> */}
            <img className={classes.bannerMobile} src={mobileImg} alt="" />
            <img className={classes.bannnerImage} src={image} alt="" />
            <Grid container item sm={6} md={6} lg={12}>
                   <Typography className={classes.leftTitle}>{leftTitle}</Typography>
            </Grid>
            <Grid container item className={classes.imgOverlayContainer} lg={6}>
                <Typography className={classes.title}>{desktopTitle}</Typography>
                <Typography className={classes.maessage}>{msg}</Typography>
            </Grid>
        </Grid>
    );
};

export default HomeBanner;
