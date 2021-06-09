import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { checkSchoolOrFreelancer } from '../../Helper/checkSchoolOrFreelancer';
import { searchStudentAPIcall } from '../../Redux/Actions/studentAction';
import { getTeacherStudentLike } from '../../Redux/Actions/teacherAction';
import { searchStudent, teacherStudentSearchLike } from '../../Redux/Selectors/studentModule';

export const useSearchStudent = (search: string) => {
    const searchStudents = useSelector(searchStudent);
    const teacherStudentLike = useSelector(teacherStudentSearchLike);

    const [searchResult, setSearchResult] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        if (search !== '') {
            const data = { name: search };
            if (checkSchoolOrFreelancer() === 'School') {
                dispatch(getTeacherStudentLike(data));
            } else {
                dispatch(searchStudentAPIcall(data));
            }
        }
    }, [search]);

    const filterResult = (data: any) => {
        const result = data.map((item: any) => {
            return {
                name: item.firstName + ' ' + item.lastName,
                profile: item.User.profile ? item.User.profile : commonImg.photo,
                id: item.id,
            };
        });
        return result;
    };
    useEffect(() => {
        if (searchStudents) {
            const data = filterResult(searchStudents);
            setSearchResult(data);
        }
    }, [searchStudents]);

    useEffect(() => {
        if (teacherStudentLike) {
            const data = filterResult(teacherStudentLike);
            setSearchResult(data);
        }
    }, [teacherStudentLike]);

    return useMemo(() => searchResult, [searchResult]);
};
