import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { educationSelector } from '../../Redux/Selectors/studentModule';
import { fetchEducation } from '../../Redux/Actions/studentModuleActions';
import { dataToEducationCards } from '../../Helper/students/education';

function useEducation() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data } = useSelector(educationSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchEducation());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            educationCards: dataToEducationCards(data),
        }),
        [isPending, data]
    );
}

export default useEducation;
