import { OnSelectChange } from './FormControlSelect';

export type ISelectValue = number | string;

export interface ISelectOption {
    label: string;
    id?: string;
    value: ISelectValue;
}

export interface ChildrenSelectElement {
    selectedChild: ISelectValue;
    childrenOptions: ISelectOption[];
    onSelectChild: OnSelectChange;
}

