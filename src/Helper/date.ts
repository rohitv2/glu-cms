import parse from 'date-fns/parse';
import format from 'date-fns/format';
import startOfMonth from 'date-fns/startOfMonth';
import setMonth from 'date-fns/setMonth';
import endOfMonth from 'date-fns/endOfMonth';
import getMonth from 'date-fns/getMonth';
import getMinutes from 'date-fns/getMinutes'

export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

function parseTimeString(timeStr: string): Date {
    return parse(timeStr.substr(0, 8), 'HH:mm:ss', new Date());
}

export function parseTime(time: string): string {
    return format(parseTimeString(time), 'h:mma');
}

export function parseDuration(duration = ''): string {
    return `${getMinutes(parseTimeString(duration))}min`
}

export function getCurrentMonth(): string {
    return format(new Date(), 'MMMM');
}

export function getCurrentYear(): string {
    return format(new Date(), 'yyyy');
}

export function parseDate(date: string): string {
    return format(new Date(date), 'MM/dd/yy');
}

export function getCurrentTime(): string {
    return format(new Date(), 'h:mma');
}

export function getStartOfMonth(month: number | string): Date {
    return startOfMonth(setMonth(new Date(), +month));
}

export function getEndOfMonth(month: number | string): Date {
    return endOfMonth(setMonth(new Date(), +month));
}

export function getMonthNumber(date: string): number {
    return getMonth(new Date(date));
}

export function getMonthName(month: number): string {
    return monthNames[month];
}

export function getCurrentDateString(formatStr = 'yyyy-MM-dd'): string {
    return format(new Date(), formatStr)
}
