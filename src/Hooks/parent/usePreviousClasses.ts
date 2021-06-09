import { useEffect, useMemo } from 'react';
import { dataToImageCard } from '../../Helper/students/previousClasses';
import { useDispatch, useSelector } from 'react-redux';
import { previousClassesSelector } from '../../Redux/Selectors/studentModule';
import { fetchPreviousClasses } from '../../Redux/Actions/studentModuleActions';

function usePreviousClasses() {
    const dispatch = useDispatch()
    const { isSuccess, isPending, data, count, filters } = useSelector(previousClassesSelector)

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchPreviousClasses())
        }
    }, [isSuccess])

    return useMemo(() => ({
        isPending,
        count,
        prevClassImageCards: dataToImageCard(data),
        filters,
    }), [isPending, data, count, filters]);
}

export default usePreviousClasses;
