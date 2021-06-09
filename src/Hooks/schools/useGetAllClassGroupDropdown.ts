import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { getAllClassGropsAPIcall } from '../../Redux/Actions/subjectAction';

export const useGetAllClassGroupDropdown = (yearGroupId: any) => {
    const dispatch = useDispatch();
    const [classGroups, setClassGroups] = useState([]);
    const classGroupList = useSelector((state: rootReducerType) => state.subjectReducer.classGroupList);
    const [cgYgId, setCgYgId] = useState([]);

    useEffect(() => {
        dispatch(getAllClassGropsAPIcall());
    }, []);

    useEffect(() => {
        if (classGroupList) {
            const data = classGroupList.map((item: any) => {
                return {
                    id: item.id,
                    value: item?.classGroupName,
                    yearGroupId: item?.yearGroupId
                };
            });
            setClassGroups(data);
        }
    }, [classGroupList]);

    useEffect(() => {
        if (!['', null, undefined].includes(yearGroupId)) {
           const result = classGroups.filter((item: any) => item.yearGroupId === yearGroupId);
           setCgYgId(result);
        }
    }, [yearGroupId, classGroups]);

    return useMemo(() => {
        return {classGroups, cgYgId};
    }, [classGroups]);
};
