import React, { FC } from 'react';
import DashboardPageContainer from '../../../Containers/Pages/DashboardPageContainer';
import useHomework from '../../../Hooks/students/useHomework';
import useUpcomingClasses from '../../../Hooks/students/useUpcomingClasses';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';
import { individualSubjects } from '../../../data/dashboard';
import useRecommendations from '../../../Hooks/students/useRecommendations';

const StudentsDashboard: FC = () => {
    const { isPending: homeworkLoading, count: homeworkCount } = useHomework();
    const { isRecommendationsPending, count: recommendationsCount } = useRecommendations();
    const {
        isPending: upcomingClassesLoading,
        count: upcomingClassesCount,
        dateSubjectCards,
        carouselClassCards,
    } = useUpcomingClasses();
    const { profileCard, isPending: isProfilePending } = useProfileInfo();

    return (
        <DashboardPageContainer
            userType="students"
            isLoading={isProfilePending || upcomingClassesLoading}
            school={{
                homework: { isLoading: homeworkLoading, count: homeworkCount },
                recommended: { isLoading: isRecommendationsPending, count: recommendationsCount },
                upcomingClasses: { isLoading: upcomingClassesLoading, count: upcomingClassesCount },
                profile: profileCard,
                individualSubjects: individualSubjects,
            }}
            personal={{
                previousClasses: { isLoading: false, count: 4 },
                upcomingClasses: { isLoading: upcomingClassesLoading, count: upcomingClassesCount },
                profile: profileCard,
                dateSubjectCards,
                carouselCards: carouselClassCards,
            }}
        />
    );
};

export default StudentsDashboard;
