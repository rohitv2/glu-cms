import React, { FC } from 'react';
import { useParams } from 'react-router';
import NavigationMenu from '../../../components/NavigationMenu';
import CardsGridContainer from '../../CardsGridContainer';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import TutorProfileCard from '../../../components/Cards/TutorProfileCard';
import Availability from './Availability';
import FeaturedTutorsCard from '../../../components/Cards/FeaturedTutorsCard';
import RecommendedContainer from '../../RecommendedContainer';
import PageFooter from '../../../components/PageFooter';
import About from './About';
import Reviews from './Reviews';
import useScrollTop from '../../../Hooks/useScrollTop';
import useMenuList from '../../../Hooks/useMenuList';
import ClassPurchaseDrawer from '../../Menus/ClassPurchaseDrawer';
import { Async, TutorProfilePage, UserType } from '../types';
import FullScreenLoader from '../../../components/Loaders/FullScreenLoader';

interface ITutorProfilePageContainer extends UserType, TutorProfilePage, Async {}

const TutorProfilePageContainer: FC<ITutorProfilePageContainer> = ({
    isLoading,
    userType,
    tutorProfileCard,
    availability,
    essentialClasses,
    about,
    reviews,
    similarTutors,
    previousClasses,
    upcomingClasses,
    purchaseDrawer,
}) => {
    const menuList = useMenuList(userType);
    const { id } = useParams();
    useScrollTop(id);

    return (
        <NavigationMenu
            absolute
            colorWhite
            userType={userType}
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <ClassPurchaseDrawer
                userType={userType}
                open={purchaseDrawer.isOpen}
                onClose={purchaseDrawer.onClose}
                data={purchaseDrawer.purchaseCard}
                isLoading={purchaseDrawer.isLoading}
                onLeave={purchaseDrawer.onLeave}
            />
            <TutorProfileCard {...tutorProfileCard} />
            <Availability {...availability} />
            <FeaturedTutorsCard title="Essential Classes" teacherLink={`/${userType}/tutor/`} {...essentialClasses} />
            <CardsGridContainer>
                <RecommendedContainer
                    title="Live Classes"
                    link={`/${userType}/live-classes`}
                    data={upcomingClasses}
                    marginBottom={false}
                    cardTitleClick={() => {}}
                />
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <RecommendedContainer
                    classType="recorded"
                    title="Recorded Classes"
                    cardTitleClick={purchaseDrawer.onOpen}
                    link={`/${userType}/recorded-classes`}
                    data={previousClasses}
                    marginBottom={false}
                />
            </CardsGridContainer>
            <About {...about} />
            {!!reviews.reviews.length && <Reviews {...reviews} />}
            {!!similarTutors.length && (
                <CardsGridContainer background="secondary">
                    <RecommendedContainer
                        classType="recorded"
                        title="Similar Tutors"
                        link={`/${userType}/tutors`}
                        cardTitleLink={`/${userType}/tutor/`}
                        data={similarTutors}
                        marginBottom={false}
                    />
                </CardsGridContainer>
            )}
            <PageFooter background={!!reviews.reviews.length && !similarTutors.length ? 'primary' : 'secondary'} />
        </NavigationMenu>
    );
};

export default TutorProfilePageContainer;
