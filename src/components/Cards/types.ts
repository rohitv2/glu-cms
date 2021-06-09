import { EducationForm } from '../../Interfaces/students/forms';

export interface ImageCardElement {
    id: number;
    img: string;
    title: string;
    subTitle?: string;
    date?: string;
    time?: string;
    rating?: string;
}

export interface BannerCardElement {
    img: string;
    name: string;
    subject: string;
    description: string;
    time: string;
    id: number;
}


export interface WhiteBannerCardElement {
    subject: string;
    tutorsCount: number,
    classesCount: number,
}

export interface DateTimeCardElement {
    date: string;
    startTime?: string;
    endTime?: string;
}

export interface DateSubjectCardElement extends DateTimeCardElement {
    subject: string;
    description: string;
    subTitle: string;
    name?: string;
    text?: string;
    rating?: string;
    teacherId: number;
}

export interface NextClassCardElement extends DateSubjectCardElement {
    img: string;
}

export interface FeaturedCardElement {
    title?: string;
    imgBigId: number;
    imgBig: string;
    imgBigTitle: string;
    imgBigSubtitle?: string;
    imgSmallId: number;
    imgSmall: string;
    imgSmallTitle: string;
    imgSmallSubtitle?: string;
}

export interface UpcomingClassCardElement extends DateSubjectCardElement {
    img: string;
}

export interface CalendarDateSubjectsCardElement {
    date?: string;
    time?: string;
    cards: DateSubjectCardElement[];
}

export interface IndividualSubjectBannerCardElement {
    img: string;
    name: string;
    subject: string;
    description: string;
    time: string;
}
export interface TutorProfileCardElement {
    name: string;
    city: string;
    country: string;
    rating: string;
    img: string;
    isFavourite: boolean;
}

export interface AvailabilityCardElement {
    about: string;
}

export interface PaymentMethodCardElement {
    type: 'visa' | 'ms';
    ends: string;
    expires: string;
}

export interface HomeworkCardElement {
    id: number;
    title: string;
    subject: string;
    dueDate: string;
    name: string;
    description: string;
    submitted?: boolean;
    teacherId: number;
}

export interface RecommendationCardElement {
    id: number;
    title: string;
    subject: string;
    date: string;
    name: string;
    description: string;
    teacherId: number;
    isAccepted: boolean;
    isSuggested: boolean;
}

export interface MessageUserCardElement {
    img: string;
    name: string;
    status: string;
    newMessagesCount?: number;
}

export interface CalendarSubjectCardElement {
    img: string;
    time: string;
    description: string;
    name: string;
    subject: string;
}

export interface ProfileCardElement {
    img: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface CarouselClassCardElement extends DateSubjectCardElement {
    img: string;
}

export interface EducationCardElement {
    id: number;
    type?: 'current' | 'previous';
    name: string;
    level: string;
    subjects: string;
    formData: EducationForm;
}

export interface TagCardElement {
    title: string;
    id: number;
}

export interface WatchRecordedClassElement {
    name: string;
    description: string;
    subject: string;
    isFavourite: boolean;
    duration: string;
    classSummary: string;
    tags: TagCardElement[];
}

export interface IndividualSubjectCardElement {
    id: number,
    startTime: string,
    endTime: string,
    subject: string,
    classroom: string;
    name: string;
    progress: number;
    teacherId: number;
}

export interface TeacherLink {
    teacherLink: string;
}

export interface PurchaseClassCardElement {
    img: string,
    title: string;
    isFavourite: boolean;
    slots?: number;
    date?: string;
    startTime?: string;
    endTime?: string;
    name: string;
    subject: string;
    description: string;
    price: string;
    teacherId: number;
}

export interface ExperienceViewCardElement {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    subject: string;
    position: string;
}

export interface EducationViewCardElement {
    id: number;
    title: string;
    position: string;
    level: string;
}

export interface ReviewSecondaryCardElement {
    id: number;
    name: string;
    rating: string;
    text: string;
}
