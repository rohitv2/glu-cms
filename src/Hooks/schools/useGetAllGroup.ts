import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { getAllFormGroupById, getAllYearGroup } from '../../Redux/Actions/classAction';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import { getAllClassGropsAPIcall } from '../../Redux/Actions/subjectAction';
import { getSubjectListAPIcall } from '../../Redux/Actions/subjectAction';
import {
    formatYearGroup,
    formatFormGroup,
    formatDepartment,
    formatSubject,
    formatClass,
} from '../../Helper/schools/allGroupFormat';

function useGetAllGroup(yearGroupId: any) {
    const dispatch = useDispatch();
    const yearGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.yearGroups);
    const formGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.formGroups);
    const departmentList = useSelector((state: rootReducerType) => state.schoolReducer.departmentList);
    const classList = useSelector((state: rootReducerType) => state.subjectReducer.classGroupList);
    const subjectList = useSelector((state: rootReducerType) => state.subjectReducer.subjectList);

    useEffect(() => {
        dispatch(getAllYearGroup());
        dispatch(getAllDepartmentAPIcall());
        dispatch(getAllClassGropsAPIcall());
        dispatch(getSubjectListAPIcall());
    }, []);

    useEffect(() => {
        if (![null, ''].includes(yearGroupId)) {
            dispatch(getAllFormGroupById(yearGroupId));
        }
    }, [yearGroupId]);

    return useMemo(
        () => ({
            yearGroupDropdown,
            formGroupDropdown,
            departmentList,
            subjectList,
            classList,
            yearGroupDropdownList: yearGroupDropdown && formatYearGroup(yearGroupDropdown),
            formGroupDropdownList: formGroupDropdown && formatFormGroup(formGroupDropdown),
            departmentListArray: departmentList && formatDepartment(departmentList),
            subjectsDropdownList: subjectList && formatSubject(subjectList),
            classListDropdown: classList && formatClass(classList),
        }),
        [yearGroupDropdown, formGroupDropdown, departmentList, subjectList, classList]
    );
}

export default useGetAllGroup;
