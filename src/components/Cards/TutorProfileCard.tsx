import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Div100vh from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGrid from '../../Containers/CardsGrid';
import AspectRatioImgCard from './AspectRationImgCard';
import TitlePrimary from '../Typographies/TitlePrimary';
import { Typography } from '@material-ui/core';
import RatingCard from './RatingCard';
import { TutorProfileCardElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: '9.375rem 3.125rem 2.1875rem 3.125rem',
        background: '#474A41',
        color: '#fff',
    },
    title: {
        lineHeight: '1.875rem',
    },
    titleBigContainer: {
        marginBottom: '1.25rem',
    },
    titleBig: {
        fontSize: '7.5rem',
        lineHeight: '7.5rem',
    },
    favouriteContainer: {
        marginBottom: '8.4375rem',
    },
    favourite: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    favouriteIcon: {
        marginRight: '0.625rem',
        fontSize: '1rem',
    },
    rating: {
        fontSize: '1.5625rem',
    },
    description: {
        fontSize: '1.5625rem',
    },
});

interface ITutorProfileCard extends TutorProfileCardElement {}

const TutorProfileCard: FC<ITutorProfileCard> = ({ name, city, country, rating, img, isFavourite }) => {
    const classes = useStyles();
    return (
        <Grid container component={Div100vh} className={classes.root}>
            <CardsGrid rows={2}>
                <Grid container>
                    <Grid container direction="column" justify="space-between">
                        <Grid container>
                            <TitlePrimary className={classes.title} variant="h4">
                                Tutor
                            </TitlePrimary>
                        </Grid>
                        <Grid container direction="column">
                            <Grid container direction="column" className={classes.titleBigContainer}>
                                <Typography className={classes.titleBig} variant="h2">
                                    {name}
                                </Typography>
                                <Typography className={classes.titleBig} variant="h2">
                                    {city}, {country}
                                </Typography>
                            </Grid>
                            <Grid container className={classes.favouriteContainer}>
                                <Typography className={classes.favourite}>
                                    <i
                                        className={classNames(classes.favouriteIcon, {
                                            'icon-Favourite': !isFavourite,
                                            'icon-Favourited': isFavourite,
                                        })}
                                    />
                                    Favourite
                                </Typography>
                            </Grid>
                            <Grid container>
                                <RatingCard rating={rating} rootClassName={classes.rating} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container item xs={7}>
                        <AspectRatioImgCard ratio="101%" img={img} />
                    </Grid>
                </Grid>
            </CardsGrid>
        </Grid>
    );
};

export default memo(TutorProfileCard);
