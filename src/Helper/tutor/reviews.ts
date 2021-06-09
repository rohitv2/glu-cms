import {
    LatestReviewCardElement,
    ReviewCardElement,
    ReviewRenderElement,
} from '../../Containers/Pages/ReviewsPageContainer/types';
import setYear from 'date-fns/setYear';
import { getMonthNumber } from '../date';

export const FILTER_FROM = setYear(new Date(), 2000).toISOString();
export const FILTER_TO = new Date().toISOString();

export function sortByDate(array: any[]) {
    return [...array].sort((a: any, b: any) => (new Date(a.data.createdAt) > new Date(b.data.createdAt) ? -1 : 1));
}

export function dataToReviewCards(data: any[]): ReviewCardElement[] {
    return data.map(({ modelData, data, modelName }) => ({
        id: data.id,
        name: `${modelData.firstName} ${modelData.lastName}`,
        role: modelName,
        title: data.Session ? data.Session.description : '-',
        subject: data.Session ? data.Session.sessionName : '-',
        description: data.description,
        rating: `${data.rating}/5`,
        isSubmitted: data.challenge,
        month: getMonthNumber(data.createdAt),
    }));
}

export function dataToLatestReviewCard({ modelData, data, modelName }: any): LatestReviewCardElement {
    return {
        id: data.id,
        name: `${modelData.firstName} ${modelData.lastName}`,
        role: modelName,
        description: data.description,
        subject: data.Session ? data.Session.description : '-',
        rating: `${data.rating}/5`,
        isSubmitted: data.challenge,
    };
}

export function dataToRender(data: ReviewCardElement[]): ReviewRenderElement {
    return data.reduce<ReviewRenderElement>((acc, cur) => {
        return {
            ...acc,
            [cur.month]: acc[cur.month] ? [...acc[cur.month], cur] : [cur],
        };
    }, {});
}
