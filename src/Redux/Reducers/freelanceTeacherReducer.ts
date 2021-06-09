import {
    FREELANCE_TEACHER_RECORD_CLASS,
    FREELANCE_TEACHER_RECORD_CLASS_SESSION_ID,
    FREELANCE_TEACHER_SUBJECT_LIST,
    FREELANCE_TEACHER_TOTAL_RECORD_CLASS,
    FREELANCE_TEACHER_UPCOMING_CLASS_CALENDER,
    FREELANCE_TEACHER_UPCOMING_SESSION,
    CLEAR_TUTOR_SUBJECT_LIST,
} from '../ActionTypes/freelanceTeacherTypes';

const initialState = {
    freelanceSubjectList: null,
    recordClassUploaded: null,
    sessionIdData: null,
    totalRecordedClass: null,
    freelanceUpcomingClass: null,
    calendarUpcomingClass: null,
};

export const freelanceTeacherReducer = (state = initialState, action: any) => {
    const newState = { ...state };

    switch (action.type) {
        case FREELANCE_TEACHER_SUBJECT_LIST: {
            newState.freelanceSubjectList = action.payload;
            return newState;
        }
        case FREELANCE_TEACHER_RECORD_CLASS: {
            newState.recordClassUploaded = action.payload;
            return newState;
        }

        case FREELANCE_TEACHER_RECORD_CLASS_SESSION_ID: {
            newState.sessionIdData = action.payload;
            return newState;
        }
        case FREELANCE_TEACHER_TOTAL_RECORD_CLASS: {
            newState.totalRecordedClass = action.payload;
            return newState;
        }
        case FREELANCE_TEACHER_UPCOMING_SESSION: {
            newState.freelanceUpcomingClass = action.payload;
            return newState;
        }
        case FREELANCE_TEACHER_UPCOMING_CLASS_CALENDER: {
            newState.calendarUpcomingClass = action.payload;
            return newState;
        }
        case CLEAR_TUTOR_SUBJECT_LIST: {
            newState.freelanceSubjectList = null;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
