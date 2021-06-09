import React, { FC, Fragment } from 'react';
import { Async, StatisticPage, UserType } from '../types';
import useMenuList, { useMenuOptions } from '../../../Hooks/useMenuList';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitleBig from '../../../components/Typographies/TitleBig';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LineChart from '../../../components/Charts/LineChart';
import { colors } from '../../../Styles/colors';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import PercentCard from '../../../components/Cards/PercentCard';
import ColumnsContainer from '../../ColumnsContainer';
import Statistic from './Statistic';
import PageFooter from '../../../components/PageFooter';
import FullScreenLoader from '../../../components/Loaders/FullScreenLoader';
import EmptyPageContainer from '../EmptyPageContainer';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '4.375rem',
    },
    percentCardsContainer: {
        flexGrow: 1,
    },
});

interface IStatisticPageContainer extends UserType, StatisticPage, Async {}

const StatisticPageContainer: FC<IStatisticPageContainer> = ({
    userType,
    overall,
    classesStat,
    tutor,
    isLoading,
    isEmpty,
}) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const menuOptions = useMenuOptions(userType);

    return (
        <NavigationMenu
            absolute
            background={isEmpty ? 'primary' : 'secondary'}
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
            {...menuOptions}
        >
            {isLoading && <FullScreenLoader />}
            {isEmpty ? (
                <EmptyPageContainer title="Statistics" description="You have no statistics" />
            ) : (
                <Fragment>
                    <CardsGridContainer background="secondary">
                        <CardsGrid rows={2}>
                            <Grid container direction="column">
                                <Grid container>
                                    <TitlePrimary>Statistics</TitlePrimary>
                                </Grid>
                                <Grid container alignItems="center" className={classes.percentCardsContainer}>
                                    <Grid container direction="column">
                                        <PercentCard
                                            title="Monthly students"
                                            value={overall.studentsAverage}
                                            dif={overall.studentsDifference}
                                            color={colors.primary}
                                            marginBottom
                                        />
                                        <PercentCard
                                            title="Monthly sales"
                                            value={overall.salesAverage}
                                            dif={`AED ${overall.salesDifference}`}
                                            color="rgba(0, 0, 0, 0.25)"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction="column">
                                <Grid container direction="column" className={classes.titleContainer}>
                                    <TitleBig>Overall Average</TitleBig>
                                    <TitleBig>Mar-Aug</TitleBig>
                                </Grid>
                                <Grid container>
                                    <LineChart
                                        data={[
                                            {
                                                data: overall.studentsChartData,
                                                color: colors.primary,
                                                dashStyle: 'Solid',
                                            },
                                            {
                                                data: overall.salesChartData,
                                                color: 'rgba(0, 0, 0, 0.25)',
                                                dashStyle: 'Solid',
                                            },
                                        ]}
                                        xAxisLabels
                                        xAxisCategories={['April', 'May', 'June', 'July', 'August']}
                                    />
                                </Grid>
                            </Grid>
                        </CardsGrid>
                    </CardsGridContainer>
                    <CardsGridContainer paddingTopVariant={2} paddingBottomVariant={2}>
                        <ColumnsContainer
                            leftContent={<Statistic title="Classes" data={classesStat} />}
                            rightContent={<Statistic title="Tutoring" data={tutor} />}
                        />
                    </CardsGridContainer>
                    <PageFooter />
                </Fragment>
            )}
        </NavigationMenu>
    );
};

export default StatisticPageContainer;
