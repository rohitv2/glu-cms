import { RecommendationCardElement } from '../../components/Cards/types';
import { parseDate } from '../date';
import toLower from 'lodash/toLower'

export function dataToRecommendationCards(data: any[]): RecommendationCardElement[] {
    return data.map(({ recommendId, Recommend, status }) => ({
        id: recommendId,
        title: Recommend.class,
        subject: Recommend.subject,
        date: parseDate(Recommend.submitted),
        name: `${Recommend.Teacher.firstName} ${Recommend.Teacher.lastName}`,
        description: Recommend.comment,
        teacherId: Recommend.Teacher.id,
        isAccepted: toLower(status) === 'accepted',
        isSuggested: toLower(status) === 'suggest',
    }));
}
