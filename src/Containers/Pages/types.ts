import {
    BannerCardElement,
    FeaturedCardElement,
    ImageCardElement,
    NextClassCardElement,
    UpcomingClassCardElement,
    CalendarDateSubjectsCardElement,
    WhiteBannerCardElement,
    HomeworkCardElement,
    ProfileCardElement,
    DateSubjectCardElement,
    CarouselClassCardElement,
    EducationCardElement,
    IndividualSubjectCardElement,
    RecommendationCardElement,
    PurchaseClassCardElement,
    TutorProfileCardElement,
    AvailabilityCardElement,
    ExperienceViewCardElement,
    EducationViewCardElement,
    TagCardElement, ReviewSecondaryCardElement,
} from '../../components/Cards/types';
import { UserTypes } from '../../Types/user';
import { EditProfileForm } from '../../Interfaces/students/forms';
import { SelectedFilterValue } from '../FilterContainer/types';
import { ChildrenSelectElement } from '../../components/Form/types';
import { OnSubmitPhysically, OnUploadComplete } from './IndividualHomeworkPageContainer/Submit';
import { LatestReviewCardElement, ReviewCardElement } from './ReviewsPageContainer/types';
import { OnSubmitChallenge } from './ReviewsPageContainer/ReviewCard';
import { OnFilter } from './ReviewsPageContainer/Filters';
import { OpenPurchaseDrawer } from '../../Hooks/students/usePurchaseDrawer';
import { ClassType } from '../../Types';

export interface UserType {
    userType: UserTypes;
}

export interface Async {
    isLoading: boolean;
}

export interface PaginationPage {
    total: number;
    current: number;
    onShowMore: () => void;
}

export interface PurchaseDrawerPage extends Async {
    isOpen: boolean;
    type: ClassType;
    purchaseCard: PurchaseClassCardElement;
    onOpen: OpenPurchaseDrawer;
    onClose: () => void;
    onLeave: () => void;
}

export interface FilterPage {
    onFilter: (filter: SelectedFilterValue) => void;
    selectedFilter: SelectedFilterValue;
}

export interface HomePageCardsData {
    bannerCarousel: BannerCardElement[];
    nextClass: NextClassCardElement;
    featuredSubjects: FeaturedCardElement;
    recordedClasses: ImageCardElement[];
    bannerCarouselCenter: BannerCardElement[];
    upcomingClass: UpcomingClassCardElement;
    calendar?: CalendarDateSubjectsCardElement;
    liveClasses: ImageCardElement[];
    featuredTutors: FeaturedCardElement;
    bannerCarouselBottom: BannerCardElement[];
    tutors: ImageCardElement[];
}

export interface IndividualSubjectCardData {
    bannerCard?: BannerCardElement[];
    nextClass?: NextClassCardElement;
    featuredSubjects?: FeaturedCardElement;
    recordedClasses: ImageCardElement[];
    upcomingClass: UpcomingClassCardElement;
    calendar?: CalendarDateSubjectsCardElement;
    liveClasses: ImageCardElement[];
    featuredTutors: FeaturedCardElement;
    bannerCarouselBottom: BannerCardElement[];
    tutors: ImageCardElement[];
    whiteBannerCard: WhiteBannerCardElement;
}

export interface HomeworkPage {
    incompleteCount: number;
    overdueCount: number;
    totalCount: number;
    homeworks: HomeworkCardElement[];
    overdueHomework: HomeworkCardElement[];
    filterData: HomeworkCardElement[];
    filterCount: number;
}

export interface DashboardSchool {
    homework: {
        isLoading: boolean;
        count: number;
    };
    recommended: {
        isLoading: boolean;
        count: number;
    };
    upcomingClasses: {
        isLoading: boolean;
        count: number;
    };
    profile: ProfileCardElement;
    individualSubjects: IndividualSubjectCardElement[];
}

export interface DashboardPersonal {
    previousClasses: {
        isLoading: boolean;
        count: number;
    };
    upcomingClasses: {
        isLoading: boolean;
        count: number;
    };
    profile: ProfileCardElement;
    dateSubjectCards: DateSubjectCardElement[];
    carouselCards: CarouselClassCardElement[];
}

export interface DashboardPage {
    school: DashboardSchool;
    personal: DashboardPersonal;
    childrenSelect?: ChildrenSelectElement;
}

export interface LiveClassesPage {
    data: ImageCardElement[];
}

export interface RecordedClassesPage {
    data: ImageCardElement[];
    purchaseDrawer: PurchaseDrawerPage;
}

export interface TutorsPage {
    data: ImageCardElement[];
}

export interface ViewProfilePage {
    profileCard: ProfileCardElement;
    about: string;
    education: EducationCardElement[];
}

export interface EditProfilePage {
    profile: EditProfileForm;
    education: EducationCardElement[];
}

export interface WalletData {
    balance: number;
    monthlyIncome?: number;
    averageIncome?: number;
    monthlySpent: number;
    averageSpent: number;
}

export interface WalletPage {
    noActivity: boolean;
    data: WalletData;
}

export interface HomeworkDetailsData {
    id: number;
    name: string;
    subject: string;
    description: string;
    dueDate: string;
    dueTime: string;
    about: string;
    isSubmitted: boolean;
    resource?: string;
    comment: string;
    isSubmittedPhysically: boolean;
}

export interface HomeworkDetailsPage {
    data: HomeworkDetailsData;
    onUploadComplete: OnUploadComplete;
    isSubmittedSuccess: boolean;
    onSubmitPhysically: OnSubmitPhysically;
    isSubmittedPhysicallySuccess: boolean;
}

export interface RecommendationsPage {
    data: RecommendationCardElement[];
    count: number;
    onAccept: (id: number) => void;
    onCancel: (id: number) => void;
}

export interface ReviewsFilter {
    from: string;
    to: string;
    data: ReviewCardElement[];
    isPending: boolean;
}

export interface ReviewsPage {
    data: ReviewCardElement[];
    latestReview: LatestReviewCardElement;
    onSubmitChallenge: OnSubmitChallenge;
    classAverage: string;
    tutorAverage: string;
    count: number;
    onFilter: OnFilter;
    isFilterActive: boolean;
    filters: ReviewsFilter;
}

export interface Statistic {
    studentsChartData: number[];
    salesChartData: number[];
    studentsAverage: number;
    studentsDifference: number | string;
    salesAverage: number;
    salesDifference: number | string;
}

export interface StatisticPage {
    overall: Statistic;
    classesStat: Statistic;
    tutor: Statistic;
    isEmpty: boolean;
}

export interface TutorProfileAbout {
    experience: ExperienceViewCardElement[];
    education: EducationViewCardElement[];
    skills: TagCardElement[];
}

export interface TutorProfileReviews {
    rating: string;
    reviews: ReviewSecondaryCardElement[];
}

export interface TutorProfilePage {
    tutorProfileCard: TutorProfileCardElement;
    availability: AvailabilityCardElement;
    essentialClasses: FeaturedCardElement;
    about: TutorProfileAbout;
    reviews: TutorProfileReviews;
    similarTutors: ImageCardElement[];
    previousClasses: ImageCardElement[];
    upcomingClasses: ImageCardElement[];
    purchaseDrawer: PurchaseDrawerPage;
}
