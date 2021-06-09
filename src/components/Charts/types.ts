export interface ChartDataElement {
    name?: string;
    data: string[] | number[] | object[];
    color: string;
    clip?: boolean;
    dashStyle?: string;
}
