import Axios from 'axios';
import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { GET_FILE_URL, UPLOAD_FILE_PENDING, UPLOAD_FILE_SUCCESS } from '../ActionTypes/FileUploadTypes';
import { spinner } from './uiAction';
import { AppThunk } from './types';

export const getFileUploadAPIcall = (file: string, token?: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        const data: any = {};
        if (token !== '' && token !== null && token !== undefined) {
            data.Authorization = `Bearer ${token}`;
        }
        API.get(`${endpoints.fileUpload}${file}`, {
            headers: {
                ...data,
            },
        })
            .then((res) => {
               
                dispatch(fileUploadData(res.data.data));
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                dispatch(spinner(false));
            });
    };
};

export const fileUploadData = (data: any) => {
    return {
        type: GET_FILE_URL,
        payload: data,
    };
};

export const uploadProfileAmznUrl = (url: string, image: File, callBack?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        const data = image;
        Axios.put(`https://cors-anywhere.herokuapp.com/${url}`, data, {
            headers: {
                'x-amz-acl': 'public-read',
                'Content-Type': 'image/jpeg',
            },
        })
            .then((res) => {
               
                dispatch(spinner(false));
                if (callBack) {
                    callBack();
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(spinner(false));
            });
    };
};

export const uploadProfileFileName = (file: string, token: string, goBack?: () => void) => {
    const data = { fileName: file };
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(`${endpoints.uploadFileName}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                dispatch(spinner(false));
               
                if (goBack) {
                    goBack();
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(spinner(false));
            });
    };
};



const setUploadFilePending = () => ({
    type: UPLOAD_FILE_PENDING,
});

const setUploadFileSuccess = () => ({
    type: UPLOAD_FILE_SUCCESS,
});

export const fetchUploadFile = (fileName: string, onComplete?: () => void): AppThunk => {
    return (dispatch) => {
        dispatch(setUploadFilePending());
        API.put(endpoints.uploadFileName, { fileName }).then(({ data: { success } }) => {
            if (success) {
                dispatch(setUploadFileSuccess());
                if (onComplete) {
                    onComplete();
                }
            }
        });
    };
};
