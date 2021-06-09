import React, { FC, useState, ReactNode, memo } from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../Assets/images';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import NavigationMenu from './NavigationMenu';
import { FavoriteBorder, StarBorder } from '@material-ui/icons';


const useStyles = makeStyles({
    brownContainer: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#5E5558",
        fontFamily: 'CircularXXWeb-Book',
        margin: '0rem',
        // justifyContent: "flex-start",
        // alignSelf: 'flex-start | baseline',
        // flex-end',
        // | center | baseline | stretch',

        paddingLeft: '3.125rem',
        // position: 'relative',
        // justifyContent: "space-between",
        // paddingRight: '3.125rem',
        // textSizeAdjust: 'auto',
    },
    elementsContainer: {
        height: "90vh",
        marginTop: "9.25rem",
        border: '2px solid red',
    },
    titleContainer: {
        marginTop: "0rem",
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
        color: "white",
        border: '2px solid red',
        paddingBottom: '20px',
    },
    nameRatingContainer: {
        justifyContent: 'flex-start',
        border: '2px solid black',
    },
    bigNameCountry: {
        fontSize: '7.5rem',
        lineHeight: '7.5rem',
        color: 'white',
        border: '2px solid black',
        // marginTop: '-20px',
        // marginTop: '-5.875rem',
        marginTop: '-172px'
    },
    left: {
        justifyContent: 'space-between',
    },
    ratingFavoriteContainer: {
        // marginTop: "1.25rem",
        // width: "12.5rem",
        // justifyContent: 'space-between',
        border: '2px solid green',
        // height: '1.75rem',
        marginTop: '-119px'
    },
    ratingContainer: {
        width: "3.887rem",
        // justifyContent: "space-between",
        border: '2px solid red',
    },
    favoriteContainer: {
        width: "6.937rem",
        // justifyContent: "space-between",
        border: '2px solid red',
    },
    rating: {
        color: 'white',
        fontSize: '1.25rem',
        marginRight: '7rem',
    },
    favorite: {
        color: 'white',
        fontSize: '1.25rem',
        marginRight: '4rem',
    },
    icon: {
        color: "white",
    },
    bottomText: {
        color: 'white',
        fontSize: '1.562rem',
        marginBottom: '2.125rem',
        marginTop: '16.5rem',
        border: '2px solid green',
    },
    image: {
        // position: 'relative',
        border: '2px solid black',
        height: "34.062rem",
        marginTop: "0rem",
        // paddingBottom: '20px',
        // marginTop: "9.375rem",
        // alignSelf: 'flex-end',
        // marginTop: "9.25rem",
        // float: 'right',
        // paddingTop: "9.25rem",
        '& img': {
            // position: 'absolute',
            // marginTop: "9.375rem",
            // marginBottom: "5rem",
            // marginRight: "25rem",
            height: "34.062rem",
            width: "33.437rem",
            // width: "50%",
            objectFit: "cover",
            // display: 'block',
            // maxWidth: "33.437rem",
            // maxHeight: "34.062rem",
            // width: 'auto',
            // height: 'auto',
        }
    },
});

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.brownContainer} spacing={0}>
            {/* <Grid item className={classes.one} lg={6}/>
            <Grid item className={classes.two} lg={6}/>
            <Grid item className={classes.three} lg={6}/> */}
            <Grid container className={classes.elementsContainer}>
                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.titleContainer}>
                    <Typography className={classes.title}>Tutor</Typography>
                </Grid>
                <Grid className={classes.image} lg={6} md={6} sm={6} xs={12}>
                    <LazyLoadImage
                        alt=""
                        effect="blur"
                        src={commonImg.twogirl} />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                    <Typography className={classes.bigNameCountry}>Moly Pearce <br />Dubai, UAE</Typography>
                </Grid>

                <Grid container item className={classes.ratingFavoriteContainer} lg={12} md={12} sm={12} xs={12}>
                    <Grid container className={classes.ratingContainer} lg={3} md={3} sm={3} xs={3}>
                        <StarBorder className={classes.icon} />
                        <Typography className={classes.rating}>5/5</Typography>
                    </Grid>
                    <Grid container className={classes.favoriteContainer} lg={3} md={3} sm={3} xs={3}>
                        <FavoriteBorder className={classes.icon} />
                        <Typography className={classes.favorite}>Favorite</Typography>
                    </Grid>
                    <Grid item className={classes.favoriteContainer}sm={3}/>
                    {/* <Grid item className={classes.favoriteContainer}  lg={12} md={12} sm={3}>
                        <Typography className={classes.favorite}>Primary, Secondary</Typography>
                    </Grid> */}
                </Grid>
                <Grid item lg={12} md={12} sm={3}>
                    <Typography className={classes.bottomText}>Primary, Secondary</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ParentIndividualTutorBanner;
