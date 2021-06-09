import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearHomeworkDetails, fetchHomeworkDetails } from '../../Redux/Actions/studentModuleActions';
import { homeworkDetailsSelector } from '../../Redux/Selectors/studentModule';

function useHomeworkDetails(id: number) {
    const dispatch = useDispatch();
    const { isPending, details } = useSelector(homeworkDetailsSelector);

    useEffect(() => {
        dispatch(fetchHomeworkDetails(id));
    }, [id, dispatch]);

    useEffect(() => {
        return () => {
            dispatch(clearHomeworkDetails())
        }
    }, [dispatch])

    return useMemo(
        () => ({
            isPending,
            details,
        }),
        [isPending, details]
    );
}

export default useHomeworkDetails;
