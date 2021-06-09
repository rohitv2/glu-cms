import { CLASS_GROUP_HOMEWORK, CLASS_LIST, GET_ALL_ATTENDANCE_CLASS_GROUP, GET_ALL_CLASS_GROUP_BY_SUBJECT_ID, GET_ALL_FORM_GROUP_BY_ID, GET_ALL_STUDENT_CLASS_GROUP_ID, GET_ALL_YEAR_GROUP, GET_EXAM_RESULT_CLASS_GROUP, GET_TEACHER_CLASS_GROUPS, SECTION_LIST } from '../ActionTypes/classTypes';

const initialState = {
    classList: null,
    sectionList: null,
    yearGroups: null,
    formGroups: null,
    teacherClassGroups: null,
    classGroupHomework: null,
    classGroupStudent: null,
    classGroupAttendance: null,
    classGroupExamResult: null,
    classGroupBySubject: null
};

export const classReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case CLASS_LIST: {
            newState.classList = action.payload;
            return newState;
        }
        case SECTION_LIST: {
            newState.sectionList = action.payload;
            return newState;
        }

        case GET_ALL_YEAR_GROUP: {
            newState.yearGroups = action.payload;
            return newState;
        }
        case GET_ALL_FORM_GROUP_BY_ID: {
            newState.formGroups = action.payload;
            return newState;
        }
        case GET_TEACHER_CLASS_GROUPS: {
            newState.teacherClassGroups = action.payload;
            return newState;
        }
        case CLASS_GROUP_HOMEWORK: {
            newState.classGroupHomework = action.payload;
            return newState;
        }
        case GET_ALL_STUDENT_CLASS_GROUP_ID: {
            newState.classGroupStudent = action.payload;
            return newState;
        }
        case GET_ALL_ATTENDANCE_CLASS_GROUP: {
            newState.classGroupAttendance = action.payload;
            return newState;
        }
        case GET_EXAM_RESULT_CLASS_GROUP: {
            newState.classGroupExamResult = action.payload;
            return newState;
        }
        case GET_ALL_CLASS_GROUP_BY_SUBJECT_ID: {
            newState.classGroupBySubject = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
