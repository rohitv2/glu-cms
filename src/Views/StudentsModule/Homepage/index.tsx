import React, { FC } from 'react';
import { calendarSubjectsCards } from '../../../data/homepage';
import HomePageContainer from '../../../Containers/Pages/HomePageContainer';
import useHomepage from '../../../Hooks/students/useHomepage';
import { getCurrentMonth, getCurrentYear } from '../../../Helper/date';
import usePurchaseDrawer from '../../../Hooks/students/usePurchaseDrawer';

const Homepage: FC = () => {
    const {
        isPending,
        teachersBannerCards,
        teachersImageCards,
        featuredTeachersCard,
        nextClassCard,
        upcomingClassCard,
        prevClassImageCards,
        featuredSubjectsCard,
        upcomingClassImageCards,
    } = useHomepage();

    const purchaseDrawer = usePurchaseDrawer()

    return (
        <HomePageContainer
            isLoading={isPending}
            userType="students"
            cardsData={{
                calendar: {
                    date: `${getCurrentMonth()} ${getCurrentYear()}`,
                    cards: calendarSubjectsCards,
                },
                liveClasses: upcomingClassImageCards.slice(0, 4),
                bannerCarousel: teachersBannerCards,
                bannerCarouselCenter: teachersBannerCards,
                bannerCarouselBottom: teachersBannerCards,
                featuredTutors: featuredTeachersCard,
                tutors: teachersImageCards.slice(0, 4),
                nextClass: nextClassCard,
                featuredSubjects: featuredSubjectsCard,
                upcomingClass: upcomingClassCard,
                recordedClasses: prevClassImageCards.slice(0, 4),
            }}
            purchaseDrawer={purchaseDrawer}
        />
    );
};

export default Homepage;
