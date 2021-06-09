import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AspectRatioImgCard from '../../../components/Cards/AspectRationImgCard';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import { MessageElement } from './types';

const useStyles = makeStyles({
    root: {
        marginBottom: '4.375rem',
    },
    imgContainer: {
        width: '2.625rem',
    },
    textContainer: {
        width: 'auto',
        maxWidth: 'calc(100% - 2.625rem)',
        flexGrow: 1,
        paddingLeft: '1.5625rem',
    },
    textMessage: {
        marginBottom: '0.625rem',
    },
    time: {
        color: '#5F5F5F',
    },
});

interface IMessage extends MessageElement {}

const Message: FC<IMessage> = ({ img, text, time }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.imgContainer}>
                <AspectRatioImgCard ratio="100%" img={img} />
            </Grid>
            <Grid container direction="column" className={classes.textContainer}>
                <TextPrimary className={classes.textMessage}>{text}</TextPrimary>
                <Typography className={classes.time}>{time}</Typography>
            </Grid>
        </Grid>
    );
};

export default Message;
