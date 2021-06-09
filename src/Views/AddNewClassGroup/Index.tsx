import React, { useEffect, useState } from 'react';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import SearchProfilePreview from '../../components/Dashobard/SearchProfilePreview';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import SelectWithLabelIdValue from '../../components/Inputs/SelectWithLabelIdValue';
import {
    addNewClassGroupAPIcall,
    getSubjectByDepartmentId,
    UpdateClassGroupAPIcall,
} from '../../Redux/Actions/subjectAction';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';
import OutlineButton from '../../components/Button/OutlineButton';
import { useSearchStudent } from '../../Hooks/students/useSearchStudent';
import commonImg from '../../Assets/images';
import { useSearchTeacherDepSub } from '../../Hooks/schools/useSearchTeacherDepSub';

const Index = () => {
    const [search, setSearch] = useState('');
    const [teacherSearch, setTeacherSearch] = useState('');
    const searchResult = useSearchStudent(search);
    const [studentList, setStudentList] = useState<any>([]);
    const [departmentList, setDepartmentList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);
    const [teacherList, setTeacherList] = useState([]);
    const [yearGroup, setYearGroup] = useState([]);
    const [classGroupId, setClassGroupId] = useState('-1');
    const [state, setState] = useState({
        className: '',
        classId: '',
        subjectId: '',
        departmentId: '',
    });
    const { teachersSearchResult } = useSearchTeacherDepSub(state.departmentId, state.subjectId, null, teacherSearch);
    const departments = useSelector((state: rootReducerType) => state.schoolReducer.departmentList);
    const subjects = useSelector((state: rootReducerType) => state.subjectReducer.sujbectListByDepId);
    const availClasses = useSelector((state: rootReducerType) => state.classReducer.classList);
    const findRoutes: any = useLocation();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDepartmentAPIcall());
        dispatch(getallclassAPIcall());
        if (findRoutes?.state?.details) {
            const data = findRoutes?.state?.details;
            setClassGroupId(data.classGroupId);
            const teachers: any = [];
            data.teachers.forEach((item: any) => {
                if (item.Teacher) {
                    const data = {
                        id: item.Teacher.id,
                        name: item.Teacher.firstName + ' ' + item.Teacher.lastName,
                        profile: item.Teacher.User.profile ? item.Teacher.User.profile : commonImg.photo,
                    };
                    teachers.push(data);
                }
            });
            const students: any = [];
            data.students.forEach((item: any) => {
                if (item.Student) {
                    const data = {
                        id: item.studentId,
                        name: item.Student.firstName + ' ' + item.Student.lastName,
                        profile: item.Student.User.profile ? item.Student.User.profile : commonImg.photo,
                    };
                    students.push(data);
                }
            });
            setStudentList(students);
            setTeacherList(teachers);
            setState({
                ...state,
                className: data.class,
                classId: data.yearGroupId,
                subjectId: data.subjectId,
                departmentId: data.departmentId,
            });
        }
    }, []);
    useEffect(() => {
        if (departments) {
            const data = departments.map((item: any) => {
                return {
                    id: item.data.id,
                    value: item.data.departmentName,
                };
            });
            setDepartmentList(data);
        }
    }, [departments]);
    useEffect(() => {
        if (state.departmentId) {
            dispatch(getSubjectByDepartmentId(state.departmentId));
        }
    }, [state.departmentId]);

    useEffect(() => {
        if (subjects) {
            const data = subjects.map((item: any) => {
                return {
                    id: item.id,
                    value: item.subjectName,
                };
            });
            setSubjectList(data);
        }
    }, [subjects]);

    useEffect(() => {
        if (availClasses) {
            const data = availClasses.map((item: any) => {
                return {
                    id: item.data.id,
                    value: item.data.title,
                };
            });
            setYearGroup(data);
        }
    }, [availClasses]);

    const handleClassName = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, classId: e.target.value });
    };
    const handleClass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, className: e.target.value });
    };
    const handleSearchAdd = (value: any) => {
        const data = [...studentList];
        data.push(value);
        setStudentList(data);
        setSearch('');
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const handleTeacherSearchAdd = (value: any) => {
        const data: any = [...teacherList];
        data.push(value);
        setTeacherList(data);
        setTeacherSearch('');
    };
    const handleTeacherSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeacherSearch(e.target.value);
    };
    const handleDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, departmentId: e.target.value });
    };
    const handleSubjectName = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, subjectId: e.target.value });
    };

    const handleDeleteTeacherStudent = (index: number, type: string) => {
        if (type === 'student') {
            const data = [...studentList];
            data.splice(index, 1);
            setStudentList(data);
        } else {
            const data = [...teacherList];
            data.splice(index, 1);
            setTeacherList(data);
        }
    };

    const routes = useHistory();
    const handleSubmit = () => {
        const studentIds = studentList.map((item: any) => {
            return item.id;
        });
        const teacherIds = teacherList.map((item: any) => {
            return item.id;
        });
        const data = {
            departmentId: state.departmentId,
            subjectId: state.subjectId,
            teacherIds: teacherIds,
            studentIds: studentIds,
            classGroupName: state.className,
            classId: state.classId,
        };
        if (classGroupId != '-1') {
            dispatch(UpdateClassGroupAPIcall(data, classGroupId, goBack));
        } else {
            dispatch(addNewClassGroupAPIcall(data, goBack));
        }
    };
    const goBack = () => {
        routes.push('/dashboard/class-groups');
    };
    return (
        <TwoColGrid titleOne="New Class Group">
            <InputWithLabel fieldName="Class name" value={state.className} onChange={handleClass} mt="mt-0" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SelectWithLabelIdValue
                        value={state.classId}
                        options={yearGroup}
                        onChange={handleClassName}
                        fieldName="Year group"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectWithLabelIdValue
                        value={state.departmentId}
                        options={departmentList}
                        onChange={handleDepartment}
                        fieldName="Department"
                    />
                </Grid>
            </Grid>
            <SelectWithLabelIdValue
                value={state.subjectId}
                options={subjectList}
                onChange={handleSubjectName}
                fieldName="Subject name"
            />
            <SearchProfilePreview
                palceholder="Add new teacher"
                ap={true}
                apText="Teachers"
                data={teachersSearchResult}
                list={teacherList}
                value={teacherSearch}
                searchAdd={handleTeacherSearchAdd}
                onChange={handleTeacherSearch}
                handleDelete={(i: number) => handleDeleteTeacherStudent(i, 'teacher')}
            />
            <SearchProfilePreview
                palceholder="Add new student"
                data={searchResult}
                list={studentList}
                value={search}
                searchAdd={handleSearchAdd}
                onChange={handleSearch}
                handleDelete={(i: number) => handleDeleteTeacherStudent(i, 'student')}
            />
            <OutlineButton text="Submit" btnClick={handleSubmit} mt="3rem" />
        </TwoColGrid>
    );
};

export default Index;
