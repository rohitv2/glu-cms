import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { getAllClassGroupOfPerticularTeacher } from '../../Redux/Actions/classAction';

export const useTeacherClassGroups = () => {
    const classGroupList = useSelector((state: rootReducerType) => state.classReducer.teacherClassGroups);
    const [classGroup, setClassGroup] = useState([]);
    const dispatch = useDispatch();

    if (!classGroupList) {
        dispatch(getAllClassGroupOfPerticularTeacher());
    }

    useEffect(() => {
        if (classGroupList) {
            const data = classGroupList.map((item: any) => {
                return { id: item.id, value: item.classGroupName };
            });
            setClassGroup(data);
        }
    }, [classGroupList]);

    return useMemo(() => {
        return classGroup;
    }, [classGroup]);
};
