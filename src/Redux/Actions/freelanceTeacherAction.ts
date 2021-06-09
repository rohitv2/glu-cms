import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { API } from '../../Utility/API';
import { endpoints, freelanceTeacherEndpoints } from '../../Utility/endpoints';
import {
    FREELANCE_TEACHER_SUBJECT_LIST,
    FREELANCE_TEACHER_RECORD_CLASS,
    FREELANCE_TEACHER_RECORD_CLASS_SESSION_ID,
    FREELANCE_TEACHER_TOTAL_RECORD_CLASS,
    FREELANCE_TEACHER_UPCOMING_SESSION,
    FREELANCE_TEACHER_UPCOMING_CLASS_CALENDER,
    CLEAR_TUTOR_SUBJECT_LIST,
} from '../ActionTypes/freelanceTeacherTypes';
import { handleError } from './errorHandler';
import { spinner } from './uiAction';

export const getFreelanceTeacherSubject = () => {
    return (dispatch: Dispatch<any>) => {
        const envv = localStorage.getItem('toggleState');
        if (envv === 'isPersonal') {
            API.get(`${freelanceTeacherEndpoints.getSubject}`)
                .then((res) => {
                    dispatch(getFreelanceSubjectRes(res.data.data));
                })
                .catch((err) => {
                    handleError(dispatch, err);
                });
        }
        if (envv === 'isSchool') {
            API.get(`${freelanceTeacherEndpoints.getSchoolTeacherSubject}`)
                .then((res) => {
                    dispatch(getFreelanceSubjectRes(res.data.data));
                })
                .catch((err) => {
                    handleError(dispatch, err);
                });
        }
    };
};

export const getFreelanceSubjectRes = (data: any) => {
    return {
        type: FREELANCE_TEACHER_SUBJECT_LIST,
        payload: data,
    };
};

/* === freelance teacher record class api === */

export const freelanceTeacherRecordClassAPIcall = (data: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(freelanceTeacherEndpoints.recordClass, data)
            .then((res) => {
                dispatch(freelanceRecordClassSuccess(true));
                dispatch(freelanceRecordClassSessionId(res.data.data));
                dispatch(spinner(false));
                toast.success('Record class saved.');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const freelanceTeacherSetClassAPIcall = (data: any, goBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(freelanceTeacherEndpoints.getAllSession, data)
            .then((res) => {
                dispatch(freelanceSetClassSuccess(true));
                dispatch(freelanceSetClassSessionId(res.data.data));
                dispatch(spinner(false));
                toast.success('Class saved successfully.');
                goBack();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const freelanceTeacherUpdateClassAPIcall = (id: number, endpoint: string, data: any, goBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        const envv = localStorage.getItem('toggleState');

        API.put(`${endpoint}/${id}`, data)
            .then((res) => {
                dispatch(freelanceSetClassSuccess(true));
                dispatch(freelanceSetClassSessionId(res.data.data));
                dispatch(spinner(false));
                toast.success('Class updated successfully.');
                goBack();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

/* === freelance teacher record class api ===   */
export const freelanceTeacherUpdateRecordClassAPIcall = (data: any, id: string, callBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        const envv = localStorage.getItem('toggleState');
        if (envv === 'isSchool') {
            API.put(`${freelanceTeacherEndpoints.recordClass}/${id}/?type=School`, data)
                .then((res) => {
                    dispatch(freelanceRecordClassSuccess(true));
                    dispatch(freelanceRecordClassSessionId(res.data.data));
                    dispatch(spinner(false));
                    if (callBack) {
                        callBack();
                    }
                })
                .catch((err) => {
                    handleError(dispatch, err);
                });
        }
        if (envv === 'isPersonal') {
            API.put(`${freelanceTeacherEndpoints.recordClass}/${id}/?type=Freelancer`, data)
                .then((res) => {
                    dispatch(freelanceRecordClassSuccess(true));
                    dispatch(freelanceRecordClassSessionId(res.data.data));
                    dispatch(spinner(false));
                    if (callBack) {
                        callBack();
                    }
                })
                .catch((err) => {
                    handleError(dispatch, err);
                });
        }
    };
};

export const freelanceRecordClassSuccess = (data: boolean | null) => {
    return {
        type: FREELANCE_TEACHER_RECORD_CLASS,
        payload: data,
    };
};

export const freelanceRecordClassSessionId = (data: any) => {
    return {
        type: FREELANCE_TEACHER_RECORD_CLASS_SESSION_ID,
        payload: data,
    };
};

export const freelanceSetClassSuccess = (data: boolean | null) => {
    return {
        type: 'FREELANCE_TEACHER_SET_CLASS',
        payload: data,
    };
};

export const freelanceSetClassSessionId = (data: any) => {
    return {
        type: 'FREELANCE_TEACHER_RECORD_CLASS_SESSION_ID',
        payload: data,
    };
};

/* === freelance teacher record class api === */

export const getAllFreelanceRecordedClassAPIcall = (pageNo: number) => {
    return (dispatch: Dispatch<any>, getState: any) => {
        dispatch(spinner(true));
        const envv = localStorage.getItem('toggleState');
        const { freelanceTeacherReducer } = getState();
        const { totalRecordedClass } = freelanceTeacherReducer;
        if (envv === 'isSchool') {
            API.get(`${freelanceTeacherEndpoints.recordClass}/?type=School&page=${pageNo}&perPage=16`)
                .then((res) => {
                    if (totalRecordedClass) {
                        if (totalRecordedClass.hasOwnProperty('TeacherLoggedInSessions')) {
                            const data = {
                                AllSchoolSessions: [
                                    ...totalRecordedClass.AllSchoolSessions,
                                    ...res.data.data.AllSchoolSessions,
                                ],
                                TeacherLoggedInSessions: [
                                    ...totalRecordedClass.TeacherLoggedInSessions,
                                    ...res.data.data.TeacherLoggedInSessions,
                                ],
                                schoolSessionCount: { count: 0 },
                                teacherSessionCount: { count: 0 },
                            };
                            data.schoolSessionCount = res.data.data.schoolSessionCount;
                            data.teacherSessionCount = res.data.data.teacherSessionCount;
                            dispatch(freelanceRecordClassRes(data));
                        }
                    } else {
                        dispatch(freelanceRecordClassRes(res.data.data));
                    }
                    dispatch(spinner(false));
                })
                .catch((err) => {
                    handleError(dispatch, err);
                });
        } else {
            API.get(`${freelanceTeacherEndpoints.recordClass}/?type=Freelancer&page=${pageNo}&perPage=16`)
                .then((res) => {
                    if (totalRecordedClass) {
                        const data = [...totalRecordedClass, ...res.data.data];
                        dispatch(freelanceRecordClassRes(data));
                    } else {
                        dispatch(freelanceRecordClassRes(res.data.data));
                    }

                    dispatch(spinner(false));
                })
                .catch((err) => {
                    handleError(dispatch, err);
                });
        }
    };
};

export const freelanceRecordClassRes = (data: any) => {
    return {
        type: FREELANCE_TEACHER_TOTAL_RECORD_CLASS,
        payload: data,
    };
};

export const getAllFreelanceAllsessionAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.get(`${freelanceTeacherEndpoints.getAllSession}`)
            .then((res) => {
                dispatch(freelanceUpcomingSessionRes(res.data.data));
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const freelanceUpcomingSessionRes = (data: any) => {
    return {
        type: FREELANCE_TEACHER_UPCOMING_SESSION,
        payload: data,
    };
};

export const getAllFreelanceAllsessionOnDateFilterAPIcall = (date: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.get(`${freelanceTeacherEndpoints.getAllSession}?date=${date}`)
            .then((res) => {
                dispatch(freelanceUpcomingCalenderRes(res.data.data));
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const freelanceUpcomingCalenderRes = (data: any) => {
    return {
        type: FREELANCE_TEACHER_UPCOMING_CLASS_CALENDER,
        payload: data,
    };
};

export const clearTutorSubjectList = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: CLEAR_TUTOR_SUBJECT_LIST,
        });
    };
};

export const getTeacherAllsessionOnDateFilterAPIcall = (date: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.get(`${freelanceTeacherEndpoints.techerSession}?date=${date}`)
            .then((res) => {
                dispatch(freelanceUpcomingCalenderRes(res.data.data));
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

/* === freelance teacher record class api === */
