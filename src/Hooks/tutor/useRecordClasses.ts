import { useDispatch, useSelector } from 'react-redux';
import { recordedClasses } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo, useState } from 'react';
import {
    getAllFreelanceRecordedClassAPIcall,
    freelanceRecordClassRes,
} from '../../Redux/Actions/freelanceTeacherAction';
import { checkValueReturn0 } from '../../Helper/checkValueReturn0';
import { checkValue } from '../../Helper/checkValue';
import commonImg from '../../Assets/images';
import { checkSchoolOrFreelancer } from '../../Helper/checkSchoolOrFreelancer';

function useRecordClasses(isLength: boolean) {
    const dispatch = useDispatch();
    const recordClasses = useSelector(recordedClasses);
    const [recordClass, setRecordClasses] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(getAllFreelanceRecordedClassAPIcall(0));
        return () => {
            dispatch(freelanceRecordClassRes(null));
        };
    }, []);

    useEffect(() => {
        if (recordClasses) {
            const records: any = [];
            const convertRecordClass = recordClasses.hasOwnProperty('TeacherLoggedInSessions')
                ? recordClasses.TeacherLoggedInSessions
                : recordClasses;
            convertRecordClass.forEach((item: any) => {
                let recordData = null;
                const data = {
                    title: item.title,
                    subtitle: 'No rating',
                    img: item.coverImage ? item.coverImage : commonImg.photo,
                    id: item.id,
                    subject:
                        checkSchoolOrFreelancer() === 'Freelancer'
                            ? checkValue(item?.FreelancerSubjectTeacher?.FreelancerSubject?.id)
                            : checkValue(item?.TeacherSubject?.Subject?.id),
                    subjectName:
                        checkSchoolOrFreelancer() === 'Freelancer'
                            ? checkValue(item?.FreelancerSubjectTeacher?.FreelancerSubject?.subjectName)
                            : checkValue(item?.TeacherSubject?.Subject?.subjectName),
                    student: checkValueReturn0(item.maxStudent),
                    price: checkValueReturn0(item.price),
                    description: item.description,
                    videolink: item.videoLink,
                    tags: item.tags,
                    coverImage: item.coverImage,
                    resource: item.resource,
                };
                recordData = data;
                if (records.length <= 3 && isLength && recordData) {
                    records.push(recordData);
                } else if (!isLength && recordData) {
                    records.push(recordData);
                }
            });
           
            if (recordClasses.hasOwnProperty('TeacherLoggedInSessions')) {
                setCount(recordClasses.teacherSessionCount.count);
            }else{
                setCount(recordClasses[recordClasses.length -1].count);
            }

            setRecordClasses(records);
        }
    }, [recordClasses]);

    return useMemo(() => {
        return { recordClass, count };
    }, [recordClass]);
}

export default useRecordClasses;
