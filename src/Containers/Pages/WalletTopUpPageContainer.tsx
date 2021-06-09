import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import FormControlInput from '../../components/Form/FormControlInput';
import FormGroup from '../../components/Form/FormGroup';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import PaymentMethodCard from '../../components/Cards/PaymentMethodCard';
import PageFooter from '../../components/PageFooter';
import CurrencyButton from '../../components/Wallet/CurrencyButton';
import useMenuList from '../../Hooks/useMenuList';
import { UserTypes } from '../../Types/user';

const useStyles = makeStyles({
    title: {
        marginBottom: '2.4375rem',
    },
    container: {
        marginBottom: '5.625rem',
    },
    label: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    input: {
        '& input': {
            fontSize: '1.5625rem',
        },
    },
    button: {
        fontSize: '1.25rem',
        paddingLeft: '2.6875rem',
        paddingRight: '2.6875rem',
    },
    rightContainer: {
        position: 'relative',
    },
});

interface IWalletTopUpPageContainer {
    userType: UserTypes;
}

const WalletTopUpPageContainer: FC<IWalletTopUpPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            userType={userType}
            background="primary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer>
                <CardsGrid rows={2}>
                    <Grid container>
                        <Grid container direction="column">
                            <TitlePrimary>Top Up</TitlePrimary>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column" className={classes.rightContainer}>
                            <CurrencyButton />
                            {true && (
                                <Grid container direction="column" className={classes.container}>
                                    <TitlePrimary className={classes.title}>Payment Method</TitlePrimary>
                                    <Grid container direction="column">
                                        <PaymentMethodCard active type="visa" ends="6159" expires="12/23" />
                                        <PaymentMethodCard type="ms" ends="0044" expires="12/23" />
                                        <PaymentMethodCard type="ms" ends="2841" expires="12/23" />
                                    </Grid>
                                </Grid>
                            )}
                            <Grid container direction="column" className={classes.container}>
                                <TitlePrimary className={classes.title}>Add New Card</TitlePrimary>
                                <Grid container direction="column">
                                    <FormGroup>
                                        <FormControlInput
                                            fullWidth
                                            id="new-card-name"
                                            name="name"
                                            value=""
                                            onChange={() => {}}
                                            label="Cardholder Name"
                                            labelClassName={classes.label}
                                            inputRootClassName={classes.input}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlInput
                                            fullWidth
                                            id="new-card-number"
                                            name="number"
                                            value=""
                                            onChange={() => {}}
                                            label="Card Number"
                                            labelClassName={classes.label}
                                            inputRootClassName={classes.input}
                                        />
                                    </FormGroup>
                                    <FormGroup marginBottom={false}>
                                        <CardsGrid rows={2}>
                                            <FormControlInput
                                                fullWidth
                                                id="new-card-expiry"
                                                name="expiry"
                                                value=""
                                                onChange={() => {}}
                                                label="Expiration Date"
                                                labelClassName={classes.label}
                                                inputRootClassName={classes.input}
                                            />
                                            <FormControlInput
                                                fullWidth
                                                id="new-card-cvv"
                                                name="cvv"
                                                value=""
                                                onChange={() => {}}
                                                label="CVV"
                                                labelClassName={classes.label}
                                                inputRootClassName={classes.input}
                                            />
                                        </CardsGrid>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Grid container direction="column">
                                <TitlePrimary className={classes.title}>Add Money</TitlePrimary>
                                <Grid container direction="column">
                                    <FormGroup marginBottomVariant={2}>
                                        <CardsGrid rows={2}>
                                            <FormControlInput
                                                fullWidth
                                                id="add-money-amount"
                                                name="amount"
                                                value=""
                                                onChange={() => {}}
                                                label="Amount"
                                                labelClassName={classes.label}
                                                inputRootClassName={classes.input}
                                            />
                                        </CardsGrid>
                                    </FormGroup>
                                    <ButtonPrimary variant="outlined" className={classes.button}>
                                        Top Up
                                    </ButtonPrimary>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default WalletTopUpPageContainer;
