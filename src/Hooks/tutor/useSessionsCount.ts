import { useDispatch, useSelector } from 'react-redux';
import { sessionsCountSelector } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo } from 'react';
import { fetchSessionCount } from '../../Redux/Actions/teacherAction';

function useSessionsCount() {
    const dispatch = useDispatch();
    const { isPending, isSuccess, sessionsCount, studentsCount, occupiedStudents } = useSelector(sessionsCountSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchSessionCount());
        }
    }, [isSuccess, dispatch]);

    return useMemo(
        () => ({
            isSessionsCountPending: isPending,
            sessionsCount,
            studentsCount,
            occupiedStudents,
        }),
        [isPending, occupiedStudents, studentsCount, sessionsCount]
    );
}

export default useSessionsCount;
