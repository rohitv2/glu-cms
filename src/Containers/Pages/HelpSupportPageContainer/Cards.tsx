import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import WhiteCard from '../../../components/Cards/WhiteCard';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    cardsContainer: {
        paddingBottom: '3.125rem'
    }
})

const Cards: FC = () => {
    const classes = useStyles()
    return (
        <Grid container direction="column">
            <Grid container className={classes.cardsContainer}>
                <WhiteCard size={3} title="Settings" description="Getting to grips with your options." background="secondary" />
                <WhiteCard size={3} title="Tips and Advice" description="General good to know stuff." background="secondary" />
                <WhiteCard size={3} title="Classes" description="How to find what’s right for you." background="secondary" />
                <WhiteCard size={3} title="Tutors" description="Finding the perfect tutor." background="secondary" />
            </Grid>
            <Grid container>
                <WhiteCard size={3} title="Account" description="How to manage your account." background="secondary" />
                <WhiteCard size={3} title="Dashboard" description="Getting to grips with your options." background="secondary" />
                <WhiteCard size={3} title="Subscriptions" description="Getting to grips with your options." background="secondary" />
                <div />
            </Grid>
        </Grid>
    )
}

export default Cards
