export type FilterValue = string | null;

export type SelectedFilterValue = IFilterDataElement | null;

export interface IFilterElement {
    label: string;
    value: FilterValue;
}

export interface IFilterDataElement {
    label: string;
    value: string;
    type?: string;
}
