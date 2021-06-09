import { ImageCardElement, PurchaseClassCardElement } from '../../components/Cards/types';
import { IMG_PLACEHOLDER } from '../placeholders';

export function dataToImageCard(data: any[]): ImageCardElement[] {
    return data.map(({ title, price, FreelancerSubjectTeacher, coverImage, id }) => ({
        id,
        img: coverImage || IMG_PLACEHOLDER,
        title: `${title || ''} - ${FreelancerSubjectTeacher.Teacher.firstName} ${
            FreelancerSubjectTeacher.Teacher.lastName
        }`,
        subTitle: `AED${price}`,
    }));
}

export function dataToPurchaseClassCard({
    recordSessionDetails: { coverImage, title, FreelancerSubjectTeacher, description, price },
    isFavourite,
}: any): PurchaseClassCardElement {
    return {
        img: coverImage || IMG_PLACEHOLDER,
        title,
        isFavourite,
        name: `${FreelancerSubjectTeacher.Teacher.firstName} ${FreelancerSubjectTeacher.Teacher.lastName}`,
        subject: FreelancerSubjectTeacher.FreelancerSubject.subjectName,
        description,
        price,
        teacherId: FreelancerSubjectTeacher.teacherId
    };
}
