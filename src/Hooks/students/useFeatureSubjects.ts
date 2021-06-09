import { useEffect, useMemo, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featuredSubjectsSelector } from '../../Redux/Selectors/studentModule';
import { fetchFeaturedSubject } from '../../Redux/Actions/studentModuleActions';

function useFeatureSubjects() {
    const dispatch = useDispatch()
    const { isSuccess, isPending, data, featuredSubjectsCard } = useSelector(featuredSubjectsSelector)

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchFeaturedSubject())
        }
    }, [isSuccess])

    return useMemo(() => ({
        isPending,
        featuredSubjectsCard
    }), [isPending, data]);
}

export default useFeatureSubjects;
