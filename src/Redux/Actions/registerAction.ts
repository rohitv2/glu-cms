import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { API, setAuthrizationToken } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { userLogin } from './loginAction';
import { CHILD_TOKEN, CHILD_TOKEN_RESET, VERIFIY_USER, CHILD_REJECT } from '../ActionTypes/authTypes';
import { spinner } from './uiAction';

export const registerAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.register, data)
            .then((res) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                dispatch(userLogin(res.data.data));
                setAuthrizationToken();
                goToNextPage();
                toast.success('Your information saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
                // goToNextPage();
            });
    };
};

export const updateRegisterAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(endpoints.updateProfile, data)
            .then((res) => {
                goToNextPage();
                console.log(res);
                toast.success('Your information updated successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
                // goToNextPage();
            });
    };
};

export const studentEduAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.studentEdu, data)
            .then((res) => {
                if (goToNextPage) {
                    goToNextPage();
                }
                dispatch(spinner(false));
                toast.success('Your education saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const teacherEduAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.teacherEdu, data)
            .then((res) => {
                if (goToNextPage) {
                    goToNextPage();
                }
                dispatch(spinner(false));
                toast.success('Your education saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const registerPhoneNumberAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.registerPhone, data)
            .then(() => {
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your mobile number saved successfully. please enter OTP.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
                console.log(err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const verifyOTPAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.verifyOtp, data)
            .then(() => {
                goToNextPage();
                toast.success('OTP has been sent');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const teacherExperienceAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.techerExp, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your experience saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const teacherAddSkillAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.teahcerSkill, data)
            .then((res) => {
                toast.success('Your skills saved successfully.');
                dispatch(spinner(false));
                if (goToNextPage) {
                    goToNextPage();
                }
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const teacherAddBioAPIcall = (data: any, id: number, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(`${endpoints.teacherBio}${id}`, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your bio saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};
export const teacherDocUploadAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(endpoints.teacherFileUpload, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('document uploaded successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const parentChildAddAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.parentChildAdd, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                    toast.success('Your children information saved successfully.');
                }
                dispatch(spinner(false));
                dispatch(storeChildToken(res.data.data.token));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
                dispatch(storeChildToken(null));
                // if (goToNextPage) {
                //     goToNextPage();
                // }
            });
    };
};

export const storeChildToken = (data: any) => {
    return {
        type: CHILD_TOKEN,
        payload: data,
    };
};

export const verfiyRegisterUserAPIcall = (token: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.registerVerfiyUser}${token}`)
            .then((res: any) => {
                console.log(res);
                const data = {
                    access_token: `Bearer ${token}`,
                    userRoleId: res.data.data?.Teacher?.id,
                };
                localStorage.setItem('auth', JSON.stringify(data));
                dispatch(userLogin(data));
                setAuthrizationToken();
                dispatch(verifyRegisterUserRes(res.data.data));
            })
            .catch((err: any) => {
                console.log(err);
            });
    };
};

export const verifyRegisterUserRes = (data: any) => {
    return {
        type: VERIFIY_USER,
        payload: data,
    };
};

export const sendVerififcationEmailAPIcall = (data: any) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endpoints.sendEmail, data)
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };
};

export const resetChildToken = () => {
    return {
        type: CHILD_TOKEN_RESET,
        payload: null,
    };
};

export const childRejectEmailAPIcall = (data: any) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endpoints.childReject, data)
            .then((res: any) => {
                console.log(res);
                dispatch(childRejectRes(res.data.data));
            })
            .catch((err: any) => {
                console.log(err);
            });
    };
};

const childRejectRes = (data: any) => {
    return {
        type: CHILD_REJECT,
        payload: data,
    };
};
