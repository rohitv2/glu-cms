import { TEACHER_ATTENDANCE, TEACHER_EXAM_RESULT, TEACHER_HOMEWORK_CMS, TEACHER_STUDENT_ATTENDANCE } from '../ActionTypes/cmsTeacherTypes';
import { PARENT_CHILDRENS_DETAIL_CMS } from '../ActionTypes/cmsParentTypes';
import { TEACHER_LIST_BY_DEPARTMENT_ID } from '../ActionTypes/teacherTypes';



const initialState = {
    teacherAttendance: null,
    teacherStudentAttendance: null,
    teacherExamResult: null,
    teacherHomework: null,
    parentChildrensReducer: null,
    childrensDetails: null,
    teacherListByDepId: null
};

export const cmsReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case TEACHER_ATTENDANCE: {
            newState.teacherAttendance = action.payload;
            return newState;
        }
        case TEACHER_STUDENT_ATTENDANCE: {
            newState.teacherStudentAttendance = action.payload;
            return newState;
        }
        case TEACHER_EXAM_RESULT: {
            newState.teacherExamResult = action.payload;
            return newState;
        }
        case TEACHER_HOMEWORK_CMS: {
            newState.teacherHomework = action.payload;
            return newState;
        }
        case PARENT_CHILDRENS_DETAIL_CMS: {
            newState.childrensDetails = action.payload;
            return newState;
        }
        
        case TEACHER_LIST_BY_DEPARTMENT_ID: {
            newState.teacherListByDepId = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
