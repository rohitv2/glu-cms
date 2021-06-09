import { USER_LOGIN } from '../Redux/ActionTypes/authTypes';

export interface loginActionAPIcall {
    type: typeof USER_LOGIN;
    payload: object
}
