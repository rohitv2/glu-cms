import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { IconButton, Button } from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';

const FormContainer: React.FunctionComponent = () => {
    const [rows, setRows] = useState([1]);
    const [formdata, setFormdata] = useState<Array<object>>([]);

    const addRows = () => {
        const total = [...rows];
        total.push(1);
        setRows(total);
    };

    const deleteRows = (index:number) => {
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
}

    return (
        <CardContainer>
        <div className="student-container">
            {rows.map((value, index) => (
                <div className="student-form-row  w-100">
                    <FormRow onChange={(value)=>handleChange(value, index)} />
                    {index === 0 ? (
                        <IconButton onClick={addRows} className="button-container">
                            <Add className="icon-btn" />
                        </IconButton>
                    ) : (
                        <IconButton onClick={()=>deleteRows(index)} className="button-container delete-btn">
                            <Delete className="icon-btn" />
                        </IconButton>
                    )}
                </div>
            ))}
            <Button className="gray-btn">Add & Invite</Button>
        </div>
    </CardContainer>
    );
}

export default FormContainer;
