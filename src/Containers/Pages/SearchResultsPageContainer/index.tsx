import React, { FC } from 'react';
import { UserType } from '../types';
import useMenuList from '../../../Hooks/useMenuList';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import FullHeightContainer from '../../FullHeightContainer';
import CardsGridContainer from '../../CardsGridContainer';
import PageFooter from '../../../components/PageFooter';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RecommendedContainer from '../../RecommendedContainer';
import { liveClasses, recordedClasses } from '../../../data/tutorProfile';
import { tutorCards } from '../../../data/homepage';
import ClassPurchaseDrawer from '../../Menus/ClassPurchaseDrawer';
import useToggle from '../../../Hooks/useToggle';

const useStyles = makeStyles({
    resultContainer: {
        paddingTop: '21.875rem',
        paddingBottom: '15.625rem',
    },
    result: {
        fontSize: '7.5rem',
        lineHeight: '7.5rem'
    }
});

interface ISearchResultsPageContainer extends UserType {}

const SearchResultsPageContainer: FC<ISearchResultsPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <ClassPurchaseDrawer
                open={classPurchaseDrawer}
                onClose={toggleClassPurchaseDrawer}
                userType={userType}
            />
            <FullHeightContainer justify="space-between">
                <Grid container direction="column">
                    <CardsGridContainer className={classes.resultContainer} justify="center">
                        <Grid container direction="column" alignItems="center">
                            <Typography variant="h2" className={classes.result}>‘Photosynthesis’</Typography>
                        </Grid>
                    </CardsGridContainer>
                    <RecommendedContainer
                        padding
                        title="Live Classes"
                        data={liveClasses}
                        cardTitleClick={toggleClassPurchaseDrawer}
                    />
                    <RecommendedContainer
                        padding
                        title="Recorded Classes"
                        data={recordedClasses}
                        cardTitleClick={toggleClassPurchaseDrawer}
                    />
                    <RecommendedContainer
                        padding
                        title="Tutors"
                        data={tutorCards}
                        cardTitleLink={`/${userType}/tutor/`}
                    />
                </Grid>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

export default SearchResultsPageContainer;
