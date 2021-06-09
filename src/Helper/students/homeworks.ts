import { HomeworkCardElement } from '../../components/Cards/types';
import { parseDate } from '../date';

export function dataToHomeworkCards(data: any): HomeworkCardElement[] {
    return data.map(({ id, title, description, Subject, dueDate, Teacher, MarkHomeworks }: any): HomeworkCardElement => ({
        id,
        title,
        description,
        dueDate: parseDate(dueDate),
        name: `${Teacher.firstName} ${Teacher.lastName}`,
        subject: Subject.subjectName,
        submitted: MarkHomeworks[0].isComplete,
        teacherId: Teacher.id,
    }))
}
