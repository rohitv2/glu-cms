import React, { FC } from 'react';
import { useParams } from 'react-router';
import TutorProfilePageContainer from '../../../Containers/Pages/TutorProfilePageContainer';
import useTeacherProfile from '../../../Hooks/students/useTeacherProfile';
import usePreviousClassesByTeacher from '../../../Hooks/students/usePreviousClassesByTeahcer';
import useUpcomingClassesByTeacher from '../../../Hooks/students/useUpcomingClassesByTeacher';
import usePurchaseDrawer from '../../../Hooks/students/usePurchaseDrawer';

const TutorProfile: FC = () => {
    const { id } = useParams();
    const {
        tutorProfileCard,
        availability,
        essentialClasses,
        about,
        reviews,
        similarTutors,
        isTeacherProfilePending,
    } = useTeacherProfile(id);
    const { isPreviousClassesByTeacherPending, previousClassesByTeacherImageCards } = usePreviousClassesByTeacher(id);
    const { isUpcomingClassesByTeacherPending, upcomingClassesByTeacherImageCards } = useUpcomingClassesByTeacher(id);
    const purchaseDrawer = usePurchaseDrawer();

    return (
        <TutorProfilePageContainer
            isLoading={
                isTeacherProfilePending || isPreviousClassesByTeacherPending || isUpcomingClassesByTeacherPending
            }
            userType="students"
            tutorProfileCard={tutorProfileCard}
            availability={availability}
            essentialClasses={essentialClasses}
            about={about}
            reviews={reviews}
            similarTutors={similarTutors}
            previousClasses={previousClassesByTeacherImageCards.slice(0, 4)}
            upcomingClasses={upcomingClassesByTeacherImageCards.slice(0, 4)}
            purchaseDrawer={purchaseDrawer}
        />
    );
};

export default TutorProfile;
