import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherSubjectList } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo } from 'react';
import { getTutorSubjectList } from '../../Redux/Actions/teacherAction';
import { dataToFiltersData,dataToOptions } from '../../Helper/tutor/dataToFiltersData';

function useTuroSubject() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data } = useSelector(teacherSubjectList);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(getTutorSubjectList());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            data,
            isPending,
            filtersData: dataToFiltersData(data),
            subjectsOptions: dataToOptions(data),
        }),
        [data, isPending]
    );
}

export default useTuroSubject;
