import React, { ReactNode, FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGrid from '../../Containers/CardsGrid';

const useStyles = makeStyles({
    root: {
        padding: '8.4375rem 3.125rem',
        background: '#F7F7F7',
    },
    titleContainer: {
        marginBottom: '1.875rem',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
    },
});

interface IFeaturedCard {
    title: string;
    children: ReactNode;
}

const FeaturedCard: FC<IFeaturedCard> = ({ title, children }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>{title}</Typography>
            </Grid>
            <CardsGrid rows={2}>
                {children}
            </CardsGrid>
        </Grid>
    );
};

export default FeaturedCard
