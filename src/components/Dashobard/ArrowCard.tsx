import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        padding: '1.312rem 1.875rem',
        borderBottom: `1px solid ${colors.borderGray}`,
        cursor: 'pointer',
    },
    titile: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
        color: colors.black,
        fontWeight: 500,
    },
    icon: {
        color: colors.primary,
        fontSize: '0.8rem',
    },
});

interface props {
    title: string;
    onClick?: () => void;
}
const ArrowCard: React.FunctionComponent<props> = ({ onClick, title }) => {
    const classes = useStyles();
    return (
        <Grid container onClick={onClick} alignItems="center" justify="space-between" className={classes.parent}>
            <Typography className={classes.titile}>{title}</Typography>
            <ArrowForwardIos className={classes.icon} />
        </Grid>
    );
};

export default ArrowCard;
