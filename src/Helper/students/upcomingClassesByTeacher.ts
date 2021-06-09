import { ImageCardElement } from '../../components/Cards/types';
import { IMG_PLACEHOLDER, STRING_PLACEHOLDER } from '../placeholders';
import { parseDate, parseTime } from '../date';

export function dataToImageCards(data: any[]): ImageCardElement[] {
    return data.map(
        ({
            id,
            coverImage,
            scheduledOn,
            startTime,
            endTime,
            sessionName,
            price,
            FreelancerSubjectTeacher: { FreelancerSubject, Teacher },
        }) => ({
            id,
            img: coverImage || IMG_PLACEHOLDER,
            date: parseDate(scheduledOn),
            time: `${parseTime(startTime)}-${parseTime(endTime)}`,
            title: `${sessionName}\n${FreelancerSubject ? FreelancerSubject.subjectName : STRING_PLACEHOLDER}, ${
                Teacher.firstName
            } ${Teacher.lastName}`,
            subTitle: `AED${price}`,
        })
    );
}
