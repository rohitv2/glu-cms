import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AspectRatioImgCard from './AspectRationImgCard';
import TextPrimary from '../Typographies/TextPrimary';
import { MessageUserCardElement } from './types';
import Indicator from '../../Containers/Pages/MessagesPageContainer/Indicator';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            cursor: 'pointer',
            '& $name': {
                textDecoration: 'underline',
            },
        },
    },
    imgContainer: {
        width: ({ expanded }: any) => (expanded ? '10rem' : '2.625rem'),
    },
    infoContainer: {
        flexGrow: 1,
        width: 'auto',
        paddingLeft: ({ expanded }: any) => (expanded ? '1.875rem' : '1.5625rem'),
    },
    name: {
        fontSize: ({ expanded }: any) => (expanded ? '2.625rem' : '1.2rem'),
        lineHeight: ({ expanded }: any) => (expanded ? '2.8125rem' : ''),
    },
    status: {
        fontSize: '1.125rem',
        lineHeight: '1rem',
        color: '#5F5F5F',
    },
    link: {
        color: 'inherit',
        '&:hover': {
            color: 'inherit',
        },
    },
    container: {
        width: 'fit-content',
    },
    time: {
        color: '#5F5F5F',
        lineHeight: '1.25rem',
    },
});

interface IMessageUserCard extends MessageUserCardElement {
    onClick: (name: string) => void;
    indicator?: boolean;
    indicatorActive?: boolean;
    expanded?: boolean;
}

const MessageUserCard: FC<IMessageUserCard> = ({
    img,
    name,
    status,
    onClick,
    indicator,
    indicatorActive,
    newMessagesCount,
    expanded,
}) => {
    const classes = useStyles({ expanded });
    return (
        <Grid container onClick={() => onClick(name)} className={classes.root}>
            <Grid container className={classes.imgContainer}>
                <AspectRatioImgCard ratio="100%" img={img} />
            </Grid>
            <Grid container justify="space-between" className={classes.infoContainer}>
                <Grid container direction="column" justify="space-between" className={classes.container}>
                    <TextPrimary className={classes.name}>{name}</TextPrimary>
                    {expanded ? (
                        <Grid container direction="column">
                            <TextPrimary>Local Time</TextPrimary>
                            <TextPrimary className={classes.time}>11.24am</TextPrimary>
                        </Grid>
                    ) : (
                        <Typography className={classes.status}>{status}</Typography>
                    )}
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="flex-end"
                    className={classes.container}
                >
                    {indicator && <Indicator active={indicatorActive} />}
                    {newMessagesCount && (
                        <Typography className={classes.status}>{newMessagesCount} new messages</Typography>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MessageUserCard;
