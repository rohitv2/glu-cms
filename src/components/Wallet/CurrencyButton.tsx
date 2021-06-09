import React, { FC } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../Button/ButtonPrimary';

const useStyles = makeStyles({
    button: {
        position: 'absolute',
        right: 0,
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    buttonIcon: {
        fontSize: '0.75rem',
        marginRight: '0.5rem',
    },
});

const CurrencyButton: FC = () => {
    const classes = useStyles();
    return (
        <ButtonPrimary className={classes.button}>
            <i className={classNames('icon-Down', classes.buttonIcon)} />
            AED
        </ButtonPrimary>
    );
};

export default CurrencyButton;
