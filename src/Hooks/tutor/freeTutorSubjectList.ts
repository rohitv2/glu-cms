import { useDispatch, useSelector } from 'react-redux';
import { freelanceSubjectList } from '../../Redux/Selectors/tutor';
import { useEffect, useMemo, useState } from 'react';
import { getFreelanceTeacherSubject } from '../../Redux/Actions/freelanceTeacherAction';
import { checkSchoolOrFreelancer } from '../../Helper/checkSchoolOrFreelancer';

function freeTutorSubjectList() {
    const dispatch = useDispatch();
    const subjectList = useSelector(freelanceSubjectList);
    const [subjectDropdown, setSubjectDropdown] = useState([]);

    if (!subjectList) {
        dispatch(getFreelanceTeacherSubject());
    }

    useEffect(() => {
        if (subjectList) {
            let data: any = [];
            if (checkSchoolOrFreelancer() === 'Freelancer') {
                data = subjectList.map((item: any) => {
                    return { value: item.subjectName, id: item.id };
                });
            } else if (checkSchoolOrFreelancer() === 'School') {
                subjectList.forEach((item: any) => {
                    item.Subjects.forEach((subItem: any) => {
                        const tempData = { value: subItem.subjectName, id: subItem.id };
                        data.push(tempData);
                    });
                });
            }

            setSubjectDropdown(data);
        }
    }, [subjectList]);

    return useMemo(() => subjectDropdown, [subjectDropdown]);
}

export default freeTutorSubjectList;
