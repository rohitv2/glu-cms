import { useDispatch, useSelector } from 'react-redux';
import { schoolSessionsCountSelector } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo } from 'react';
import { fecthSchoolSession } from '../../Redux/Actions/teacherAction';

function useSchoolSessionCount() {
    const dispatch = useDispatch();
    const { isSuccess, sessionsCount, studentsCount, occupiedStudents } = useSelector(schoolSessionsCountSelector);
    useEffect(() => {
        if (!isSuccess) {
            dispatch(fecthSchoolSession());
        }
    }, [dispatch]);

    return useMemo(
        () => ({
            sessionsCount,
            studentsCount,
            occupiedStudents
        }),
        [sessionsCount,studentsCount,occupiedStudents]
    );
}

export default useSchoolSessionCount;
