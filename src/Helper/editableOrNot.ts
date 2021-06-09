import moment from 'moment';

export const editableOrNot = (data: any) => {
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    const sessionDate = moment(data.scheduledOn, 'DD/MM/YY').format('YYYY-MM-DD');

    if (data.willRepeat) {
        return true;
    } else if (moment(todayDate).isSameOrBefore(sessionDate)) {
        return true;
    } else {
        return false;
    }
};
