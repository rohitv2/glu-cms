import { useDispatch, useSelector } from 'react-redux';
import { teacherDataSelector } from '../../Redux/Selectors/tutor';
import { getTeacherDetails } from '../../Redux/Actions/teacherAction';
import { useMemo } from 'react';

function useDetails() {
    const dispatch = useDispatch();
    const details = useSelector(teacherDataSelector);

    if (!details) {
        dispatch(getTeacherDetails());
    }

    return useMemo(
        () => ({
            id: details ? details.id : null,
            firstName: details ? details.firstName : ''
        }),
        [details]
    );
}

export default useDetails;
