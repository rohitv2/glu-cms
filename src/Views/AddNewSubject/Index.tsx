import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import OutlineButton from '../../components/Button/OutlineButton';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabelIdValue from '../../components/Inputs/SelectWithLabelIdValue';
import { useDepartment } from '../../Hooks/schoolCMS/common/useDepartment';
import { addNewSubjectAPIcall, updateSubjectAPIcall } from '../../Redux/Actions/subjectAction';

const Index = () => {
    const departmentDropdown = useDepartment();
    const [state, setState] = useState<any>({ departmentId: '', subjectName: '' });
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(0);
    const handleDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, departmentId: e.target.value });
    };
    const handleSubjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, subjectName: e.target.value });
    };
    const dispatch = useDispatch();
    const routes = useHistory();
    const findRoutes: any = useLocation();
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if (findRoutes?.state?.hasOwnProperty('data')) {
                const values = findRoutes.state.data;

                const data = {
                    departmentId: values.departmentId,
                    subjectName: values.subjectName,
                };
                setId(values.subjectId);
                setEditMode(true);
                setState(data);
            }
        }
    }, []);
    const handleSubmit = () => {
        const data = { subjectName: state.subjectName };
        if (editMode) {
            dispatch(updateSubjectAPIcall(state.departmentId, id, data, goback));
        } else {
            dispatch(addNewSubjectAPIcall(state.departmentId, data, goback));
        }
    };
    const goback = () => {
        routes.push('/dashboard/subjects');
    };
    return (
        <TwoColGrid titleOne="New Subject">
            <SelectWithLabelIdValue fieldName="Department" value={state.departmentId} disabled={editMode} options={departmentDropdown} onChange={handleDepartment} />
            <InputWithLabel fieldName="Subject Name" value={state.subjectName} onChange={handleSubjectName} />
            <div className="mt-4">
                <OutlineButton text="Submit" btnClick={handleSubmit} />
            </div>
        </TwoColGrid>
    );
};

export default Index;
