import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FullSizeLoader from '../Loaders/FullSizeLoader';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        padding: '0 1.5625rem',
        minHeight: 250,
        height: 'fit-content',
        '&:first-child': {
            paddingLeft: ({ forcePadding }: any) => (forcePadding ? '1.5625rem' : 0),
        },
        '&:last-child': {
            paddingRight: ({ forcePadding }: any) => (forcePadding ? '1.5625rem' : 0),
        },
    },
    paper: {
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
        padding: '1.0625rem 1.8125rem',
        width: '100%',
        boxShadow: 'none',
        borderRadius: 0,
        display: 'flex',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        whiteSpace: 'pre-wrap',
        marginBottom: 10,
        color: '#000',
        '&:hover': {
            color: '#000'
        }
    },
    titleBig: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    titleLink: {
        fontSize: '1.25rem',
        color: '#2267FF',
        height: 'fit-content',
    },
    text: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        whiteSpace: 'pre-wrap',
    },
});

interface IWhiteCard {
    size: any;
    title: string;
    titleLink?: string;
    bigTitle?: boolean;
    titleClassName?: string;
    titleRightLink?: string;
    titleRightLinkTo?: string;
    description?: string;
    value?: string | number;
    forcePadding?: boolean;
    content?: ReactNode;
    isLoading?: boolean;
    background?: 'primary' | 'secondary';
}

const WhiteCard: FC<IWhiteCard> = ({
    size,
    title,
    bigTitle,
    titleLink,
    titleClassName,
    titleRightLink,
    titleRightLinkTo = '/',
    description,
    value,
    forcePadding,
    content,
    isLoading,
    background,
}) => {
    const classes = useStyles({ forcePadding, background });
    return (
        <Grid container item xs={size} className={classes.root}>
            {isLoading && <FullSizeLoader />}
            <Paper className={classes.paper}>
                <Grid container direction="column" justify="space-between">
                    <Grid container justify="space-between">
                        <Typography
                            className={classNames(classes.title, titleClassName, { [classes.titleBig]: bigTitle })}
                            component={titleLink ? Link : 'p'}
                            to={titleLink}
                        >
                            {title}
                        </Typography>
                        {titleRightLink && (
                            <Typography className={classes.titleLink} component={Link} to={titleRightLinkTo}>
                                {titleRightLink}
                            </Typography>
                        )}
                    </Grid>

                    {content}

                    {(description || value) && (
                        <Grid container direction="column">
                            <Typography className={classes.text}>{description}</Typography>
                            <Typography className={classes.text}>{value}</Typography>
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </Grid>
    );
};

WhiteCard.defaultProps = {
    background: 'primary'
}

export default WhiteCard;
