import {
    TEACHER_LIST,
    TEACHER_DETAILS,
    TEACHER_DATA,
    GET_TEACHER_SKILLS,
    GET_TEACHER_EXPERIENCE,
    GET_TEACHER_EDUCATION,
    GET_TEACHER_HOMEWORK_COUNT,
    GET_TEACHER_HOMEWORK,
    GET_TEACHER_RECOMMENDATION,
    GET_TEACHER_STUDENT_LIKE,
    DELETE_EDUCATION,
    DELETE_EXPERIENCE,
    ADD_TEACHER_SKILL,
    POST_TEACHER_RECOMMENDATION,
    GET_TEACHER_RECOMMENDATION_COUNT,
    POST_TEACHER_HOMEWORK,
    DELETE_SKILL,
    ADD_DETAILS,
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
    FILTER_EXAM_LIST_PENDING,
    FILTER_EXAM_LIST_SUCCESS,
    FILTER_EXAM_LIST_FAILURE,
    SUBMIT_REVIEW_CHALLENGE_PENDING,
    SUBMIT_REVIEW_CHALLENGE_SUCCESS,
    REVIEWS_EMPTY_SUCCESS,
    SET_REVIEWS_FILTERS_SUCCESS,
    STUDENT_NAME_SUGGESTION_PENDING,
    STUDENT_NAME_SUGGESTION_SUCCESS,
    SET_REVIEWS_FILTERS_PENDING,
    SET_REVIEWS_FILTERS,
    ADD_DETAILS2,
    CLEAR_TEACHER_DATA,
    TEACHER_EXAM_LIST,
    SALES_PENDING,
    SALES_SUCCESS,
    GET_INDIVIDUAL_EXAM_DETAIL_SUCCESS,GET_INDIVIDUAL_EXAM_DETAIL_PENDING,
    DELETE_TEACHER_RECOMENDATION,
    SINGLE_RECO,
    TEACHER_SCHOOL_INFO,
    GET_TERM_LIST_PENDING,
    GET_TERM_LIST_SUCCESS,
    SUBMIT_EXAM_INFO_PENDING,
    SUBMIT_EXAM_INFO_SUCCESS,
    SUBMIT_EXAM_INFO_FAILURE,
    STUDENT_TIMETABLE_SUCCESS,
    STUDENT_TIMETABLE_PENDING,
    STUDENT_TIMETABLE_ERROR,
    GET_TUTOR_TIMETABLE_PENDING,
    GET_TUTOR_TIMETABLE_SUCCESS,
    GET_TUTOR_TIMETABLE_FAILURE,
    SESSION_COUNT_PENDING,
    SESSION_COUNT_SUCCESS,
    GET_STUDENT_EXAM_DATA_SUCCESS,
    GET_STUDENT_EXAM_DATA_PENDING,
    SCHOOL_SESSION_COUNT_SUCCESS,
} from '../ActionTypes/teacherTypes';
const initialState = {
    teacherList: null,
    teacherData: null,
    teacherSkill: null,
    teacherExperience: null,
    teacherEducation: null,
    teacherHomework: null,
    teacherHomeworkCount: null,
    teacherRecommendations: null,
    teacherStudentLike: null,
    teacherPostRecommendation: null,
    teacherRecommendationCount: null,
    teacherCreateHomework: null,
    singleHomework: null,
    markHomework: null,

    tutorAvailability: [],
    tutorDayOff: [],
    tutorFee: null,
    teacherExamList: null,
    suggestedStudents: {
        data: [],
        isPending: false,
        isSuccess: false,
    },

    reviews: {
        count: 0,
        data: [],
        classAverage: 'N/A',
        tutorAverage: 'N/A',
        latestReview: {
            name: '',
            role: 'parent',
            rating: '5/5',
            description: '',
            subject: '',
        },
        filters: {
            from: '',
            to: '',
            data: [],
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        submitChallenge: {
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    teacherSubjectsList: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    filterExamListBySubject: {
        data: [],
        filterValue: null,
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    sales: {
        overall: {
            studentsChartData: [],
            salesChartData: [],
            salesAverage: 0,
            salesDifference: 0,
            studentsAverage: 0,
            studentsDifference: 0,
        },
        classes: {
            studentsChartData: [],
            salesChartData: [],
            salesAverage: 0,
            salesDifference: 0,
            studentsAverage: 0,
            studentsDifference: 0,
        },
        tutor: {
            studentsChartData: [],
            salesChartData: [],
            salesAverage: 0,
            salesDifference: 0,
            studentsAverage: 0,
            studentsDifference: 0,
        },
        isEmpty: true,
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    singleTeacherReco: null,
    teacherSchoolInfo: null,
    sessionsCount: {
        isPending: false,
        isSuccess: false,
        isFailure: false,
        sessionsCount: 0,
        studentsCount: 0,
        occupiedStudents: 0,
    },
    studentTimeTable: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    tutorTimeTable: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    TermList: {
        list: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    submitExam: {
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    individualExamDetail: {
        data: [],
        isPending: false,
        isSuccess: false,
    },
    individualStudentExamDetail: {
        data: [],
        isPending: false,
        isSuccess: false,
    },
    schoolSessionsCount: {
        isSuccess: false,
        sessionsCount: 0,
        studentsCount: 0,
        occupiedStudents: 0,
    },
};
export const teacherReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case TEACHER_LIST: {
            newState.teacherList = action.payload;
            return newState;
        }
        case TEACHER_DETAILS: {
            newState.teacherList = action.payload;
            return newState;
        }
        case TEACHER_DATA: {
            return {
                ...state,
                tutorData: action.payload,
            };
        }
        case GET_TEACHER_SKILLS: {
            newState.teacherSkill = action.payload;
            return newState;
        }
        case GET_TEACHER_EXPERIENCE: {
            newState.teacherExperience = action.payload;
            return newState;
        }
        case GET_TEACHER_EDUCATION: {
            newState.teacherEducation = action.payload;
            return newState;
        }
        case GET_TEACHER_HOMEWORK: {
            newState.teacherHomework = action.payload;
            return newState;
        }
        case GET_TEACHER_HOMEWORK_COUNT: {
            newState.teacherHomeworkCount = action.payload;
            return newState;
        }
        case GET_TEACHER_RECOMMENDATION: {
            newState.teacherRecommendations = action.payload;
            return newState;
        }
        case GET_TEACHER_STUDENT_LIKE: {
            newState.teacherStudentLike = action.payload;
            return newState;
        }

        case DELETE_EDUCATION: {
            const id = action.payload;
            return {
                ...state,
                teacherEducation: newState.teacherEducation.filter((item: any) => item.qualificationId !== id),
            };
        }

        case DELETE_EXPERIENCE: {
            const id = action.payload;
            return {
                ...state,
                teacherExperience: newState.teacherExperience.filter((item: any) => item.experienceId !== id),
            };
        }

        case ADD_TEACHER_SKILL: {
            return {
                ...state,
                teacherSkill: [...state.teacherSkill, action.payload],
            };
        }
        case POST_TEACHER_RECOMMENDATION: {
            newState.teacherPostRecommendation = action.payload;
            return newState;
        }
        case GET_TEACHER_RECOMMENDATION_COUNT: {
            newState.teacherRecommendationCount = action.payload;
            return newState;
        }
        case POST_TEACHER_HOMEWORK: {
            newState.teacherCreateHomework = action.payload;
            return newState;
        }

        case DELETE_SKILL: {
            const id = action.payload;
            return {
                ...state,
                teacherSkill: state.teacherSkill.filter((item: any) => item.id !== id),
            };
        }

        case ADD_DETAILS: {
            return {
                ...state,
                teacherData: action.payload,
            };
        }

        case ADD_DETAILS2: {
            return {
                ...state,
                teacherData: action.payload,
            };
        }

        case INDIVIDUAL_HOMEWORK: {
            return {
                ...state,
                singleHomework: action.payload,
            };
        }

        case GET_STUDENT_HOMEWORK: {
            return {
                ...state,
                markHomework: action.payload,
            };
        }

        case GET_TUTOR_AVAILABILITY: {
            return {
                ...state,
                tutorAvailability: action.payload,
            };
        }
        case TEACHER_SUBJECT: {
            return {
                ...state,
                teacherSubjectsList: {
                    data: action.payload,
                    isSuccess: true,
                    isPending: false,
                },
            };
        }
        case TEACHER_SUBJECT_PENDING:
            return {
                ...state,
                teacherSubjectsList: {
                    ...state.teacherSubjectsList,
                    isPending: true,
                },
            };
        case TEACHER_EXAM_LIST: {
            return {
                ...state,
                teacherExamList: action.payload,
            };
        }

        case GET_TUTOR_DAY_OFF: {
            return {
                ...state,
                tutorDayOff: action.payload,
            };
        }

        case DELETE_TUTOR_AVAILABILITY: {
            return {
                ...newState,
                tutorAvailability: newState.tutorAvailability.filter((item: any) => {
                    return item.id !== action.payload;
                }),
            };
        }

        case CREATE_TUTOR_AVAILABILITY: {

            return {
                ...state,
                tutorAvailability: [...newState.tutorAvailability, action.payload],
            };
        }

        case ADD_TUTOR_DAY_OFF: {
            return {
                ...state,
                tutorDayOff: [...newState.tutorDayOff, action.payload],
            };
        }

        case DELETE_TUTOR_DAY_OFF: {
            return {
                ...state,
                tutorDayOff: newState.tutorDayOff.filter((item) => {
                    return item.id !== action.payload;
                }),
            };
        }

        case GET_TEACHER_FEES: {
            return {
                ...state,
                tutorFee: action.payload,
            };
        }

        case REVIEWS_PENDING:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    isPending: true,
                },
            };
        case REVIEWS_EMPTY_SUCCESS:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    isPending: false,
                    isSuccess: true,
                },
            };
        case REVIEWS_SUCCESS:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    latestReview: action.latestReview,
                    classAverage: action.classAverage,
                    tutorAverage: action.tutorAverage,
                    count: action.count,
                },
            };
        case TEACHER_EXAM_LIST_ALL: {
            return {
                ...state,
                filterExamListBySubject: {
                    data: action.payload,
                    isPending: false,
                    isSuccess: true,
                    filterValue: null,
                },
            };
        }
        case FILTER_EXAM_LIST_PENDING:
            return {
                ...state,
                filterExamListBySubject: {
                    ...state.filterExamListBySubject,
                    isPending: true,
                },
            };
        case FILTER_EXAM_LIST_FAILURE:
            return {
                ...state,
                filterExamListBySubject: {
                    ...state.filterExamListBySubject,
                    isPending: false,
                    isSuccess: false,
                    isFailure: true
                },
            };

        case FILTER_EXAM_LIST_SUCCESS:
            return {
                ...state,
                filterExamListBySubject: {
                    data: action.payload,
                    isPending: false,
                    isSuccess: true,
                    filterValue: action.filterValue,
                },
            };

        case SUBMIT_REVIEW_CHALLENGE_PENDING:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    submitChallenge: {
                        ...state.reviews.submitChallenge,
                        isPending: true,
                    },
                },
            };
        case SUBMIT_REVIEW_CHALLENGE_SUCCESS:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    submitChallenge: {
                        ...state.reviews.submitChallenge,
                        isPending: false,
                        isSuccess: true,
                    },
                },
            };

        case SET_REVIEWS_FILTERS:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    filters: {
                        ...state.reviews.filters,
                        from: action.from,
                        to: action.to,
                    },
                },
            };
        case SET_REVIEWS_FILTERS_PENDING:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    filters: {
                        ...state.reviews.filters,
                        isPending: true,
                    },
                },
            };
        case SET_REVIEWS_FILTERS_SUCCESS:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    filters: {
                        ...state.reviews.filters,
                        isPending: false,
                        data: action.data,
                    },
                },
            };
        case STUDENT_NAME_SUGGESTION_SUCCESS: {
            return {
                ...state,
                suggestedStudents: {
                    data: action.payload,
                    isPending: false,
                    isSuccess: true,
                },
            };
        }
        case STUDENT_NAME_SUGGESTION_PENDING:
            return {
                ...state,
                suggestedStudents: {
                    ...state.suggestedStudents,
                    isPending: true,
                },
            };
        case CLEAR_TEACHER_DATA:
            return {
                ...newState,
                teacherData: null,
            };
        case SALES_PENDING:
            return {
                ...state,
                sales: {
                    ...state.sales,
                    isPending: true,
                },
            };
        case SALES_SUCCESS:
            return {
                ...state,
                sales: {
                    ...state.sales,
                    isPending: false,
                    isSuccess: true,
                    overall: action.overall,
                    classes: action.classes,
                    tutor: action.tutor,
                    isEmpty: action.isEmpty,
                },
            };

        case DELETE_TEACHER_RECOMENDATION:
            return {
                ...newState,
                teacherRecommendations: newState.teacherRecommendations.filter((item: any) => {
                    return item.id !== action.payload;
                }),
            };

        case SINGLE_RECO:
            return {
                ...newState,
                singleTeacherReco: action.payload,
            };

        case TEACHER_SCHOOL_INFO:
            return {
                ...newState,
                teacherSchoolInfo: action.payload,
            };

        case STUDENT_TIMETABLE_PENDING:
            return {
                ...state,
                studentTimeTable: {
                    ...state.studentTimeTable,
                    isPending: true,
                },
            };
            case STUDENT_TIMETABLE_ERROR:
                return {
                    ...state,
                    studentTimeTable: {
                        ...state.studentTimeTable,
                        isPending: false,
                        isSuccess :  false,
                    },
                };
        case STUDENT_TIMETABLE_SUCCESS:
            return {
                ...state,

                studentTimeTable: {
                    ...state.studentTimeTable,
                    isPending: false,
                    isSuccess: true,
                    data: action.payload,
                },
            };
        case GET_TUTOR_TIMETABLE_PENDING:
            return {
                ...state,
                tutorTimeTable: {
                    ...state.tutorTimeTable,
                    isPending: true,
                },
            };
        case GET_TUTOR_TIMETABLE_SUCCESS:
            return {
                ...state,
                tutorTimeTable: {
                    ...state.tutorTimeTable,
                    data: action.payload,
                    isPending: false,
                    isSuccess: true,
                },
            };
        case GET_TUTOR_TIMETABLE_FAILURE:
            return {
                ...state,
                tutorTimeTable: {
                    ...state.tutorTimeTable,
                    isPending: false,
                    isSuccess: false,
                    isFailure: true
                },
            };

        case GET_TERM_LIST_PENDING:
            return {
                ...state,
                TermList: {
                    ...state.TermList,
                    isPending: true,
                },
            };
        case GET_TERM_LIST_SUCCESS:
            return {
                ...state,
                TermList: {
                    ...state.TermList,
                    isPending: false,
                    isSuccess: true,
                    list: action.payload,
                },
            };
        case SUBMIT_EXAM_INFO_PENDING: {
            return {
                ...state,
                submitExam: {
                    ...state.submitExam,
                    isPending: true,
                },
            };
        }

        case SUBMIT_EXAM_INFO_SUCCESS: {
            return {
                ...state,
                submitExam: {
                    ...state.submitExam,
                    isPending: false,
                    isSuccess: true,
                },
            };
        }
        case SUBMIT_EXAM_INFO_FAILURE: {
            return {
                ...state,
                submitExam: {
                    ...state.submitExam,
                    isPending: false,
                    isSuccess: false,
                    isFailure: true,
                },
            };
        }
        case SESSION_COUNT_PENDING:
            return {
                ...state,
                sessionsCount: {
                    ...state.sessionsCount,
                    isPending: true,
                },
            };
        case SESSION_COUNT_SUCCESS:
            return {
                ...state,
                sessionsCount: {
                    ...state.sessionsCount,
                    isPending: false,
                    isSuccess: true,
                    sessionsCount: action.sessionsCount,
                    studentsCount: action.studentsCount,
                    occupiedStudents: action.occupiedStudents,
                }
            }

            case GET_INDIVIDUAL_EXAM_DETAIL_SUCCESS:
                return{
                    ...state,
                    individualExamDetail:{
                        ...state.individualExamDetail,
                        isPending: false,
                        isSuccess: true,
                        data: action.payload
                    }
                }
            case GET_INDIVIDUAL_EXAM_DETAIL_PENDING:
                    return{
                        ...state,
                        individualExamDetail:{
                            ...state.individualExamDetail,
                            isPending: true,
                            isSuccess: false,
                        }
                    }
            case GET_STUDENT_EXAM_DATA_PENDING:
                return{
                    ...state,
                    individualStudentExamDetail:{
                        ...state.individualStudentExamDetail,
                        isPending: true,
                        isSuccess: false,
                    }
                }
            case GET_STUDENT_EXAM_DATA_SUCCESS:
                    return{
                        ...state,
                        individualStudentExamDetail:{
                            ...state.individualStudentExamDetail,
                            isPending: false,
                            isSuccess: true,
                            data: action.payload
                        }
                    }
            case SCHOOL_SESSION_COUNT_SUCCESS:
                    return{
                        ...state,
                        schoolSessionsCount : {
                            ...state.schoolSessionsCount,
                            isSuccess: true,
                            sessionsCount: action.sessionsCount,
                            studentsCount: action.studentsCount,
                            occupiedStudents: action.occupiedStudents,

                        }
                    }

        default: {
            return newState;
        }
    }
};
