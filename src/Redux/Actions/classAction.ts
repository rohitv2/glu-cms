import { API } from '../../Utility/API';
import { endpoints, schoolTeacherEndpoints } from '../../Utility/endpoints';
import { spinner } from './uiAction';
import { handleError } from './errorHandler';
import { toast } from 'react-toastify';
import {
    CLASS_LIST,
    GET_ALL_YEAR_GROUP,
    SECTION_LIST,
    GET_ALL_FORM_GROUP_BY_ID,
    GET_TEACHER_CLASS_GROUPS,
    CLASS_GROUP_HOMEWORK,
    GET_ALL_STUDENT_CLASS_GROUP_ID,
    GET_ALL_ATTENDANCE_CLASS_GROUP,
    GET_EXAM_RESULT_CLASS_GROUP,
    GET_ALL_CLASS_GROUP_BY_SUBJECT_ID,
} from '../ActionTypes/classTypes';
import { appAction } from '../../Interfaces';
import { Dispatch } from 'react';

export const getallclassAPIcall = () => {
    return (dispatch: any) => {
        API.get(endpoints.class)
            .then((res) => {
                dispatch(classList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getallclassByIdAPIcall = (id: number | string) => {
    return (dispatch: any) => {
        API.get(`${endpoints.class}/${id}`)
            .then((res) => {
                dispatch(classList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const classList = (data: any): appAction => {
    return {
        type: CLASS_LIST,
        payload: data,
    };
};

export const addNewClassAPIcall = (data: any, callback: () => void) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endpoints.class, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Class Create Successfully.');
                callback();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const EditClassAPIcall = (data: any, id: number | string, callback: () => void) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endpoints.class}/${id}`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Class updated successfully.');
                callback();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteClassAPIcall = (clasname: string) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.singleClass}/${clasname}`)
            .then((res) => {
                toast.success('Class Deleted Successfully.');
                dispatch(getallclassAPIcall());
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllSectionAPIcall = () => {
    return (dispatch: any) => {
        API.get(endpoints.section)
            .then((res) => {
                dispatch(sectionListAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const sectionListAPIres = (data: any) => {
    return {
        type: SECTION_LIST,
        payload: data,
    };
};
export const addNewSectionAPIcall = (data: any, id: number, close: Function) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(`${endpoints.class}/${id}/sections`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Section Created Successfully.');
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const addBulkSectionAPIcall = (data: any, close: Function) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(`${endpoints.singleClass}`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Section Created Successfully.');
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteSectionAPIcall = (className: string, sectionName: string) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.singleClass}${className}/section/${sectionName}`)
            .then((res) => {
                toast.success('Section Deleted Successfully.');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllSectionByFromAndClassIdAPIcall = (sectionID: string, classId: string) => {
    return (dispatch: any) => {
        API.get(`section/${sectionID}/class/${classId}`)
            .then((res) => {
                dispatch(sectionListAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllYearGroup = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(endpoints.getAllYearGroup)
            .then((res) => {
                dispatch(allYearGroupRes(res.data.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const allYearGroupRes = (data: any) => {
    return {
        type: GET_ALL_YEAR_GROUP,
        payload: data,
    };
};

export const getAllFormGroupById = (id: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.getAllYearGroup}/${id}`)
            .then((res) => {
                dispatch(allFormGroupRes(res.data.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const allFormGroupRes = (data: any) => {
    return {
        type: GET_ALL_FORM_GROUP_BY_ID,
        payload: data,
    };
};

export const getallclassByFilterAPIcall = (classId: string, sectionId: string) => {
    return (dispatch: any) => {
        API.get(`${endpoints.class}?classId=${classId}&sectionId=${sectionId}`)
            .then((res) => {
                dispatch(classList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllClassGroupOfPerticularTeacher = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(schoolTeacherEndpoints.classGroup)
            .then((res: any) => {
                dispatch(getAllClassGroupRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllClassGroupRes = (data: any) => {
    return {
        type: GET_TEACHER_CLASS_GROUPS,
        payload: data,
    };
};

export const classGroupHomeworkCmsAPIcall = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.classGroupHomework}${id}/homework`)
            .then((res: any) => {
                dispatch(classGroupHomeworkcmsRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const classGroupHomeworkcmsRes = (data: any) => {
    return {
        type: CLASS_GROUP_HOMEWORK,
        payload: data,
    };
};

export const getAllStudentClassGroupIdAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.classGroupStudents}${id}/students`)
            .then((res) => {
                dispatch(getAllstudentClassGroupRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllstudentClassGroupRes = (data: any) => {
    return {
        type: GET_ALL_STUDENT_CLASS_GROUP_ID,
        payload: data,
    };
};

export const getAllStudentClassGroupAttendanceAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.classGroupAttendance}${id}`)
            .then((res) => {
                dispatch(getAllstudentClassGroupAttendanceRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllstudentClassGroupAttendanceRes = (data: any) => {
    return {
        type: GET_ALL_ATTENDANCE_CLASS_GROUP,
        payload: data,
    };
};

export const getClassGroupExamResultAPIcall = (classGroupId: string | number, termId: string | number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.classGroupStudents}${classGroupId}/exams?termId=${termId}`)
            .then((res) => {
                dispatch(getClassGroupExamResultRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getClassGroupExamResultRes = (data: any) => {
    return {
        type: GET_EXAM_RESULT_CLASS_GROUP,
        payload: data,
    };
};

export const getClassGroupAttendanceByDateFilter = (
    classGroupId: string | number,
    startDate: string,
    endDate: string
) => {
    return (dispatch: Dispatch<any>) => {
        API.get(endpoints.classGroupAttendance + `${classGroupId}?startDate=${startDate}&endDate=${endDate}`)
            .then((res: any) => {
                dispatch(getAllstudentClassGroupAttendanceRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllClassGroupBySubjectIdAPICall = (subjectId: string | number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(endpoints.schoolSubjectClassGroup + `${subjectId}`)
            .then((res: any) => {
                dispatch(getAllClassGroupBySubjectIdRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllClassGroupBySubjectIdRes = (data: any) => {
    return {
        type: GET_ALL_CLASS_GROUP_BY_SUBJECT_ID,
        payload: data,
    };
};
