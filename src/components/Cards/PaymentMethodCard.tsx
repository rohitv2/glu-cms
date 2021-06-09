import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonPrimary from '../Button/ButtonPrimary';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { PaymentMethodCardElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: '1.1875rem 0 0.9375rem 0',
        background: ({ active }: any) => (active ? '#F7F7F7' : 'transparent'),
        marginBottom: '0.625rem',
        '&:last-child': {
            marginBottom: '0',
        },
    },
    ends: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    expires: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    buttonsContainer: {
        paddingRight: '0.625rem',
    },
    button: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        color: '#5F5F5F',
        padding: '0 0.625rem',
    },
    brandIcon: {
        fontSize: '1.5rem',
    },
});

interface IPaymentMethodCard extends PaymentMethodCardElement {
    active?: boolean;
}

const PaymentMethodCard: FC<IPaymentMethodCard> = ({ active, type, ends, expires }) => {
    const classes = useStyles({ active });
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={2}>
                <Grid container alignItems="center" justify="center">
                    {type === 'visa' ? (
                        <i className={classNames('icon-Visa', classes.brandIcon)} />
                    ) : (
                        <i className={classNames('icon-MasterCard', classes.brandIcon)} />
                    )}
                </Grid>
            </Grid>
            <Grid container item xs={7}>
                <Grid container direction="column" justify="center">
                    <Typography className={classes.ends}>Ends in {ends}</Typography>
                    <Typography className={classes.expires}>Expires {expires}</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={3}>
                <Grid container justify="flex-end" className={classes.buttonsContainer}>
                    <ButtonPrimary className={classes.button}>Edit</ButtonPrimary>
                    <ButtonPrimary className={classes.button}>Delete</ButtonPrimary>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(PaymentMethodCard);
