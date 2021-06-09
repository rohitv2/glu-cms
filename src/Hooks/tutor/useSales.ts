import { useDispatch, useSelector } from 'react-redux';
import { salesSelector } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo } from 'react';
import { fetchSales } from '../../Redux/Actions/teacherAction';

function useSales() {
    const dispatch = useDispatch();
    const { isPending, isSuccess, overall, classes, tutor, isEmpty } = useSelector(salesSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchSales());
        }
    }, [isSuccess, dispatch]);

    return useMemo(
        () => ({
            isSalesPending: isPending,
            overall,
            classes,
            tutor,
            isEmpty,
        }),
        [isPending, overall, classes, tutor, isEmpty]
    );
}

export default useSales;
