import { ImageCardElement } from '../../components/Cards/types';
import { IMG_PLACEHOLDER } from '../placeholders';

export function dataToImageCards(data: any[]): ImageCardElement[] {
    return data.map(({ id, title, coverImage, price, FreelancerSubjectTeacher: { Teacher } }) => ({
        id,
        title: `${title} - ${Teacher.firstName} ${Teacher.lastName}`,
        img: coverImage || IMG_PLACEHOLDER,
        subTitle: `AED${price}`
    }))
}
