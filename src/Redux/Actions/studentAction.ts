import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import {
    STUDENT_INFO,
    STUDENT_DETAILS,
    STUDENT_SEARCH,
    STUDNET_ATTENDANCE,
    STUDENT_EXAM,
    STUDENT_HOMEWORK,
    STUDENT_TERM_RESULT,
    STUDENT_MORE_HOMEWORK,
    GET_ALL_STUDENT_BY_CLASS_GROUP_ID,
} from '../ActionTypes/studentTypes';
import { handleError } from './errorHandler';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';
import { NumberLocale } from 'yup';
import { Dispatch } from 'react';

export const getallStudentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endpoints.getAllStudents)
            .then((res) => {
                dispatch(studentInfo(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentInfo = (data: any) => {
    return {
        type: STUDENT_INFO,
        payload: data,
    };
};

export const addNewStudentAPIcall = (data: any, goBack?: () => void) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endpoints.student, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Students Added Successfully.');
                dispatch(registerDataRes(res.data.data));
                if (goBack) {
                    goBack();
                }
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteStudentAPIcall = (deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.student}/${deleteId}`)
            .then((res) => {
                console.log(res);
                toast.success('Student removed successfully.');
                dispatch(getallStudentAPIcall());
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const editStudentAPIcall = (data: any, editId: number, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endpoints.student}/${editId}`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("student's updated successfully.");
                setTimeout(() => {
                    history.push('/dashboard/students');
                }, 1000);
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getStudentDetailsAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.getStudentDetails}${id}`)
            .then((res) => {
                dispatch(studentDetailAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentDetailAPIres = (data: any) => {
    return {
        type: STUDENT_DETAILS,
        payload: data,
    };
};

export const searchStudentAPIcall = (data: any) => {
    return (dispatch: any) => {
        API.post(endpoints.searchStudent, data)
            .then((res) => {
                dispatch(searchStudentRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const searchStudentRes = (data: any) => {
    return {
        type: STUDENT_SEARCH,
        payload: data,
    };
};

export const studentAttDetailAPIcall = (id: number, startData: string, endDate: string) => {
    return (dispatch: any) => {
        API.get(`${endpoints.attendanceDetails}${id}?startDate=${startData}&endDate=${endDate}`)
            .then((res) => {
                dispatch(studentAttDetailsRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentAttDetailsRes = (data: any) => {
    return {
        type: STUDNET_ATTENDANCE,
        payload: data,
    };
};

export const studentHomeworkDetailsAPIcall = (id: NumberLocale) => {
    return (dispatch: any) => {
        API.get(`${endpoints.studentHomework}${id}`)
            .then((res) => {
                dispatch(studentHomeworkDetailsRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentHomeworkDetailsRes = (data: any) => {
    return {
        type: STUDENT_HOMEWORK,
        payload: data,
    };
};

export const studentExamDetailsAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.studentExam}${id}/exam`)
            .then((res) => {
                dispatch(studenExamDetailsRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studenExamDetailsRes = (data: any) => {
    return {
        type: STUDENT_EXAM,
        payload: data,
    };
};

export const studentTermResultAPIcall = (id: number, term: string) => {
    return (dispatch: any) => {
        API.get(`${endpoints.studentExam}${id}/term/${term}`)
            .then((res) => {
                dispatch(studentTermResultRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentTermResultRes = (data: any) => {
    return {
        type: STUDENT_TERM_RESULT,
        payload: data,
    };
};

export const studentSubjectHomeworkAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.studentSubjectHomework}${id}`)
            .then((res) => {
                const data = [];
                for (const [key, value] of Object.entries(res.data.data)) {
                    const obj = {
                        subjectName: key,
                        ...(value as any),
                    };
                    data.push(obj);
                }
                dispatch(studentMoreHomeworkDetails(data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentMoreHomeworkDetails = (data: any) => {
    return {
        type: STUDENT_MORE_HOMEWORK,
        payload: data,
    };
};
export const filterStudentAPIcall = (
    classId: any,
    sectionId: any,
    teacherId: string,
    departmentId: string,
    subjectId: string
) => {
    return (dispatch: any) => {
        API.get(
            `${endpoints.getAllStudents}/?classId=${classId}&sectionId=${sectionId}&teacherId=${teacherId}&departmentId=${departmentId}&subjectId=${subjectId}`
        )
            .then((res) => {
                console.log(res.data.data);
                dispatch(studentInfo(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllStudentByClassGroupIdAPIcall = (classGroupId: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(endpoints.schoolStudentClassGroup + classGroupId)
            .then((res) => {
                dispatch(getAllStudentByClassGroupIdRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllStudentByClassGroupIdRes = (data: any) => {
    return {
        type: GET_ALL_STUDENT_BY_CLASS_GROUP_ID,
        payload: data,
    };
};
