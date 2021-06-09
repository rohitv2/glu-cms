import { useDispatch, useSelector } from 'react-redux';
import { submitHomeworkPhysicallySelector, submitHomeworkSelector } from '../../Redux/Selectors/studentModule';
import { useCallback, useMemo } from 'react';
import { fetchSubmitHomework, fetchSubmitHomeworkPhysically } from '../../Redux/Actions/studentModuleActions';
import { SubmitHomeworkForm } from '../../Interfaces/students/forms';

function useSubmitHomework(id: number) {
    const dispatch = useDispatch();
    const { isPending, isSuccess } = useSelector(submitHomeworkSelector);
    const { isPending: isSubmitPhysicallyPending, isSuccess: isSubmitPhysicallySuccess } = useSelector(
        submitHomeworkPhysicallySelector
    );

    const submitHomework = useCallback(
        (formData: SubmitHomeworkForm) => {
            dispatch(fetchSubmitHomework(id, formData));
        },
        [id, dispatch]
    );

    const submitHomeworkPhysically = useCallback(
        (value: boolean) => {
            dispatch(fetchSubmitHomeworkPhysically(id, value));
        },
        [id, dispatch]
    );

    return useMemo(
        () => ({
            isSubmitHomeworkPending: isPending,
            isSubmittedSuccess: isSuccess,
            submitHomework,
            submitHomeworkPhysically,
            isSubmitPhysicallyPending,
            isSubmitPhysicallySuccess,
        }),
        [isPending, submitHomework, submitHomeworkPhysically, isSubmitPhysicallyPending, isSubmitPhysicallySuccess]
    );
}

export default useSubmitHomework;
