import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { getAllTeacherLikeSearchAPIcall } from '../../Redux/Actions/teacherAction';
import { allTeacherSearchLike } from '../../Redux/Selectors/studentModule';

export const useSearchAllTeacher = (search: string) => {
    const teacherStudentLike = useSelector(allTeacherSearchLike);
    const [searchResult, setSearchResult] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        if (search !== '') {
            dispatch(getAllTeacherLikeSearchAPIcall(search));
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
        if (teacherStudentLike) {
            const data = filterResult(teacherStudentLike);
            setSearchResult(data);
        }
    }, [teacherStudentLike]);

    return useMemo(() => {
        return searchResult;
    }, [searchResult]);
};
