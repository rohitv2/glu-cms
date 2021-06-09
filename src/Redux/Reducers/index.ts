import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { schoolReducer } from './schoolReducer';
import { studentReducer } from './studentReducer';
import { teacherReducer } from './teacherReducer';
import { parentReducer } from './parentReducer';
import { classReducer } from './classReducer';
import { subjectReducer } from './subjectReducer';
import { fileUploadReducer } from './fileUploadReducer';
import { superAdminReducer } from './superAdminReducer';
import studentModuleReducer from './studentModuleReducer';
import { cmsReducer } from './cmsReducer';
import { freelanceTeacherReducer } from './freelanceTeacherReducer';
import { schoolTeacherReducer } from './schoolTeacherReducer';


export const rootReducer = combineReducers({
    authReducer,
    uiReducer,
    schoolReducer,
    studentReducer,
    teacherReducer,
    parentReducer,
    classReducer,
    subjectReducer,
    fileUploadReducer,
    superAdminReducer,
    studentModule: studentModuleReducer,
    cmsReducer,
    freelanceTeacherReducer,
    schoolTeacherReducer
});
