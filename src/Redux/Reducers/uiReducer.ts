import { USER_LOGIN } from '../ActionTypes/authTypes';
import { LOADER } from '../ActionTypes/uiTypes';

const initialState = {
    loader: false,
};

export const uiReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case LOADER: {
            newState.loader = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
