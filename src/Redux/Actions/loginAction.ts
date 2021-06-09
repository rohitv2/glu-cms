import { API, setAuthrizationToken } from '../../Utility/API';
import { loginAuth } from '../Interfaces/auth';
import { endpoints } from '../../Utility/endpoints';
import { REGSITER_DATA, USER_LOGIN } from '../ActionTypes/authTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { handleError } from './errorHandler';
import { appAction } from '../../Interfaces';
import { Dispatch } from 'react';
import { dispatch } from '../Store/Store';

export const userLoginAPIcall = (data: loginAuth, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endpoints.login, data)
            .then((res: any) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                // alert(JSON.stringify(res.data.data))
                toast.success('Successfully LoggedIn!', { autoClose: 2000 });
                dispatch(userLogin(res.data.data));
                dispatch(spinner(false));
                setAuthrizationToken();
                if (res.data.data.role === 'School') {
                    history.push('/dashboard/');
                } else if (res.data.data.role === 'Teacher') {
                    history.push('/tutor/');
                } else if (res.data.data.role === 'Guardian') {
                    history.push('/parent/home');
                } else if (res.data.data.role === 'Student') {
                    history.push('/students/home');
                } else if (res.data.data.role === 'SuperAdmin') {
                    history.push('/admin/dashboard');
                }
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const userLogin = (data: any): appAction => {
    return {
        type: USER_LOGIN,
        payload: data,
    };
};

export const authRegisterAPIcall = (data: { email: string; password: string; token: string }, history: any) => {
    return (dispatch: any) => {
        API.post(endpoints.authRegister, data)
            .then((res) => {
                toast.success('You are successfully registered.');
                history.push('/');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const emailSubscriber = (data: { email: string }, setEmail: Function) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endpoints.emailSubscribe, data)
            .then((res) => {
                setEmail();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const emailVerificationAPIcall = (token: string, redirectToHome: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.emailSubscribe}/${token}`)
            .then((res) => {
                redirectToHome();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const userEmailVerificationAPIcall = (token: string, redirectToHome: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.userEmailVerififcation}${token}`)
            .then((res) => {
                redirectToHome();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const forgotPasswordAPIcall = (data: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.forgotEmail, data)
            .then((res) => {
                dispatch(spinner(false));

                toast.success('Reset link sent. please check your email.');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const resetPasswordAPIcall = (data: any, token: string, redirect: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(`${endpoints.resetPassword}${token}`, data)
            .then((res) => {
                toast.success('Password Reset Successfully.');
                redirect();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const registerDataRes = (data: any) => {
    return {
        type: REGSITER_DATA,
        payload: data,
    };
};
