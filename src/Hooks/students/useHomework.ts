import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeworkSelector } from '../../Redux/Selectors/studentModule';
import { fetchHomework, fetchHomeworkFilter } from '../../Redux/Actions/studentModuleActions';
import { SelectedFilterValue } from '../../Containers/FilterContainer/types';

function useHomework() {
    const dispatch = useDispatch();
    const {
        isSuccess,
        isPending,
        incompleteCount,
        overdueCount,
        count,
        homeworks,
        overdueHomeworks,
        filters,
    } = useSelector(homeworkSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchHomework());
        }
    }, [isSuccess]);

    const setHomeworkFilter = useCallback(
        (filter: SelectedFilterValue) => {
            dispatch(fetchHomeworkFilter(filter));
        },
        [dispatch]
    );

    return useMemo(
        () => ({
            isPending,
            incompleteCount,
            overdueCount,
            count,
            homeworks,
            filters,
            overdueHomeworks,
            setHomeworkFilter,
        }),
        [isPending, incompleteCount, overdueCount, count, homeworks, overdueHomeworks, filters, setHomeworkFilter]
    );
}

export default useHomework;
