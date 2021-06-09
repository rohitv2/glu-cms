import {
    STUDENT_INFO,
    STUDENT_DETAILS,
    STUDENT_SEARCH,
    STUDNET_ATTENDANCE,
    STUDENT_EXAM,
    STUDENT_HOMEWORK,
    STUDENT_TERM_RESULT, STUDENT_MORE_HOMEWORK, GET_ALL_STUDENT_BY_CLASS_GROUP_ID
} from '../ActionTypes/studentTypes';

const initialState = {
    studentData: null,
    studentDetails: null,
    searchStudent: null,
    studentAttendance: null,
    examDetails: null,
    studentHwDetails: null,
    studentTermResult: null,
    studentMoreHomework: null,
    studentsByClassGroupId: null
};

export const studentReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case STUDENT_INFO: {
            newState.studentData = action.payload;
            return newState;
        }
        case STUDENT_DETAILS: {
            newState.studentDetails = action.payload;
            return newState;
        }
        case STUDENT_SEARCH: {
            newState.searchStudent = action.payload;
            return newState;
        }
        case STUDNET_ATTENDANCE: {
            newState.studentAttendance = action.payload;
            return newState;
        }
        case STUDENT_EXAM: {
            newState.examDetails = action.payload;
            return newState;
        }
        case STUDENT_HOMEWORK: {
            newState.studentHwDetails = action.payload;
            return newState;
        }
        case STUDENT_TERM_RESULT: {
            newState.studentTermResult = action.payload;
            return newState;
        }
        case STUDENT_MORE_HOMEWORK: {
            newState.studentMoreHomework = action.payload;
            return newState;
        }
        case GET_ALL_STUDENT_BY_CLASS_GROUP_ID: {
            newState.studentsByClassGroupId = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
