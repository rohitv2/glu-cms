import React, { FC } from 'react';
import { Async, FilterPage, RecommendationsPage, UserType } from '../types';
import NavigationMenu from '../../../components/NavigationMenu';
import useMenuList from '../../../Hooks/useMenuList';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FullHeightContainer from '../../FullHeightContainer';
import CardsGridContainer from '../../CardsGridContainer';
import ColumnsContainer from '../../ColumnsContainer';
import Grid from '@material-ui/core/Grid';
import FilterContainer from '../../FilterContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import Typography from '@material-ui/core/Typography';
import TitleBig from '../../../components/Typographies/TitleBig';
import RecommendationCard from '../../../components/Cards/RecommendationCard';
import PageFooter from '../../../components/PageFooter';
import useSubjects from '../../../Hooks/students/useSubjects';
import FullScreenLoader from '../../../components/Loaders/FullScreenLoader';

const useStyles = makeStyles({
    filterContainer: {
        marginBottom: '3.75rem',
    },
    counterTitle: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    counter: {
        marginBottom: '1.875rem',
    },
    rightTitleContainer: {
        marginBottom: '1.875rem',
    },
});

interface IRecommendedPageContainer extends UserType, FilterPage, RecommendationsPage, Async {}

const RecommendedPageContainer: FC<IRecommendedPageContainer> = ({
    userType,
    selectedFilter,
    onFilter,
    data,
    count,
    isLoading,
    onAccept,
    onCancel,
}) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const { filtersData } = useSubjects();
    return (
        <NavigationMenu
            absolute
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <FullHeightContainer justify="space-between">
                <CardsGridContainer>
                    <ColumnsContainer
                        leftSticky
                        topBorder={false}
                        leftContent={
                            <Grid container direction="column">
                                <Grid container className={classes.filterContainer}>
                                    <FilterContainer
                                        title="Recommendation"
                                        sort={false}
                                        filtersData={filtersData}
                                        initialFilterLabel="Filter"
                                        onFilterChange={onFilter}
                                        value={selectedFilter}
                                    />
                                </Grid>
                                <Grid container direction="column" className={classes.counter}>
                                    <TitlePrimary>{count}</TitlePrimary>
                                    <Typography className={classes.counterTitle}>Total recommendations</Typography>
                                </Grid>
                            </Grid>
                        }
                        rightContent={
                            <Grid container direction="column">
                                <Grid container direction="column" className={classes.rightTitleContainer}>
                                    <TitleBig>All Recommendations</TitleBig>
                                    <TitleBig>{count}</TitleBig>
                                </Grid>
                                <Grid container>
                                    {data.map((recommendation) => (
                                        <RecommendationCard
                                            {...recommendation}
                                            teacherLink={`/${userType}/tutor/${recommendation.teacherId}`}
                                            key={recommendation.id}
                                            onAccept={onAccept}
                                            onCancel={onCancel}
                                        />
                                    ))}
                                </Grid>
                            </Grid>
                        }
                    />
                </CardsGridContainer>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

export default RecommendedPageContainer;
