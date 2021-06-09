import { halfWordMonths, months } from './months';

export function getdate(availableDate: Date) {
    const date = availableDate;
    const hour = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${hour} ${months[month]} ${year}`;
}


export function getDate3Letter(availableDate: Date) {
    const date = availableDate;
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${halfWordMonths[month]} ${year}`;
}