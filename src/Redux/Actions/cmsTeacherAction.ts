import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endpoints, schoolTeacherEndpoints } from '../../Utility/endpoints';
import { TEACHER_ATTENDANCE, TEACHER_EXAM_RESULT, TEACHER_HOMEWORK_CMS, TEACHER_STUDENT_ATTENDANCE } from '../ActionTypes/cmsTeacherTypes';
import { TEACHER_LIST_BY_DEPARTMENT_ID } from '../ActionTypes/teacherTypes';
import { handleError } from './errorHandler';

export const teacherAttendanceAPIcall = (id: number, startDate: string, endDate: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.teacherAttendace}${id}/?startDate=${startDate}&endDate=${endDate}`)
            .then((res: any) => {
                dispatch(teacherAttendaceRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherAttendaceRes = (data: any) => {
    return {
        type: TEACHER_ATTENDANCE,
        payload: data,
    };
};

export const teacherStudentAttendanceAPIcall = (id: number, startDate: string, endDate: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.teacherStudentAttendace}${id}?startDate=${startDate}&endDate=${endDate}`)
            .then((res: any) => {
                dispatch(teacherStudentAttendaceRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherStudentAttendaceRes = (data: any) => {
    return {
        type: TEACHER_STUDENT_ATTENDANCE,
        payload: data,
    };
};


export const teacherExamResultAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.teacherExamResult}`)
            .then((res: any) => {
                dispatch(teacherExamRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherExamRes = (data: any) => {
    return {
        type: TEACHER_EXAM_RESULT,
        payload: data,
    };
};

export const teacherHomeworkcmsAPIcall = (id:number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.teacherHomeworkcms}${id}`)
            .then((res: any) => {
                dispatch(teacherHomeworkcmsRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherHomeworkcmsRes = (data: any) => {
    return {
        type: TEACHER_HOMEWORK_CMS,
        payload: data,
    };
};

export const teacherListByDepartmentId = (departmentId:any, subjectId:any) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.teacherByDepartmentId}${departmentId}/${subjectId}`)
            .then((res: any) => {
                dispatch(teacherListByDepartmentIdRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherListByClassGroupIdAPIcall = (classGroupId:any) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${schoolTeacherEndpoints.schoolTeacher}${classGroupId}`)
            .then((res: any) => {
                dispatch(teacherListByDepartmentIdRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherListByDepartmentIdRes = (data: any) => {
    return {
        type: TEACHER_LIST_BY_DEPARTMENT_ID,
        payload: data,
    };
};