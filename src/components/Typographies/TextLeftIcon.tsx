import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    favourite: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    favouriteIcon: {
        marginRight: '0.625rem',
        fontSize: '1rem',
    },
});

interface ITextLeftIcon {
    icon: string;
    text: string;
    className?: string;
}

const TextLeftIcon: FC<ITextLeftIcon> = ({ icon, text, className }) => {
    const classes = useStyles();
    return (
        <Typography className={classNames(classes.favourite, className)}>
            <i className={classNames(icon, classes.favouriteIcon)} />
            {text}
        </Typography>
    )
}

export default TextLeftIcon
