import { IFilterDataElement } from '../../Containers/FilterContainer/types';
import { ISelectOption } from '../../components/Form/types';

export function dataToFiltersData(data: any[]): IFilterDataElement[] {
    return data.map(({ subjectId, Subject }) => ({
        label: Subject.subjectName,
        value: subjectId,
    }));
}


export function dataToOptions(data: any[]): ISelectOption[] {
    return data.map(({ subjectId, Subject }) => ({
        label: Subject.subjectName,
        value: subjectId,
    }));
}


export function termDataToOption(data: any[]): ISelectOption[] {
    return data.map(({ id, termName }) => ({
        label: termName,
        value: id,
    }));
}
