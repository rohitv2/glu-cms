import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { handleError } from './errorHandler';
import { dispatch } from '../Store/Store';
import { Dispatch } from 'react';
import {
    SCHOOL_INFO,
    DEPARTMENT_LIST,
    SESSION_LIST,
    GET_MERIT_SANCTION_LIST,
    TEACHER_EXAM_DETAILS,
    GET_ALL_MERITSANCTION_SUCCESS,
    MERITSANCTION_LIST_BY_CLASS_SUCCESS,
    MERITSANCTION_LIST_BY_TEACHER_SUCCESS,
    CLASSGROUP_FEEDBACK_SUCCESS,
    TEACHER_FFEDBACK_SUCCESS,
    GET_TEACHER_TIMETABLE_SUCCESS,
    ALL_TIMETABLE_LIST_SUCCESS,
    ALL_TIMETABLE_LIST_PENDING,
    ALL_TIMETABLE_LIST_FAILURE,
    ADD_TIMETABLE_NAME_SUCCESS,
    EDIT_TIMETABLE_NAME_SUCCESS,
    GET_TIMETABLE_INFO_SUCCESS,
    INDIVIDUAL_TIME_TABLE_BLOCK_SUCCESS,
    INDIVIDUAL_TIME_TABLE_BLOCK_PENDING,
    INDIVIDUAL_TIME_TABLE_BLOCK_FAILURE,
    CREATE_TIME_TABLE_BLOCK_SUCCESS,
    EDIT_TIMETABLE_BLOCK_SUCCESS,
    DELETE_TIMETABLE_BLOCK_SUCCESS,
    DELETE_TIMETABLE_SUCCESS,
    GET_ALL_HOMEWORK_ON_DEPARTMENT,
    GET_ALL_FEEDBACK_ON_DEPARTMENT,
    GET_DEPARTMENT_MERIT_LIST_SUCCESS,
    GET_ALL_ATTENDANCE_DEPARTMENT,
    GET_EXAM_RESUT_DEPARTMENT,
} from '../ActionTypes/schoolTypes';
import { GET_ALL_ATTENDANCE_CLASS_GROUP } from '../ActionTypes/classTypes';

export const getSchoolAPIcall = () => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.get(endpoints.schoolProfile)
            .then((res) => {
                dispatch(schoolInfo(res.data.data));
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const updateSchoolAPIcall = (data: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(endpoints.schoolProfile, data)
            .then(() => {
                dispatch(spinner(false));
                toast.success('School Information Updated Successfully.');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const schoolInfo = (data: any) => {
    return {
        type: SCHOOL_INFO,
        payload: data,
    };
};

export const addNewDepartmentAPIcall = (data: any, hisotry: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endpoints.departments, data)
            .then((res) => {
                console.log(res);
                dispatch(getAllDepartmentAPIcall());
                dispatch(spinner(false));
                hisotry.push('/dashboard/departments');
                toast.success('Department Added Successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getAllDepartmentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endpoints.departments)
            .then((res) => {
                dispatch(getDepartmentAPIres(res.data.data));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getDepartmentAPIres = (data: any) => {
    return {
        type: DEPARTMENT_LIST,
        payload: data,
    };
};

export const deleteDepartmentAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.departments}/${id}`)
            .then((res) => {
                dispatch(getAllDepartmentAPIcall());
                toast.success('Department deleted successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const updateDepartmentAPIcall = (id: number, data: any, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endpoints.departments}/${id}`, data)
            .then((res) => {
                console.log(res);
                dispatch(getAllDepartmentAPIcall());
                history.push('/dashboard/departments');
                dispatch(spinner(false));
                toast.success('Department Updated Successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getAllSessionsAPIcall = (startDate: string, endDate: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.recordSession}?type=School&startDate=${startDate}&endDate=${endDate}`)
            .then((res) => {
                dispatch(getAllSessionAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllSessionAPIres = (data: any) => {
    return {
        type: SESSION_LIST,
        payload: data,
    };
};

export const addSessionsAPIcall = (data: any, close: Function) => {
    dispatch(spinner(true));
    return (dispatch: Dispatch<any>) => {
        API.post(endpoints.sessions, data)
            .then((res) => {
                dispatch(spinner(false));
                console.log(res);
                toast.success('Session Added Successfully.');
                // dispatch(getAllSessionsAPIcall());
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteSessionAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.sessions}/${id}`)
            .then(() => {
                // dispatch(getAllSessionsAPIcall());
                toast.success('Session deleted successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getTimeTableAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getAllTimeTableApiCallPending());
        API.get(endpoints.schoolTimeTable) //changed the api
            .then((res) => {
                dispatch(getAllTimeTableApiCallSuccess(res.data.data));
            })
            .catch((err) => {
                dispatch(getAllTimeTableApiCallFailure());
            });
    };
};

function getAllTimeTableApiCallSuccess(data: any) {
    return {
        type: ALL_TIMETABLE_LIST_SUCCESS,
        payload: data,
    };
}

function getAllTimeTableApiCallPending() {
    return {
        type: ALL_TIMETABLE_LIST_PENDING,
    };
}

function getAllTimeTableApiCallFailure() {
    toast.error('something went wrong !');
    return {
        type: ALL_TIMETABLE_LIST_FAILURE,
    };
}

export const getSchoolUserCountsAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(endpoints.schoolCounts)
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllSessionsByFilterAPIcall = (
    teacherId: string,
    subjectId: string,
    startDate: string,
    endDate: string
) => {
    return (dispatch: Dispatch<any>) => {
        API.get(
            `${endpoints.sessionFilter}?type=School&startDate=${startDate}&endDate=${endDate}&subjectId=${subjectId}&teacherId=${teacherId}`
        )
            .then((res) => {
                dispatch(getAllSessionAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getExamResultForTeacher = (id: number) => {
    return async (dispatch: any) => {
        API.get(`${endpoints.tutorExamDetails}/${id}`)
            .then((response) => {
                dispatch(getExamResultForTeacherSuccess(response.data.data.result1));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getExamResultForTeacherSuccess(data: any) {
    return {
        type: TEACHER_EXAM_DETAILS,
        payload: data,
    };
}

export const getAllMeritSanction = () => {
    return async (dispatch: any) => {
        API.get(endpoints.allMeritSanction)
            .then((response: any) => {
                dispatch(getAllMeritSanctionSuccess(response.data.data));
            })
            .catch((error: any) => {
                handleError(dispatch, error);
            });
    };
};

function getAllMeritSanctionSuccess(data: any) {
    return {
        type: GET_ALL_MERITSANCTION_SUCCESS,
        payload: data,
    };
}

export const getMeritSanctionByClassGroup = (id: number) => {
    return async (dispatch: any) => {
        API.get(`${endpoints.allMeritSanction}?classGroupId=${id}`)
            .then((response) => {
                dispatch(getMeritSanctionByClassGroupSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getMeritSanctionByClassGroupSuccess(data: any[]) {
    return {
        type: MERITSANCTION_LIST_BY_CLASS_SUCCESS,
        payload: data,
    };
}

export const getMeritSanctionByTeacher = (id: number) => {
    return async (dispatch: any) => {
        API.get(`${endpoints.allMeritSanction}?teacherId=${id}`)
            .then((response) => {
                dispatch(getMeritSanctionByTeacherSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getMeritSanctionByTeacherSuccess(data: any) {
    return {
        type: MERITSANCTION_LIST_BY_TEACHER_SUCCESS,
        payload: data,
    };
}

export const getFeedBackByClassGroup = (id: number) => {
    return async (dispatch: any) => {
        API.get(`${endpoints.classGroupsFeedback}/${id}/${endpoints.teacherFeedback}`)
            .then((response) => {
                dispatch(getFeedBackByClassGroupSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getFeedBackByClassGroupSuccess(data: any) {
    return {
        type: CLASSGROUP_FEEDBACK_SUCCESS,
        payload: data,
    };
}

export const getFeedBackTeacher = (id: number) => {
    return async (dispatch: any) => {
        API.get(`school/teachers/${id}/feedbacks`)
            .then((response) => {
                dispatch(getFeedBackTeacherSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getFeedBackTeacherSuccess(data: any[]) {
    return {
        type: TEACHER_FFEDBACK_SUCCESS,
        payload: data,
    };
}

export const getTutorTimeTableAPIcall = (id: number, date: any) => {
    return async (dispatch: any) => {
        API.get(`${endpoints.getTurorTimeTable}${date}&tutorId=${id}`)
            .then((response) => {
                dispatch(getTutorTimeTableSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getTutorTimeTableSuccess(data: any) {
    return {
        type: GET_TEACHER_TIMETABLE_SUCCESS,
        payload: data,
    };
}

///////////Time Table School CMS//////////////////////////
export const addTimeTableName = (data: any, history: any) => {
    return async (dispatch: any) => {
        API.post(endpoints.schoolTimeTable, data)
            .then((response) => {
                dispatch(addTimeTableNameSuccess(history));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function addTimeTableNameSuccess(history: any) {
    toast.success('Timetable added!');
    history.goBack();
    return {
        type: ADD_TIMETABLE_NAME_SUCCESS,
    };
}

export const editTimeTableName = (id: number, data: any) => {
    return async (dispatch: any) => {
        API.put(`${endpoints.schoolTimeTable}/${id}`, data)
            .then((response) => {
                dispatch(editTimeTableNameSuccess());
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function editTimeTableNameSuccess() {
    toast.success('Edited Successfully!');
    return {
        type: EDIT_TIMETABLE_NAME_SUCCESS,
    };
}

export const getTimeTableInfoApiCall = (id: number) => {
    return async (dispatch: any) => {
        API.get(`${endpoints.schoolTimeTable}/${id}`)
            .then((response) => {
                dispatch(getTimeTableInfoSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getTimeTableInfoSuccess(data: any) {
    return {
        type: GET_TIMETABLE_INFO_SUCCESS,
        payload: data,
    };
}

export const getIndividualTimeTableBlock = (id: any) => {
    return async (dispatch: any) => {
        dispatch(getIndividualTimeTableBlockPending());
        API.get(`${endpoints.schoolTimeTable}/${id}/block`)
            .then((res) => {
                dispatch(getIndividualTimeTableBlockSuccess(res.data.data));
            })
            .catch((err) => {
                dispatch(getIndividualTimeTableBLockFailure());
            });
    };
};

function getIndividualTimeTableBlockSuccess(data: any) {
    return {
        type: INDIVIDUAL_TIME_TABLE_BLOCK_SUCCESS,
        payload: data,
    };
}

function getIndividualTimeTableBlockPending() {
    return {
        type: INDIVIDUAL_TIME_TABLE_BLOCK_PENDING,
    };
}

function getIndividualTimeTableBLockFailure() {
    toast.error('Something went wrong!');
    return {
        type: INDIVIDUAL_TIME_TABLE_BLOCK_FAILURE,
    };
}

export const createTimeTableBlockAPICall = (data: any, id: number, history: any) => {
    return async (dispatch: any) => {
        API.post(`${endpoints.createTimeTable}/${id}/block`, data)
            .then((response) => {
                dispatch(createTimeTableBlockSuccess(history));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function createTimeTableBlockSuccess(history: any) {
    toast.success('Event created successfully');
    history.goBack();
    return {
        type: CREATE_TIME_TABLE_BLOCK_SUCCESS,
    };
}

export const editTimeTableBlockAPICall = (timeTableId: number, blockId: number, data: any, history: any) => {
    return async (dispatch: any) => {
        API.put(`${endpoints.createTimeTable}/${timeTableId}/block/${blockId}`, data)
            .then((response) => {
                dispatch(editTimeTableBlockSuccess(history));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function editTimeTableBlockSuccess(history: any) {
    toast.success('Edited Successfully!');
    history.goBack();
    return {
        type: EDIT_TIMETABLE_BLOCK_SUCCESS,
    };
}

export const deleteTimeTableBlockAPICall = (
    timeTableId: number,
    blockId: number,
    history: any,
    route_indicator: any
) => {
    return async (dispatch: Dispatch<any>) => {
        API.delete(`${endpoints.createTimeTable}/${timeTableId}/block/${blockId}`)
            .then((response: any) => {
                dispatch(deleteTimeTableBlockSuccess(history, route_indicator));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function deleteTimeTableBlockSuccess(history: any, route_indicator: any) {
    toast.success('Event deleted successfully!');
    if (route_indicator === 1) {
        history.push('/dashboard/time-tables');
    } else {
        history.goBack();
    }
    return {
        type: DELETE_TIMETABLE_BLOCK_SUCCESS,
    };
}

export const deleteSchoolTimeTable = (id: number) => {
    return async (dispatch: any) => {
        API.delete(`${endpoints.schoolTimeTable}/${id}`)
            .then((response) => {
                dispatch(deleteSchoolTimeTableSuccess());
                dispatch(getTimeTableAPIcall());
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function deleteSchoolTimeTableSuccess() {
    toast.success('Timetable deleted successfully!');
    return {
        type: DELETE_TIMETABLE_SUCCESS,
    };
}

export const getAllHomeworkOnDepartmentAPIcall = (departmentId: any, startDate: string, endDate: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(
            endpoints.department +
                `/${departmentId}/${endpoints.homeworkRecord}?startDate=${startDate}&endDate=${endDate}`
        )
            .then((res: any) => {
                dispatch(getAllHomeworkOnDepartmentRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllHomeworkOnDepartmentRes = (data: any) => {
    return {
        type: GET_ALL_HOMEWORK_ON_DEPARTMENT,
        payload: data,
    };
};

export const getAllFeedbacksOnDepartmentAPIcall = (departmentId: any, startDate: string, endDate: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(
            endpoints.department +
                `/${departmentId}/${endpoints.teacherFeedback}?startDate=${startDate}&endDate=${endDate}`
        )
            .then((res: any) => {
                dispatch(getAllFeedbacksOnDepartmentRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllFeedbacksOnDepartmentRes = (data: any) => {
    return {
        type: GET_ALL_FEEDBACK_ON_DEPARTMENT,
        payload: data,
    };
};



export const getMeritByDepartmentApiCall = (id: number)=>{
    return async (dispatch:any)=>{
        API.get(`${endpoints.allMeritSanction}?departmentId=${id}`)
        .then((response: any)=>{
            dispatch(getMeritByDepartmentSuccess(response.data.data))
        })
        .catch((error: any)=>{
            handleError(dispatch,error)
        })
    }
}

function getMeritByDepartmentSuccess(data: any){
    return{
        type : GET_DEPARTMENT_MERIT_LIST_SUCCESS,
        payload: data
    }
}

//department/1/attendance?startDate=2020-10-01&endDate=2020-11-30

export const getAllAttendanceOfDepartmentAPIcall = (departmentId: any, startDate: string, endDate: string) =>{
    return async (dispatch: any)=>{
        API.get(`${endpoints.department}/${departmentId}/attendance?startDate=${startDate}&endDate=${endDate}`)
        .then((response)=>{
            dispatch(getAllAttendanceOfDepartmentSuccess(response.data.data))
        })
        .catch((error)=>{
            handleError(dispatch,error)
        })
    }
}

function getAllAttendanceOfDepartmentSuccess(data: any){
    return{
        type :  GET_ALL_ATTENDANCE_DEPARTMENT,
        payload :  data
    }
}




export const getExamResultForDepartmentAPIcall = (id: number) =>{
    return async (dispatch: any)=>{
        API.get(`${endpoints.department}/${id}/${endpoints.examResult}`)
        .then((response)=>{
            dispatch(getExamResultForDepartmentSuccess(response.data.data))
        })
        .catch((error)=>{
            handleError(dispatch,error)
        })
    }
}

function getExamResultForDepartmentSuccess(data: any){
    return{
        type :  GET_EXAM_RESUT_DEPARTMENT,
        payload :  data
    }
}


