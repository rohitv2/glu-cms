import React, { FC } from 'react';
import ReviewsPageContainer from '../../Containers/Pages/ReviewsPageContainer';
import useReviews from '../../Hooks/tutor/useReviews';

const TutorReviews: FC = () => {
    const {
        isPending,
        data,
        latestReview,
        submitChallenge,
        isSubmitChallengePending,
        classAverage,
        tutorAverage,
        count,
        setFilters,
        filters,
        isFiltersActive,
    } = useReviews();
    return (
        <ReviewsPageContainer
            userType="tutor"
            isLoading={isPending || isSubmitChallengePending || filters.isPending}
            data={data}
            latestReview={latestReview}
            onSubmitChallenge={submitChallenge}
            classAverage={classAverage}
            tutorAverage={tutorAverage}
            count={count}
            onFilter={setFilters}
            isFilterActive={isFiltersActive}
            filters={filters}
        />
    );
};

export default TutorReviews;
