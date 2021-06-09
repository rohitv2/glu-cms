import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFormGroupById, getAllYearGroup } from '../../Redux/Actions/classAction';
import { formGroupSelector, yearGroupSelector } from '../../Redux/Selectors/schoolCMSmodule';

export const useYearGroup = (yearGroupId?: string) => {
    const dispatch = useDispatch();
    const yearGroup = useSelector(yearGroupSelector);
    const formGroup = useSelector(formGroupSelector);
    const [yearGroupDropdown, setYearGroupDropdown] = useState([]);
    const [formGroupDropdown, setFormGroupDropdown] = useState([]);

    if (!yearGroup) {
        dispatch(getAllYearGroup());
    }
    useEffect(() => {
        if (yearGroup) {
            const data = yearGroup.map((item: any) => {
                return { id: item.data.id, value: item.data.title };
            });
            setYearGroupDropdown(data);
        }
    }, [yearGroup]);

    useEffect(() => {
        if (yearGroupId && yearGroupId !== '') {
            dispatch(getAllFormGroupById(yearGroupId));
        }
    }, [yearGroupId]);

    useEffect(() => {
        if (formGroup?.result) {
            const data = formGroup.result.ClassSections.map((item: any) => {
                return { id: item?.Section?.id, value: item?.Section?.sectionName };
            });
            setFormGroupDropdown(data);
        }
    }, [formGroup]);

    return useMemo(() => ({ yearGroupDropdown, formGroupDropdown }), [yearGroupDropdown, formGroupDropdown]);
};
