import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addNewTeacherAPIcall, editTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router-dom';
import EditableAddBtn from '../../components/Dashobard/EditableAddBtn';
import EditableDeleteBtn from '../../components/Dashobard/EditableDeleteBtn';
import SelectField from '../../components/Inputs/SelectField';
import { classes } from '../../Helper/classArray';

const FormContainer: React.FunctionComponent = () => {
    const [rows, setRows] = useState([1]);
    const [formdata, setFormdata] = useState<Array<object>>([]);
    const routes = useHistory();
    const [editable, setEditable] = useState(false);
    const [editId, setEditId] = useState(-1);
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

    const handleChange = (value: object, index: number) => {
        const data = [...formdata];
        data[index] = value;
        setFormdata(data);
    };

    const submitData = () => {
        const data: any = { ...formdata[0] };
        if (formdata.length !== 0) {
            delete data.gender;
            delete data.phoneNumber;
        }
        if (editable) {
            dispatch(editTeacherAPIcall(data, editId, routes));
        } else {
            dispatch(addNewTeacherAPIcall({ teachers: formdata }, routes));
        }
    };

    return (
        <CardContainer>
            <div className="syllabus-container">
                <div className="row w-100">
                    <div className="col-lg-4">
                        <TextField variant="outlined" name="title" className="custom-input" fullWidth label="Title" />
                    </div>
                    <div className="col-lg-4">
                        <SelectField
                            className="custom-input"
                            label="Year Group"
                            options={classes}
                            name="class"
                            getValue={(value: string) => {}}
                        />
                    </div>
                    <div className="col-lg-4">
                        <SelectField
                            className="custom-input"
                            label="Form Group"
                            options={['john', 'lea', 'Deven', 'Jinwie']}
                            name="section"
                            getValue={(value: string) => {}}
                        />
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-lg-4">
                        <SelectField
                            className="custom-input"
                            label="Select Subject"
                            options={['Hindi', 'English', 'Math', 'science']}
                            name="subject"
                            getValue={(value: string) => {}}
                        />
                    </div>
                    <div className="col-lg-4">
                        <SelectField
                            className="custom-input"
                            label="Select Teacher"
                            options={['Hindi', 'English', 'Math', 'science']}
                            name="teacher"
                            getValue={(value: string) => {}}
                        />
                    </div>
                    <div className="col-lg-4">
                        <SelectField
                            className="custom-input"
                            label="Select Department"
                            options={['Hindi', 'English', 'Math', 'science']}
                            name="department"
                            getValue={(value: string) => {}}
                        />
                    </div>
                </div>
                {rows.map((value, index) => (
                    <div className="student-form-row  w-100">
                        <FormRow
                            disable={editable}
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
                <Button className="gray-btn">Create Syllabus</Button>
            </div>
        </CardContainer>
    );
};

export default FormContainer;
