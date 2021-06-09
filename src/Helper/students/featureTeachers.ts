import get from 'lodash/get';
import { BannerCardElement, FeaturedCardElement, ImageCardElement } from '../../components/Cards/types';
import { IMG_PLACEHOLDER, STRING_PLACEHOLDER } from '../placeholders';
import { toRatingString } from '../strings';

function getSubjectName(teacher: any): string {
    return get(teacher, 'FreelancerSubjectTeachers[0].FreelancerSubject.subjectName', STRING_PLACEHOLDER)
}

export function dataToBannerCards(data: any[]): BannerCardElement[] {
    return data.map(({ teacher, review }: any) => ({
        img: teacher.User.profile || IMG_PLACEHOLDER,
        name: `${teacher.firstName} ${teacher.lastName}`,
        subject: getSubjectName(teacher),
        description: STRING_PLACEHOLDER,
        time: 'AED200 / 45min',
        id: review.teacherId,
    }));
}

export function dataToImageCard(data: any): ImageCardElement[] {
    return data.map(({ teacher, review }: any) => ({
        id: review.teacherId,
        img: teacher.User.profile || IMG_PLACEHOLDER,
        title: `${teacher.firstName} ${teacher.lastName}\n${getSubjectName(teacher)}`,
        subTitle: 'AED200/h',
        rating: toRatingString(review.ratingAvg),
    }));
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return (
        data.length &&
        data[0] &&
        data[1] && {
            imgSmallTitle: `${data[0].teacher.firstName} ${data[0].teacher.lastName}`,
            imgSmall: data[0].teacher.User.profile,
            imgBigTitle: `${data[1].teacher.firstName} ${data[1].teacher.lastName}`,
            imgBig: data[1].teacher.User.profile,
            imgBigId: 2,
            imgSmallId: 3,
        }
    );
}
