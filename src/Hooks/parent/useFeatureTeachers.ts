import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataToBannerCards, dataToFeaturedCard, dataToImageCard } from '../../Helper/students/featureTeachers';
import { teachersSelector } from '../../Redux/Selectors/studentModule';
import { fetchTeachers } from '../../Redux/Actions/studentModuleActions';

function useFeatureTeachers() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data, count, filters } = useSelector(teachersSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchTeachers())
        }
    }, [isSuccess])

    return useMemo(() => ({
        isPending,
        count,
        teachersBannerCards: dataToBannerCards(data),
        teachersImageCards: dataToImageCard(data),
        featuredTeachersCard: dataToFeaturedCard(data),
        filters,
    }), [isPending, data, count, filters]);
}

export default useFeatureTeachers;
