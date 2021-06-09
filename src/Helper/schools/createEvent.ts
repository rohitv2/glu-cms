import { RRule } from 'rrule';

let dummy = <any>[];

//to get day prefix (RRULE)
const getRuleDay = (day: any) => {
    switch (day) {
        case 'Saturday':
            return RRule.SA;
        case 'Sunday':
            return RRule.SU;
        case 'Monday':
            return RRule.MO;
        case 'Tuesday':
            return RRule.TU;
        case 'Wednesday':
            return RRule.WE;
        case 'Thursday':
            return RRule.TH;
        case 'Friday':
            return RRule.FR;
        default:
            return '';
    }
};

//RRUle date generator for the particualar day (To repeat a block every week )
const formatEvent = (eventData: any) => {
    const  data = eventData;
    let startTime = data && data.startTime;
    let shours = startTime.split(':')[0];
    let sMinutes = startTime.split(':')[1];
    let endTime = data && data.endTime;
    let ehours = endTime.split(':')[0];
    let eMinutes = endTime.split(':')[1];
    let dayPrefix: any = getRuleDay(data.day);
    var date = new Date();
    const rule = new RRule({
        freq: RRule.WEEKLY,
        byweekday: dayPrefix,
        count: 100,
        dtstart: new Date(date.getFullYear(), date.getMonth() - 1, 1),
        until: new Date(date.getFullYear() + 1, date.getMonth(), 0),
    });
    const list = rule.all();
    for (let i = 0; i < list.length; i++) {
        dummy.push({
            start: new Date(list[i].getUTCFullYear(), list[i].getUTCMonth(), list[i].getUTCDate(), shours, sMinutes, 0),
            end: new Date(list[i].getUTCFullYear(), list[i].getUTCMonth(), list[i].getUTCDate(), ehours, eMinutes, 0),
            title: data.timetableName,
            subjectName: data?.Subject?.subjectName,
            teachers: data.teachersId,
            classGroupId: data?.ClassGroup?.id,
            yearGroupId: data?.yearGroupId,
            formGroupId: data?.formGroupId,
            location: data?.location,
            id: data?.id,
            timeTableId: data?.blockId,
            student: data?.StudentTimetables,
            day: data?.day,
            subject: data?.subjectId,
            sectionName : data?.Section?.sectionName,
            departmentId: data?.departmentId,
            eventTitle : data?.Subject?.subjectName ? 
                        data?.Subject?.subjectName  : 
                        data?.Section?.sectionName ? 
                        data?.Section?.sectionName : 
                        data?.timetableName
        });
    }
    return dummy;
};

//pass multiple timetable to the upper function to make event
export const createEvent = (data: any) => {
    dummy = [];
    data.map((item: any) => formatEvent(item));
    return dummy;
};
