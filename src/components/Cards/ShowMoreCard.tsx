import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonPrimary from '../Button/ButtonPrimary';

const useStyles = makeStyles({
    root: {
        padding: '4.6875rem 3.125rem',
        paddingTop: ({ paddingTop }: any) => (paddingTop ? '4.6875rem' : 0),
    },
    button: {
        marginRight: '1.875rem',
        fontSize: '1.25rem',
    },
    text: {
        fontSize: '1rem',
        fontFamily: 'CircularXXMonoWeb-Regular',
    },
});

interface IShowMoreCard {
    current: number;
    total: number;
    paddingTop?: boolean;
    onShowMore: () => void;
}

const ShowMoreCard: FC<IShowMoreCard> = ({ current, total, paddingTop, onShowMore }) => {
    const classes = useStyles({ paddingTop });
    return (
        <Grid container alignItems="center" className={classes.root}>
            <ButtonPrimary
                variant="outlined"
                className={classes.button}
                disabled={current === total}
                onClick={onShowMore}
            >
                Show more
            </ButtonPrimary>
            <Typography className={classes.text}>
                {current} of {total}
            </Typography>
        </Grid>
    );
};

ShowMoreCard.defaultProps = {
    paddingTop: true,
};

export default ShowMoreCard;
