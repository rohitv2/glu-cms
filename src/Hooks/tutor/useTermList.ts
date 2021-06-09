import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherTermList } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo } from 'react';
import { getTermList } from '../../Redux/Actions/teacherAction';
import { termDataToOption} from '../../Helper/tutor/dataToFiltersData';

function useTermList() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, list } = useSelector(teacherTermList);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(getTermList());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            list,
            isPending,
            isSuccess,
            termList : termDataToOption(list)
        }),
        [list, isPending]
    );
}

export default useTermList;
