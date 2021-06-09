import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { TEACHER_ATTENDANCE, TEACHER_STUDENT_ATTENDANCE } from '../ActionTypes/cmsTeacherTypes';
import { handleError } from './errorHandler';


export const teacherStudentAttendanceAPIcall = (id: number, startDate: string, endDate: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.teacherStudentAttendace}${id}/?startDate=${startDate}&endDate=${endDate}`)
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
