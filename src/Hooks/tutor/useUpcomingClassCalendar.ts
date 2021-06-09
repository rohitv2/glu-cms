import { useDispatch, useSelector } from 'react-redux';
import { upcomingCalendarClasses } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo, useState } from 'react';
import {
    freelanceUpcomingCalenderRes,
    getAllFreelanceAllsessionOnDateFilterAPIcall,
    getTeacherAllsessionOnDateFilterAPIcall,
} from '../../Redux/Actions/freelanceTeacherAction';
import moment from 'moment';
import { getMonthName, getMonthNumber } from '../../Helper/date';
import { checkValue } from '../../Helper/checkValue';
import { checkSchoolOrFreelancer } from '../../Helper/checkSchoolOrFreelancer';
import commonImg from '../../Assets/images';
import { handleCalenderFilter } from '../../Helper/handleCalenderFilter';

function useUpcomingClassCalendar() {
    const dispatch = useDispatch();
    const upcomingClass = useSelector(upcomingCalendarClasses);
    const [totalUpcomingClasses, setTotalUpcomingClasses] = useState([]);

    useEffect(() => {
        const data = moment(new Date()).format('YYYY-MM-DD');
        handleCalenderFilter(data, dispatch)
        return () => {
            dispatch(freelanceUpcomingCalenderRes(null));
        };
    }, []);

    useEffect(() => {
        if (upcomingClass) {
            if (checkSchoolOrFreelancer() === 'Freelancer') {
                const data = upcomingClass.map((item: any) => {
                    const duration = item.duration.split(':');
                    const timeInminutes = Number(duration[0]) * 60 + Number(duration[1]) + Number(duration[2]) / 60;
                    return {
                        id: item.id,
                        subjectName: checkValue(item?.FreelancerSubjectTeacher?.FreelancerSubject?.subjectName),
                        subjectId: checkValue(item?.FreelancerSubjectTeacher?.FreelancerSubject?.id),
                        sessionName: item.sessionName,
                        description: item.description,
                        scheduledOn: moment(item.scheduledOn).format('DD/MM/YY'),
                        coverImg: item.coverImage,
                        start: moment(item.startTime, 'h:mm a').format('h:mma'),
                        startTime: item.startTime,
                        end: moment(item.endTime, 'h:mm a').format('h:mma'),
                        duration: timeInminutes + ' mins',
                        willRepeat: item.isRepeat,
                        price: item.price,
                        tags: item.tags,
                        booked: '0 Booked',
                        resources: item.resources,
                        maxNumberOfStudents: item.maxNumberOfStudents,
                        sessionRoutine: item.SessionRoutine,
                        repeatInterval: item.SessionRoutine ? item.SessionRoutine.repeatInterva : 'Never',
                        createdAt: item.createdAt,
                        month: getMonthName(getMonthNumber(item.createdAt)),
                        repeatOn: item.SessionRoutine ? item.SessionRoutine.repeatOn : [],
                        repeatWeeks: item.SessionRoutine ? item.SessionRoutine.repeatWeeks : [],
                    };
                });

                data.reverse();
                setTotalUpcomingClasses(data);
            } else if (checkSchoolOrFreelancer() === 'School') {
                const data = upcomingClass.map((item: any) => {
                    // const duration = item.duration.split(':');
                    // const timeInminutes = Number(duration[0]) * 60 + Number(duration[1]) + Number(duration[2]) / 60;
                    const students = item.SchoolSessionStudents.map((subItem: any) => {
                        return {
                            name: subItem.Student.firstName + ' ' + subItem.Student.lastName,
                            id: subItem.Student.id,
                            profile: subItem.Student.User.profile ? subItem.Student.User.profile : commonImg.photo,
                        };
                    });
                    return {
                        id: item.id,
                        subjectName: checkValue(item?.Subject?.subjectName),
                        subjectId: checkValue(item?.Subject?.id),
                        sessionName: item.sessionName,
                        description: item.description,
                        scheduledOn: moment(item.scheduledOn).format('DD/MM/YY'),
                        coverImg: item.coverImage,
                        start: moment(item.startTime, 'h:mm a').format('h:mma'),
                        startTime: item.startTime,
                        end: moment(item.endTime, 'h:mm a').format('h:mma'),
                        // duration: timeInminutes + ' mins',
                        duration: '',
                        willRepeat: item.isRepeat,
                        price: item.price,
                        tags: item.tags,
                        booked: '0 Booked',
                        resources: item.resource,
                        maxNumberOfStudents: item.maxNumberOfStudents,
                        sessionRoutine: item.SchoolSessionRoutine,
                        repeatInterval: item.SessionRoutine ? item.SessionRoutine.repeatInterva : 'Never',
                        createdAt: item.createdAt,
                        month: getMonthName(getMonthNumber(item.createdAt)),
                        repeatOn: item.SessionRoutine ? item.SessionRoutine.repeatOn : [],
                        repeatWeeks: item.SessionRoutine ? item.SessionRoutine.repeatWeeks : [],
                        students: students,
                    };
                });

               
                data.reverse();
                setTotalUpcomingClasses(data);
            }
           
        }
    }, [upcomingClass]);

    return useMemo(() => totalUpcomingClasses, [totalUpcomingClasses]);
}

export default useUpcomingClassCalendar;
