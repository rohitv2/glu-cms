import { useDispatch, useSelector } from 'react-redux';
import { upcomingClasses } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo, useState } from 'react';
import { getAllFreelanceAllsessionAPIcall } from '../../Redux/Actions/freelanceTeacherAction';
import moment from 'moment';
import { getMonthName, getMonthNumber } from '../../Helper/date';
import { checkValue } from '../../Helper/checkValue';

function useUpcomingClass() {
    const dispatch = useDispatch();
    const upcomingClass = useSelector(upcomingClasses);
    const [totalUpcomingClasses, setTotalUpcomingClasses] = useState([]);

    useEffect(() => {
        dispatch(getAllFreelanceAllsessionAPIcall());
    }, []);

    useEffect(() => {
        if (upcomingClass) {
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
                    repeatInterval: item.SessionRoutine ? item.SessionRoutine.repeatInterval : 'Never',
                    createdAt: item.createdAt,
                    month: getMonthName(getMonthNumber(item.createdAt)),
                    repeatOn: item.SessionRoutine ? item.SessionRoutine.repeatOn : [],
                    repeatWeeks: item.SessionRoutine ? item.SessionRoutine.repeatWeeks : [],
                };
            });

            data.reverse();
            setTotalUpcomingClasses(data);
        }
    }, [upcomingClass]);

    return useMemo(() => totalUpcomingClasses, [totalUpcomingClasses]);
}

export default useUpcomingClass;
