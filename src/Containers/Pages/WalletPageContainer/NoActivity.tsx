import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import CurrencyButton from '../../../components/Wallet/CurrencyButton';
import EmptyPageContainer from '../EmptyPageContainer';
import { UserType } from '../types';

const useStyles = makeStyles({
    current: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    currency: {
        verticalAlign: '0.6em',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
});

interface INoActivity extends UserType {}

const NoActivity: FC<INoActivity> = ({ userType }) => {
    const classes = useStyles();
    return (
        <EmptyPageContainer
            title="Wallet"
            description="Looks like you need to add some money."
            link={`/${userType}/wallet/top-on`}
            linkText="Add money"
            linkIcon="icon-Add"
            rightComponent={<CurrencyButton />}
        >
            <Grid container direction="column">
                <TitlePrimary>
                    0<span className={classes.currency}>AED</span>
                </TitlePrimary>
                <Typography className={classes.current}>Current Balance</Typography>
            </Grid>
        </EmptyPageContainer>
    );
};

export default NoActivity;
