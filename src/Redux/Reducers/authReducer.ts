import { CHILD_REJECT, CHILD_TOKEN, CHILD_TOKEN_RESET, REGSITER_DATA, USER_LOGIN, VERIFIY_USER } from '../ActionTypes/authTypes';

const initialState = {
    userData: null,
    registerData: null,
    verifyUser: null,
    childTokens: [],
    childReject: null
};

export const authReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case USER_LOGIN: {
            newState.userData = action.payload;
            return newState;
        }
        case REGSITER_DATA: {
            newState.registerData = action.payload;
            return newState;
        }
        case VERIFIY_USER: {
            newState.verifyUser = action.payload;
            return newState;
        }
        case CHILD_TOKEN: {
            const data: any = [...newState.childTokens];
            data.push(action.payload);
            newState.childTokens = data;
            return newState;
        }
        case CHILD_TOKEN_RESET: {
            const data: any = [];
            newState.childTokens = data;
            return newState;
        }
        case CHILD_REJECT: {
            newState.childReject = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
