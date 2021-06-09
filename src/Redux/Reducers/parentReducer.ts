import { PARENT_LIST, PARENT_DETAILS } from '../ActionTypes/parentTypes';


const initialState = {
    parentData: null,
    parentDetails: null,
};

export const parentReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case PARENT_LIST: {
            newState.parentData = action.payload;
            return newState;
        }
        case PARENT_DETAILS: {
            newState.parentDetails = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
