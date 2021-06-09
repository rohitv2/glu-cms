import { useDispatch, useSelector } from 'react-redux';
import { upcomingClassesByTeacherSelector } from '../../Redux/Selectors/studentModule';
import { useEffect, useMemo } from 'react';
import { fetchUpcomingClassesByTeacher } from '../../Redux/Actions/studentModuleActions';
import { dataToImageCards } from '../../Helper/students/upcomingClassesByTeacher';

function useUpcomingClassesByTeacher(id: number) {
    const dispatch = useDispatch();
    const { isPending, data } = useSelector(upcomingClassesByTeacherSelector);

    useEffect(() => {
        dispatch(fetchUpcomingClassesByTeacher(id));
    }, [id]);

    return useMemo(
        () => ({
            isUpcomingClassesByTeacherPending: isPending,
            upcomingClassesByTeacherImageCards: dataToImageCards(data),
        }),
        [data, isPending]
    );
}

export default useUpcomingClassesByTeacher;
