import React, { FC } from 'react';
import { useParams } from 'react-router';
import IndividualHomeworkPageContainer from '../../../Containers/Pages/IndividualHomeworkPageContainer';
import useHomeworkDetails from '../../../Hooks/students/useHomeworkDetails';
import useSubmitHomework from '../../../Hooks/students/useSubmitHomework';

const IndividualHomework: FC = () => {
    const { id } = useParams();
    const { details, isPending } = useHomeworkDetails(id);
    const {
        submitHomework,
        isSubmitHomeworkPending,
        isSubmittedSuccess,
        submitHomeworkPhysically,
        isSubmitPhysicallyPending,
        isSubmitPhysicallySuccess,
    } = useSubmitHomework(id);

    return (
        <IndividualHomeworkPageContainer
            userType="students"
            data={details}
            isLoading={isPending || isSubmitHomeworkPending || isSubmitPhysicallyPending}
            onUploadComplete={submitHomework}
            isSubmittedSuccess={isSubmittedSuccess}
            onSubmitPhysically={submitHomeworkPhysically}
            isSubmittedPhysicallySuccess={isSubmitPhysicallySuccess}
        />
    );
};

export default IndividualHomework;
