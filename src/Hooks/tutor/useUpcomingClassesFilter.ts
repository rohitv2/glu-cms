import { checkTimeIsSameOrBefore } from '../../Helper/checkTimeIsSameOrBefore';
import useUpcomingClass from './useUpcomingClass';
import moment from 'moment';
import { getDayNumber } from '../../Helper/getDayNumber';
import { useEffect, useMemo, useState } from 'react';
import commonImg from '../../Assets/images';
import { getMonthName, getMonthNumber } from '../../Helper/date';

export const useUpcomingClassesFilter = (timeCheck: boolean) => {
    const myUpcomingClass = useUpcomingClass();
    const [upcomingClass, setUpcomingClass] = useState([]);
    const pushCarouselData = (item: any, dataArray: any, filterArray: any, replaceWith: string, data: any) => {
        const replaceDate = moment(replaceWith, 'DD/MM/YY').format('YYYY-MM-DD');
        dataArray.forEach((subItem: any) => {
            if (String(subItem.day).toUpperCase() === String(moment().format('dddd')).toUpperCase()) {
                if (timeCheck) {
                    if (checkTimeIsSameOrBefore(item.startTime)) {
                        data.date = replaceWith;
                        (data.month = getMonthName(getMonthNumber(replaceDate))), filterArray.push(data);
                    }
                } else {
                    data.date = replaceWith;
                    (data.month = getMonthName(getMonthNumber(replaceDate))), filterArray.push(data);
                }
            } else if (getDayNumber(subItem.day) > getDayNumber(String(moment().format('dddd')))) {
               
            }
        });
    };
    useEffect(() => {
        if (myUpcomingClass) {
            const carClasses: any = [];
            myUpcomingClass.forEach((item: any) => {
                const tempDate = moment(new Date()).format('YYYY-MM-DD');
                const replaceDate = moment(new Date()).format('DD/MM/YY');
                const m1 = moment(item.scheduledOn, 'DD/MM/YY').format('YYYY-MM-DD');
                const data: any = {
                    img: item.coverImg ? item.coverImg : commonImg.photo,
                    subject: item.subjectName,
                    description: item.sessionName,
                    subTitle: 'AED' + item.price,
                    text: item.booked,
                    teacherId: 0,
                    date: item.scheduledOn,
                    startTime: item.start,
                    endTime: item.end,
                    end: item.startTime,
                    duration: item.duration,
                    ...item,
                };
                data.startTime = item.start;
                if (moment(tempDate).isBefore(m1)) {
                    carClasses.push(data);
                } else if (moment(tempDate).isSame(m1)) {
                    if (timeCheck) {
                        if (checkTimeIsSameOrBefore(item.startTime)) {
                            carClasses.push(data);
                        }
                    } else {
                        carClasses.push(data);
                    }
                } else if (moment(tempDate).isAfter(m1)) {
                    if (item.willRepeat) {
                        if (item.repeatInterval) {
                            if (item.repeatInterval === 'Every Week') {
                                pushCarouselData(item, item.repeatOn, carClasses, replaceDate, data);
                            } else if (item.repeatInterval === 'Every 2 Weeks') {
                                const week = (moment() as any).format('w') - moment().startOf('month').week() + 1;
                                if (week === 2) {
                                    pushCarouselData(item, item.repeatOn, carClasses, replaceDate, data);
                                }
                            } else if (item.repeatInterval === 'Every Month') {
                                const week = (moment() as any).format('w') - moment().startOf('month').week() + 1;
                                item.repeatWeeks.forEach((element: any) => {
                                    if (element.week === `Week ${week}`) {
                                        pushCarouselData(item, item.repeatOn, carClasses, replaceDate, data);
                                    }
                                });
                            }
                        }
                    }
                }
            });
            carClasses.sort((a: any, b: any) => {
                const time1 = moment(a.startTime, 'h:mma');
                const time2 = moment(b.startTime, 'h:mma');
                if (a.date === b.date && time1.isBefore(time2)) {
                    return -1;
                } else if (a.date === b.date && time1.isAfter(time2)) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setUpcomingClass(carClasses);
        }
    }, [myUpcomingClass]);

    return useMemo(() => {
        return upcomingClass;
    }, [upcomingClass]);
};
