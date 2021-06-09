import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import commonImg from '../../Assets/images';
import OutlineButton from '../../components/Button/OutlineButton';
import SearchProfilePreview from '../../components/Dashobard/SearchProfilePreview';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import { useSearchAllTeacher } from '../../Hooks/schools/useSearchAllTeacher';
import { addNewDepartmentAPIcall, updateDepartmentAPIcall } from '../../Redux/Actions/schoolAction';

const Index = () => {
    const [state, setState] = useState<any>({ title: '', hod: [''], anotherHod: '' });
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(0);
    const [search, setSearch] = useState('');
    const searchResult = useSearchAllTeacher(search);
    const [teacherList, setTeacherList] = useState<any>([]);
    const handleDepartment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, title: e.target.value });
    };
    const dispatch = useDispatch();
    const routes = useHistory();
    const findRoutes: any = useLocation();
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if (findRoutes?.state?.hasOwnProperty('data')) {
                const values = findRoutes.state.data;
                let hod = [''];
                if (values.hod) {
                    hod = values.hod;
                }
                const data = {
                    title: values.department,
                    hod: hod,
                    anotherHod: '',
                };
                setId(values.id);
                setEditMode(true);
                setState(data);
                const teacherData = findRoutes.state.data.teacherDetails.map((item: any) => {
                    return {
                        id: item.id,
                        name: item.firstName + ' ' + item.lastName,
                        profile: item.User.profile ? item.User.profile : commonImg.photo,
                    };
                });
                setTeacherList(teacherData)
            }
        }
    }, []);
    const handleSearchAdd = (value: any) => {
        const data = [...teacherList];
        data.push(value);
        setTeacherList(data);
        setSearch('');
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const handleDelete = (i:number) => {
        const data = [...teacherList];
        data.splice(i, 1);
        setTeacherList(data);
    }
    const handleSubmit = () => {
        const teachers = teacherList.map((item: any) => {
            return item.id;
        });
        const data = {
            departmentName: state.title,
            teachersId: teachers,
        };
        if (editMode) {
            dispatch(updateDepartmentAPIcall(id, data, routes));
        } else {
            dispatch(addNewDepartmentAPIcall(data, routes));
        }
    };
    return (
        <TwoColGrid titleOne="New Department">
            <InputWithLabel fieldName="Title" mt="mt-0" value={state.title} onChange={handleDepartment} />
            <SearchProfilePreview
                ap={true}
                apText="Head of year"
                data={searchResult}
                list={teacherList}
                value={search}
                searchAdd={handleSearchAdd}
                onChange={handleSearch}
                handleDelete={handleDelete}
            />
            <div className="mt-4">
                <OutlineButton text="Submit" btnClick={handleSubmit} />
            </div>
        </TwoColGrid>
    );
};

export default Index;
