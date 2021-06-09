import React, { useEffect } from 'react';
import { calendarSubjectsCards } from '../../data/homepage';
import HomePageContainer from '../../Containers/Pages/HomePageContainer';
import useHomepage from '../../Hooks/students/useHomepage';
import { getCurrentMonth, getCurrentYear } from '../../Helper/date';


const Index: React.FunctionComponent = () => {
    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify({"access_token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyanVuMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6Niwicm9sZSI6IlN0dWRlbnQiLCJ1c2VyUm9sZUlkIjoxLCJzaWdudXBUeXBlIjoic2Nob29sIiwiaWF0IjoxNjAyMzIxMTk4LCJleHAiOjE2MDM2MTcxOTh9.nqk76nYhBxn4MRgHSsnlWq-pVQkqveXuNqTGajGsXmE","email":"hari123@gmail.com","userId":7,"role":"Guardian","userRoleId":1,"signupType":"school"}))
        // localStorage.setItem('auth', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyanVuMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6Niwicm9sZSI6IlN0dWRlbnQiLCJ1c2VyUm9sZUlkIjoxLCJzaWdudXBUeXBlIjoic2Nob29sIiwiaWF0IjoxNjAyMzE5MzY0LCJleHAiOjE2MDM2MTUzNjR9.IIm5Et8X0fTa8xktNCQZ6XmKtVrrUZ0IUTGiSC21yNU")
    })
    const {
        isPending,
        teachersBannerCards,
        teachersImageCards,
        featuredTeachersCard,
        nextClassCard,
        upcomingClassCard,
        prevClassImageCards,
        featuredSubjectsCard,
        upcomingClassImageCards
    } = useHomepage();
    return (
        <HomePageContainer
        isLoading={isPending}
        userType="parent"
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
        childrenSelect={{
            selectedChild: 0,
            onSelectChild: () => {},
            childrenOptions: [{value: 0, label: "Child 1"}] 

        }}
        />
    );
};

export default Index;
