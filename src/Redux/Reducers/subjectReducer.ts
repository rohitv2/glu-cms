import { SUBJECT_LIST, SUBJECT_LIST_BY_DEPARTMENT_ID, SUBJECTS_GROUP_LIST, CLASS_GROUP_LIST } from '../ActionTypes/subjectTypes';



const initialState = {
    subjectList: null,
    sujbectListByDepId: null,
    subjectGroupList: null,
    classGroupList: null
};

export const subjectReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SUBJECT_LIST: {
            newState.subjectList = action.payload;
            return newState;
        }
        case SUBJECT_LIST_BY_DEPARTMENT_ID: {
            newState.sujbectListByDepId = action.payload;
            return newState;
        }
        case SUBJECTS_GROUP_LIST: {
            newState.subjectGroupList = action.payload;
            return newState;
        }
        case CLASS_GROUP_LIST: {
            newState.classGroupList = action.payload;
            return newState;
        }
        
        default: {
            return newState;
        }
    }
};
