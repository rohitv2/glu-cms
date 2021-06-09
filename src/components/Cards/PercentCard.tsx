import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    root: {
        marginBottom: ({ marginBottom }: any) => (marginBottom ? '1.875rem' : 0),
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
    },
    subTitle: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    subTitleIcon: {
        paddingLeft: 20,
        '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            width: 10,
            height: 10,
            background: ({ color }: any) => color,
        },
    },
    percentSmall: {
        position: 'relative',
        top: '-0.7em',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
});

type PercentCardProps = {
    color?: string;
    value: number | string;
    dif: number | string;
    title: string;
    icon?: boolean;
    marginBottom?: boolean;
    rootClassName?: string;
};

const PercentCard: FC<PercentCardProps> = ({ value, dif, title, color, icon, marginBottom, rootClassName }) => {
    const classes = useStyles({ color, marginBottom });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <Grid container>
                <Typography className={classes.title}>
                    {value}
                    <sup className={classes.percentSmall}>{dif}</sup>
                </Typography>
            </Grid>
            <Typography
                className={classNames(classes.subTitle, {
                    [classes.subTitleIcon]: icon,
                })}
            >
                {title}
            </Typography>
        </Grid>
    );
};

PercentCard.defaultProps = {
    color: colors.primary,
    icon: true,
};

export default memo(PercentCard);
