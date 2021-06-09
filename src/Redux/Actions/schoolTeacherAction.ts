import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { API } from '../../Utility/API';
import { endpoints, schoolTeacherEndpoints } from '../../Utility/endpoints';
import {   
        GET_TEACHER_HOMEWORK_BY_TEACHER_ID, 
        GET_TEACHER_EXAM_RESULT,
        GET_ALL_CLASS_GROUP_OF_DEPARTMENT ,
        GET_EVENT_BY_DEPARTMENT_SUCCESS ,
        GET_ALL_TERMS
        } from '../ActionTypes/schoolTeacherTypes';
import { GET_ALL_CLASS_GROUP_OF_TEACHER } from '../ActionTypes/teacherTypes';
import { handleError } from './errorHandler';

export const addFormGroupAPIcall = (data: any, classId: string, callBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(`${schoolTeacherEndpoints.addFormGroup}/${classId}`, data)
            .then((res) => {
                toast.success('Form group created successfully.');
                callBack();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const updateFormGroupAPIcall = (data: any, classId: string, sectionId: string, callBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.put(`${endpoints.section}${sectionId}/${classId}`, data)
            .then((res) => {
                console.log(res);
                toast.success('Form group updated successfully.');
                callBack();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllclassGroupOfTeacherAPIcall = (teacherId: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(schoolTeacherEndpoints.classGroup + `?teacherId=${teacherId}`)
            .then((res: any) => {
                dispatch(getAllclassGroupOfTeacherRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllclassGroupOfTeacherRes = (data: any) => {
    return {
        type: GET_ALL_CLASS_GROUP_OF_TEACHER,
        payload: data,
    };
};

export const getAllTeacherHomeworkAPIcall = (teacherId: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(schoolTeacherEndpoints.homeworkTeacher + `/${teacherId}`)
            .then((res: any) => {
                dispatch(getTeacherHomeworkRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getTeacherHomeworkRes = (data: any) => {
    return {
        type: GET_TEACHER_HOMEWORK_BY_TEACHER_ID,
        payload: data,
    };
};

export const getTeacherExamResultAPIcall = (teacherId:string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(schoolTeacherEndpoints.examTeacher+`/${teacherId}`)
            .then((res: any) => {
                dispatch(getTeacherExamResultRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getTeacherExamResultRes = (data: any) => {
    return {
        type: GET_TEACHER_EXAM_RESULT,
        payload: data,
    };
};


export const getALlClassGroupByDepartmentApiCall = (id: number) =>{
    return async (dispatch:Dispatch<any>)=>{
        API.get(`${schoolTeacherEndpoints.department}/${id}/${schoolTeacherEndpoints.cGroup}`)
        .then((response:any)=>{
            dispatch(getClassGroupByDepSuccess(response.data.data))
        })
        .catch((error: any)=>{
            handleError(dispatch,error)
        })
    }
}

function getClassGroupByDepSuccess(data: any){
    return{
        type : GET_ALL_CLASS_GROUP_OF_DEPARTMENT,
        payload : data
    }
}

export const getEventByDepartmentAPiCall = (id: number , date: any) =>{
    return async (dispatch: any)=>{
        API.get(`${schoolTeacherEndpoints.department}/${id}/${schoolTeacherEndpoints.timeTable}?date=${date}`)
        .then((response)=>{
            dispatch(getEventByDepartmentSuccess(response.data.data))
        })
        .catch((error:any)=>{
            handleError(dispatch,error)
        })
    }
}

function getEventByDepartmentSuccess(data: any){
    return{
        type : GET_EVENT_BY_DEPARTMENT_SUCCESS,
        payload : data
    }
}

export const getAllTermsAPIcall = () => {
    return (dispatch: Dispatch<any>)=>{
        API.get(endpoints.terms).then((res:any)=>{
            dispatch(getAllTermsRes(res.data.data))
        }).catch((err:any)=>{
            handleError(dispatch, err);
        })
    }
}

export const getAllTermsRes = (data:any)=>{
    return {
        type: GET_ALL_TERMS,
        payload: data
    }
}