import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createEducationSelector,
    deleteEducationSelector,
    editEducationSelector,
    educationSelector,
} from '../../Redux/Selectors/studentModule';
import { fetchEducation } from '../../Redux/Actions/studentModuleActions';
import { dataToEducationCards } from '../../Helper/students/education';

function useEducation() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data } = useSelector(educationSelector);
    const { isPending: isDeleteEducationPending } = useSelector(deleteEducationSelector);
    const { isPending: isEditEducationPending } = useSelector(editEducationSelector);
    const { isPending: isCreateEducationPending } = useSelector(createEducationSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchEducation());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            educationCards: dataToEducationCards(data),
            isDeleteEducationPending,
            isEditEducationPending,
            isCreateEducationPending,
        }),
        [isPending, data, isDeleteEducationPending, isEditEducationPending, isCreateEducationPending]
    );
}

export default useEducation;
