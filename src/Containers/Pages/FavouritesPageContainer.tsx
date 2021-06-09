import React, { FC } from 'react';
import { UserType } from './types';
import useMenuList from '../../Hooks/useMenuList';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import TitleBig from '../../components/Typographies/TitleBig';
import Grid from '@material-ui/core/Grid';
import { liveClasses, recordedClasses } from '../../data/tutorProfile';
import ImageCard from '../../components/Cards/ImageCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { tutorCards } from '../../data/homepage';
import PageFooter from '../../components/PageFooter';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useToggle from '../../Hooks/useToggle';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '2.4375rem',
    },
});

interface IFavouritesPageContainer extends UserType {}

const FavouritesPageContainer: FC<IFavouritesPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);
    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <ClassPurchaseDrawer open={classPurchaseDrawer} onClose={toggleClassPurchaseDrawer} userType={userType} />
            <CardsGridContainer>
                <CardsGrid rows={2}>
                    <Grid container>
                        <TitlePrimary>Favourites</TitlePrimary>
                    </Grid>
                    <Grid container>
                        <TitleBig>Save Classes, Products and Tutors.</TitleBig>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <Grid container className={classes.titleContainer}>
                    <TitlePrimary>Live Classes</TitlePrimary>
                </Grid>
                <CardsGrid>
                    {liveClasses.map((card, index) => (
                        <ImageCard key={index} {...card} isFavourite onTitleClick={toggleClassPurchaseDrawer} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <Grid container className={classes.titleContainer}>
                    <TitlePrimary>Recorded Classes</TitlePrimary>
                </Grid>
                <CardsGrid>
                    {recordedClasses.map((card, index) => (
                        <ImageCard key={index} {...card} isFavourite onTitleClick={toggleClassPurchaseDrawer} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <Grid container className={classes.titleContainer}>
                    <TitlePrimary>Tutors</TitlePrimary>
                </Grid>
                <CardsGrid>
                    {tutorCards.map((card, index) => (
                        <ImageCard key={index} {...card} isFavourite titleLinkTo={`/${userType}/tutor/`} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default FavouritesPageContainer;
