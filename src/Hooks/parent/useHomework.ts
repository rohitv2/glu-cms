import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeworkSelector } from '../../Redux/Selectors/studentModule';
import { fetchHomework } from '../../Redux/Actions/studentModuleActions';

function useHomework() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, incompleteCount, overdueCount, count, homeworks, overdueHomeworks } = useSelector(
        homeworkSelector
    );

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchHomework());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            incompleteCount,
            overdueCount,
            count,
            homeworks,
            overdueHomeworks,
        }),
        [isPending, incompleteCount, overdueCount, count, homeworks, overdueHomeworks]
    );
}

export default useHomework;
