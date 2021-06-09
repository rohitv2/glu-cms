import {
    AvailabilityCardElement,
    FeaturedCardElement,
    HomeworkCardElement,
    ImageCardElement,
    NextClassCardElement,
    ProfileCardElement,
    PurchaseClassCardElement,
    TutorProfileCardElement,
    WatchRecordedClassElement,
} from '../../components/Cards/types';
import { EditProfileForm } from '../../Interfaces/students/forms';
import { IFilterDataElement } from '../../Containers/FilterContainer/types';
import { HomeworkDetailsData, TutorProfileAbout, TutorProfileReviews } from '../../Containers/Pages/types';

interface AsyncState {
    isPending: boolean;
    isSuccess: boolean;
    isFailure: boolean;
}

interface FilterState extends AsyncState {
    value: IFilterDataElement | null;
    data: ImageCardElement[];
}

interface PaginationState {
    page: number;
    perPage: number;
}

interface IndividualClassState extends AsyncState {
    purchaseCard: PurchaseClassCardElement;
}

interface HomeworkFilterState extends FilterState {
    count: number;
    homeworks: HomeworkCardElement[];
}

interface HomeworkState extends AsyncState {
    homeworks: any[];
    overdueHomeworks: any[];
    count: number;
    incompleteCount: number;
    overdueCount: number;
    filters: HomeworkFilterState;
}

interface TeachersState extends AsyncState {
    count: number;
    data: any[];
    filters: FilterState;
}

interface UpcomingClassesState extends AsyncState {
    count: number;
    data: any[];
    nextClassCard: NextClassCardElement;
    filters: FilterState;
}

interface PreviousClassesState extends AsyncState {
    count: number;
    total: number;
    data: any[];
    filters: FilterState;
    pagination: PaginationState;
    individualClass: IndividualClassState;
}

interface FeaturedSubjectsState extends AsyncState {
    data: any[];
    featuredSubjectsCard: FeaturedCardElement;
}

interface InfoState extends AsyncState {
    data: any;
    profileCard: ProfileCardElement;
    editProfileForm: EditProfileForm;
}

interface UpdateInfoState extends AsyncState {}

interface SubjectsState extends AsyncState {
    count: number;
    data: any[];
}

interface DeleteEducationState extends AsyncState {}

interface EditEducationState extends AsyncState {}

interface CreateEducationState extends AsyncState {}

interface EducationState extends AsyncState {
    data: any[];
    deleteEducation: DeleteEducationState;
    editEducation: EditEducationState;
    createEducation: CreateEducationState;
}

interface WatchRecordedClassState extends AsyncState {
    data: WatchRecordedClassElement;
}

interface RecommendationStatusState extends AsyncState {}

interface RecommendationsState extends AsyncState {
    filters: FilterState;
    data: any[];
    count: number;
    recommendationStatus: RecommendationStatusState;
}

interface SubmitHomeworkState extends AsyncState {}

interface SubmitPhysicallyState extends AsyncState {}

interface HomeworkDetailsState extends AsyncState {
    data: any;
    details: HomeworkDetailsData;
    submitHomework: SubmitHomeworkState;
    submitPhysically: SubmitPhysicallyState;
}

interface TeacherProfileAboutState extends TutorProfileAbout {}

interface TeacherProfileReviewsState extends TutorProfileReviews {}

interface TeacherProfileState extends AsyncState {
    tutorProfileCard: TutorProfileCardElement;
    availability: AvailabilityCardElement;
    essentialClasses: FeaturedCardElement;
    about: TeacherProfileAboutState;
    reviews: TeacherProfileReviewsState;
    similarTutors: ImageCardElement[];
}

interface PreviousClassesByTeacherState extends AsyncState {
    data: any[];
}

interface UpcomingClassesByTeacherState extends AsyncState {
    data: any[];
}

export interface StudentModuleState {
    homework: HomeworkState;
    teachers: TeachersState;
    upcomingClasses: UpcomingClassesState;
    upcomingClassesByTeacher: UpcomingClassesByTeacherState;
    previousClasses: PreviousClassesState;
    previousClassesByTeacher: PreviousClassesByTeacherState;
    featuredSubjects: FeaturedSubjectsState;
    subjects: SubjectsState;
    info: InfoState;
    updateInfo: UpdateInfoState;
    education: EducationState;
    watchRecordedClass: WatchRecordedClassState;
    recommendations: RecommendationsState;
    homeworkDetails: HomeworkDetailsState;
    teacherProfile: TeacherProfileState;
}

export interface RootState {
    authReducer: any;
    uiReducer: any;
    schoolReducer: any;
    studentReducer: any;
    teacherReducer: any;
    parentReducer: any;
    classReducer: any;
    subjectReducer: any;
    fileUploadReducer: any;
    superAdminReducer: any;
    studentModule: StudentModuleState;
    freelanceTeacherReducer: any;
}
