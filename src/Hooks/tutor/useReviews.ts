import { useDispatch, useSelector } from 'react-redux';
import { reviewsSelector, submitChallengeSelector } from '../../Redux/Selectors/tutor';
import useDetails from './useDetails';
import { useCallback, useEffect, useMemo } from 'react';
import { fetchReviewsFilters, fetchReviews, fetchSubmitReviewChallenge } from '../../Redux/Actions/teacherAction';
import { OnSubmitChallenge } from '../../Containers/Pages/ReviewsPageContainer/ReviewCard';
import { OnFilter } from '../../Containers/Pages/ReviewsPageContainer/Filters';

function useReviews() {
    const dispatch = useDispatch();
    const { id } = useDetails();
    const { isPending, isSuccess, data, latestReview, classAverage, tutorAverage, count, filters } = useSelector(
        reviewsSelector
    );
    const { isPending: isSubmitChallengePending } = useSelector(submitChallengeSelector);

    useEffect(() => {
        if (id && !isSuccess) {
            dispatch(fetchReviews(id));
        }
    }, [id, dispatch]);

    const setFilters: OnFilter = useCallback(
        (from, to) => {
            dispatch(fetchReviewsFilters(id, from, to));
        },
        [dispatch, id]
    );

    const submitChallenge: OnSubmitChallenge = useCallback(
        (id, data, cb) => {
            dispatch(fetchSubmitReviewChallenge(id, data, cb));
        },
        [dispatch]
    );

    return useMemo(
        () => ({
            isPending,
            data,
            latestReview,
            isSubmitChallengePending,
            submitChallenge,
            classAverage,
            tutorAverage,
            count,
            setFilters,
            isFiltersActive: filters.from && filters.to,
            filters
        }),
        [
            data,
            isPending,
            latestReview,
            isSubmitChallengePending,
            submitChallenge,
            classAverage,
            tutorAverage,
            count,
            setFilters,
            filters,
        ]
    );
}

export default useReviews;
