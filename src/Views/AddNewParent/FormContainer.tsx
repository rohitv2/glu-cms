import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import AddInviteBtn from '../../components/Button/AddInviteBtn';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditableAddBtn from '../../components/Dashobard/EditableAddBtn';
import EditableDeleteBtn from '../../components/Dashobard/EditableDeleteBtn';
import { addNewParentAPIcall, editParentAPIcall } from '../../Redux/Actions/parentAction';
import { addParentFormDataType } from '../../Interfaces/parentModule';

const FormContainer: React.FunctionComponent = () => {
    const [rows, setRows] = useState([1]);
    const [formdata, setFormdata] = useState<Array<addParentFormDataType>>([]);
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
    };
    const handleChange = (value: addParentFormDataType, index: number) => {
        const data: Array<addParentFormDataType> = [...formdata];
        data[index] = value;
        setFormdata(data);
    };
    const submitData = () => {
        const data:any = {...formdata[0]};
        delete data.email;
        delete data.gender;
        delete data.phoneNumber;
        if (editable) {
            dispatch(editParentAPIcall(data, editId, routes))
        } else {
            dispatch(addNewParentAPIcall({ parents: formdata }, routes));
        }
    };

    return (
        <CardContainer>
            <div className="student-container">
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
                <AddInviteBtn click={submitData} />
            </div>
        </CardContainer>
    );
};

export default FormContainer;
