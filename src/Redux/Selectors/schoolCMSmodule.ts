import { rootReducerType } from '../../Interfaces/reducerInterfaces';

export const getAlldepartment = (state: rootReducerType) => state.schoolReducer.departmentList;

export const yearGroupSelector = (state: rootReducerType) => state.classReducer.yearGroups;

export const formGroupSelector = (state: rootReducerType) => state.classReducer.formGroups