import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RatingCard from '../../../components/Cards/RatingCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        marginBottom: '1.875rem',
        '&:last-child': {
            marginBottom: 0
        }
    },
    rating: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        '& i': {
            fontSize: '0.4em',
            verticalAlign: '0.5em'
        }
    },
    text: {
        fontSize: '1.25rem'
    }
})

interface IAverageReviewCard {
    rating: string;
    text: string;
}

const AverageReviewCard: FC<IAverageReviewCard> = ({ rating, text }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <RatingCard rating={rating} iconPlacement="right" rootClassName={classes.rating} />
            <Typography className={classes.text}>{text}</Typography>
        </Grid>
    )
}

export default AverageReviewCard;
