import {
    AvailabilityCardElement,
    EducationViewCardElement,
    ExperienceViewCardElement,
    FeaturedCardElement,
    ImageCardElement,
    ReviewSecondaryCardElement,
    TagCardElement,
    TutorProfileCardElement,
} from '../../components/Cards/types';
import { toRatingString } from '../strings';
import { IMG_PLACEHOLDER, STRING_PLACEHOLDER } from '../placeholders';
import { parseDate } from '../date';

export function dataToTutorProfileCard({
    result: { firstName, lastName, location, User },
    rating,
    isFavourite,
}: any): TutorProfileCardElement {
    return {
        name: `${firstName} ${lastName}`,
        city: location || STRING_PLACEHOLDER,
        country: '',
        rating: toRatingString(rating),
        img: User.profile || IMG_PLACEHOLDER,
        isFavourite,
    };
}

export function dataToTutorAvailability({ result: { bio } }: any): AvailabilityCardElement {
    return {
        about: bio,
    };
}

export function dataToTutorEssentialClasses({
    result: { firstName, lastName, FreelancerSubjectTeachers },
}: any): FeaturedCardElement {
    return {
        ...(FreelancerSubjectTeachers[0] && {
            imgSmallId: FreelancerSubjectTeachers[0].teacherId,
            imgSmallTitle: `${FreelancerSubjectTeachers[0].FreelancerSubject.subjectName}, ${firstName} ${lastName}`,
            imgSmall: IMG_PLACEHOLDER,
        }),
        ...(FreelancerSubjectTeachers[1] && {
            imgBigId: FreelancerSubjectTeachers[1].teacherId,
            imgBigTitle: `${FreelancerSubjectTeachers[1].FreelancerSubject.subjectName}, ${firstName} ${lastName}`,
            imgBig: IMG_PLACEHOLDER,
        }),
    };
}

export function dataToExperienceCards({ result: { TeacherExperiences } }: any): ExperienceViewCardElement[] {
    return TeacherExperiences.map(
        ({ id, Experience: { startDate, endDate, workPlace, description, position, stillWorking } }: any) => ({
            id,
            startDate: parseDate(startDate),
            endDate: stillWorking ? 'Present' : parseDate(endDate),
            title: workPlace,
            subject: description,
            position,
        })
    );
}

export function dataToEducationCards({ result: { TeacherQualifications } }: any): EducationViewCardElement[] {
    return TeacherQualifications.map(({ id, QualificationDetail: { school, qualification, fieldOfStudy } }: any) => ({
        id,
        title: school,
        position: qualification,
        level: fieldOfStudy,
    }));
}

export function dataToTutorSkills({ result: { Skills } }: any): TagCardElement[] {
    return Skills.map(({ id, skillName }: any) => ({
        id,
        title: skillName,
    }));
}

export function dataToTutorReviews({ result4 }: any): ReviewSecondaryCardElement[] {
    return result4.slice(0, 3).map(({ review, reviewer }: any) => ({
        id: review.id,
        name: `${reviewer.firstName} ${reviewer.lastName}`,
        rating: toRatingString(review.rating),
        text: review.description,
    }));
}

function filterByTeacherAndReview({ teacher, review }: any): boolean {
    return !!teacher && !!review;
}

export function dataToSimilarTutors({ similarTutors }: any): ImageCardElement[] {
    if (!similarTutors) {
        return [];
    }
    return similarTutors
        .filter(filterByTeacherAndReview)
        .slice(0, 4)
        .map(({ teacher: { firstName, lastName, User }, review }: any) => ({
            id: review.teacherId,
            img: User.profile || IMG_PLACEHOLDER,
            title: `${firstName} ${lastName}`,
            subTitle: `AED${STRING_PLACEHOLDER}`,
            rating: toRatingString(review.ratingAvg || STRING_PLACEHOLDER),
        }));
}
