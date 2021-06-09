import { EducationCardElement } from '../../components/Cards/types';

export function dataToEducationCards(data: any[]): EducationCardElement[] {
    return data.map(({ qualificationId, QualificationDetail: { school, fieldOfStudy, startDate, endDate, qualification } }) => ({
        id: qualificationId,
        name: school,
        level: fieldOfStudy,
        subjects: qualification,
        formData: {
            school,
            fieldOfStudy,
            qualification,
            startDate: new Date(startDate),
            endDate: new Date(endDate)
        }
    }))
}
