import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import ColumnsContainer from '../ColumnsContainer';
import FullHeightContainer from '../FullHeightContainer';
import FilterContainer from '../FilterContainer';
import HomeworkCard from '../../components/Cards/HomeworkCard';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import TitleBig from '../../components/Typographies/TitleBig';
import useMenuList from '../../Hooks/useMenuList';
import PageFooter from '../../components/PageFooter';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import { Async, FilterPage, HomeworkPage, UserType } from './types';
import { HomeworkCardElement } from '../../components/Cards/types';
import useSubjects from '../../Hooks/students/useSubjects';

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
    rightTitle: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    rightTitleContainer: {
        marginBottom: '1.875rem',
    },
});

interface IHomeworkPageContainer extends UserType, HomeworkPage, Async, FilterPage {}

const HomeworkPageContainer: FC<IHomeworkPageContainer> = ({
    userType,
    isLoading,
    incompleteCount,
    overdueCount,
    totalCount,
    homeworks,
    overdueHomework,
    onFilter,
    selectedFilter,
    filterCount,
    filterData,
}) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const { filtersData } = useSubjects();

    const filteredHomeworks: HomeworkCardElement[] = selectedFilter ? filterData : [...homeworks, ...overdueHomework];

    const renderCountData = selectedFilter
        ? {
              incomplete: filterCount,
              overdue: filterCount,
              total: filterCount,
          }
        : {
              incomplete: incompleteCount,
              overdue: overdueCount,
              total: totalCount,
          };

    return (
        <NavigationMenu
            absolute
            userType={userType}
            background="primary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <FullHeightContainer justify="space-between">
                <CardsGridContainer>
                    <ColumnsContainer
                        leftSticky
                        topBorder={false}
                        centerBorder={!!filteredHomeworks.length}
                        leftContent={
                            <Grid container direction="column">
                                <Grid container className={classes.filterContainer}>
                                    <FilterContainer
                                        title="Homework"
                                        sort={false}
                                        filtersData={filtersData}
                                        initialFilterLabel="Filter"
                                        onFilterChange={onFilter}
                                        value={selectedFilter}
                                    />
                                </Grid>
                                <Grid container direction="column" className={classes.counter}>
                                    <TitlePrimary>{renderCountData.incomplete}</TitlePrimary>
                                    <Typography className={classes.counterTitle}>Incomplete</Typography>
                                </Grid>
                                <Grid container direction="column">
                                    <TitlePrimary>{renderCountData.overdue}</TitlePrimary>
                                    <Typography className={classes.counterTitle}>Overdue</Typography>
                                </Grid>
                            </Grid>
                        }
                        rightContent={
                            filteredHomeworks.length ? (
                                <Grid container direction="column">
                                    <Grid container direction="column" className={classes.rightTitleContainer}>
                                        <Typography className={classes.rightTitle}>Total Assignments</Typography>
                                        <Typography className={classes.rightTitle}>{renderCountData.total}</Typography>
                                    </Grid>
                                    <Grid container>
                                        {filteredHomeworks.map((homework, index) => (
                                            <HomeworkCard
                                                {...homework}
                                                titleLink={`/${userType}/homework/${homework.id}`}
                                                teacherLink={`/${userType}/tutor/${homework.teacherId}`}
                                                key={index}
                                            />
                                        ))}
                                    </Grid>
                                </Grid>
                            ) : (
                                <Grid container direction="column">
                                    <TitleBig>Looks like you haven’t got any homework yet.</TitleBig>
                                </Grid>
                            )
                        }
                    />
                </CardsGridContainer>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

export default HomeworkPageContainer;
