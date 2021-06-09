import { useDispatch, useSelector } from 'react-redux';
import { recommendationsSelector } from '../../Redux/Selectors/studentModule';
import { useCallback, useEffect, useMemo } from 'react';
import { SelectedFilterValue } from '../../Containers/FilterContainer/types';
import {
    fetchRecommendation,
    fetchRecommendationStatus,
    setRecommendationsFilter,
} from '../../Redux/Actions/studentModuleActions';
import { dataToRecommendationCards } from '../../Helper/students/recommendations';

function useRecommendations() {
    const dispatch = useDispatch();
    const { filters, data, count, isPending, isSuccess, recommendationStatus } = useSelector(recommendationsSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchRecommendation());
        }
    }, [isSuccess, dispatch]);

    const setFilter = useCallback(
        (filter: SelectedFilterValue) => {
            dispatch(setRecommendationsFilter(filter));
        },
        [dispatch]
    );

    const onAcceptRecommendation = useCallback(
        (id: number) => {
            dispatch(fetchRecommendationStatus(id, 'accepted'));
        },
        [dispatch]
    );

    const onCancelRecommendation = useCallback(
        (id: number) => {
            dispatch(fetchRecommendationStatus(id, 'suggest'));
        },
        [dispatch]
    );

    return useMemo(
        () => ({
            filters,
            setFilter,
            count,
            onAcceptRecommendation,
            onCancelRecommendation,
            isRecommendationsPending: isPending,
            recommendedCards: dataToRecommendationCards(data),
            isRecommendationStatusPending: recommendationStatus.isPending,
        }),
        [filters, setFilter, count, isPending, onAcceptRecommendation, onCancelRecommendation, recommendationStatus]
    );
}

export default useRecommendations;
