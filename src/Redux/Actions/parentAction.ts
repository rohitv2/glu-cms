import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { PARENT_LIST, PARENT_DETAILS } from '../ActionTypes/parentTypes';
import { addParentFormDataType, addparentArray } from '../../Interfaces/parentModule';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';
import { Dispatch } from 'react';

export const getallparentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endpoints.parent)
            .then((res) => {
                console.log(res);
                dispatch(parentList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const parentList = (data: any) => {
    return {
        type: PARENT_LIST,
        payload: data,
    };
};

export const addNewParentAPIcall = (data: addparentArray, history: any, profileUpload: () => void) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endpoints.parent, data)
            .then((res) => {
                console.log(res);
                dispatch(registerDataRes(res.data.data));
                dispatch(spinner(false));
                toast.success('Parent Added Successfully.');
                profileUpload();
                dispatch(getallparentAPIcall());
                setTimeout(() => {
                    history.push(routeEndpoints.parent.parentList);
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const editParentAPIcall = (data: addParentFormDataType, editId: number, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endpoints.parent}/${editId}`, data)
            .then((res) => {
                console.log(res);
                dispatch(getallparentAPIcall());
                history.push(routeEndpoints.parent.parentList);
                dispatch(spinner(false));
                toast.success('Parent updated Successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const deleteParentAPIcall = (deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.parent}/${deleteId}`)
            .then((res) => {
                dispatch(getallparentAPIcall());
                toast.success('Parent deleted Successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getParentDetailsAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.parent}/${id}`)
            .then((res) => {
                console.log(res.data);
                dispatch(parentDetailAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const parentDetailAPIres = (data: any) => {
    return {
        type: PARENT_DETAILS,
        payload: data,
    };
};

export const addChildrenAPIcall = (data: any, token: string) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endpoints.parentChildAdd, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                console.log(res);
                toast.success('Your children information saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                // handleError(dispatch, err);
            });
    };
};
