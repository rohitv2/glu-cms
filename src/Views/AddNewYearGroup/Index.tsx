import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core';
// import { colors } from '../../Styles/colors';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import OutlineButton from '../../components/Button/OutlineButton';
import { useDispatch } from 'react-redux';
import { addNewClassAPIcall, EditClassAPIcall } from '../../Redux/Actions/classAction';
import { useHistory, useLocation } from 'react-router';
import SearchProfilePreview from '../../components/Dashobard/SearchProfilePreview';
import { useSearchAllTeacher } from '../../Hooks/schools/useSearchAllTeacher';
import commonImg from '../../Assets/images';

// const useStyles = makeStyles({
//     parent: {
//         padding: '4.062rem 3.437rem',
//         backgroundColor: colors.white,
//         height: '88vh',
//     },
//     title: {
//         fontSize: '1.562rem',
//         lineHeight: '1.875rem',
//         fontWeight: 500,
//         color: colors.black,
//     },
// });
const Index = () => {
    const [state, setState] = useState({ yearGroup: '', hod: '', anotherHod: '' });
    const [classId, setClassId] = useState('');
    const [editMode, setEditMode] = useState('');
    const [search, setSearch] = useState('');
    const searchResult = useSearchAllTeacher(search);
    const [studentList, setStudentList] = useState<any>([]);

    const handleSearchAdd = (value: any) => {
        const data = [...studentList];
        data.push(value);
        setStudentList(data);
        setSearch('');
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleDelete = (i: number) => {
        const data = [...studentList];
        data.splice(i, 1);
        setStudentList(data);
    };

    const handleYearGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, yearGroup: e.target.value });
    };
    // const handleHod = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setState({ ...state, hod: e.target.value });
    // };
    // const handleAnotherHod = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setState({ ...state, anotherHod: e.target.value });
    // };
    const dispatch = useDispatch();
    const routes = useHistory();
    const findRoutes: any = useLocation();
    useEffect(() => {
        if (findRoutes?.state?.editMode) {
            const data = findRoutes?.state?.editData;
            setState({ ...state, hod: data.hoy, yearGroup: data.group });
            setEditMode(findRoutes?.state?.editMode);
            setClassId(data.id);
            const teachers = findRoutes?.state?.editData.teacherDetails.map((item: any) => {
                return {
                    id: item.id,
                    name: item.firstName + ' ' + item.lastName,
                    profile: item.User.profile ? item.User.profile : commonImg.photo,
                };
            });
            setStudentList(teachers);
        }
    }, []);
    const handleSubmit = () => {
        const teachersId = studentList.map((item: any) => {
            return item.id;
        });
        const data = {
            title: state.yearGroup,
            teachersId: teachersId,
        };
        if (editMode) {
            dispatch(EditClassAPIcall(data, classId, goBack));
        } else {
            dispatch(addNewClassAPIcall(data, goBack));
        }
    };
    const goBack = () => {
        routes.push('/dashboard/year-group');
    };

    return (
        <TwoColGrid titleOne="New Year Group">
            <InputWithLabel fieldName="Year group title" mt="mt-0" value={state.yearGroup} onChange={handleYearGroup} />
            {/* <InputWithLabel fieldName="Head of year" value={state.hod} onChange={handleHod} />
            <InputWithLabel
                fieldName=""
                placeholder="Add another member"
                value={state.anotherHod}
                onChange={handleAnotherHod}
            /> */}
            <SearchProfilePreview
                ap={true}
                apText="Head of year"
                data={searchResult}
                list={studentList}
                value={search}
                searchAdd={handleSearchAdd}
                onChange={handleSearch}
                handleDelete={handleDelete}
            />
            <div className="mt-5">
                <OutlineButton text="Submit" btnClick={handleSubmit} />
            </div>
        </TwoColGrid>
    );
};

export default Index;
