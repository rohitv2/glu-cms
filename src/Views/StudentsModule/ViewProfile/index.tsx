import React, { FC } from 'react';
import ViewProfilePageContainer from '../../../Containers/Pages/ViewProfilePageContainer';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';
import useEducation from '../../../Hooks/students/useEducation';

const ViewProfile: FC = () => {
    const { profileCard, isPending, about } = useProfileInfo();
    const { educationCards, isPending: isEducationPending } = useEducation();
    return (
        <ViewProfilePageContainer
            userType="students"
            isLoading={isPending || isEducationPending}
            profileCard={profileCard}
            about={about}
            education={educationCards}
        />
    );
};

export default ViewProfile;
