import React, { FC } from 'react';
import RecommendedPageContainer from '../../../Containers/Pages/RecommendedPageContainer';
import useRecommendations from '../../../Hooks/students/useRecommendations';

const Recommended: FC = () => {
    const {
        filters,
        setFilter,
        recommendedCards,
        count,
        isRecommendationsPending,
        onAcceptRecommendation,
        onCancelRecommendation,
        isRecommendationStatusPending,
    } = useRecommendations();
    return (
        <RecommendedPageContainer
            userType="students"
            selectedFilter={filters.value}
            onFilter={setFilter}
            data={recommendedCards}
            count={count}
            isLoading={isRecommendationsPending || isRecommendationStatusPending}
            onAccept={onAcceptRecommendation}
            onCancel={onCancelRecommendation}
        />
    );
};

export default Recommended;
