import {
    SCHOOL_LIST,
    VIDEO_LIST,
    ADMIN_TEACHER_LIST,
    ADMIN_STUDENT_LIST,
    ADMIN_PARENTS_LIST,
    ADMIN_ALL_USERS_COUNT,
    TEACHER_DETAILS_SUPER,
    STUDENT_DETAILS_SUPER,
    SCHOOL_DETAILS_SUPER,
    PARENT_DETAILS_SUPER,
} from '../ActionTypes/superAdminTypes';

const initialState = {
    schoolList: null,
    videoList: null,
    teacherList: null,
    studentList: null,
    parentsList: null,
    allUsersCount: null,
    teacherDetails: null,
    studentDetails: null,
    schoolDetails: null,
    studentDetailsParent: null,
    
};
export const superAdminReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SCHOOL_LIST: {
            newState.schoolList = action.payload;
            return newState;
        }

        case VIDEO_LIST: {
            newState.videoList = action.payload;
            return newState;
        }

        case ADMIN_TEACHER_LIST: {
            newState.teacherList = action.payload;
            return newState;
        }

        case ADMIN_STUDENT_LIST: {
            newState.studentList = action.payload;
            return newState;
        }

        case ADMIN_PARENTS_LIST: {
            newState.parentsList = action.payload;
            return newState;
        }

        case ADMIN_ALL_USERS_COUNT: {
            newState.allUsersCount = action.payload;
            return newState;
        }
        case TEACHER_DETAILS_SUPER: {
            newState.teacherDetails = action.payload;
            return newState;
        }
        case STUDENT_DETAILS_SUPER: {
            newState.studentDetails = action.payload;
            return newState;
        }

        case SCHOOL_DETAILS_SUPER: {
            newState.schoolDetails = action.payload;
            return newState;
        }

        case PARENT_DETAILS_SUPER: {
            newState.studentDetailsParent = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
