import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClassGroupBySubjectIdAPICall } from '../../Redux/Actions/classAction';

export const useGetAllClassGroupBySubjectId = (subjectId: any) => {
    const classGroups = useSelector((state: any) => state.classReducer.classGroupBySubject);
    const [totalClassGroups, setTotalClassGroups] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!['', null].includes(subjectId)) {
            dispatch(getAllClassGroupBySubjectIdAPICall(subjectId));
        }
    }, [subjectId]);
    useEffect(() => {
        if (classGroups) {
            const data = classGroups.map((item: any) => {
                return { id: item.id, value: item.classGroupName };
            });
            setTotalClassGroups(data);
        }
    }, [classGroups]);

    return useMemo(() => {
        return totalClassGroups;
    }, [totalClassGroups]);
};
