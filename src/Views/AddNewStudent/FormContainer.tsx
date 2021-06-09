import React, { useState, useEffect } from 'react';
import FormRow from './FormRow';
import SelectField from '../../components/Inputs/SelectField';
import { useDispatch } from 'react-redux';
import { addNewStudentAPIcall, editStudentAPIcall } from '../../Redux/Actions/studentAction';
import EditableAddBtn from '../../components/Dashobard/EditableAddBtn';
import EditableDeleteBtn from '../../components/Dashobard/EditableDeleteBtn';
import AddInviteBtn from '../../components/Button/AddInviteBtn';
import { useHistory } from 'react-router-dom';
import ClassAndSections from '../../Helper/ClassAndSections';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';

const FormContainer = () => {
    const [rows, setRows] = useState([1]);
    const [state, setState] = useState({ class: '', section: '' });
    const [classes, setClasses] = useState<Array<string>>([]);
    const [sections, setSections] = useState<Array<string>>([]);
    const [formdata, setFormdata] = useState<Array<object>>([]);
    const [editable, setEditable] = useState(false);
    const [editId, setEditId] = useState(-1);
    const routes = useHistory();
    const dispatch = useDispatch();

    const addRows = () => {
        const total = [...rows];
        total.push(1);
        setRows(total);
    };

    const deleteRows = (index: number) => {
        const total = [...rows];
        total.splice(index, 1);
        setRows(total);
        const data = [...formdata];
        data.splice(index, 1);
        setFormdata(data);
    };
    const handleSection = (value: string) => {
        setState({ ...state, section: value });
    };

    const handleChange = (value: object, index: number) => {
        const data = [...formdata];
        data[index] = value;
        setFormdata(data);
    };
    const submitData = () => {
        const data: any = [...formdata];
        data.forEach((item: any) => {
            item.class = state.class;
            item.section = state.section;
        });
        const editData: any = { ...formdata[0] };
        if (formdata.length !== 0) {
            delete editData.gender;
            delete editData.class;
            delete editData.section;
            delete editData.phoneNumber;
            delete editData.email;
        }
        if (editable) {
            dispatch(editStudentAPIcall(editData, editId, routes));
        } else {
            dispatch(addNewStudentAPIcall({ students: data }, routes));
        }
    };
    const handleClass = (value: string) => {
        setState({ ...state, class: value });
    };
    useEffect(()=>{
        dispatch(getallclassAPIcall())
    },[])

    return (
        <div className="student-container">
            <ClassAndSections
                handleClasses={(value: Array<string>) => setClasses(value)}
                handleSections={(value: Array<string>) => setSections(value)}
                getClassName={state.class}
            />
            <div className="row   w-100">
                <div className="col-lg-4 ml-auto">
                    <SelectField
                        className="custom-input"
                        options={classes}
                        label="Year Group"
                        value={state.class}
                        getValue={(value) => {
                            handleClass(value);
                        }}
                    />
                </div>
                <div className="col-lg-4 mr-auto">
                    <SelectField
                        className="custom-input"
                        options={sections}
                        label="Form Group"
                        value={state.section}
                        getValue={(value) => {
                            handleSection(value);
                        }}
                    />
                </div>
            </div>
            {rows.map((value, index) => (
                <div className="student-form-row  w-100">
                    <FormRow
                        disable={editable}
                        handleClass={(value: string) => {
                            handleClass(value);
                        }}
                        handleSection={(value: string) => {
                            handleSection(value);
                        }}
                        setId={setEditId}
                        editable={() => setEditable(true)}
                        onChange={(value) => handleChange(value, index)}
                    />
                    {index === 0 ? (
                        <EditableAddBtn editable={editable} click={addRows} />
                    ) : (
                        <EditableDeleteBtn editable={editable} click={() => deleteRows(index)} />
                    )}
                </div>
            ))}
            <AddInviteBtn click={submitData} />
        </div>
    );
};

export default FormContainer;
