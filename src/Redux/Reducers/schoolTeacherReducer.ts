import {
    GET_TEACHER_EXAM_RESULT,
    GET_TEACHER_HOMEWORK_BY_TEACHER_ID,
    SCHOOL_TEACHER_RECORD_CLASS,
    SCHOOL_TEACHER_RECORD_CLASS_SESSION_ID,
    SCHOOL_TEACHER_SUBJECT_LIST,
    SCHOOL_TEACHER_TOTAL_RECORD_CLASS,
    SCHOOL_TEACHER_UPCOMING_CLASS_CALENDER,
    SCHOOL_TEACHER_UPCOMING_SESSION,
    GET_ALL_CLASS_GROUP_OF_DEPARTMENT,
    GET_EVENT_BY_DEPARTMENT_SUCCESS,
    GET_ALL_TERMS
} from '../ActionTypes/schoolTeacherTypes';
import { GET_ALL_CLASS_GROUP_OF_TEACHER } from '../ActionTypes/teacherTypes';

const initialState = {
    schoolSubjectList: null,
    recordClassUploaded: null,
    sessionIdData: null,
    totalRecordedClass: null,
    schoolUpcomingClass: null,
    calendarUpcomingClass: null,
    classGroupOfTeacher: null,
    teacherHomework: null,
    teacherExamResult: null,
    departmentClassGroup : null,
    departmentEventList: null,
    terms: null
};

export const schoolTeacherReducer = (state = initialState, action: any) => {
    const newState = { ...state };

    switch (action.type) {
        case SCHOOL_TEACHER_SUBJECT_LIST: {
            newState.schoolSubjectList = action.payload;
            return newState;
        }
        case SCHOOL_TEACHER_RECORD_CLASS: {
            newState.recordClassUploaded = action.payload;
            return newState;
        }

        case SCHOOL_TEACHER_RECORD_CLASS_SESSION_ID: {
            newState.sessionIdData = action.payload;
            return newState;
        }
        case SCHOOL_TEACHER_TOTAL_RECORD_CLASS: {
            newState.totalRecordedClass = action.payload;
            return newState;
        }
        case SCHOOL_TEACHER_UPCOMING_SESSION: {
            newState.schoolUpcomingClass = action.payload;
            return newState;
        }
        case SCHOOL_TEACHER_UPCOMING_CLASS_CALENDER: {
            newState.calendarUpcomingClass = action.payload;
            return newState;
        }
        case GET_ALL_CLASS_GROUP_OF_TEACHER: {
            newState.classGroupOfTeacher = action.payload;
            return newState;
        }
        case GET_TEACHER_HOMEWORK_BY_TEACHER_ID: {
            newState.teacherHomework = action.payload;
            return newState;
        }
        case GET_TEACHER_EXAM_RESULT: {
            newState.teacherExamResult = action.payload;
            return newState;
        }
        case GET_ALL_CLASS_GROUP_OF_DEPARTMENT: {
            newState.departmentClassGroup = action.payload;
            return newState;
        }
        case GET_EVENT_BY_DEPARTMENT_SUCCESS :{
            newState.departmentEventList = action.payload;
            return newState
        }
        case GET_ALL_TERMS: {
            newState.terms = action.payload;
            return newState
        }
        default: {
            return newState;
        }
    }
};
