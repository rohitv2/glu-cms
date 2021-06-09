export interface ReviewCardElement {
    id: number;
    name: string;
    role: string;
    title: string;
    subject: string;
    description: string;
    rating: string;
    isSubmitted: boolean;
    month: number;
}

export interface LatestReviewCardElement {
    id: number;
    name: string;
    role: string;
    rating: string;
    description: string;
    subject: string;
    isSubmitted: boolean;
}

export interface ReviewRenderElement {
    [key: number]: ReviewCardElement[];
}
