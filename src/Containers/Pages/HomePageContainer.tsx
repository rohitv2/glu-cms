import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import NextClassCard from '../../components/Cards/NextClassCard';
import FeaturedSubjectsCard from '../../components/Cards/FeaturedSubjectsCard';
import RecommendedContainer from '../RecommendedContainer';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';
import FeaturedTutorsCard from '../../components/Cards/FeaturedTutorsCard';
import CalendarDateSubjectsCard from '../../components/Cards/CalendarDateSubjectsCard';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import PageFooter from '../../components/PageFooter';
import { Async, HomePageCardsData, PurchaseDrawerPage, UserType } from './types';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useMenuList from '../../Hooks/useMenuList';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import { ChildrenSelectElement } from '../../components/Form/types';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
});

interface IHomePageContainer extends UserType, Async {
    cardsData: HomePageCardsData;
    childrenSelect?: ChildrenSelectElement;
    purchaseDrawer: PurchaseDrawerPage;
}

const HomePageContainer: FC<IHomePageContainer> = ({
    userType,
    isLoading,
    cardsData,
    childrenSelect,
    purchaseDrawer,
}) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            colorWhite
            userType={userType}
            menuList={menuList}
            background="transparent"
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <ClassPurchaseDrawer
                userType={userType}
                open={purchaseDrawer.isOpen}
                onClose={purchaseDrawer.onClose}
                data={purchaseDrawer.purchaseCard}
                onLeave={purchaseDrawer.onLeave}
                isLoading={purchaseDrawer.isLoading}
            />
            <BannerCarousel cards={cardsData.bannerCarousel} cardNameLink={`/${userType}/tutor`} />
            <NextClassCard
                {...cardsData.nextClass}
                childrenSelect={childrenSelect}
                teacherLink={`/${userType}/tutor`}
            />
            <FeaturedSubjectsCard {...cardsData.featuredSubjects} />
            <RecommendedContainer
                padding
                classType="recorded"
                title="Recorded Classes"
                link={`/${userType}/recorded-classes`}
                data={cardsData.recordedClasses}
                rootClassName={classes.recommendedRoot}
                cardTitleClick={purchaseDrawer.onOpen}
            />
            <BannerCarousel cards={cardsData.bannerCarouselCenter} cardNameLink={`/${userType}/tutor`} />
            <UpcomingClassCard addButton={false} {...cardsData.upcomingClass} teacherLink={`/${userType}/tutor`} />
            {cardsData.calendar && (
                <CalendarDateSubjectsCard
                    {...cardsData.calendar}
                    paddingBottom={false}
                    teacherLink={`/${userType}/tutor`}
                />
            )}
            <RecommendedContainer
                padding
                title="Live Classes"
                link={`/${userType}/live-classes`}
                data={cardsData.liveClasses}
                cardTitleClick={() => {}}
                rootClassName={classes.recommendedRoot}
            />
            <FeaturedTutorsCard {...cardsData.featuredTutors} teacherLink={`/${userType}/tutor/`} />
            <BannerCarousel cards={cardsData.bannerCarouselBottom} cardNameLink={`/${userType}/tutor`} />
            <RecommendedContainer
                padding
                title="Tutors"
                link={`/${userType}/tutors`}
                cardTitleLink={`/${userType}/tutor/`}
                data={cardsData.tutors}
                rootClassName={classes.recommendedRoot}
            />
            <PageFooter />
        </NavigationMenu>
    );
};

export default HomePageContainer;
