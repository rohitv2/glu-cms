import { GET_ALL_TEACHER_LIKE_SEARCH } from '../ActionTypes/classTypes';
import {
    SCHOOL_INFO,
    DEPARTMENT_LIST,
    SESSION_LIST,
    ALL_TIMETABLE_LIST_SUCCESS,
    ALL_TIMETABLE_LIST_PENDING,
    ALL_TIMETABLE_LIST_FAILURE,
    // GET_MERIT_SANCTION_LIST,
    TEACHER_EXAM_DETAILS,
    GET_ALL_MERITSANCTION_SUCCESS,
    MERITSANCTION_LIST_BY_CLASS_SUCCESS,
    MERITSANCTION_LIST_BY_TEACHER_SUCCESS,
    CLASSGROUP_FEEDBACK_SUCCESS,
    TEACHER_FFEDBACK_SUCCESS,
    GET_TEACHER_TIMETABLE_SUCCESS,
    GET_TIMETABLE_INFO_SUCCESS,
    INDIVIDUAL_TIME_TABLE_BLOCK_SUCCESS,
    INDIVIDUAL_TIME_TABLE_BLOCK_PENDING,
    INDIVIDUAL_TIME_TABLE_BLOCK_FAILURE,
    GET_ALL_HOMEWORK_ON_DEPARTMENT,
    GET_ALL_FEEDBACK_ON_DEPARTMENT,
    GET_DEPARTMENT_MERIT_LIST_SUCCESS,
    GET_ALL_ATTENDANCE_DEPARTMENT,
    GET_EXAM_RESUT_DEPARTMENT
} from '../ActionTypes/schoolTypes';

const initialState = {
    schoolData: null,
    departmentList: null,
    sessionList: null,
    timeTableList: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    meritSanctionList: null,
    teacherExamDetails: null,
    individualTimeTableBlockList: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    teacherSearchLike: null,
    feedBackDetails: null,
    teacherTimeTableList: null,
    getTimeTableInfo: null,
    departmentHomework: null,
    departmentFeedack: null,
    departmentMerit: null,
    allAttendanceDepartment :  null,
    allExamResultDepartment :  null,
};

export const schoolReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SCHOOL_INFO: {
            newState.schoolData = action.payload;
            return newState;
        }
        case DEPARTMENT_LIST: {
            newState.departmentList = action.payload;
            return newState;
        }
        case SESSION_LIST: {
            newState.sessionList = action.payload;
            return newState;
        }

        case ALL_TIMETABLE_LIST_PENDING: {
            return {
                ...state,
                timeTableList: {
                    ...state.timeTableList,
                    isPending: true,
                },
            };
        }
        case ALL_TIMETABLE_LIST_SUCCESS: {
            return {
                ...state,
                timeTableList: {
                    ...state.timeTableList,
                    isPending: false,
                    isSuccess: true,
                    data: action.payload,
                },
            };
        }
        case ALL_TIMETABLE_LIST_FAILURE: {
            return {
                ...state,
                timeTableList: {
                    ...state.timeTableList,
                    isPending: false,
                    isSuccess: false,
                    isFailure: true,
                },
            };
        }
        case GET_ALL_MERITSANCTION_SUCCESS:
        case MERITSANCTION_LIST_BY_CLASS_SUCCESS:
        case MERITSANCTION_LIST_BY_TEACHER_SUCCESS:
        case GET_DEPARTMENT_MERIT_LIST_SUCCESS:
            return {
                ...state,
                meritSanctionList: action.payload,
            };

        case TEACHER_EXAM_DETAILS:
            return {
                ...state,
                teacherExamDetails: action.payload,
            };
        case INDIVIDUAL_TIME_TABLE_BLOCK_SUCCESS:
            return {
                ...state,
                individualTimeTableBlockList: {
                    ...state.individualTimeTableBlockList,
                    data: action.payload,
                    isSuccess: true,
                    isPending: false,
                },
            };
        case INDIVIDUAL_TIME_TABLE_BLOCK_PENDING:
            return {
                ...state,
                individualTimeTableBlockList: {
                    ...state.individualTimeTableBlockList,
                    isPending: true,
                },
            };

        case INDIVIDUAL_TIME_TABLE_BLOCK_FAILURE:
            return {
                ...state,
                individualTimeTableBlockList: {
                    ...state.individualTimeTableBlockList,
                    isPending: false,
                    isFailure: true,
                },
            };
        case GET_ALL_TEACHER_LIKE_SEARCH: {
            newState.teacherSearchLike = action.payload;
            return newState;
        }
        case CLASSGROUP_FEEDBACK_SUCCESS:
        case TEACHER_FFEDBACK_SUCCESS: {
            return {
                ...state,
                feedBackDetails: action.payload,
            };
        }
        case GET_TEACHER_TIMETABLE_SUCCESS: {
            return {
                ...state,
                teacherTimeTableList: action.payload,
            };
        }
        case GET_TIMETABLE_INFO_SUCCESS: {
            return {
                ...state,
                getTimeTableInfo: action.payload,
            };
        }
        case GET_ALL_HOMEWORK_ON_DEPARTMENT: {
            return {
                ...state,
                departmentHomework: action.payload,
            };
        }
        case GET_ALL_FEEDBACK_ON_DEPARTMENT: {
            return {
                ...state,
                departmentFeedack: action.payload,
            };
        }

        case GET_ALL_ATTENDANCE_DEPARTMENT : {
            return{
                ...state,
                allAttendanceDepartment :  action.payload
            }
        }
        case GET_EXAM_RESUT_DEPARTMENT : {
            return{
                ...state,
                allExamResultDepartment :  action.payload
            }
        }
        default: {
            return newState;
        }
    }
};
