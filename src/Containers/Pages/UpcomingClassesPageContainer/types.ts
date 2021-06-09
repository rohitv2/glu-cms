import { DateSubjectCardElement } from '../../../components/Cards/types';

export interface UpcomingClassCardElement extends DateSubjectCardElement {
    id: number;
    img: string;
    text?: string;
}
