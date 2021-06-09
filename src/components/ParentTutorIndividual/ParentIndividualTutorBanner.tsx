import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FavoriteBorder, StarBorder } from '@material-ui/icons';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme)

const useStyles = makeStyles({
    body: {
        position: 'relative',
        backgroundColor: '#5E5558',
        minWidth: '100%',
        border: '2px solid #5E5558',
        fontFamily: 'CircularXXWeb-Book',
        paddingBottom: "50px",
    },
    imageGridContainer: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px',
        },
    },
    imageContainer: {
        padding: 0,
        marginTop: '14vh',
        marginLeft: '25px',
        float: 'left',
        width: '33.437rem',
        height: '34.062rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px',
            width: '70vw'
        },
    },
    image: {
        width: '33.437rem',
        height: '34.062rem',
        objectFit: 'cover',
    },
    title: {
        marginLeft: '3.125rem',
        marginTop: '14vh',
        color: 'white',
        fontSize: '2.625rem',
        minWidth: '100%'
    },
    titleColumn: {
        padding: 0,
        margin: 0,
        maxHeight: "200px",
    },
    secondHeader: {
        padding: 0,
        margin: 0,
        marginTop: '-10vh',
        marginLeft: '3.125rem',
        color: 'white',
        width: '100%',
        fontFamily: 'CircularXXWeb-Book',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        },
    },
    bigTitle: {
        fontFamily: 'CircularXXWeb-Book',
        fontSize: "7.5rem",
        lineHeight: "7.5rem",
    },
    gridContainer1: {
        width: '100%',
    },
    iconBox: {
        display: 'flex',
        fontSize: '1vh',
        marginTop: '20px',
        marginBottom: '136px',
    },
    starBox: {
        display: 'flex',
    },
    favoriteBox: {
        marginLeft: "7px",
        display: 'flex',
    },
    favoriteText: {
        fontSize: '1.25rem',
    },
    bottomText: {
        display: "flex",
        alignItems: "center",
        padding: 0,
        color: 'white',
        position: 'absolute',
        bottom: '2.125rem',
        left: '3.125rem',
        fontSize: "1.562rem",
        marginTop: '146px',
    },
    rating: {
        fontSize: "1.562rem",
        marginLeft: "10px",
    },
    primarySecondaryText: {
        fontSize: "1.562rem",
        marginLeft: "32px",
    },
});

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <div className={classes.body}>
                    <Grid className={classes.gridContainer1} container spacing={3}>
                        <Grid className={classes.titleColumn} item xs={12} sm={12} md={6}>
                            <div className={classes.title}>Tutor</div>
                        </Grid>
                        <Grid item className={classes.imageGridContainer} xs={12} sm={12} md={6}>
                            <Container className={classes.imageContainer}>
                                <LazyLoadImage
                                    alt=""
                                    effect="blur"
                                    src={commonImg.twogirl}
                                    className={classes.image} />
                            </Container>
                        </Grid>
                    </Grid>
                    <div className={classes.secondHeader} >
                        <Typography className={classes.bigTitle}>Moly Pearce <br /> Dubai, UAE</Typography>
                        <div className={classes.iconBox}>
                            <div className={classes.favoriteBox}>
                                <FavoriteBorder />
                                <Typography style={{ marginLeft: '7px' }} className={classes.favoriteText}>Favorite</Typography>
                            </div>
                        </div>
                    </div>
                    <div className={classes.bottomText}>
                        <StarBorder />
                        <Typography className={classes.rating}>5/5 </Typography>
                        <Typography className={classes.primarySecondaryText}>Primary, Secondary </Typography>
                    </div>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    );
};

export default ParentIndividualTutorBanner;
