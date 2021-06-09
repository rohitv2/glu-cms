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
    RECOMMENDATION_PENDING,
    RECOMMENDATION_STATUS_FAILURE,
    RECOMMENDATION_STATUS_PENDING,
    RECOMMENDATION_STATUS_SUCCESS,
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
    UPCOMING_CLASSES_FILTER_FAILURE,
    UPCOMING_CLASSES_FILTER_PENDING,
    UPCOMING_CLASSES_FILTER_SUCCESS,
    UPCOMING_CLASSES_PENDING,
    UPCOMING_CLASSES_SUCCESS,
    UPDATE_INFO_FAILURE,
    UPDATE_INFO_PENDING,
    UPDATE_INFO_SUCCESS,
    WATCH_RECORDED_CLASS_SUCCESS,
} from '../ActionTypes/studentModuleTypes';
import { AppThunk } from './types';
import { API } from '../../Utility/API';
import { endpoints, studentsEndpoints } from '../../Utility/endpoints';
import {
    AvailabilityCardElement,
    EducationViewCardElement,
    ExperienceViewCardElement,
    FeaturedCardElement,
    HomeworkCardElement,
    ImageCardElement,
    NextClassCardElement,
    ProfileCardElement,
    PurchaseClassCardElement,
    ReviewSecondaryCardElement,
    TagCardElement,
    TutorProfileCardElement,
    WatchRecordedClassElement,
} from '../../components/Cards/types';
import { dataToHomeworkCards } from '../../Helper/students/homeworks';
import { dataToFeaturedCard, dataToNextClassCard } from '../../Helper/students/upcomingClasses';
import { dataToEditProfileForm, dataToProfileCard } from '../../Helper/students/profileInfo';
import { EditProfileForm, EducationForm, UpdateProfileForm } from '../../Interfaces/students/forms';
import { SelectedFilterValue } from '../../Containers/FilterContainer/types';
import { HomeworkDetailsData } from '../../Containers/Pages/types';
import { dataToDetails } from '../../Helper/students/homeworkDetails';
import { dataToPurchaseClassCard } from '../../Helper/students/previousClasses';
import {
    dataToEducationCards,
    dataToExperienceCards,
    dataToSimilarTutors,
    dataToTutorAvailability,
    dataToTutorEssentialClasses,
    dataToTutorProfileCard,
    dataToTutorReviews,
    dataToTutorSkills,
} from '../../Helper/students/teacherProfile';
import { toRatingString } from '../../Helper/strings';

interface SetHomeworkPending {
    type: typeof HOMEWORK_PENDING;
}

interface HomeworkSuccess {
    type: typeof HOMEWORK_SUCCESS;
    incompleteCount: number;
    overdueCount: number;
    count: number;
    homeworks: HomeworkCardElement[];
    overdueHomeworks: HomeworkCardElement[];
}

interface HomeworkFailure {
    type: typeof HOMEWORK_FAILURE;
}

interface SetTeacherPending {
    type: typeof TEACHERS_PENDING;
}

interface TeachersSuccess {
    type: typeof TEACHERS_SUCCESS;
    count: number;
    data: any[];
}

interface TeachersFailure {
    type: typeof TEACHERS_FAILURE;
}

interface SetUpcomingClassesPending {
    type: typeof UPCOMING_CLASSES_PENDING;
}

interface UpcomingClassesSuccess {
    type: typeof UPCOMING_CLASSES_SUCCESS;
    count: number;
    data: any[];
    nextClassCard: NextClassCardElement;
}

interface UpcomingClassesFailure {
    type: typeof UPCOMING_CLASSES_FAILURE;
}

interface SetPreviousClassesPending {
    type: typeof PREVIOUS_CLASSES_PENDING;
}

interface PreviousClassesSuccess {
    type: typeof PREVIOUS_CLASSES_SUCCESS;
    count: number;
    total: number;
    data: any[];
}

interface PreviousClassesFailure {
    type: typeof PREVIOUS_CLASSES_FAILURE;
}

interface SetPreviousClassesByTeacherPending {
    type: typeof PREVIOUS_CLASSES_BY_TEACHER_PENDING;
}

interface PreviousClassesByTeacherSuccess {
    type: typeof PREVIOUS_CLASSES_BY_TEACHER_SUCCESS;
    data: any[];
}

interface PreviousClassesByTeacherFailure {
    type: typeof PREVIOUS_CLASSES_BY_TEACHER_FAILURE;
}

interface ClearPreviousClassesByTeacher {
    type: typeof CLEAR_PREVIOUS_CLASSES_BY_TEACHER;
}

interface SetPreviousClassesFilter {
    type: typeof SET_PREVIOUS_CLASSES_FILTER;
    filter: SelectedFilterValue;
}

interface SetFeaturedSubjectsPending {
    type: typeof FEATURED_SUBJECT_PENDING;
}

interface FeaturedSubjectsSuccess {
    type: typeof FEATURED_SUBJECT_SUCCESS;
    data: any[];
    featuredSubjectsCard: FeaturedCardElement;
}

interface FeaturedSubjectsFailure {
    type: typeof FEATURED_SUBJECT_FAILURE;
}

interface SetInfoPending {
    type: typeof INFO_PENDING;
}

interface InfoSuccess {
    type: typeof INFO_SUCCESS;
    data: any;
    profileCard: ProfileCardElement;
    editProfileForm: EditProfileForm;
}

interface InfoFailure {
    type: typeof INFO_FAILURE;
}

interface SetSubjectsPending {
    type: typeof SUBJECTS_PENDING;
}

interface SubjectsSuccess {
    type: typeof SUBJECTS_SUCCESS;
    count: number;
    data: any[];
}

interface SubjectsFailure {
    type: typeof SUBJECTS_FAILURE;
}

interface SetUpcomingClassesFilter {
    type: typeof SET_UPCOMING_CLASSES_FILTER;
    filter: SelectedFilterValue;
}

interface SetUpcomingClassesFilterPending {
    type: typeof UPCOMING_CLASSES_FILTER_PENDING;
}

interface UpcomingClassesFilterSuccess {
    type: typeof UPCOMING_CLASSES_FILTER_SUCCESS;
}

interface UpcomingClassesFilterFailure {
    type: typeof UPCOMING_CLASSES_FILTER_FAILURE;
}

interface SetUpdateInfoPending {
    type: typeof UPDATE_INFO_PENDING;
}

interface UpdateInfoSuccess {
    type: typeof UPDATE_INFO_SUCCESS;
}

interface UpdateInfoFailure {
    type: typeof UPDATE_INFO_FAILURE;
}

interface SetEducationPending {
    type: typeof EDUCATION_PENDING;
}

interface EducationSuccess {
    type: typeof EDUCATION_SUCCESS;
    data: any[];
}

interface EducationFailure {
    type: typeof EDUCATION_FAILURE;
}

interface SetDeleteEducationPending {
    type: typeof DELETE_EDUCATION_PENDING;
}

interface DeleteEducationSuccess {
    type: typeof DELETE_EDUCATION_SUCCESS;
}

interface DeleteEducationFailure {
    type: typeof DELETE_EDUCATION_FAILURE;
}

interface SetEditEducationPending {
    type: typeof EDIT_EDUCATION_PENDING;
}

interface EditEducationSuccess {
    type: typeof EDIT_EDUCATION_SUCCESS;
}

interface EditEducationFailure {
    type: typeof EDIT_EDUCATION_FAILURE;
}

interface SetCreateEducationPending {
    type: typeof CREATE_EDUCATION_PENDING;
}

interface CreateEducationSuccess {
    type: typeof CREATE_EDUCATION_SUCCESS;
}

interface CreateEducationFailure {
    type: typeof CREATE_EDUCATION_FAILURE;
}

interface SetTeachersFilter {
    type: typeof SET_TEACHERS_FILTER;
    filter: SelectedFilterValue;
}

interface WatchRecordedClassesSuccess {
    type: typeof WATCH_RECORDED_CLASS_SUCCESS;
    data: WatchRecordedClassElement;
}

interface SetHomeworkFilter {
    type: typeof SET_HOMEWORK_FILTER;
    filter: SelectedFilterValue;
}

interface SetRecommendationsFilter {
    type: typeof SET_RECOMMENDATIONS_FILTER;
    filter: SelectedFilterValue;
}

interface ClearState {
    type: typeof CLEAR_STATE;
}

interface SetHomeworkDetailsPending {
    type: typeof HOMEWORK_DETAILS_PENDING;
}

interface HomeworkDetailsSuccess {
    type: typeof HOMEWORK_DETAILS_SUCCESS;
    data: any;
    details: HomeworkDetailsData;
}

interface HomeworkDetailsFailure {
    type: typeof HOMEWORK_DETAILS_FAILURE;
}

interface SetSubmitHomeworkPending {
    type: typeof SUBMIT_HOMEWORK_PENDING;
}

interface SubmitHomeworkSuccess {
    type: typeof SUBMIT_HOMEWORK_SUCCESS;
}

interface SubmitHomeworkFailure {
    type: typeof SUBMIT_HOMEWORK_FAILURE;
}

interface ClearHomeworkDetails {
    type: typeof CLEAR_HOMEWORK_DETAILS;
}

interface SetHomeworkFilterPending {
    type: typeof HOMEWORK_FILTER_PENDING;
}

interface HomeworkFilterSuccess {
    type: typeof HOMEWORK_FILTER_SUCCESS;
    count: number;
    homeworks: HomeworkCardElement[];
}

interface HomeworkFilterFailure {
    type: typeof HOMEWORK_FILTER_FAILURE;
}

interface SetRecommendationPending {
    type: typeof RECOMMENDATION_PENDING;
}

interface RecommendationSuccess {
    type: typeof RECOMMENDATION_SUCCESS;
    data: any[];
    count: number;
}

interface RecommendationFailure {
    type: typeof RECOMMENDATION_FAILURE;
}

interface SetRecommendationStatusPending {
    type: typeof RECOMMENDATION_STATUS_PENDING;
}

interface RecommendationStatusSuccess {
    type: typeof RECOMMENDATION_STATUS_SUCCESS;
}

interface RecommendationStatusFailure {
    type: typeof RECOMMENDATION_STATUS_FAILURE;
}

interface SetSubmitHomeworkPhysicallyPending {
    type: typeof SUBMIT_HOMEWORK_PHYSICALLY_PENDING;
}

interface SubmitHomeworkPhysicallySuccess {
    type: typeof SUBMIT_HOMEWORK_PHYSICALLY_SUCCESS;
}

interface SubmitHomeworkPhysicallyFailure {
    type: typeof SUBMIT_HOMEWORK_PHYSICALLY_FAILURE;
}

interface SetPreviousClassesPaginationPending {
    type: typeof PREVIOUS_CLASSES_PAGINATION_PENDING;
}

interface PreviousClassesPaginationSuccess {
    type: typeof PREVIOUS_CLASSES_PAGINATION_SUCCESS;
    data: any[];
    count: number;
    page: number;
}

interface PreviousClassesPaginationFailure {
    type: typeof PREVIOUS_CLASSES_PAGINATION_FAILURE;
}

interface SetPreviousClassPending {
    type: typeof PREVIOUS_CLASS_PENDING;
}

interface PreviousClassSuccess {
    type: typeof PREVIOUS_CLASS_SUCCESS;
    purchaseCard: PurchaseClassCardElement;
}

interface PreviousClassFailure {
    type: typeof PREVIOUS_CLASS_FAILURE;
}

interface ClearPreviousClass {
    type: typeof CLEAR_PREVIOUS_CLASS;
}

interface SetTeacherProfilePending {
    type: typeof TEACHER_PROFILE_PENDING;
}

interface TeacherProfileSuccess {
    type: typeof TEACHER_PROFILE_SUCCESS;
    profileCard: TutorProfileCardElement;
    availability: AvailabilityCardElement;
    essentialClasses: FeaturedCardElement;
    experience: ExperienceViewCardElement[];
    education: EducationViewCardElement[];
    skills: TagCardElement[];
    rating: string;
    reviews: ReviewSecondaryCardElement[];
    similarTutors: ImageCardElement[];
}

interface TeacherProfileFailure {
    type: typeof TEACHER_PROFILE_FAILURE;
}

interface ClearTeacherProfile {
    type: typeof CLEAR_TEACHER_PROFILE;
}

interface SetUpcomingClassesByTeacherPending {
    type: typeof UPCOMING_CLASSES_BY_TEACHER_PENDING;
}

interface UpcomingClassesByTeacherSuccess {
    type: typeof UPCOMING_CLASSES_BY_TEACHER_SUCCESS;
    data: any[];
}

interface UpcomingClassesByTeacherFailure {
    type: typeof UPCOMING_CLASSES_BY_TEACHER_FAILURE;
}

interface ClearUpcomingClassesByTeacher {
    type: typeof CLEAR_UPCOMING_CLASSES_BY_TEACHER;
}

export type StudentModuleActionTypes =
    | SetHomeworkPending
    | HomeworkSuccess
    | SetTeacherPending
    | TeachersSuccess
    | SetUpcomingClassesPending
    | UpcomingClassesSuccess
    | SetPreviousClassesPending
    | PreviousClassesSuccess
    | SetFeaturedSubjectsPending
    | FeaturedSubjectsSuccess
    | SetInfoPending
    | InfoSuccess
    | SetSubjectsPending
    | SubjectsSuccess
    | SetUpcomingClassesFilterPending
    | SetUpcomingClassesFilter
    | UpcomingClassesFilterSuccess
    | SetUpdateInfoPending
    | UpdateInfoSuccess
    | SetEducationPending
    | EducationSuccess
    | SetEditEducationPending
    | EditEducationSuccess
    | CreateEducationSuccess
    | SetCreateEducationPending
    | SetPreviousClassesFilter
    | SetTeachersFilter
    | WatchRecordedClassesSuccess
    | SetDeleteEducationPending
    | DeleteEducationSuccess
    | DeleteEducationFailure
    | SetHomeworkFilter
    | SetRecommendationsFilter
    | ClearState
    | SetHomeworkDetailsPending
    | HomeworkDetailsSuccess
    | SetSubmitHomeworkPending
    | SubmitHomeworkSuccess
    | ClearHomeworkDetails
    | SetHomeworkFilterPending
    | HomeworkFilterSuccess
    | SetRecommendationPending
    | RecommendationSuccess
    | SetSubmitHomeworkPhysicallyPending
    | SubmitHomeworkPhysicallySuccess
    | SetPreviousClassesPaginationPending
    | PreviousClassesPaginationSuccess
    | SetPreviousClassPending
    | PreviousClassSuccess
    | ClearPreviousClass
    | SetTeacherProfilePending
    | TeacherProfileSuccess
    | SetPreviousClassesByTeacherPending
    | PreviousClassesByTeacherSuccess
    | SetUpcomingClassesByTeacherPending
    | UpcomingClassesByTeacherSuccess
    | UpcomingClassesByTeacherFailure
    | PreviousClassesByTeacherFailure
    | ClearPreviousClassesByTeacher
    | HomeworkFailure
    | TeachersFailure
    | UpcomingClassesFailure
    | PreviousClassesFailure
    | FeaturedSubjectsFailure
    | InfoFailure
    | SubjectsFailure
    | UpcomingClassesFilterFailure
    | UpdateInfoFailure
    | EducationFailure
    | EditEducationFailure
    | CreateEducationFailure
    | HomeworkDetailsFailure
    | SubmitHomeworkFailure
    | HomeworkFilterFailure
    | RecommendationFailure
    | SubmitHomeworkPhysicallyFailure
    | PreviousClassesPaginationFailure
    | PreviousClassFailure
    | TeacherProfileFailure
    | ClearTeacherProfile
    | ClearUpcomingClassesByTeacher
    | SetRecommendationStatusPending
    | RecommendationStatusSuccess
    | RecommendationStatusFailure;

function setHomeworkPending(): SetHomeworkPending {
    return {
        type: HOMEWORK_PENDING,
    };
}

function homeworkSuccess(
    incompleteCount: number,
    overdueCount: number,
    count: number,
    homeworks: HomeworkCardElement[],
    overdueHomeworks: HomeworkCardElement[]
): HomeworkSuccess {
    return {
        type: HOMEWORK_SUCCESS,
        incompleteCount,
        overdueCount,
        count,
        homeworks,
        overdueHomeworks,
    };
}

function homeworkFailure(): HomeworkFailure {
    return {
        type: HOMEWORK_FAILURE,
    };
}

export function fetchHomework(): AppThunk {
    return (dispatch) => {
        dispatch(setHomeworkPending());
        API.get(studentsEndpoints.getHomework)
            .then(({ data: { success, data } }) => {
                if (success) {
                    const { incompleteCount, overDueCount, allHomeworkCount, overDueHW, nonOverDueHW } = data;
                    dispatch(
                        homeworkSuccess(
                            incompleteCount,
                            overDueCount,
                            allHomeworkCount,
                            dataToHomeworkCards(nonOverDueHW),
                            dataToHomeworkCards(overDueHW)
                        )
                    );
                }
            })
            .catch(() => {
                dispatch(homeworkFailure());
            });
    };
}

function setTeachersPending(): SetTeacherPending {
    return {
        type: TEACHERS_PENDING,
    };
}

function teachersSuccess(count: number, data: any[]): TeachersSuccess {
    return {
        type: TEACHERS_SUCCESS,
        count,
        data,
    };
}

function teachersFailure(): TeachersFailure {
    return {
        type: TEACHERS_FAILURE,
    };
}

export function fetchTeachers(): AppThunk {
    return (dispatch) => {
        dispatch(setTeachersPending());
        API.get(studentsEndpoints.getFeatureTeacher)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(teachersSuccess(data.length, data));
                }
            })
            .catch(() => {
                dispatch(teachersFailure());
            });
    };
}

function setUpcomingPending(): SetUpcomingClassesPending {
    return {
        type: UPCOMING_CLASSES_PENDING,
    };
}

function upcomingClassesSuccess(
    count: number,
    data: any[],
    nextClassCard: NextClassCardElement
): UpcomingClassesSuccess {
    return {
        type: UPCOMING_CLASSES_SUCCESS,
        nextClassCard,
        count,
        data,
    };
}

function upcomingClassesFailure(): UpcomingClassesFailure {
    return {
        type: UPCOMING_CLASSES_FAILURE,
    };
}

export function fetchUpcomingClasses(): AppThunk {
    return (dispatch) => {
        dispatch(setUpcomingPending());
        API.get(studentsEndpoints.getUpcomingSessions)
            .then(({ data: { success, data } }) => {
                if (success) {
                    const { upcomingCount, upcomingSessions } = data;
                    if (upcomingCount) {
                        dispatch(
                            upcomingClassesSuccess(
                                upcomingCount,
                                upcomingSessions,
                                dataToNextClassCard(upcomingSessions[0])
                            )
                        );
                    }
                }
            })
            .catch(() => {
                dispatch(upcomingClassesFailure());
            });
    };
}

function setUpcomingClassesByTeacherPending(): SetUpcomingClassesByTeacherPending {
    return {
        type: UPCOMING_CLASSES_BY_TEACHER_PENDING,
    };
}

function upcomingClassesByTeacherSuccess(data: any[]): UpcomingClassesByTeacherSuccess {
    return {
        type: UPCOMING_CLASSES_BY_TEACHER_SUCCESS,
        data,
    };
}

function upcomingClassesByTeacherFailure(): UpcomingClassesByTeacherFailure {
    return {
        type: UPCOMING_CLASSES_BY_TEACHER_FAILURE,
    };
}

function clearUpcomingClassesByTeacher(): ClearUpcomingClassesByTeacher {
    return {
        type: CLEAR_UPCOMING_CLASSES_BY_TEACHER,
    };
}

export function fetchUpcomingClassesByTeacher(id: number): AppThunk {
    return (dispatch) => {
        dispatch(clearUpcomingClassesByTeacher());
        dispatch(setUpcomingClassesByTeacherPending());
        API.get(`${studentsEndpoints.getUpcomingSessions}/${id}`)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(upcomingClassesByTeacherSuccess(data.sessions));
                }
            })
            .catch(() => {
                dispatch(upcomingClassesByTeacherFailure());
            });
    };
}

function setUpcomingClassesFilter(filter: SelectedFilterValue): SetUpcomingClassesFilter {
    return {
        type: SET_UPCOMING_CLASSES_FILTER,
        filter,
    };
}

function setUpcomingClassesFilterPending(): SetUpcomingClassesFilterPending {
    return {
        type: UPCOMING_CLASSES_FILTER_PENDING,
    };
}

function upcomingClassesFilterSuccess(): UpcomingClassesFilterSuccess {
    return {
        type: UPCOMING_CLASSES_FILTER_SUCCESS,
    };
}

function upcomingClassesFilterFailure(): UpcomingClassesFilterFailure {
    return {
        type: UPCOMING_CLASSES_FILTER_FAILURE,
    };
}

export function fetchUpcomingClassesFilter(filter: SelectedFilterValue): AppThunk {
    return (dispatch) => {
        dispatch(setUpcomingClassesFilter(filter));
        if (filter) {
            dispatch(setUpcomingClassesFilterPending());
            API.get(`/${studentsEndpoints.getUpcomingClassesFilter}/${filter.value}`)
                .then(({ data: { success } }) => {
                    if (success) {
                        dispatch(upcomingClassesFilterSuccess());
                    }
                })
                .catch(() => {
                    dispatch(upcomingClassesFilterFailure());
                });
        }
    };
}

function setPreviousClassesPending(): SetPreviousClassesPending {
    return {
        type: PREVIOUS_CLASSES_PENDING,
    };
}

function previousClassesSuccess(count: number, total: number, data: any[]): PreviousClassesSuccess {
    return {
        type: PREVIOUS_CLASSES_SUCCESS,
        count,
        total,
        data,
    };
}

function previousClassesFailure(): PreviousClassesFailure {
    return {
        type: PREVIOUS_CLASSES_FAILURE,
    };
}

export function fetchPreviousClasses(page: number, perPage: number): AppThunk {
    return (dispatch) => {
        dispatch(setPreviousClassesPending());
        API.get(`${studentsEndpoints.getPreviousSessions}?page=${page}&perPage=${perPage}`)
            .then(({ data: { success, data } }) => {
                if (success) {
                    const { prerecordedSessions, previousCount } = data;
                    dispatch(previousClassesSuccess(prerecordedSessions.length, previousCount, prerecordedSessions));
                }
            })
            .catch(() => {
                dispatch(previousClassesFailure());
            });
    };
}

function setPreviousClassesByTeacherPending(): SetPreviousClassesByTeacherPending {
    return {
        type: PREVIOUS_CLASSES_BY_TEACHER_PENDING,
    };
}

function previousClassesByTeacherSuccess(data: any[]): PreviousClassesByTeacherSuccess {
    return {
        type: PREVIOUS_CLASSES_BY_TEACHER_SUCCESS,
        data,
    };
}

function previousClassesByTeacherFailure(): PreviousClassesByTeacherFailure {
    return {
        type: PREVIOUS_CLASSES_BY_TEACHER_FAILURE,
    };
}

function clearPreviousClassesByTeacher(): ClearPreviousClassesByTeacher {
    return {
        type: CLEAR_PREVIOUS_CLASSES_BY_TEACHER,
    };
}

export function fetchPreviousClassesByTeacher(id: number): AppThunk {
    return (dispatch) => {
        dispatch(clearPreviousClassesByTeacher());
        dispatch(setPreviousClassesByTeacherPending());
        API.get(`${studentsEndpoints.getPreviousSessions}/${id}`)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(previousClassesByTeacherSuccess(data.sessions));
                }
            })
            .catch(() => {
                dispatch(previousClassesByTeacherFailure());
            });
    };
}

function setPreviousClassesPaginationPending(): SetPreviousClassesPaginationPending {
    return {
        type: PREVIOUS_CLASSES_PAGINATION_PENDING,
    };
}

function previousClassesPaginationSuccess(data: any[], count: number, page: number): PreviousClassesPaginationSuccess {
    return {
        type: PREVIOUS_CLASSES_PAGINATION_SUCCESS,
        data,
        count,
        page,
    };
}

function previousClassesPaginationFailure(): PreviousClassesPaginationFailure {
    return {
        type: PREVIOUS_CLASSES_PAGINATION_FAILURE,
    };
}

export function fetchPreviousClassesPagination(page: number, perPage: number): AppThunk {
    return (dispatch) => {
        dispatch(setPreviousClassesPaginationPending());
        API.get(`${studentsEndpoints.getPreviousSessions}?page=${page}&perPage=${perPage}`)
            .then(({ data: { success, data } }) => {
                if (success) {
                    const { prerecordedSessions } = data;
                    dispatch(previousClassesPaginationSuccess(prerecordedSessions, prerecordedSessions.length, page));
                }
            })
            .catch(() => {
                dispatch(previousClassesPaginationFailure());
            });
    };
}

function setPreviousClassPending(): SetPreviousClassPending {
    return {
        type: PREVIOUS_CLASS_PENDING,
    };
}

function previousClassSuccess(purchaseCard: PurchaseClassCardElement): PreviousClassSuccess {
    return {
        type: PREVIOUS_CLASS_SUCCESS,
        purchaseCard,
    };
}

function previousClassFailure(): PreviousClassFailure {
    return {
        type: PREVIOUS_CLASS_FAILURE,
    };
}

export function clearPreviousClass(): ClearPreviousClass {
    return {
        type: CLEAR_PREVIOUS_CLASS,
    };
}

export function fetchPreviousClass(id: number): AppThunk {
    return (dispatch) => {
        dispatch(setPreviousClassPending());
        API.get(studentsEndpoints.previousClass + id)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(previousClassSuccess(dataToPurchaseClassCard(data)));
                }
            })
            .catch(() => {
                dispatch(previousClassFailure());
            });
    };
}

function setFeaturedSubjectsPending(): SetFeaturedSubjectsPending {
    return {
        type: FEATURED_SUBJECT_PENDING,
    };
}

function featuredSubjectsSuccess(data: any[], featuredSubjectsCard: FeaturedCardElement): FeaturedSubjectsSuccess {
    return {
        type: FEATURED_SUBJECT_SUCCESS,
        data,
        featuredSubjectsCard,
    };
}

function featuredSubjectsFailure(): FeaturedSubjectsFailure {
    return {
        type: FEATURED_SUBJECT_FAILURE,
    };
}

export function fetchFeaturedSubject(): AppThunk {
    return (dispatch) => {
        dispatch(setFeaturedSubjectsPending());
        API.get(studentsEndpoints.getFeatureSubject)
            .then(({ data: { success, data } }) => {
                if (success && data.length) {
                    dispatch(featuredSubjectsSuccess(data, dataToFeaturedCard(data)));
                }
            })
            .catch(() => {
                dispatch(featuredSubjectsFailure());
            });
    };
}

function setInfoPending(): SetInfoPending {
    return {
        type: INFO_PENDING,
    };
}

function infoSuccess(data: any, profileCard: ProfileCardElement, editProfileForm: EditProfileForm): InfoSuccess {
    return {
        type: INFO_SUCCESS,
        data,
        profileCard,
        editProfileForm,
    };
}

function infoFailure(): InfoFailure {
    return {
        type: INFO_FAILURE,
    };
}

export function fetchInfo(): AppThunk {
    return (dispatch) => {
        dispatch(setInfoPending());
        API.get(endpoints.getUserProfile)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(infoSuccess(data, dataToProfileCard(data), dataToEditProfileForm(data)));
                }
            })
            .catch(() => {
                dispatch(infoFailure());
            });
    };
}

function setUpdateInfoPending(): SetUpdateInfoPending {
    return {
        type: UPDATE_INFO_PENDING,
    };
}

function updateInfoSuccess(): UpdateInfoSuccess {
    return {
        type: UPDATE_INFO_SUCCESS,
    };
}

function updateInfoFailure(): UpdateInfoFailure {
    return {
        type: UPDATE_INFO_FAILURE,
    };
}

export function fetchUpdateInfo(data: UpdateProfileForm): AppThunk {
    return (dispatch) => {
        dispatch(setUpdateInfoPending());
        API.put(endpoints.updateProfile, data)
            .then(({ data: { success } }) => {
                if (success) {
                    dispatch(updateInfoSuccess());
                    dispatch(fetchInfo());
                }
            })
            .catch(() => {
                updateInfoFailure();
            });
    };
}

function setSubjectsPending(): SetSubjectsPending {
    return {
        type: SUBJECTS_PENDING,
    };
}

function subjectsSuccess(count: number, data: any[]): SubjectsSuccess {
    return {
        type: SUBJECTS_SUCCESS,
        count,
        data,
    };
}

function subjectsFailure(): SubjectsFailure {
    return {
        type: SUBJECTS_FAILURE,
    };
}

export function fetchSubjects(): AppThunk {
    return (dispatch) => {
        dispatch(setSubjectsPending());
        API.get(studentsEndpoints.getSubjects)
            .then(({ data: { success, data } }) => {
                if (success) {
                    const { schoolSubjects, schoolSubjectCount } = data;
                    dispatch(subjectsSuccess(schoolSubjectCount, schoolSubjects));
                }
            })
            .catch(() => {
                dispatch(subjectsFailure());
            });
    };
}

function setEducationPending(): SetEducationPending {
    return {
        type: EDUCATION_PENDING,
    };
}

function educationSuccess(data: any[]): EducationSuccess {
    return {
        type: EDUCATION_SUCCESS,
        data,
    };
}

function educationFailure(): EducationFailure {
    return {
        type: EDUCATION_FAILURE,
    };
}

export function fetchEducation(): AppThunk {
    return (dispatch) => {
        dispatch(setEducationPending());
        API.get(studentsEndpoints.education)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(educationSuccess(data));
                }
            })
            .catch(() => {
                dispatch(educationFailure());
            });
    };
}

function setDeleteEducationPending(): SetDeleteEducationPending {
    return {
        type: DELETE_EDUCATION_PENDING,
    };
}

function deleteEducationSuccess(): DeleteEducationSuccess {
    return {
        type: DELETE_EDUCATION_SUCCESS,
    };
}

function deleteEducationFailure(): DeleteEducationFailure {
    return {
        type: DELETE_EDUCATION_FAILURE,
    };
}

export function fetchDeleteEducation(id: number): AppThunk {
    return (dispatch) => {
        dispatch(setDeleteEducationPending());
        API.delete(studentsEndpoints.education + id)
            .then(({ data: { success } }) => {
                if (success) {
                    dispatch(deleteEducationSuccess());
                    dispatch(fetchEducation());
                }
            })
            .catch(() => {
                dispatch(deleteEducationFailure());
            });
    };
}

function setEditEducationPending(): SetEditEducationPending {
    return {
        type: EDIT_EDUCATION_PENDING,
    };
}

function editEducationSuccess(): EditEducationSuccess {
    return {
        type: EDIT_EDUCATION_SUCCESS,
    };
}

function editEducationFailure(): EditEducationFailure {
    return {
        type: EDIT_EDUCATION_FAILURE,
    };
}

export function fetchEditEducation(id: number, formData: EducationForm, toggleEdit: () => void): AppThunk {
    return (dispatch) => {
        dispatch(setEditEducationPending());
        API.put(studentsEndpoints.education + id, formData)
            .then(({ data: { success } }) => {
                if (success) {
                    dispatch(editEducationSuccess());
                    dispatch(fetchEducation());
                    toggleEdit();
                }
            })
            .catch(() => {
                dispatch(editEducationFailure());
            });
    };
}

function setCreateEducationPending(): SetCreateEducationPending {
    return {
        type: CREATE_EDUCATION_PENDING,
    };
}

function createEducationSuccess(): CreateEducationSuccess {
    return {
        type: CREATE_EDUCATION_SUCCESS,
    };
}

function createEducationFailure(): CreateEducationFailure {
    return {
        type: CREATE_EDUCATION_FAILURE,
    };
}

export function fetchCreateEducation(formData: EducationForm, toggleAdd: () => void): AppThunk {
    return (dispatch) => {
        dispatch(setCreateEducationPending());
        API.post(studentsEndpoints.education, formData)
            .then(({ data: { success } }) => {
                if (success) {
                    dispatch(createEducationSuccess());
                    dispatch(fetchEducation());
                    toggleAdd();
                }
            })
            .catch(() => {
                dispatch(createEducationFailure());
            });
    };
}

export function setPreviousClassesFilter(filter: SelectedFilterValue): SetPreviousClassesFilter {
    return {
        type: SET_PREVIOUS_CLASSES_FILTER,
        filter,
    };
}

export function setTeachersFilter(filter: SelectedFilterValue): SetTeachersFilter {
    return {
        type: SET_TEACHERS_FILTER,
        filter,
    };
}

export function watchRecordedClassesSuccess(data: WatchRecordedClassElement) {
    return {
        type: WATCH_RECORDED_CLASS_SUCCESS,
        data,
    };
}

export function setHomeworkFilter(filter: SelectedFilterValue): SetHomeworkFilter {
    return {
        type: SET_HOMEWORK_FILTER,
        filter,
    };
}

export function setHomeworkFilterPending(): SetHomeworkFilterPending {
    return {
        type: HOMEWORK_FILTER_PENDING,
    };
}

export function homeworkFilterSuccess(homeworks: HomeworkCardElement[], count: number): HomeworkFilterSuccess {
    return {
        type: HOMEWORK_FILTER_SUCCESS,
        count,
        homeworks,
    };
}

export function homeworkFilterFailure(): HomeworkFilterFailure {
    return {
        type: HOMEWORK_FILTER_FAILURE,
    };
}

export function fetchHomeworkFilter(filter: SelectedFilterValue): AppThunk {
    return (dispatch) => {
        dispatch(setHomeworkFilter(filter));
        if (filter) {
            dispatch(setHomeworkFilterPending());
            API.get(studentsEndpoints.getHomework + filter.value)
                .then(({ data: { success, data } }) => {
                    if (success) {
                        const { overDueHomework } = data;
                        dispatch(homeworkFilterSuccess(dataToHomeworkCards(overDueHomework), overDueHomework.length));
                    }
                })
                .catch(() => {
                    dispatch(homeworkFilterFailure());
                });
        }
    };
}

export function setRecommendationsFilter(filter: SelectedFilterValue): SetRecommendationsFilter {
    return {
        type: SET_RECOMMENDATIONS_FILTER,
        filter,
    };
}

export function clearState(): ClearState {
    return {
        type: CLEAR_STATE,
    };
}

function setHomeworkDetailsPending(): SetHomeworkDetailsPending {
    return {
        type: HOMEWORK_DETAILS_PENDING,
    };
}

function homeworkDetailsSuccess(data: any, details: HomeworkDetailsData): HomeworkDetailsSuccess {
    return {
        type: HOMEWORK_DETAILS_SUCCESS,
        data,
        details,
    };
}

function homeworkDetailsFailure(): HomeworkDetailsFailure {
    return {
        type: HOMEWORK_DETAILS_FAILURE,
    };
}

export function fetchHomeworkDetails(id: number): AppThunk {
    return (dispatch) => {
        dispatch(setHomeworkDetailsPending());
        API.get(studentsEndpoints.homeworkDetails + id)
            .then(({ data: { success, data } }) => {
                if (success) {
                    dispatch(homeworkDetailsSuccess(data, dataToDetails(data)));
                }
            })
            .catch(() => {
                dispatch(homeworkDetailsFailure());
            });
    };
}

function setSubmitHomeworkPending(): SetSubmitHomeworkPending {
    return {
        type: SUBMIT_HOMEWORK_PENDING,
    };
}

function submitHomeworkSuccess(): SubmitHomeworkSuccess {
    return {
        type: SUBMIT_HOMEWORK_SUCCESS,
    };
}

function submitHomeworkFailure(): SubmitHomeworkFailure {
    return {
        type: SUBMIT_HOMEWORK_FAILURE,
    };
}

export function fetchSubmitHomework(id: number, data: any): AppThunk {
    return (dispatch) => {
        dispatch(setSubmitHomeworkPending());
        API.put(studentsEndpoints.homework + id, data)
            .then(({ data: { success } }) => {
                if (success) {
                    dispatch(submitHomeworkSuccess());
                    dispatch(fetchHomework());
                }
            })
            .catch(() => {
                dispatch(submitHomeworkFailure());
            });
    };
}

function setSubmitHomeworkPhysicallyPending(): SetSubmitHomeworkPhysicallyPending {
    return {
        type: SUBMIT_HOMEWORK_PHYSICALLY_PENDING,
    };
}

function submitHomeworkPhysicallySuccess(): SubmitHomeworkPhysicallySuccess {
    return {
        type: SUBMIT_HOMEWORK_PHYSICALLY_SUCCESS,
    };
}

function submitHomeworkPhysicallyFailure(): SubmitHomeworkPhysicallyFailure {
    return {
        type: SUBMIT_HOMEWORK_PHYSICALLY_FAILURE,
    };
}

export function fetchSubmitHomeworkPhysically(id: number, isSubmitted: boolean): AppThunk {
    return (dispatch) => {
        dispatch(setSubmitHomeworkPhysicallyPending());
        API.put(studentsEndpoints.homeworkPhysically + id, { isSubmitted })
            .then(({ data: { success } }) => {
                if (success) {
                    dispatch(submitHomeworkPhysicallySuccess());
                }
            })
            .catch(() => {
                dispatch(submitHomeworkPhysicallyFailure());
            });
    };
}

export function clearHomeworkDetails(): ClearHomeworkDetails {
    return {
        type: CLEAR_HOMEWORK_DETAILS,
    };
}

function setRecommendationPending(): SetRecommendationPending {
    return {
        type: RECOMMENDATION_PENDING,
    };
}

function recommendationSuccess(data: any[], count: number): RecommendationSuccess {
    return {
        type: RECOMMENDATION_SUCCESS,
        data,
        count,
    };
}

function recommendationFailure(): RecommendationFailure {
    return {
        type: RECOMMENDATION_FAILURE,
    };
}

export function fetchRecommendation(): AppThunk {
    return (dispatch) => {
        dispatch(setRecommendationPending());
        API.get(studentsEndpoints.recommendations)
            .then(({ data: { success, data } }) => {
                if (success) {
                    const { result, studentsRecommendCount } = data;
                    dispatch(recommendationSuccess(result, studentsRecommendCount));
                }
            })
            .catch(() => {
                dispatch(recommendationFailure());
            });
    };
}

function setRecommendationStatusPending(): SetRecommendationStatusPending {
    return {
        type: RECOMMENDATION_STATUS_PENDING,
    };
}

function recommendationStatusSuccess(): RecommendationStatusSuccess {
    return {
        type: RECOMMENDATION_STATUS_SUCCESS,
    };
}

function recommendationStatusFailure(): RecommendationStatusFailure {
    return {
        type: RECOMMENDATION_STATUS_FAILURE,
    };
}

export function fetchRecommendationStatus(id: number, status: 'accepted' | 'suggest'): AppThunk {
    return (dispatch) => {
        dispatch(setRecommendationStatusPending());
        API.put(studentsEndpoints.recommendationStatus + id, { status })
            .then(({ data: { success } }) => {
                if (success) {
                    dispatch(recommendationStatusSuccess());
                    dispatch(fetchRecommendation())
                }
            })
            .catch(() => {
                dispatch(recommendationStatusFailure());
            });
    };
}

function setTeacherProfilePending(): SetTeacherProfilePending {
    return {
        type: TEACHER_PROFILE_PENDING,
    };
}

function teacherProfileSuccess(
    profileCard: TutorProfileCardElement,
    availability: AvailabilityCardElement,
    essentialClasses: FeaturedCardElement,
    experience: ExperienceViewCardElement[],
    education: EducationViewCardElement[],
    skills: TagCardElement[],
    rating: string,
    reviews: ReviewSecondaryCardElement[],
    similarTutors: ImageCardElement[]
): TeacherProfileSuccess {
    return {
        type: TEACHER_PROFILE_SUCCESS,
        profileCard,
        availability,
        essentialClasses,
        experience,
        education,
        skills,
        rating,
        reviews,
        similarTutors,
    };
}

function teacherProfileFailure(): TeacherProfileFailure {
    return {
        type: TEACHER_PROFILE_FAILURE,
    };
}

function clearTeacherProfile(): ClearTeacherProfile {
    return {
        type: CLEAR_TEACHER_PROFILE,
    };
}

export function fetchTeacherProfile(id: number): AppThunk {
    return (dispatch) => {
        dispatch(clearTeacherProfile());
        dispatch(setTeacherProfilePending());
        API.get(studentsEndpoints.teacherProfile + id)
            .then(({ data: { success, data } }) => {
                if (success) {
                    const { rating } = data;
                    dispatch(
                        teacherProfileSuccess(
                            dataToTutorProfileCard(data),
                            dataToTutorAvailability(data),
                            dataToTutorEssentialClasses(data),
                            dataToExperienceCards(data),
                            dataToEducationCards(data),
                            dataToTutorSkills(data),
                            toRatingString(rating),
                            dataToTutorReviews(data),
                            dataToSimilarTutors(data)
                        )
                    );
                }
            })
            .catch(() => {
                dispatch(teacherProfileFailure());
            });
    };
}
