import { IFilterDataElement } from '../../Containers/FilterContainer/types';
import { ISelectOption } from '../../components/Form/types';

export function dataToFiltersData(data: any[]): IFilterDataElement[] {
    return data.map(({ id, subjectName }) => ({
        label: subjectName,
        value: id,
    }));
}

export function dataToOptions(data: any[]): ISelectOption[] {
    return data.map(({ subjectName, id }) => ({
        label: subjectName,
        value: id
    }))
}
