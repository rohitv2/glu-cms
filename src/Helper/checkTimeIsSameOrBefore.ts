import moment from 'moment';

export const checkTimeIsSameOrBefore = (time: string) => {
    const now = moment();
    const day = now.day();
    const tempTime = moment(time, 'HH:mm');
    
    if (day > 0 && day && now.isSameOrBefore(tempTime)) {
        return true;
    } else {
        return false;
    }
};
