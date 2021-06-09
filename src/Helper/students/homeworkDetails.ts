import { HomeworkDetailsData } from '../../Containers/Pages/types';
import { parseDate } from '../date';

export function dataToDetails({
    Homework,
    homeworkId,
    isComplete,
    isSubmitted,
    studentComment,
}: any): HomeworkDetailsData {
    return {
        id: homeworkId,
        name: `${Homework.Teacher.firstName} ${Homework.Teacher.lastName}`,
        subject: Homework.Subject.subjectName,
        description: Homework.title,
        about: Homework.description,
        dueTime: Homework.endTime,
        dueDate: parseDate(Homework.dueDate),
        isSubmitted: isComplete,
        resource: Homework.resource,
        comment: studentComment || '',
        isSubmittedPhysically: isSubmitted,
    };
}
