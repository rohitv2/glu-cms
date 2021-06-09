import { StudentModuleState } from './types';
import { StudentModuleActionTypes } from '../Actions/studentModuleActions';
import {
    CLEAR_HOMEWORK_DETAILS,
    CLEAR_PREVIOUS_CLASS,
    CLEAR_PREVIOUS_CLASSES_BY_TEACHER,
    CLEAR_STATE,
    CLEAR_TEACHER_PROFILE,
    CLEAR_UPCOMING_CLASSES_BY_TEACHER,
    CREATE_EDUCATION_FAILURE,
    CREATE_EDUCATION_PENDING,
    CREATE_EDUCATION_SUCCESS,
    DELETE_EDUCATION_FAILURE,
    DELETE_EDUCATION_PENDING,
    DELETE_EDUCATION_SUCCESS,
    EDIT_EDUCATION_FAILURE,
    EDIT_EDUCATION_PENDING,
    EDIT_EDUCATION_SUCCESS,
    EDUCATION_FAILURE,
    EDUCATION_PENDING,
    EDUCATION_SUCCESS,
    FEATURED_SUBJECT_FAILURE,
    FEATURED_SUBJECT_PENDING,
    FEATURED_SUBJECT_SUCCESS,
    HOMEWORK_DETAILS_FAILURE,
    HOMEWORK_DETAILS_PENDING,
    HOMEWORK_DETAILS_SUCCESS,
    HOMEWORK_FAILURE,
    HOMEWORK_FILTER_FAILURE,
    HOMEWORK_FILTER_PENDING,
    HOMEWORK_FILTER_SUCCESS,
    HOMEWORK_PENDING,
    HOMEWORK_SUCCESS,
    INFO_FAILURE,
    INFO_PENDING,
    INFO_SUCCESS,
    PREVIOUS_CLASS_FAILURE,
    PREVIOUS_CLASS_PENDING,
    PREVIOUS_CLASS_SUCCESS,
    PREVIOUS_CLASSES_BY_TEACHER_FAILURE,
    PREVIOUS_CLASSES_BY_TEACHER_PENDING,
    PREVIOUS_CLASSES_BY_TEACHER_SUCCESS,
    PREVIOUS_CLASSES_FAILURE,
    PREVIOUS_CLASSES_PAGINATION_FAILURE,
    PREVIOUS_CLASSES_PAGINATION_PENDING,
    PREVIOUS_CLASSES_PAGINATION_SUCCESS,
    PREVIOUS_CLASSES_PENDING,
    PREVIOUS_CLASSES_SUCCESS,
    RECOMMENDATION_FAILURE,
    RECOMMENDATION_PENDING, RECOMMENDATION_STATUS_FAILURE, RECOMMENDATION_STATUS_PENDING, RECOMMENDATION_STATUS_SUCCESS,
    RECOMMENDATION_SUCCESS,
    SET_HOMEWORK_FILTER,
    SET_PREVIOUS_CLASSES_FILTER,
    SET_RECOMMENDATIONS_FILTER,
    SET_TEACHERS_FILTER,
    SET_UPCOMING_CLASSES_FILTER,
    SUBJECTS_FAILURE,
    SUBJECTS_PENDING,
    SUBJECTS_SUCCESS,
    SUBMIT_HOMEWORK_FAILURE,
    SUBMIT_HOMEWORK_PENDING,
    SUBMIT_HOMEWORK_PHYSICALLY_FAILURE,
    SUBMIT_HOMEWORK_PHYSICALLY_PENDING,
    SUBMIT_HOMEWORK_PHYSICALLY_SUCCESS,
    SUBMIT_HOMEWORK_SUCCESS,
    TEACHER_PROFILE_FAILURE,
    TEACHER_PROFILE_PENDING,
    TEACHER_PROFILE_SUCCESS,
    TEACHERS_FAILURE,
    TEACHERS_PENDING,
    TEACHERS_SUCCESS,
    UPCOMING_CLASSES_BY_TEACHER_FAILURE,
    UPCOMING_CLASSES_BY_TEACHER_PENDING,
    UPCOMING_CLASSES_BY_TEACHER_SUCCESS,
    UPCOMING_CLASSES_FAILURE,
    UPCOMING_CLASSES_PENDING,
    UPCOMING_CLASSES_SUCCESS,
    UPDATE_INFO_FAILURE,
    UPDATE_INFO_PENDING,
    UPDATE_INFO_SUCCESS,
    WATCH_RECORDED_CLASS_SUCCESS,
} from '../ActionTypes/studentModuleTypes';
import { tags } from '../../Views/StudentsModule/Reports/data';
import { PURCHASE_CARD_PLACEHOLDER } from '../../components/Cards/PurchaseClassCard';
import { IMG_PLACEHOLDER, STRING_PLACEHOLDER } from '../../Helper/placeholders';

const initialState: StudentModuleState = {
    info: {
        data: {},
        profileCard: {
            img: '',
            name: '',
            address: '',
            email: '',
            phone: '',
        },
        editProfileForm: {
            img: '',
            firstName: '',
            lastName: '',
            about: '',
            location: '',
            password: '',
            email: '',
            phone: '',
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    updateInfo: {
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    homework: {
        homeworks: [],
        overdueHomeworks: [],
        count: 0,
        incompleteCount: 0,
        overdueCount: 0,
        filters: {
            value: null,
            data: [],
            homeworks: [],
            count: 0,
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    teachers: {
        count: 0,
        data: [],
        filters: {
            value: null,
            data: [],
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    upcomingClasses: {
        count: 0,
        data: [],
        nextClassCard: {
            img: '',
            subject: '',
            subTitle: '',
            description: '',
            name: '',
            date: '',
            startTime: '',
            endTime: '',
            teacherId: 1231,
        },
        filters: {
            value: null,
            data: [],
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    upcomingClassesByTeacher: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    previousClasses: {
        count: 0,
        total: 0,
        data: [],
        filters: {
            value: null,
            data: [],
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        pagination: {
            page: 0,
            perPage: 5,
        },
        individualClass: {
            purchaseCard: PURCHASE_CARD_PLACEHOLDER,
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    previousClassesByTeacher: {
        data: [],
        isPending: false,
        isFailure: false,
        isSuccess: false,
    },
    featuredSubjects: {
        data: [],
        featuredSubjectsCard: {
            imgBig: STRING_PLACEHOLDER,
            imgBigTitle: STRING_PLACEHOLDER,
            imgSmall: STRING_PLACEHOLDER,
            imgSmallTitle: STRING_PLACEHOLDER,
            imgBigId: 0,
            imgSmallId: 0,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    subjects: {
        count: 0,
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    education: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
        deleteEducation: {
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        editEducation: {
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        createEducation: {
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
    },
    watchRecordedClass: {
        data: {
            name: 'Jordan Day',
            description: 'How to structure narrative in fiction.',
            subject: 'English',
            duration: '05.20',
            classSummary:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam erat.',
            tags: tags,
            isFavourite: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    recommendations: {
        data: [],
        count: 0,
        filters: {
            value: null,
            data: [],
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        recommendationStatus: {
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    homeworkDetails: {
        data: {},
        details: {
            id: 0,
            name: STRING_PLACEHOLDER,
            subject: STRING_PLACEHOLDER,
            description: STRING_PLACEHOLDER,
            dueDate: STRING_PLACEHOLDER,
            dueTime: STRING_PLACEHOLDER,
            about: STRING_PLACEHOLDER,
            isSubmitted: false,
            comment: STRING_PLACEHOLDER,
            isSubmittedPhysically: false,
        },
        submitHomework: {
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        submitPhysically: {
            isPending: false,
            isSuccess: false,
            isFailure: false,
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    teacherProfile: {
        tutorProfileCard: {
            name: STRING_PLACEHOLDER,
            city: STRING_PLACEHOLDER,
            country: STRING_PLACEHOLDER,
            rating: STRING_PLACEHOLDER,
            img: IMG_PLACEHOLDER,
            isFavourite: false,
        },
        availability: {
            about: STRING_PLACEHOLDER,
        },
        about: {
            education: [],
            experience: [],
            skills: [],
        },
        reviews: {
            rating: STRING_PLACEHOLDER,
            reviews: [],
        },
        essentialClasses: {
            imgBigId: 0,
            imgSmallId: 0,
            imgSmallTitle: STRING_PLACEHOLDER,
            imgSmall: IMG_PLACEHOLDER,
            imgBigTitle: STRING_PLACEHOLDER,
            imgBig: IMG_PLACEHOLDER,
            imgSmallSubtitle: STRING_PLACEHOLDER,
            imgBigSubtitle: STRING_PLACEHOLDER,
        },
        similarTutors: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
};

export default function (state = initialState, action: StudentModuleActionTypes): StudentModuleState {
    switch (action.type) {
        case HOMEWORK_PENDING:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    isPending: true,
                },
            };
        case HOMEWORK_SUCCESS:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    isPending: false,
                    isSuccess: true,
                    incompleteCount: action.incompleteCount,
                    overdueCount: action.overdueCount,
                    count: action.count,
                    homeworks: action.homeworks,
                    overdueHomeworks: action.overdueHomeworks,
                },
            };
        case HOMEWORK_FAILURE:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    isPending: false,
                },
            };
        case TEACHERS_PENDING:
            return {
                ...state,
                teachers: {
                    ...state.teachers,
                    isPending: true,
                },
            };
        case TEACHERS_SUCCESS:
            return {
                ...state,
                teachers: {
                    ...state.teachers,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    count: action.count,
                },
            };
        case TEACHERS_FAILURE:
            return {
                ...state,
                teachers: {
                    ...state.teachers,
                    isPending: false,
                },
            };
        case UPCOMING_CLASSES_PENDING:
            return {
                ...state,
                upcomingClasses: {
                    ...state.upcomingClasses,
                    isPending: true,
                },
            };
        case UPCOMING_CLASSES_SUCCESS:
            return {
                ...state,
                upcomingClasses: {
                    ...state.upcomingClasses,
                    isPending: false,
                    isSuccess: true,
                    count: action.count,
                    data: action.data,
                    nextClassCard: action.nextClassCard,
                },
            };
        case UPCOMING_CLASSES_FAILURE:
            return {
                ...state,
                upcomingClasses: {
                    ...state.upcomingClasses,
                    isPending: false,
                },
            };
        case PREVIOUS_CLASSES_PENDING:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: true,
                },
            };
        case PREVIOUS_CLASSES_SUCCESS:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: false,
                    isSuccess: true,
                    count: action.count,
                    total: action.total,
                    data: action.data,
                },
            };
        case PREVIOUS_CLASSES_FAILURE:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: false,
                },
            };
        case PREVIOUS_CLASSES_PAGINATION_PENDING:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: true,
                },
            };
        case PREVIOUS_CLASSES_PAGINATION_SUCCESS:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: false,
                    count: state.previousClasses.count + action.count,
                    data: [...state.previousClasses.data, ...action.data],
                    pagination: {
                        ...state.previousClasses.pagination,
                        page: action.page,
                    },
                },
            };
        case PREVIOUS_CLASSES_PAGINATION_FAILURE:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: false,
                },
            };
        case PREVIOUS_CLASS_PENDING:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    individualClass: {
                        ...state.previousClasses.individualClass,
                        isPending: true,
                    },
                },
            };
        case PREVIOUS_CLASS_SUCCESS:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    individualClass: {
                        ...state.previousClasses.individualClass,
                        purchaseCard: action.purchaseCard,
                        isPending: false,
                    },
                },
            };
        case PREVIOUS_CLASS_FAILURE:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    individualClass: {
                        ...state.previousClasses.individualClass,
                        isPending: false,
                    },
                },
            };
        case CLEAR_PREVIOUS_CLASS:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    individualClass: initialState.previousClasses.individualClass,
                },
            };
        case FEATURED_SUBJECT_PENDING:
            return {
                ...state,
                featuredSubjects: {
                    ...state.featuredSubjects,
                    isPending: true,
                },
            };
        case FEATURED_SUBJECT_SUCCESS:
            return {
                ...state,
                featuredSubjects: {
                    ...state.featuredSubjects,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    featuredSubjectsCard: action.featuredSubjectsCard,
                },
            };
        case FEATURED_SUBJECT_FAILURE:
            return {
                ...state,
                featuredSubjects: {
                    ...state.featuredSubjects,
                    isPending: false,
                },
            };
        case INFO_PENDING:
            return {
                ...state,
                info: {
                    ...state.info,
                    isPending: true,
                },
            };
        case INFO_SUCCESS:
            return {
                ...state,
                info: {
                    ...state.info,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    profileCard: action.profileCard,
                    editProfileForm: action.editProfileForm,
                },
            };
        case INFO_FAILURE:
            return {
                ...state,
                info: {
                    ...state.info,
                    isPending: false,
                },
            };
        case SUBJECTS_PENDING:
            return {
                ...state,
                subjects: {
                    ...state.subjects,
                    isPending: true,
                },
            };
        case SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: {
                    ...state.subjects,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                },
            };
        case SUBJECTS_FAILURE:
            return {
                ...state,
                subjects: {
                    ...state.subjects,
                    isPending: false,
                },
            };
        case SET_UPCOMING_CLASSES_FILTER:
            return {
                ...state,
                upcomingClasses: {
                    ...state.upcomingClasses,
                    filters: {
                        ...state.upcomingClasses.filters,
                        value: action.filter,
                    },
                },
            };
        case UPDATE_INFO_PENDING:
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    isPending: true,
                },
            };
        case UPDATE_INFO_SUCCESS:
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    isPending: false,
                },
            };
        case UPDATE_INFO_FAILURE:
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    isPending: false,
                },
            };
        case EDUCATION_PENDING:
            return {
                ...state,
                education: {
                    ...state.education,
                    isPending: true,
                },
            };
        case EDUCATION_SUCCESS:
            return {
                ...state,
                education: {
                    ...state.education,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                },
            };
        case EDUCATION_FAILURE:
            return {
                ...state,
                education: {
                    ...state.education,
                    isPending: false,
                },
            };
        case DELETE_EDUCATION_PENDING:
            return {
                ...state,
                education: {
                    ...state.education,
                    deleteEducation: {
                        ...state.education.deleteEducation,
                        isPending: true,
                    },
                },
            };
        case DELETE_EDUCATION_SUCCESS:
        case DELETE_EDUCATION_FAILURE:
            return {
                ...state,
                education: {
                    ...state.education,
                    deleteEducation: {
                        ...state.education.deleteEducation,
                        isPending: false,
                    },
                },
            };
        case EDIT_EDUCATION_PENDING:
            return {
                ...state,
                education: {
                    ...state.education,
                    editEducation: {
                        ...state.education.editEducation,
                        isPending: true,
                    },
                },
            };
        case EDIT_EDUCATION_SUCCESS:
        case EDIT_EDUCATION_FAILURE:
            return {
                ...state,
                education: {
                    ...state.education,
                    editEducation: {
                        ...state.education.editEducation,
                        isPending: false,
                    },
                },
            };
        case CREATE_EDUCATION_PENDING:
            return {
                ...state,
                education: {
                    ...state.education,
                    createEducation: {
                        ...state.education.createEducation,
                        isPending: true,
                    },
                },
            };
        case CREATE_EDUCATION_SUCCESS:
        case CREATE_EDUCATION_FAILURE:
            return {
                ...state,
                education: {
                    ...state.education,
                    createEducation: {
                        ...state.education.createEducation,
                        isPending: false,
                    },
                },
            };
        case SET_PREVIOUS_CLASSES_FILTER:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    filters: {
                        ...state.previousClasses.filters,
                        value: action.filter,
                    },
                },
            };
        case SET_TEACHERS_FILTER:
            return {
                ...state,
                teachers: {
                    ...state.teachers,
                    filters: {
                        ...state.teachers.filters,
                        value: action.filter,
                    },
                },
            };
        case WATCH_RECORDED_CLASS_SUCCESS:
            return {
                ...state,
                watchRecordedClass: {
                    ...state.watchRecordedClass,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                },
            };
        case SET_HOMEWORK_FILTER:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    filters: {
                        ...state.homework.filters,
                        value: action.filter,
                    },
                },
            };
        case SET_RECOMMENDATIONS_FILTER:
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    filters: {
                        ...state.recommendations.filters,
                        value: action.filter,
                    },
                },
            };
        case HOMEWORK_DETAILS_PENDING:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    isPending: true,
                },
            };
        case HOMEWORK_DETAILS_SUCCESS:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    details: action.details,
                },
            };
        case HOMEWORK_DETAILS_FAILURE:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    isPending: false,
                },
            };
        case SUBMIT_HOMEWORK_PENDING:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    submitHomework: {
                        ...state.homeworkDetails.submitHomework,
                        isPending: true,
                    },
                },
            };
        case SUBMIT_HOMEWORK_SUCCESS:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    submitHomework: {
                        ...state.homeworkDetails.submitHomework,
                        isPending: false,
                        isSuccess: true,
                    },
                },
            };
        case SUBMIT_HOMEWORK_FAILURE:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    submitHomework: {
                        ...state.homeworkDetails.submitHomework,
                        isPending: false,
                    },
                },
            };
        case CLEAR_HOMEWORK_DETAILS:
            return {
                ...state,
                homeworkDetails: initialState.homeworkDetails,
            };
        case HOMEWORK_FILTER_PENDING:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    filters: {
                        ...state.homework.filters,
                        isPending: true,
                    },
                },
            };
        case HOMEWORK_FILTER_SUCCESS:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    filters: {
                        ...state.homework.filters,
                        isPending: false,
                        homeworks: action.homeworks,
                        count: action.count,
                    },
                },
            };
        case HOMEWORK_FILTER_FAILURE:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    filters: {
                        ...state.homework.filters,
                        isPending: false,
                    },
                },
            };
        case RECOMMENDATION_PENDING:
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    isPending: true,
                },
            };
        case RECOMMENDATION_SUCCESS:
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    count: action.count,
                },
            };
        case RECOMMENDATION_FAILURE:
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    isPending: false,
                },
            };
        case SUBMIT_HOMEWORK_PHYSICALLY_PENDING:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    submitPhysically: {
                        ...state.homeworkDetails.submitPhysically,
                        isPending: true,
                    },
                },
            };
        case SUBMIT_HOMEWORK_PHYSICALLY_SUCCESS:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    submitPhysically: {
                        ...state.homeworkDetails.submitPhysically,
                        isPending: false,
                        isSuccess: true,
                    },
                },
            };
        case SUBMIT_HOMEWORK_PHYSICALLY_FAILURE:
            return {
                ...state,
                homeworkDetails: {
                    ...state.homeworkDetails,
                    submitPhysically: {
                        ...state.homeworkDetails.submitPhysically,
                        isPending: false,
                    },
                },
            };
        case TEACHER_PROFILE_PENDING:
            return {
                ...state,
                teacherProfile: {
                    ...state.teacherProfile,
                    isPending: true,
                },
            };
        case TEACHER_PROFILE_SUCCESS:
            return {
                ...state,
                teacherProfile: {
                    ...state.teacherProfile,
                    isPending: false,
                    tutorProfileCard: action.profileCard,
                    availability: action.availability,
                    essentialClasses: {
                        ...state.teacherProfile.essentialClasses,
                        ...action.essentialClasses,
                    },
                    about: {
                        ...state.teacherProfile.about,
                        experience: action.experience,
                        education: action.education,
                        skills: action.skills,
                    },
                    reviews: {
                        ...state.teacherProfile.reviews,
                        rating: action.rating,
                        reviews: action.reviews,
                    },
                    similarTutors: action.similarTutors,
                },
            };
        case TEACHER_PROFILE_FAILURE:
            return {
                ...state,
                teacherProfile: {
                    ...state.teacherProfile,
                    isPending: false,
                }
            }
        case CLEAR_TEACHER_PROFILE:
            return {
                ...state,
                teacherProfile: initialState.teacherProfile,
            }
        case PREVIOUS_CLASSES_BY_TEACHER_PENDING:
            return {
                ...state,
                previousClassesByTeacher: {
                    ...state.previousClassesByTeacher,
                    isPending: true,
                },
            };
        case PREVIOUS_CLASSES_BY_TEACHER_SUCCESS:
            return {
                ...state,
                previousClassesByTeacher: {
                    ...state.previousClassesByTeacher,
                    isPending: false,
                    data: action.data,
                },
            };
        case PREVIOUS_CLASSES_BY_TEACHER_FAILURE:
            return {
                ...state,
                previousClassesByTeacher: {
                    ...state.previousClassesByTeacher,
                    isPending: false,
                },
            };
        case CLEAR_PREVIOUS_CLASSES_BY_TEACHER:
            return {
                ...state,
                previousClassesByTeacher: initialState.previousClassesByTeacher,
            }
        case UPCOMING_CLASSES_BY_TEACHER_PENDING:
            return {
                ...state,
                upcomingClassesByTeacher: {
                    ...state.upcomingClassesByTeacher,
                    isPending: true,
                },
            };
        case UPCOMING_CLASSES_BY_TEACHER_SUCCESS:
            return {
                ...state,
                upcomingClassesByTeacher: {
                    ...state.upcomingClassesByTeacher,
                    isPending: false,
                    data: action.data,
                },
            };
        case UPCOMING_CLASSES_BY_TEACHER_FAILURE:
            return {
                ...state,
                upcomingClassesByTeacher: {
                    ...state.upcomingClassesByTeacher,
                    isPending: false,
                },
            };
        case CLEAR_UPCOMING_CLASSES_BY_TEACHER:
            return {
                ...state,
                upcomingClassesByTeacher: initialState.upcomingClassesByTeacher,
            }
        case RECOMMENDATION_STATUS_PENDING:
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    recommendationStatus: {
                        ...state.recommendations.recommendationStatus,
                        isPending: true,
                    }
                }
            }
        case RECOMMENDATION_STATUS_SUCCESS:
        case RECOMMENDATION_STATUS_FAILURE:
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    recommendationStatus: {
                        ...state.recommendations.recommendationStatus,
                        isPending: false,
                    }
                }
            }
        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    }
}
