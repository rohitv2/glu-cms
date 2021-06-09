import { useDispatch, useSelector } from 'react-redux';
import { previousClassesByTeacherSelector } from '../../Redux/Selectors/studentModule';
import { useEffect, useMemo } from 'react';
import { fetchPreviousClassesByTeacher } from '../../Redux/Actions/studentModuleActions';
import { dataToImageCards } from '../../Helper/students/previousClassesByTeacher';

function usePreviousClassesByTeacher(id: number) {
    const dispatch = useDispatch();
    const { isPending, data } = useSelector(previousClassesByTeacherSelector);

    useEffect(() => {
        dispatch(fetchPreviousClassesByTeacher(id));
    }, [dispatch, id]);

    return useMemo(
        () => ({
            isPreviousClassesByTeacherPending: isPending,
            previousClassesByTeacherImageCards: dataToImageCards(data)
        }),
        [data, isPending]
    );
}

export default usePreviousClassesByTeacher;
