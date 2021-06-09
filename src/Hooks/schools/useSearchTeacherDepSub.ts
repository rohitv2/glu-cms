import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { teacherListByClassGroupIdAPIcall, teacherListByDepartmentId } from '../../Redux/Actions/cmsTeacherAction';

export const useSearchTeacherDepSub = (
    departmentId: string | null,
    subjectId: string | null,
    classGroupId: string | null,
    search: string
) => {
    const teachersByDepSubjId = useSelector((state: rootReducerType) => state.cmsReducer.teacherListByDepId);
    const [totalTeachers, setTotalTeachers] = useState([]);
    const [teachersSearchResult, seTeachersSearchResult] = useState([]);

    const dispatch = useDispatch();
    const check = ['', null, undefined];
    useEffect(() => {
        if (!check.includes(departmentId) && !check.includes(subjectId)) {
            dispatch(teacherListByDepartmentId(departmentId, subjectId));
        } else if (!check.includes(classGroupId)) {
            dispatch(teacherListByClassGroupIdAPIcall(classGroupId));
        }
    }, [departmentId, subjectId, classGroupId]);

    const filterResult = (search: any) => {
        const result = totalTeachers.filter((item: any) => {
            if (String(item.name).toLocaleLowerCase().search(search.toLocaleLowerCase()) > -1) {
                return item;
            }
        });
        return result;
    };

    useEffect(() => {
        let teachers: any = [];
        if (teachersByDepSubjId && !check.includes(departmentId) && !check.includes(subjectId)) {
            teachersByDepSubjId.forEach((item: any) => {
                item.TeacherSubjects.forEach((subItem: any) => {
                    const tempTeachers = {
                        name: subItem.Teacher.firstName + ' ' + subItem.Teacher.lastName,
                        profile: subItem.Teacher.User.profile ? subItem.Teacher.User.profile : commonImg.photo,
                        id: subItem.Teacher.id,
                    };
                    teachers.push(tempTeachers);
                });
            });
            setTotalTeachers(teachers);
        } else if (teachersByDepSubjId && !check.includes(classGroupId)) {
            teachersByDepSubjId.forEach((item: any) => {
                const tempTeachers = {
                    name: item.Teacher.firstName + ' ' + item.Teacher.lastName,
                    profile: item.Teacher.User.profile ? item.Teacher.User.profile : commonImg.photo,
                    id: item.Teacher.id,
                };
                teachers.push(tempTeachers);
            });
            setTotalTeachers(teachers);
        }
    }, [teachersByDepSubjId]);

    useEffect(() => {
        if (search !== '') {
            const data = filterResult(search);
            seTeachersSearchResult(data);
        } else if (search === '') {
            seTeachersSearchResult(totalTeachers);
        }
    }, [search]);

    return useMemo(() => {
        return { teachersSearchResult, totalTeachers };
    }, [teachersSearchResult, totalTeachers]);
};
