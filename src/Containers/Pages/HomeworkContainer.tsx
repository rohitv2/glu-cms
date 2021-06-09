import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import PageFooter from '../../components/PageFooter';
// import { HomePageCardsData } from './types';
import { UserTypes } from '../../Types/user';
import { Grid, Typography, Divider } from '@material-ui/core';
import HomeworkCard from '../HomeworkCard';
import FilterContainer from '../FilterContainer';
import { classesFiltersData } from '../../data/filters';
import useMenuList from '../../Hooks/useMenuList';
// import CardsGrid from '../CardsGrid';
// import ImageCard from '../../components/Cards/ImageCard';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
    body: {
        height: '200vh',
        color: 'black',
    },
    leftContainer: {
        // backgroundColor: "lightgrey",
        // justifyContent:"center",
        paddingTop: '80px',
        paddingLeft: '28px',
        // height: '100vh',
    },
    leftHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'black',
    },
    incompleteOverdueContainer: {
        height: '100px',
        marginTop: '-700px',
    },
    homewrokHeading: {
        color: 'black',
        fontSize: '2.625rem',
        // marginTop:"10px",
    },
    filterContainer: {
        marginTop: '-37px',
    },
    filterHeading: {
        color: 'black',
        fontSize: '2.625rem',
    },
    overdueCount: {
        marginTop: '14px',
        fontSize: '2.625rem',
    },
    overdue: {
        fontSize: '1.25rem',
    },
    incomplete: {
        fontSize: '1.25rem',
    },
    incompleteCount: {
        fontSize: '2.625rem',
    },

    rightContainer: {
        // backgroundColor: "grey",
        paddingTop: '80px',
        marginLeft: '20px',
        // height: '100vh',
    },
    totalAssignment: {
        fontSize: '5rem',
    },
});

interface IHomePageContainer {
    userType: UserTypes;
}

const HomeworkContainer: FC<IHomePageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            // colorWhite
            menuList={menuList}
            // background="secondary"
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <Grid container className={classes.body}>
                {/* <h2>Homework</h2> */}
                <Grid container item xs={5} className={classes.leftContainer}>
                    <Grid item xs={6} className={classes.leftHeading}>
                        <Typography className={classes.homewrokHeading}>Homework</Typography>
                        {/* <Typography className={classes.filterHeading}>Filter+</Typography>  */}
                        <Grid className={classes.filterContainer}>
                            <FilterContainer
                                padding
                                sort={false}
                                title=""
                                initialFilterLabel="Filter"
                                filtersData={classesFiltersData}
                            >
                                {/* <CardsGrid>
                            {cards2.map((card, index) => (
                                <ImageCard key={index} {...card} />
                            ))}
                        </CardsGrid> */}
                            </FilterContainer>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} direction="column" className={classes.incompleteOverdueContainer}>
                        <Typography className={classes.incompleteCount}>13</Typography>
                        <Typography className={classes.incomplete}>Incomplete</Typography>
                        <Typography className={classes.overdueCount}>2</Typography>
                        <Typography className={classes.overdue}>Overdue</Typography>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" />
                <Grid xs={6} item className={classes.rightContainer}>
                    <Typography className={classes.totalAssignment}>
                        Total Assignments <br /> 15
                    </Typography>
                    <HomeworkCard />
                    {/* <HomeworkCard/>
                <HomeworkCard/>
                <HomeworkCard/> */}
                </Grid>
            </Grid>

            <PageFooter />
        </NavigationMenu>
    );
};

export default HomeworkContainer;
