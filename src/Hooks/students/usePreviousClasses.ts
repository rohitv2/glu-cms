import { useCallback, useEffect, useMemo } from 'react';
import { dataToImageCard } from '../../Helper/students/previousClasses';
import { useDispatch, useSelector } from 'react-redux';
import { previousClassesSelector } from '../../Redux/Selectors/studentModule';
import {
    clearPreviousClass,
    fetchPreviousClass,
    fetchPreviousClasses,
    fetchPreviousClassesPagination,
    setPreviousClassesFilter,
} from '../../Redux/Actions/studentModuleActions';
import { SelectedFilterValue } from '../../Containers/FilterContainer/types';

function usePreviousClasses() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data, count, total, filters, pagination, individualClass } = useSelector(
        previousClassesSelector
    );

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchPreviousClasses(pagination.page, pagination.perPage));
        }
    }, [dispatch, isSuccess, pagination]);

    const getMore = useCallback(() => {
        dispatch(fetchPreviousClassesPagination(pagination.page + 1, pagination.perPage));
    }, [dispatch, pagination]);

    const getIndividualClass = useCallback(
        (id: number) => {
            dispatch(fetchPreviousClass(id));
        },
        [dispatch]
    );

    const clearIndividualClass = useCallback(() => {
        dispatch(clearPreviousClass());
    }, [dispatch]);

    const handleFilterChange = useCallback(
        (filter: SelectedFilterValue) => {
            dispatch(setPreviousClassesFilter(filter));
        },
        [dispatch]
    );

    return useMemo(
        () => ({
            isPending,
            count,
            total,
            filters,
            getMore,
            individualClass,
            getIndividualClass,
            handleFilterChange,
            clearIndividualClass,
            prevClassImageCards: dataToImageCard(data),
        }),
        [isPending, data, count, filters, total, getMore, clearIndividualClass, getIndividualClass, individualClass]
    );
}

export default usePreviousClasses;
