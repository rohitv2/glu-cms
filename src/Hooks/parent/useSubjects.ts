import { useDispatch, useSelector } from 'react-redux';
import { subjectsSelector } from '../../Redux/Selectors/studentModule';
import { useEffect, useMemo } from 'react';
import { fetchSubjects } from '../../Redux/Actions/studentModuleActions';
import { dataToFiltersData, dataToOptions } from '../../Helper/students/subjects';

function useSubjects() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data, count } = useSelector(subjectsSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchSubjects());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            count,
            data,
            isPending,
            filtersData: dataToFiltersData(data),
            subjectsOptions: dataToOptions(data)
        }),
        [count, data, isPending]
    );
}

export default useSubjects;
