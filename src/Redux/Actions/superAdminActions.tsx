import { API } from '../../Utility/API';
import { handleError } from './errorHandler';
import { superAdminendpoints } from '../../Utility/endpoints';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';

import {
    SCHOOL_LIST,
    VIDEO_LIST,
    ADMIN_TEACHER_LIST,
    ADMIN_STUDENT_LIST,
    ADMIN_PARENTS_LIST,
    ADMIN_ALL_USERS_COUNT,
    TEACHER_DETAILS_SUPER,
    STUDENT_DETAILS_SUPER,
    SCHOOL_DETAILS_SUPER,
    PARENT_DETAILS_SUPER,
} from '../ActionTypes/superAdminTypes';
import { Dispatch } from 'react';

export const getallUsersCountAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminendpoints.getAllUsersCount)
            .then((res) => {
                const userListArray = [];
                for (let [key, value] of Object.entries(res.data.data.userListCount)) {
                    if (key != 'guardians') {
                        userListArray.push({
                            email: key,
                            total: value,
                        });
                    }
                }
                userListArray.push({ email: 'videos', total: res.data.data.videos });
                dispatch(allUsersCount(userListArray));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getallSchoolAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminendpoints.getAllSchools)
            .then((res) => {
                dispatch(schoolList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getallVideoAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminendpoints.getAllVideos)
            .then((res) => {
                dispatch(videoList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getallStudentAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminendpoints.getAllStudents)
            .then((res) => {
                dispatch(adminStudentList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getallTeacherAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminendpoints.getAllTeachers)
            .then((res) => {
                dispatch(adminTeacherList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getallParentsAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminendpoints.getAllParents)
            .then((res) => {
                dispatch(adminParentsList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const addNewSchoolAPIcall = (data: any, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(superAdminendpoints.addSchool, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Invite Sent successfully.');
                dispatch(registerDataRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const activateDeactivateUser = (id: number, callback?: () => void) => {
    return (dispatch: any) => {
        API.put(superAdminendpoints.activateDeactivateSchool + '/' + id)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Status Changed Successfully.');
                if (callback) {
                    callback();
                }
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const activateDeactivateVideo = (id: number) => {
    return (dispatch: any) => {
        API.put(superAdminendpoints.activateDeactivateVideo + '/' + id)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('School Status Updated');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const activateDeactivateTeacher = (id: number) => {
    return (dispatch: any) => {
        API.put(superAdminendpoints.activateDeactivateTeacher + '/' + id)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Teacher Status Updated');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const schoolList = (data: any) => {
    return {
        type: SCHOOL_LIST,
        payload: data,
    };
};

export const videoList = (data: any) => {
    return {
        type: VIDEO_LIST,
        payload: data,
    };
};

export const adminTeacherList = (data: any) => {
    return {
        type: ADMIN_TEACHER_LIST,
        payload: data,
    };
};

export const adminStudentList = (data: any) => {
    return {
        type: ADMIN_STUDENT_LIST,
        payload: data,
    };
};

export const adminParentsList = (data: any) => {
    return {
        type: ADMIN_PARENTS_LIST,
        payload: data,
    };
};

export const allUsersCount = (data: any) => {
    return {
        type: ADMIN_ALL_USERS_COUNT,
        payload: data,
    };
};

export const teacherDetailSuperAdmin = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${superAdminendpoints.teacherDetails}${id}`)
            .then((res: any) => {
                dispatch(superAdminTeacherDetailsRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const superAdminTeacherDetailsRes = (data: any) => {
    return {
        type: TEACHER_DETAILS_SUPER,
        payload: data,
    };
};

export const studentDetailSuperAdmin = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${superAdminendpoints.studentDetails}${id}`)
            .then((res: any) => {
                dispatch(studentDetailSuperAdminRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentDetailSuperAdminRes = (data: any) => {
    return {
        type: STUDENT_DETAILS_SUPER,
        payload: data,
    };
};

export const schoolDetailSuperAdmin = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${superAdminendpoints.schoolDetails}/${id}`)
            .then((res: any) => {
                dispatch(schoolDetailSuperAdminRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const approveRejectTeacher = (id: any, data: any, history: any) => {
    return (dispatch: Dispatch<any>) => {
        API.put(`${superAdminendpoints.approveRejectTeacher}/${id}/verify`, data)
            .then((res: any) => {
                dispatch(teacherDetailSuperAdmin(id));
                // window.location.reload();
            })

            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const schoolDetailSuperAdminRes = (data: any) => {
    return {
        type: SCHOOL_DETAILS_SUPER,
        payload: data,
    };
};

export const parentDetailSuperAdmin = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${superAdminendpoints.parentDetails}/${id}`)
            .then((res: any) => {
                dispatch(parentDetailSuperAdminRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const parentDetailSuperAdminRes = (data: any) => {
    return {
        type: PARENT_DETAILS_SUPER,
        payload: data,
    };
};
