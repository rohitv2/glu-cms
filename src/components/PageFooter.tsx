import React, { FC, memo, Fragment } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        background: ({ background }: any) =>
            background === 'primary' ? '#fff' : background === 'transparent' ? 'transparent' : '#F7F7F7',
        paddingTop: '2.25rem',
        paddingBottom: '2.25rem',
        paddingLeft: ({ padding }: any) => (padding ? '3.125rem' : 0),
        paddingRight: ({ padding }: any) => (padding ? '3.125rem' : 0),
        fontFamily: 'CircularXXMonoWeb-Regular',
    },
    rootAbsolute: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    text: {
        fontFamily: 'inherit',
        color: ({ colorWhite }: any) => (colorWhite ? '#fff' : '#000'),
        cursor: 'pointer',
        fontSize: '1rem',
        marginRight: '3.125rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
    textGrey: {
        color: '#5F5F5F',
    },
});

type PageFooterProps = {
    background?: 'primary' | 'secondary' | 'transparent';
    padding?: boolean;
    rootClassName?: string;
    absolute?: boolean;
    colorWhite?: boolean;
    text?: string;
};

const PageFooter: FC<PageFooterProps> = ({ background, padding, rootClassName, absolute, colorWhite, text }) => {
    const classes = useStyles({ background, padding, colorWhite });
    return (
        <Grid
            container
            justify="space-between"
            className={classNames(classes.root, rootClassName, {
                [classes.rootAbsolute]: absolute,
            })}
        >
            {text ? (
                <Grid item container>
                    <Typography className={classes.text}>{text}</Typography>
                </Grid>
            ) : (
                <Fragment>
                    <Grid item container xs={6}>
                        <Typography className={classes.text}>
                            Made by <span className={classes.textGrey}>Six</span>
                        </Typography>
                        <Typography className={classes.text}>
                            Build by{' '}
                            <a href="https://www.antino.io/">
                                <span className={classes.textGrey}>Antino Labs</span>
                            </a>
                        </Typography>
                    </Grid>
                    <Grid container justify="flex-end" item xs={6}>
                        <Typography className={classes.text}>T&C’s / Privacy & Cookies</Typography>
                        <Typography className={classes.text}>Glu © 2020</Typography>
                    </Grid>
                </Fragment>
            )}
        </Grid>
    );
};

PageFooter.defaultProps = {
    padding: true,
    background: 'primary',
};

export default memo(PageFooter);
