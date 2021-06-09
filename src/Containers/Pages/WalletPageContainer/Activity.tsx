import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import PercentCard from '../../../components/Cards/PercentCard';
import CurrencyButton from '../../../components/Wallet/CurrencyButton';
import BarChart from '../../../components/Charts/BarChart';
import ColumnsContainer from '../../ColumnsContainer';
import WalletActivityAccordion from '../../../components/Accordions/WalletActivityAccordion';
import SeeAll from '../../../components/Typographies/SeeAll';
import { activity, barChart } from '../../../data/wallet';
import PageFooter from '../../../components/PageFooter';
import { UserType, WalletData } from '../types';

const useStyles = makeStyles({
    title: {
        fontSize: '5rem',
        lineHeight: '5rem',
        display: 'flex',
        alignItems: 'center',
    },
    titleSmall: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    buttonAdd: {
        marginLeft: '1.25rem',
        cursor: 'pointer',
        fontSize: '1.75rem',
    },
    chartContainer: {
        paddingTop: '5rem',
    },
    percentCardsContainer: {
        flexGrow: 1,
    },
    rightContainer: {
        position: 'relative',
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
});

interface IActivity extends UserType, WalletData {}

const Activity: FC<IActivity> = ({ userType, balance, averageIncome, monthlyIncome, averageSpent, monthlySpent }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container>
                        <Grid container direction="column">
                            <Grid container alignItems="center">
                                <TitlePrimary>Wallet</TitlePrimary>
                                <Link to={`/${userType}/wallet/top-on`} className={classes.link}>
                                    <i className={classNames('icon-Add', classes.buttonAdd)} />
                                </Link>
                            </Grid>
                            <Grid
                                container
                                alignItems="center"
                                className={classes.percentCardsContainer}
                            >
                                {averageIncome && monthlyIncome && (
                                    <Grid container direction="column" item xs={6}>
                                        <PercentCard
                                            icon={false}
                                            marginBottom
                                            value={monthlyIncome}
                                            dif="AED-1,230"
                                            title="Monthly income"
                                        />
                                        <PercentCard icon={false} value={averageIncome} dif="AED" title="Average income" />
                                    </Grid>
                                )}
                                <Grid container direction="column" item xs={6}>
                                    <PercentCard
                                        icon={false}
                                        marginBottom
                                        value={monthlySpent}
                                        dif="AED-1,230"
                                        title="Monthly spend"
                                    />
                                    <PercentCard icon={false} value={averageSpent} dif="AED" title="Average spend" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column" className={classes.rightContainer}>
                            <CurrencyButton />
                            <Grid container justify="space-between">
                                <Grid container direction="column">
                                    <Typography className={classes.title}>Current Balance</Typography>
                                    <Typography className={classes.title}>
                                        {balance}<span className={classes.titleSmall}>AED</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.chartContainer}>
                                <BarChart column {...barChart} />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2}>
                <ColumnsContainer
                    rightContentPaddingTop={false}
                    leftContent={
                        <Grid container>
                            <TitlePrimary>Recent Activity</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <Grid container direction="column">
                                {activity.map((card, index) => (
                                    <WalletActivityAccordion key={index} {...card} />
                                ))}
                            </Grid>
                            <Grid>
                                <SeeAll to="/" />
                            </Grid>
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </Grid>
    );
};

export default Activity;
