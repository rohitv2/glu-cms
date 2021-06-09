import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import {
    CLASS_GROUP_LIST,
    SUBJECTS_GROUP_LIST,
    SUBJECT_LIST,
    SUBJECT_LIST_BY_DEPARTMENT_ID,
} from '../ActionTypes/subjectTypes';

export const addNewSubjectAPIcall = (id: string, data: any, close: Function) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(`${endpoints.getAllSubjectGroup}/${id}`, data)
            .then(() => {
                toast.success('Subject Added Successfully.');
                dispatch(spinner(false));
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getSubjectListAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.subject}`)
            .then((res) => {
                dispatch(subjectListAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllClassGropsAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.getAllSubject}`)
            .then((res) => {
                dispatch(classGroupListAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const classGroupListAPIres = (data: any) => {
    return {
        type: CLASS_GROUP_LIST,
        payload: data,
    };
};

export const subjectListAPIres = (data: any) => {
    return {
        type: SUBJECT_LIST,
        payload: data,
    };
};

export const updateSubjectAPIcall = (departmentId: string, subjectId: string | number, data: any, close: Function) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(`${endpoints.getAllSubjectGroup}/${departmentId}/${subjectId}`, data)
            .then(() => {
                toast.success('Subject Updated Successfully.');
                dispatch(spinner(false));
                close();
                dispatch(getSubjectListAPIcall());
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteSubjectAPIcall = (className: string, sectionName: string, deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.subject}/${className}/${sectionName}/${deleteId}`)
            .then((res) => {
                toast.success('Subject deleted successfully.');
                // dispatch(getSubjectListAPIcall(className, sectionName));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getSubjectByDepartmentId = (departmentId: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.subjectByDepartmentId}${departmentId}`)
            .then((res: any) => {
                dispatch(subjectListDepartmentIdRes(res.data.data));
            })
            .catch((err: any) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const subjectListDepartmentIdRes = (data: any) => {
    return {
        type: SUBJECT_LIST_BY_DEPARTMENT_ID,
        payload: data,
    };
};

export const addNewClassGroupAPIcall = (data: any, goBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endpoints.classGroupAdd, data)
            .then((res: any) => {
                dispatch(spinner(false));
                toast.success('Class group added successfully.');
                goBack();
            })
            .catch((err: any) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getAllSubjectGroupAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(endpoints.subject)
            .then((res: any) => {
                dispatch(getSubjectGroupRes(res.data.data));
            })
            .catch((err: any) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getSubjectGroupRes = (data: any) => {
    return {
        type: SUBJECTS_GROUP_LIST,
        payload: data,
    };
};

export const getSubjectListByFilterAPIcall = (yearGroupId: string, departmentId: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.getAllSubject}?yearGroupId=${yearGroupId}&departmentId=${departmentId}`)
            .then((res) => {
                dispatch(classGroupListAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const UpdateClassGroupAPIcall = (data: any, classGroupId: string, goBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(endpoints.classGroupAdd + `/${classGroupId}`, data)
            .then((res: any) => {
                dispatch(spinner(false));
                toast.success('Class group updated successfully.');
                goBack();
            })
            .catch((err: any) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};
