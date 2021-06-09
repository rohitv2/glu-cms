import React, { useEffect, useState } from 'react';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import commonImg from '../../Assets/images';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassByIdAPIcall } from '../../Redux/Actions/classAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import SearchProfilePreview from '../../components/Dashobard/SearchProfilePreview';
import { checkValue } from '../../Helper/checkValue';
import { getallTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import OutlineButton from '../../components/Button/OutlineButton';
import { addFormGroupAPIcall, updateFormGroupAPIcall } from '../../Redux/Actions/schoolTeacherAction';
import { useSearchAllTeacher } from '../../Hooks/schools/useSearchAllTeacher';
import { useSearchStudent } from '../../Hooks/students/useSearchStudent';

const Index = () => {
    const [state, setState] = useState({
        sectionName: '',
        teachers: [''],
        sectionId: '',
    });
    const [search, setSearch] = useState('');
    const [studentList, setStudentList] = useState<any>([]);
    const [teacherList, setTeacherList] = useState([]);
    const [classId, setClassId] = useState('');
    const [detailMode, setDetailMode] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const searchResult = useSearchStudent(search);
    const [teacherSearch, setTeacherSearch] = useState('');
    const teacherSearchResult = useSearchAllTeacher(teacherSearch);
    const findState: any = useLocation();
    const dispatch = useDispatch();
    const classes = useSelector((state: rootReducerType) => state.classReducer.sectionList);
    useEffect(() => {
        if (findState?.state) {
            setClassId(findState.state.classId);
            dispatch(getallTeacherAPIcall());
            const detailsData = findState.state.details;
            if (detailsData) {
                if (findState.state.edit) {
                    setEditMode(true);
                } else {
                    setDetailMode(true);
                }
                const students: any = [];
                detailsData.students.map((item: any) => {
                    if (item.Student) {
                        const data = {
                            id: item?.Student?.id,
                            name: item?.Student?.firstName + ' ' + item?.Student?.lastName,
                            profile: item?.Student?.User?.profile ? item?.Student?.User?.profile : commonImg.photo,
                        };
                        students.push(data);
                    }
                });
                setStudentList(students);
                const teacherIds: any = [];
                detailsData.teacherDetails.map((item: any) => {
                    if (item.Teacher) {
                        const data = {
                            id: item.Teacher.id,
                            name: item.Teacher.firstName + ' ' + item.Teacher.lastName,
                            profile: item.Teacher.User.profile ? item.Teacher.User.profile : commonImg.photo,
                        };
                        teacherIds.push(data);
                    }
                });
                setState({ ...state, sectionName: detailsData.title, sectionId: detailsData.sectionId });
                setTeacherList(teacherIds);
            }
        }
    }, []);
    useEffect(() => {
        if (classes) {
            const students = classes?.SectionStudents.map((item: any) => {
                return {
                    name: checkValue(item?.Student?.firstName) + ' ' + checkValue(item?.Student?.lastName),
                    profile: commonImg.photo,
                };
            });
            setStudentList(students);
        }
    }, [classes]);
    const handleSearchAdd = (value: any) => {
        const data = [...studentList];
        data.push(value);
        setStudentList(data);
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const handleSearchAddTeacher = (value: any) => {
        const data: any = [...teacherList];
        data.push(value);
        setTeacherList(data);
        setTeacherSearch('');
    };
    const handleSearchTeacher = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeacherSearch(e.target.value);
    };
    const handleSection = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data: any = { ...state };
        data.sectionName = e.target.value;
        setState(data);
    };
    const handleSubmit = () => {
        const teachersId = teacherList.map((item: any) => item.id);
        const studentsId = studentList.map((item: any) => item.id);

        const data = {
            sectionName: state.sectionName,
            teachers: teachersId,
            students: studentsId,
        };
        if (!editMode) {
            dispatch(addFormGroupAPIcall(data, classId, goBack));
        } else {
            dispatch(updateFormGroupAPIcall(data, classId, state.sectionId, goBack));
        }
    };
    const route = useHistory();
    const goBack = () => {
        dispatch(getallclassByIdAPIcall(classId));
        route.push({
            pathname: '/dashboard/year-group/details',
            state: {
                id: classId,
            },
        });
    };
    const handleTeacherDelete = (index: number) => {
        if (!detailMode) {
            const data = [...teacherList];
            data.splice(index, 1);
            setTeacherList(data);
        }
    };
    const handleStudentDelete = (index: number) => {
        if (!detailMode) {
            const data = [...studentList];
            data.splice(index, 1);
            setStudentList(data);
        }
    };
    return (
        <TwoColGrid titleOne="New Form Group">
            <InputWithLabel
                fieldName="Group name"
                mt="mt-0"
                disalbed={detailMode}
                value={state.sectionName}
                onChange={handleSection}
            />
            <SearchProfilePreview
                disabled={detailMode}
                palceholder="Add new teacher"
                ap={true}
                apText="Teachers"
                data={teacherSearchResult}
                value={teacherSearch}
                searchAdd={handleSearchAddTeacher}
                onChange={handleSearchTeacher}
                list={teacherList}
                handleDelete={handleTeacherDelete}
            />
            <SearchProfilePreview
                disabled={detailMode}
                palceholder="Add new student"
                data={searchResult}
                value={search}
                searchAdd={handleSearchAdd}
                onChange={handleSearch}
                list={studentList}
                handleDelete={handleStudentDelete}
            />
            <OutlineButton mt="2rem" disable={detailMode} text="Submit" btnClick={handleSubmit} />
        </TwoColGrid>
    );
};

export default Index;
