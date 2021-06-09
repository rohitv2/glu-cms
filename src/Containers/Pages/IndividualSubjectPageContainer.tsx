import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import RecommendedContainer from '../RecommendedContainer';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';
import FeaturedTutorsCard from '../../components/Cards/FeaturedTutorsCard';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import PageFooter from '../../components/PageFooter';
import { IndividualSubjectCardData } from './types';
import { UserTypes } from '../../Types/user';
import useMenuList from '../../Hooks/useMenuList';
import WhiteBannerCard from '../../components/Cards/WhiteBannerCard';
import useToggle from '../../Hooks/useToggle';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
});

interface IIndividualSubjectContainer{
    userType: UserTypes;
    cardsData: IndividualSubjectCardData;
}

const IndividualSubjectPageContainer: FC<IIndividualSubjectContainer> = ({ userType, cardsData }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType)
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);
    return (
        <NavigationMenu
            absolute
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <ClassPurchaseDrawer open={classPurchaseDrawer} onClose={toggleClassPurchaseDrawer} userType={userType} />
            <WhiteBannerCard {...cardsData.whiteBannerCard} />
            <BannerCarousel cards={cardsData.bannerCarouselBottom} cardNameLink={`/${userType}/tutor`} />
            <UpcomingClassCard {...cardsData.upcomingClass} teacherLink={`/${userType}/tutor`} addButton={false} />
            <RecommendedContainer
                padding
                title="Live Classes"
                link={`/${userType}/live-classes`}
                data={cardsData.liveClasses}
                cardTitleClick={toggleClassPurchaseDrawer}
                rootClassName={classes.recommendedRoot}
            />
            <BannerCarousel cards={cardsData.bannerCarouselBottom} cardNameLink={`/${userType}/tutor`} />
            <RecommendedContainer
                padding
                title="Recorded Classes"
                link={`/${userType}/recorded-classes`}
                data={cardsData.recordedClasses}
                rootClassName={classes.recommendedRoot}
                cardTitleClick={toggleClassPurchaseDrawer}
            />
            <FeaturedTutorsCard {...cardsData.featuredTutors} teacherLink={`/${userType}/tutor/`} />
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

export default IndividualSubjectPageContainer;
