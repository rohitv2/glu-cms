import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    root: {
        fontSize: '1.25rem',
        lineHeight: '1.25rem',
        cursor: 'pointer',
        color: colors.primary,
        background: 'transparent',
        border: 0,
        '&:disabled': {
            opacity: 0.5
        }
    },
});

interface ISeeAll {
    short?: boolean;
    to?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const SeeAll: FC<ISeeAll> = ({ short, to, onClick, disabled }) => {
    const classes = useStyles();
    return (
        <Typography component={onClick ? 'button' : Link} to={to} className={classes.root} disabled={disabled}>
            {short ? 'See' : 'See all'}
        </Typography>
    );
};

export default SeeAll;
