import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '../Button/IconButton';

const useStyles = makeStyles({
    root: {
        padding: '1.375rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
        '&:last-child': {
            borderBottom: 'none',
        },
        '&:hover': {
            '& $closeBtn': {
                display: 'block',
            },
        },
    },
    titleContainer: {
        position: 'relative',
    },
    title: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
    },
    message: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '0.5rem',
        color: '#5F5F5F',
    },
    time: {
        fontSize: '1.125rem',
        color: '#5F5F5F',
    },
    closeBtn: {
        padding: 5,
        position: 'absolute',
        right: 0,
        display: 'none',
    },
});

export type CardProps = {
    id: number;
    title: string;
    message: string;
    time: string;
};

const Card: FC<CardProps> = ({ id, title, message, time }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root} id={id.toString()}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>{title}</Typography>
                <IconButton className={classes.closeBtn}>
                    <CloseIcon />
                </IconButton>
            </Grid>
            <Typography className={classes.message}>{message}</Typography>
            <Typography className={classes.time}>{time}</Typography>
        </Grid>
    );
};

export default Card;
