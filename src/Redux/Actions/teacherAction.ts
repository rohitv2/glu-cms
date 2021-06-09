import { API, proxy } from '../../Utility/API';
import { endpoints, freelanceTeacherEndpoints, schoolTeacherEndpoints } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import floor from 'lodash/floor';
// import { dataToSuggestion } from '../../Helper/tutor/suggestion';

import {
    TEACHER_LIST,
    TEACHER_DETAILS,
    DELETE_EDUCATION,
    DELETE_EXPERIENCE,
    ADD_TEACHER_SKILL,
    GET_TEACHER_SKILLS,
    GET_TEACHER_EXPERIENCE,
    GET_TEACHER_EDUCATION,
    GET_TEACHER_HOMEWORK,
    GET_TEACHER_HOMEWORK_COUNT,
    GET_TEACHER_RECOMMENDATION,
    GET_TEACHER_STUDENT_LIKE,
    POST_TEACHER_RECOMMENDATION,
    GET_TEACHER_RECOMMENDATION_COUNT,
    POST_TEACHER_HOMEWORK,
    DELETE_SKILL,
    ADD_DETAILS,
    ADD_DETAILS2,
    INDIVIDUAL_HOMEWORK,
    GET_STUDENT_HOMEWORK,
    GET_TUTOR_AVAILABILITY,
    TEACHER_EXAM_LIST_ALL,
    GET_TUTOR_DAY_OFF,
    DELETE_TUTOR_AVAILABILITY,
    CREATE_TUTOR_AVAILABILITY,
    ADD_TUTOR_DAY_OFF,
    DELETE_TUTOR_DAY_OFF,
    GET_TEACHER_FEES,
    REVIEWS_PENDING,
    REVIEWS_SUCCESS,
    TEACHER_SUBJECT,
    TEACHER_SUBJECT_PENDING,
    FILTER_EXAM_LIST_SUCCESS,
    FILTER_EXAM_LIST_PENDING,
    FILTER_EXAM_LIST_FAILURE,
    SUBMIT_REVIEW_CHALLENGE_PENDING,
    SUBMIT_REVIEW_CHALLENGE_SUCCESS,
    REVIEWS_EMPTY_SUCCESS,
    SET_REVIEWS_FILTERS,
    SET_REVIEWS_FILTERS_PENDING,
    SET_REVIEWS_FILTERS_SUCCESS,
    STUDENT_NAME_SUGGESTION_SUCCESS,
    STUDENT_NAME_SUGGESTION_PENDING,
    DELETE_TEACHER_RECOMENDATION,
    SINGLE_RECO,
    TEACHER_SCHOOL_INFO,
    CLEAR_TEACHER_DATA,
    SALES_PENDING,
    SALES_SUCCESS,
    DELETE_CLASS_TEACHER,
    STUDENT_TIMETABLE_PENDING,
    STUDENT_TIMETABLE_SUCCESS,
    STUDENT_TIMETABLE_ERROR,
    EDIT_STUDENT_COMMENT_PENDING,
    EDIT_STUDENT_COMMENT_SUCCESS,
    GET_TUTOR_TIMETABLE_PENDING,
    GET_TUTOR_TIMETABLE_SUCCESS,
    GET_TUTOR_TIMETABLE_FAILURE,
    GET_TERM_LIST_PENDING,
    GET_TERM_LIST_SUCCESS,
    SUBMIT_EXAM_INFO_PENDING,
    SUBMIT_EXAM_INFO_SUCCESS,
    SUBMIT_EXAM_INFO_FAILURE,
    SESSION_COUNT_PENDING,
    SESSION_COUNT_SUCCESS,
    EDIT_STUDENT_RESULT_FAILURE,
    EDIT_STUDENT_RESULT_PENDING,
    EDIT_STUDENT_RESULT_SUCCESS,
    GET_INDIVIDUAL_EXAM_DETAIL_PENDING,
    GET_INDIVIDUAL_EXAM_DETAIL_SUCCESS,
    UPDATE_EXAM_PENDING,
    UPDATE_EXAM_SUCCESS,
    ADD_STUDENT_SUCCESS,
    REMOVE_EXAM_STUDENT_PENDING,
    REMOVE_EXAM_STUDENT_SUCCESS,
    DELETE_TUROR_EXAM_PENDING,
    DELETE_TUROR_EXAM_SUCCESS,
    GET_STUDENT_EXAM_DATA_PENDING,
    GET_STUDENT_EXAM_DATA_SUCCESS,
    SCHOOL_SESSION_COUNT_SUCCESS,
} from '../ActionTypes/teacherTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';
import { studentInfo } from './studentAction';
import { AppThunk } from './types';
import { LatestReviewCardElement, ReviewCardElement } from '../../Containers/Pages/ReviewsPageContainer/types';
import {
    dataToLatestReviewCard,
    dataToReviewCards,
    FILTER_FROM,
    FILTER_TO,
    sortByDate,
} from '../../Helper/tutor/reviews';
import { SubmitChallengeForm } from '../../Interfaces/tutor/forms';
import { getCurrentDateString, getEndOfMonth, getStartOfMonth } from '../../Helper/date';
import { Statistic } from '../../Containers/Pages/types';
import { dataToClass, dataToOverall, dataToTutor } from '../../Helper/tutor/sales';
// import data from '../../components/Notifications/data';
import { Dispatch } from 'react';
import Axios from 'axios';
import { zoomBaseUrl, zoomEndpoints, zoomJWTtoken, zoomUserId } from '../../Utility/zoom';
import { GET_ALL_TEACHER_LIKE_SEARCH } from '../ActionTypes/classTypes';

export const getallTeacherAPIcall = () => {
    return (dispatch: any) => {
        API.get(endpoints.teacher)
            .then((res) => {
                dispatch(teacherList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const teacherList = (data: any) => {
    return {
        type: TEACHER_LIST,
        payload: data,
    };
};
export const addNewTeacherAPIcall = (data: any, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endpoints.teacher, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("Teacher's added successfully.");
                dispatch(registerDataRes(res.data.data));
                setTimeout(() => {
                    // history.push('/dashboard/teachers');
                }, 1000);
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const editTeacherAPIcall = (data: any, editId: number, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endpoints.teacher}/${editId}`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("Teacher's updated successfully.");
                setTimeout(() => {
                    history.push('/dashboard/teachers');
                }, 1000);
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
// export const getTeacherSkills = () => {
//     return (dispatch: any) => {
//         API.get(endpoints.getSkill)
//             .then((res) => {
//                 dispatch(getSkillAction(res.data.Skills));
//             })
//             .catch((err) => {
//                 handleError(dispatch, err);
//             });
//     };
// };
export const getTeacherSkills = () => {
    return (dispatch: any) => {
        API.get(endpoints.teahcerSkill)
            .then((res) => {
                dispatch(getSkillAction(res.data.data[0].Skills));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const deleteTeacherAPIcall = (deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endpoints.teacher}/${deleteId}`)
            .then((res) => {
                toast.success('Teacher removed successfully.');
                dispatch(getallTeacherAPIcall());
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getSkillAction = (data: any) => {
    return {
        type: GET_TEACHER_SKILLS,
        payload: data,
    };
};

export const getTeacherDetailsAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.teacher}/${id}`)
            .then((res) => {
                dispatch(teacherDetailAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherDetailAPIres = (data: any) => {
    return {
        type: TEACHER_DETAILS,
        payload: data,
    };
};

export const clearTeacher = () => {
    return {
        type: CLEAR_TEACHER_DATA,
    };
};
export const clearTeacherDetails = () => {
    return async (dispatch: any) => {
        try {
            dispatch(clearTeacher());
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeachersUpcomingClasses = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const techerUpcomingClasses = await API.get(endpoints.teacherUpcomingClass);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Add Skill
export const addSkill = (data: any) => {
    return {
        type: ADD_TEACHER_SKILL,
        payload: data,
    };
};

export const getTeacherExperience = () => {
    return (dispatch: any) => {
        API.get(endpoints.techerExp)
            .then((res) => {
                dispatch(getTeacherExpData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherExpData = (data: any) => {
    return {
        type: GET_TEACHER_EXPERIENCE,
        payload: data,
    };
};

export const addTeacherSkill = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endpoints.teahcerSkill, data);
            if (res.data.success) dispatch(addSkill(data[0]));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherExperienceApiCall = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endpoints.techerExp);
            dispatch(getExperienceList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherEducationApiCall = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endpoints.teahcerEducation);
            dispatch(getEducationList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getExperienceList = (data: any) => {
    return {
        type: GET_TEACHER_EXPERIENCE,
        payload: data,
    };
};
export const getTeacherEducation = () => {
    return (dispatch: any) => {
        API.get(endpoints.teacherEdu)
            .then((res) => {
                dispatch(getTeacherEduData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherEduData = (data: any) => {
    return {
        type: GET_TEACHER_EDUCATION,
        payload: data,
    };
};
export const getTeacherHomework = () => {
    return (dispatch: any) => {
        API.get(endpoints.teacherHomework)
            .then((res) => {
                dispatch(getTeacherHomeworkData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherHomeworkData = (data: any) => {
    return {
        type: GET_TEACHER_HOMEWORK,
        payload: data,
    };
};
export const getTeacherHomeworkCount = () => {
    return (dispatch: any) => {
        API.get(endpoints.teacherHomeworkCount)
            .then((res) => {
                dispatch(getTeacherHomeworkCountData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherHomeworkCountData = (data: any) => {
    return {
        type: GET_TEACHER_HOMEWORK_COUNT,
        payload: data,
    };
};
export const getTeacherRecommendation = () => {
    return (dispatch: any) => {
        API.get(endpoints.teacherRecommendation)
            .then((res) => {
                dispatch(getTeacherRecommendationData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherRecommendationData = (data: any) => {
    return {
        type: GET_TEACHER_RECOMMENDATION,
        payload: data,
    };
};
export const getEducationList = (data: any) => {
    return {
        type: GET_TEACHER_EDUCATION,
        payload: data,
    };
};


// Delete education
export const deleteEducation = (data: any) => {
    return {
        type: DELETE_EDUCATION,
        payload: data,
    };
};

export const deleteTeacherEducationApiCall = (id: number) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endpoints.teahcerEducation}/${id}`);

            if (res.data.success) dispatch(deleteEducation(id));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Delete experience
export const deleteExperience = (data: any) => {
    return {
        type: DELETE_EXPERIENCE,
        payload: data,
    };
};

export const deleteTeacherExperienceApiCall = (deleteId: number) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endpoints.techerExp}/${deleteId}`);

            if (res.data.success) dispatch(deleteExperience(deleteId));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const addTeacherEducationApiCall = (data: any, history: any) => {
    return async (dispatch: any) => {
        try {
            await API.post(`${endpoints.teahcerEducation}`, data);

            history.push(`/tutor/tutor-edit`);
            // dispatch(getExperienceList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const addTeacherExperienceApiCall = (data: any, history: any) => {
    return async (dispatch: any) => {
        try {
            await API.post(`${endpoints.techerExp}`, data);

            history.push(`/tutor/tutor-edit`);
            // dispatch(getExperienceList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherStudentLike = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endpoints.teacherStudentLike, data);

            dispatch(getTeacherStudentLikeData(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const getTeacherStudentLikeData = (data: any) => {
    return {
        payload: data,
        type: GET_TEACHER_STUDENT_LIKE,
    };
};
export const postTeacherRecommendation = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endpoints.teacherRecommendation, data);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherEducationById = (id: any) => {
    return async (dispatch: any) => {
        try {
            const data = await API.get(`${endpoints.teahcerEducation}/${id}`);

            return data.data.data;
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const editEducationApiCall = (id: any, data: any, history: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endpoints.teacherEdu}/${id}`, data);
            if (res.data.success) history.push('/tutor/tutor-edit');
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherExperienceById = (id: any) => {
    return async (dispatch: any) => {
        try {
            const data = await API.get(`${endpoints.techerExp}/${id}`);

            return data.data.data;
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const editExperienceApiCall = (id: any, data: any, history: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endpoints.techerExp}/${id}`, data);
            if (res.data.success) history.push('/tutor/tutor-edit');
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const postTeacherRecommendationData = (data: any) => {
    return {
        type: POST_TEACHER_RECOMMENDATION,
        payload: data,
    };
};
export const getTeacherRecommendationCount = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endpoints.teacherRecommendationCount);
            dispatch(getTeacherRecommendationCountData(res.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const getTeacherRecommendationCountData = (data: any) => {
    return {
        type: GET_TEACHER_RECOMMENDATION_COUNT,
        payload: data,
    };
};

// Create teacher homework
export const postTeacherHomework = (data: any, history?: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endpoints.teacherHomework, data)
            .then((res) => {
                dispatch(spinner(false));
                dispatch(postTeacherHomeworkData(res.data));
            })
            .then(() => {
                dispatch(spinner(false));
                if (history) {
                    history.goBack();
                }
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const postTeacherHomeworkData = (data: any) => {
    return {
        type: POST_TEACHER_HOMEWORK,
        payload: data,
    };
};

// Delete skill by id
export const deleteSkillById = (id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endpoints.teahcerSkill}/${id}`);

            if (res.data.success) dispatch(deleteSkill(id));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const deleteSkill = (data: any) => {
    return {
        type: DELETE_SKILL,
        payload: data,
    };
};

// Get teacher Detail
export const getTeacherDetails = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endpoints.userDetails}`);

            if (res.data.success) dispatch(addDetails(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherDetails2 = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endpoints.userDetails}`);

            if (res.data.success) dispatch(addDetails2(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const addDetails = (data: any) => {
    return {
        type: ADD_DETAILS,
        payload: data,
    };
};

export const addDetails2 = (data: any) => {
    return {
        type: ADD_DETAILS2,
        payload: data,
    };
};

//cms get all student list for teacher
export const getAllStudentTeacherAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endpoints.teacher}/${id}/students`)
            .then((res) => {
                dispatch(studentInfo(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

// Get homework by id
export const homeworkById = (data: any) => {
    return {
        type: INDIVIDUAL_HOMEWORK,
        payload: data,
    };
};

export const getHomeworkById = (id: number | string) => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endpoints.teacherHomework}/${id}`);

            dispatch(homeworkById(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Get homework by id
// export const homeworkById = (data: any) => {
//     return {
//         type: INDIVIDUAL_HOMEWORK,
//         payload: data,
//     };
// };

export const deleteHomeworkById = (id: any, history: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endpoints.markStudentHomework}/${id}`);

            history.goBack();
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Set homework by teacher actions
// export const homeworkById = (data: any) => {
//     return {
//         type: INDIVIDUAL_HOMEWORK,
//         payload: data,
//     };
// };

export const uploadResourceAction = (fileName: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endpoints.fileUpload}${fileName}`);
            return res.data.data;
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Set homework by teacher actions
// export const homeworkById = (data: any) => {
//     return {
//         type: INDIVIDUAL_HOMEWORK,
//         payload: data,
//     };
// };

export const uploadUserProfilePhotoAction = (fileName: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endpoints.fileUpload}${fileName}`);
            return res.data.data;
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Mark student homework
export const markStudentHomework = (data: any) => {
    return {
        type: GET_STUDENT_HOMEWORK,
        payload: data,
    };
};

export const markStudentHomeworkAction = (studentId: any, homeworkId: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endpoints.markStudentHomework}/${homeworkId}/${studentId}`);
            dispatch(markStudentHomework(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const markComplete = (studentId: any, homeworkId: any, boolData: boolean, comment: any, history: any) => {
    return async (dispatch: any) => {
        try {
            let data;
            if (comment) {
                data = {
                    isComplete: boolData,
                    comment: comment,
                };
            } else if (!comment) {
                data = {
                    isComplete: boolData,
                };
            }
            await API.put(`${endpoints.markStudentHomework}/${homeworkId}/${studentId}`, data);
            history.goBack();
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

///////////////////////////////////////////////////////////////////////////////////////////////
//Get tutor availability
export const getTutorAvailability = (data: any) => {
    return {
        type: GET_TUTOR_AVAILABILITY,
        payload: data,
    };
};

export const getTutorAvailabilityAction = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endpoints.getTutorAvailability);

            dispatch(getTutorAvailability(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

//Update tutor availability
// export const updateTutorAvailability = (data: any) => {
//     return {
//         type: UPDATE_TUTOR_AVAILABILITY,
//         payload: data,
//     };
// };

export const updateTutorAvailibilityAction = (data: any, id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endpoints.getTutorAvailability}/${id}`, data);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


//Create tutor availability
export const createTutorAvailability = (data: any) => {
    return {
        type: CREATE_TUTOR_AVAILABILITY,
        payload: data,
    };
};

export const createTutorAvailibilityAction = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endpoints.getTutorAvailability, data);
            if (res.status === 200) {
                dispatch(createTutorAvailability(res.data.data));
            }
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


//Delete tutor availability
export const deleteTutorAvailability = (data: any) => {
    return {
        type: DELETE_TUTOR_AVAILABILITY,
        payload: data,
    };
};

export const deleteTutorAvailibilityAction = (id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endpoints.getTutorAvailability}/${id}`);

            dispatch(deleteTutorAvailability(id));
            return res;
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


//Edit teacher homework
export const editTeacherHomework = (data: any, id: any, history: any) => {
    return (dispatch: any) => {
        // delete data.students;
        dispatch(spinner(true));
        API.put(`${endpoints.markStudentHomework}/${id}`, data)
            .then(() => {
                history.goBack();
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
// export const editTeacherHomeworkData = (data: any) => {
//     return {
//         type: POST_TEACHER_HOMEWORK,
//         payload: data,
//     };
// };

//Get tutor day off
export const tutorDayOff = (data: any) => {
    return {
        type: GET_TUTOR_DAY_OFF,
        payload: data,
    };
};

export const getTeacherDayOffAction = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endpoints.getTutorDayOff);
            dispatch(tutorDayOff(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


// Get tutor day off
export const addTutorDayOff = (data: any) => {
    return {
        type: ADD_TUTOR_DAY_OFF,
        payload: data,
    };
};

export const addOffDayAction = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endpoints.getTutorDayOff, data);

            dispatch(addTutorDayOff(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


// Get tutor day off
export const deleteDayOff = (data: any) => {
    return {
        type: DELETE_TUTOR_DAY_OFF,
        payload: data,
    };
};

export const deleteTutorDayOff = (id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endpoints.getTutorDayOff}/${id}`);

            dispatch(deleteDayOff(id));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


// Get tutor per hour fees
export const getTeacherFees = (data: any) => {
    return {
        type: GET_TEACHER_FEES,
        payload: data,
    };
};

export const getTeacherFeesAction = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endpoints.getTutorFees);

            dispatch(getTeacherFees(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


// Get tutor per hour fees
// export const getTeacherFees = (data: any) => {
//     return {
//         type: GET_TEACHER_FEES,
//         payload: data,
//     };
// };

export const updateTeacherFeeAction = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(endpoints.getTutorFees, data);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


// Update tutor detail
// export const updateTutorDetail = (data: any) => {
//     return {
//         type: GET_TEACHER_FEES,
//         payload: data,
//     };
// };

export const updateTutorDetailAction = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endpoints.userDetails}`, data);

            window.location.reload();
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

function setReviewsPending() {
    return {
        type: REVIEWS_PENDING,
    };
}

function reviewsEmptySuccess() {
    return {
        type: REVIEWS_EMPTY_SUCCESS,
    };
}

function reviewsSuccess(
    data: ReviewCardElement[],
    latestReview: LatestReviewCardElement,
    classAverage: string,
    tutorAverage: string,
    count: number
) {
    return {
        type: REVIEWS_SUCCESS,
        data,
        latestReview,
        classAverage,
        tutorAverage,
        count,
    };
}

export function fetchReviews(id: number): AppThunk {
    return (dispatch) => {
        dispatch(setReviewsPending());
        API.get(endpoints.reviews + id + `?from=${FILTER_FROM}&to=${FILTER_TO}`).then(({ data: { success, data } }) => {
            if (success) {
                const { result3, classAvgRating, tutorAvgRating } = data;
                const count = result3.length;
                if (!count) {
                    dispatch(reviewsEmptySuccess());
                }
                if (count) {
                    const sortedData = sortByDate(result3);
                    dispatch(
                        reviewsSuccess(
                            dataToReviewCards(sortedData),
                            dataToLatestReviewCard(sortedData[0]),
                            `${floor(classAvgRating, 2)}/5`,
                            `${floor(tutorAvgRating, 2)}/5`,
                            count
                        )
                    );
                }
            }
        });
    };
}

export function getTutorSubjectList(): AppThunk {
    return (dispatch) => {
        dispatch(setTeacherSubjectsPending());
        API.get(endpoints.getTeacherSubject).then(({ data: { success, data } }) => {
            if (success && data.length) {
                dispatch(teacherSubjectList(data));
            }
        });
    };
}

export const teacherSubjectList = (data: any) => {
    return {
        type: TEACHER_SUBJECT,
        payload: data,
    };
};

function setTeacherSubjectsPending() {
    return {
        type: TEACHER_SUBJECT_PENDING,
    };
}

export const getTutorExamList = () => {
    return async (dispatch: any) => {
        API.get(endpoints.getAllTeacherExamList)
            .then((ress) => {
                dispatch(tutorExamList(ress.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const tutorExamList = (data: any) => {
    return {
        type: TEACHER_EXAM_LIST_ALL,
        payload: data,
    };
};

export function filterExamList(filter: any): AppThunk {
    return (dispatch) => {
        filter &&
            API.get(`${endpoints.getTeacherFilteredSubject}${filter.value}`)
                .then(({ data: { success, data } }) => {
                    if (success) {
                        dispatch(filterExamListSuccess(data, filter.value));
                    }
                })
                .catch((error) => {
                    dispatch(filterExamListFailure());
                });
    };
}

export function fetchFilteredExamList(filter: any): AppThunk {
    return async (dispatch) => {
        dispatch(filterExamListPending());
        if (filter) {
            dispatch(filterExamList(filter));
        } else {
            dispatch(getTutorExamList());
        }
    };
}

function filterExamListPending() {
    return {
        type: FILTER_EXAM_LIST_PENDING,
    };
}

function filterExamListSuccess(data: any[], value: any) {
    return {
        type: FILTER_EXAM_LIST_SUCCESS,
        payload: data,
        filterValue: value,
    };
}

function filterExamListFailure() {
    toast.error('something went wrong!');
    return {
        type: FILTER_EXAM_LIST_FAILURE,
    };
}

export function setSubmitPreviewChallengePending() {
    return {
        type: SUBMIT_REVIEW_CHALLENGE_PENDING,
    };
}

export function submitReviewChallengeSuccess() {
    return {
        type: SUBMIT_REVIEW_CHALLENGE_SUCCESS,
    };
}

export function fetchSubmitReviewChallenge(id: number, data: SubmitChallengeForm, cb: () => void): AppThunk {
    return (dispatch) => {
        dispatch(setSubmitPreviewChallengePending());
        API.put(endpoints.reviewChallenge + id, data).then(({ data: { success } }) => {
            if (success) {
                dispatch(submitReviewChallengeSuccess());
                cb();
            }
        });
    };
}

function setReviewsFilters(from: string, to: string) {
    return {
        type: SET_REVIEWS_FILTERS,
        from,
        to,
    };
}

function setReviewsFiltersPending() {
    return {
        type: SET_REVIEWS_FILTERS_PENDING,
    };
}

function setReviewsFiltersSuccess(data: ReviewCardElement[]) {
    return {
        type: SET_REVIEWS_FILTERS_SUCCESS,
        data,
    };
}

export function fetchReviewsFilters(id: number, from: string, to: string): AppThunk {
    return (dispatch) => {
        dispatch(setReviewsFilters(from, to));
        dispatch(setReviewsFiltersPending());
        API.get(
            endpoints.reviews +
                `${id}?from=${getStartOfMonth(from).toISOString()}&to=${getEndOfMonth(to).toISOString()}`
        ).then(({ data: { success, data } }) => {
            if (success) {
                dispatch(setReviewsFiltersSuccess(dataToReviewCards(data.result3)));
            }
        });
    };
}

export const getSudentNameSuggestions = (classGroupId: string, name: string) => {
    return async (dispatch: any) => {
        dispatch(setStudentNameSuggestionPending());
        API.get(`${endpoints.getSuggestedStudent}${classGroupId}?searchKey=${name}`).then((response) => {
            let structuredData = response.data.data;
            dispatch(setSuggestionList(structuredData));
        });
    };
};

export function setSuggestionList(data: any[]) {
    return {
        type: STUDENT_NAME_SUGGESTION_SUCCESS,
        payload: data,
    };
}

export function setStudentNameSuggestionPending() {
    return {
        type: STUDENT_NAME_SUGGESTION_PENDING,
    };
}

// Update tutor profile image
// export const updateTutorDetail = (data: any) => {
//     return {
//         type: GET_TEACHER_FEES,
//         payload: data,
//     };
// };

export const profileUpload2Action = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endpoints.uploadFileName}`, data);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


// Update tutor profile image
// export const updateTutorDetail = (data: any) => {
//     return {
//         type: GET_TEACHER_FEES,
//         payload: data,
//     };
// };

export const editOffDayAction = (data: any, id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endpoints.getTutorDayOff}/${id}`, data);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};


function setSalesPending() {
    return {
        type: SALES_PENDING,
    };
}

function salesSuccess(overall: Statistic, classes: Statistic, tutor: Statistic, isEmpty: boolean) {
    return {
        type: SALES_SUCCESS,
        overall,
        classes,
        tutor,
        isEmpty,
    };
}

export function fetchSales(): AppThunk {
    return (dispatch) => {
        dispatch(setSalesPending());
        API.get(endpoints.teacherSales).then(({ data: { success, data } }) => {
            if (success) {
                const { overall, class: classes, tutor } = data;
                const isEmpty = !overall.studentAverage && !overall.salesAverage;
                dispatch(salesSuccess(dataToOverall(overall), dataToClass(classes), dataToTutor(tutor), isEmpty));
            }
        });
    };
}

export const deleteClassTeacher = (id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${freelanceTeacherEndpoints.deleteSession}/${id}`);
            dispatch(deleteDeleteClassTeacher(id));
            toast.success('Class Deleted successfully.');
            // dispatch(getallTeacherAPIcall());
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const deleteDeleteClassTeacher = (data: any) => {
    return {
        type: DELETE_CLASS_TEACHER,
        payload: data,
    };
};


// Update tutor profile image
const delRecomendation = (data: any) => {
    return {
        type: DELETE_TEACHER_RECOMENDATION,
        payload: data,
    };
};

export const deleteRecomendationAction = (id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endpoints.teacherRecommendation}/${id}`);

            dispatch(delRecomendation(id));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Update tutor profile image
const getSingleReco = (data: any) => {
    return {
        type: SINGLE_RECO,
        payload: data,
    };
};

export const getTeacherRecommendationById = (id: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endpoints.teacherRecommendation}/${id}`);

            dispatch(getSingleReco(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

// Update tutor profile image

export const editTeacherRecommendationById = (data: any, id: any, history: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endpoints.teacherRecommendation}/${id}`, data);

            history.push('/tutor/total-recommendations');
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const addStudentToRecomendation = (id: any, history: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(
                `https://glu-stage.antino.io/api/v1/teacher/recommend/${history.location.state}/student/${id}`
            );
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const deleteStudentFromReco = (id: any, recoId: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(
                `https://glu-stage.antino.io/api/v1/teacher/recommend/${recoId}/student/${id}`
            );
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

const teacherSchoolInfo = (data: any) => {
    return {
        type: TEACHER_SCHOOL_INFO,
        payload: data,
    };
};

export const getTutorSchoolInfo = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endpoints.teacherSchoolInfo);

            dispatch(teacherSchoolInfo(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const getStudentTimeTable = (id: any) => {
    return async (dispatch: any) => {
        dispatch(getStudentTimeTablePending());
        API.get(`${endpoints.getStudentTimeTable}${id}/${endpoints.students}`)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(getStudentTimeTableSuccess(data));
                }
            })
            .catch((error) => {
                dispatch(getStudentTimeTableError(error));
            });
    };
};

function getStudentTimeTableError(error: any) {
    toast.error('something went wrong');
    return {
        type: STUDENT_TIMETABLE_ERROR,
    };
}

function getStudentTimeTablePending() {
    return {
        type: STUDENT_TIMETABLE_PENDING,
    };
}

function getStudentTimeTableSuccess(data: any[]) {
    return {
        type: STUDENT_TIMETABLE_SUCCESS,
        payload: data,
    };
}

export const editStudentComment = (id: number, t_id: number, data: any, history: any, i) => {
    return async (dispatch: any) => {
        dispatch(editStudentCommentPending());

        API.put(`${endpoints.getStudentTimeTable}${t_id}/${endpoints.students}/${id}/`, data).then((response) => {
            dispatch(editStudentCommentSuccess(data, history, i));
            dispatch(getStudentTimeTable(t_id));
        });
    };
};

function editStudentCommentPending() {
    return {
        type: EDIT_STUDENT_COMMENT_PENDING,
    };
}

function editStudentCommentSuccess(data: any, history: any, i) {
    toast.success('Edited Successfully.');
    if (i === 1) {
        history.goBack();
    }
    return {
        type: EDIT_STUDENT_COMMENT_SUCCESS,
    };
}

/* ////////////////////////////////////////TUTOR TIMETABLE BY DATE////////////////////////// */
export const getTutorTimeTable = (date: any) => {
    return async (dispatch: any) => {
        dispatch(getTutorTimeTablePending());

        API.get(`${endpoints.getTurorTimeTable}${date}`)
            .then((response) => {
                dispatch(getTutorTimeTableSuccess(response.data.data));
            })
            .catch((error) => {
                dispatch(getTutorTimeTableFailure());
            });
    };
};

function getTutorTimeTablePending() {
    return {
        type: GET_TUTOR_TIMETABLE_PENDING,
    };
}

function getTutorTimeTableFailure() {
    toast.error('something went wrong!');
    return {
        type: GET_TUTOR_TIMETABLE_FAILURE,
    };
}

function getTutorTimeTableSuccess(data: any) {
    return {
        type: GET_TUTOR_TIMETABLE_SUCCESS,
        payload: data,
    };
}

function setSessionsCountPending() {
    return {
        type: SESSION_COUNT_PENDING,
    };
}

function sessionCountSuccess(sessionsCount: number, studentsCount: number, occupiedStudents: number) {
    return {
        type: SESSION_COUNT_SUCCESS,
        sessionsCount,
        studentsCount,
        occupiedStudents,
    };
}

export const getTermList = () => {
    return async (dispatch: any) => {
        dispatch(getTermListPending());
        API.get(endpoints.getTermList)
            .then((response) => {
                dispatch(getTermListSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getTermListPending() {
    return {
        type: GET_TERM_LIST_PENDING,
    };
}

function getTermListSuccess(data: any) {
    return {
        type: GET_TERM_LIST_SUCCESS,
        payload: data,
    };
}

////////////////////Create Exam & Submit Marks//////////////////////////
export const submitExamInfo = (data: any, history: any) => {
    return async (dispatch: any) => {
        dispatch(submitExamInfoPending());
        API.post(endpoints.tutorExam, data)
            .then((response) => {
                dispatch(submitExamInfoSuccess(history));
            })
            .catch((error) => {
                dispatch(submitExamInfoFailure());
            });
    };
};

function submitExamInfoPending() {
    return {
        type: SUBMIT_EXAM_INFO_PENDING,
    };
}

function submitExamInfoSuccess(history: any) {
    toast.success('Exam created successfully');
    setTimeout(history.goBack(), 5000);
    return {
        type: SUBMIT_EXAM_INFO_SUCCESS,
    };
}

function submitExamInfoFailure() {
    toast.error('Something Went Wrong');
    return {
        type: SUBMIT_EXAM_INFO_FAILURE,
    };
}
export function fetchSessionCount(): AppThunk {
    return (dispatch) => {
        dispatch(setSessionsCountPending());
        API.get(`${endpoints.tutorSessionsCount}?date=${getCurrentDateString()}`).then(
            ({ data: { success, data } }) => {
                if (success) {
                    const { OccupiedStudents, totalCount, totalSession } = data;
                    dispatch(sessionCountSuccess(totalSession, totalCount, OccupiedStudents));
                }
            }
        );
    };
}

////////////////////Get Individual Exam Details(students)//////////////////////////
export const getIndividulaExamDetails = (examId: number) => {
    return async (dispatch: any) => {
        dispatch(getIndividulaExamDetailsPending());
        API.get(`${endpoints.tutorExam}${examId}`)
            .then((response) => {
                dispatch(getIndividulaExamDetailsSuccess(response.data.data));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function getIndividulaExamDetailsPending() {
    return {
        type: GET_INDIVIDUAL_EXAM_DETAIL_PENDING,
    };
}

function getIndividulaExamDetailsSuccess(data: any) {
    return {
        type: GET_INDIVIDUAL_EXAM_DETAIL_SUCCESS,
        payload: data,
    };
}

export const editStudentResult = (data: any, examId: any, stId: any, history: any) => {
    return async (dispatch: any) => {
        dispatch(editStudentResultPending());
        API.put(`${endpoints.tutorExam}${examId}/${endpoints.students}/${stId}`, data)
            .then((response) => {
                dispatch(editStudentResultSuccess(history));
            })
            .catch((error) => {
                dispatch(editStudentResultFailure());
            });
    };
};

function editStudentResultPending() {
    return {
        type: EDIT_STUDENT_RESULT_PENDING,
    };
}

function editStudentResultSuccess(history: any) {
    toast.success('Edited Successfully');
    history.goBack();
    return {
        type: EDIT_STUDENT_RESULT_SUCCESS,
    };
}

function editStudentResultFailure() {
    toast.error('something went wrong');
    return {
        type: EDIT_STUDENT_RESULT_FAILURE,
    };
}

export const editExamDetails = (examId: number | string, data: any, history: any) => {
    return async (dispatch: any) => {
        dispatch(editExamDetailsPending());
        API.put(`${endpoints.tutorExam}${examId}`, data)
            .then((response) => {
                dispatch(editExamDetailsSuccess(history));
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function editExamDetailsPending() {
    return {
        type: UPDATE_EXAM_PENDING,
    };
}

function editExamDetailsSuccess(history: any) {
    toast.success('Edited Successfully');
    history.goBack();
    return {
        type: UPDATE_EXAM_SUCCESS,
    };
}

export const addStudentToExam = (examId: any, data: any) => {
    return async (dispatch: any) => {
        const rawData = {
            studentId: data,
        };
        API.post(`${endpoints.tutorExam}${examId}/${endpoints.students}`, rawData)
            .then((response) => {
                dispatch(addStudentSuccess());
            })
            .catch((error) => {
                handleError(dispatch, error);
            });
    };
};

function addStudentSuccess() {
    return {
        type: ADD_STUDENT_SUCCESS,
    };
}

export const removeStudentFromExam = (examId: number, studentId: number, history: any) => {
    return async (dispatch: any) => {
        dispatch(removeStudentFromExamPending());
        API.delete(`${endpoints.tutorExam}${examId}/${endpoints.students}/${studentId}`)
            .then((res) => {
                dispatch(removeStudentFromExamSuccess(history));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

function removeStudentFromExamSuccess(history: any) {
    toast.success('deleted successfully');
    history.goBack();
    return {
        type: REMOVE_EXAM_STUDENT_SUCCESS,
    };
}

function removeStudentFromExamPending() {
    return {
        type: REMOVE_EXAM_STUDENT_PENDING,
    };
}

export const deleteTutorExam = (examId: number, history: any) => {
    return async (dispatch: any) => {
        dispatch(deleteTutorExamPending());
        API.delete(`${endpoints.tutorExam}${examId}`)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(deleteTutorExamSuccess(history));
                }
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

function deleteTutorExamPending() {
    return {
        type: DELETE_TUROR_EXAM_PENDING,
    };
}

function deleteTutorExamSuccess(history: any) {
    toast.success('Deleted Successfully!');
    history.push('/tutor/exams');
    return {
        type: DELETE_TUROR_EXAM_SUCCESS,
    };
}

export const getIndivisualStudentExamData = (examId: number, studentId: number) => {
    return async (dispatch: any) => {
        dispatch(getIndivisualStudentExamPending());
        API.get(`${endpoints.tutorExam}${examId}/${endpoints.students}/${studentId}`)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(getIndivisualStudentExamDataSuccess(data));
                }
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export function getIndivisualStudentExamPending() {
    return {
        type: GET_STUDENT_EXAM_DATA_PENDING,
    };
}

export function getIndivisualStudentExamDataSuccess(data: any) {
    return {
        type: GET_STUDENT_EXAM_DATA_SUCCESS,
        payload: data,
    };
}

export const teacherSetClassAPIcall = (data: any, goBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(freelanceTeacherEndpoints.techerSession, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Class saved successfully.');
                dispatch(fecthSchoolSession())
                goBack();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const addStudentToHomework = (data: any, id: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(spinner(true));
            const res = await API.put(`${endpoints.teacherHomeworks}/${id}/students`, data);
            dispatch(spinner(false));
            // dispatch(homeworkById(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const deleteStudentFromHomework = (data: any, id: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(spinner(true));
            const res = await API.delete(`${endpoints.teacherHomeworks}/${id}/students`, { data: data });
            dispatch(spinner(false));

            // dispatch(homeworkById(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const createZoomLiveMeeting = (data: any, callBack: () => void) => {
    return (dispatch: Dispatch<any>) => {
        Axios.post(`${proxy}${zoomBaseUrl}${zoomEndpoints.users}/${zoomUserId}/${zoomEndpoints.meetings}`, data, {
            headers: {
                Authorization: `Bearer ${zoomJWTtoken}`,
            },
        })
            .then((res) => {
                callBack();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllTeacherLikeSearchAPIcall = (search: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(schoolTeacherEndpoints.searchTeacher+`?searchKey=${search}`)
            .then((res: any) => {
                dispatch(getAllTeacherLikeSearchRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllTeacherLikeSearchRes = (data: any) => {
    return {
        type: GET_ALL_TEACHER_LIKE_SEARCH,
        payload: data,
    };
};


export const fecthSchoolSession = () =>{
    return async (dispatch: any) =>{
        API.get(`${endpoints.schoolSessionCount}?date=${getCurrentDateString()}`)
        .then(
            ({ data: { success, data } }) => {
                if (success) {
                    const { OccupiedStudents, totalCount, totalSession } = data;
                    dispatch(schoolSessionSuccess(totalSession, totalCount, OccupiedStudents));
                }
            }
        );

    }
}

function schoolSessionSuccess (sessionsCount: number , studentsCount : number , occupiedStudents: number) {
    return {
        type: SCHOOL_SESSION_COUNT_SUCCESS,
        sessionsCount,
        studentsCount,
        occupiedStudents,
    };
}