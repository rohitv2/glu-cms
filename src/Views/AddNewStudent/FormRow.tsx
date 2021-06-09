import React, { useState, useEffect } from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { checkValue } from '../../Helper/checkValue';

interface props {
    onChange: (value: any) => void;
    editable: ()=> void;
    setId: Function;
    disable?: boolean;
    handleClass: (value:string) => void;
    handleSection: (value:string) => void;

}
const FormRow: React.FunctionComponent<props> = ({ onChange, editable, setId, disable, handleClass, handleSection }) => {
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        // parent:""
    });
    const [edit, setEdit] = useState<boolean>(false);
    const routes = useLocation();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('studentInfo')) {
                const data = (routes as any).state.studentInfo;
                const newState = {
                    first_name: checkValue(data.first_name),
                    last_name: checkValue(data.last_name),
                    email: checkValue(data.email),
                    gender: checkValue(data.gender),
                };
                setState(newState);
                handleClass(data.class);
                handleSection(data.section);
                editable();
                setId(data.id);
                setEdit(true);

            }
        }
    }, []);
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, first_name: e.target.value });
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, last_name: e.target.value });
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleGender = (value: string) => {
        setState({ ...state, gender: value });
    };
    const handleParent = (value: string) => {
        // setState({...state, parent: value})
    };

    useEffect(() => {
        onChange(state);
    }, [state]);

    return (
        <div className={`row ${edit ? 'w-100' : ''}`}>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    value={state.first_name}
                    onChange={handleName}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    value={state.last_name}
                    onChange={handleLastName}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    value={state.email}
                    onChange={handleEmail}
                    label="Email"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={['male', 'female']}
                    label="Select Gender"
                    value={state.gender}
                    getValue={(value) => {
                        handleGender(value);
                    }}
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={['', '']}
                    label="Select Parent"
                    value={''}
                    getValue={(value) => {
                        handleParent(value);
                    }}
                />
            </div>
        </div>
    );
};

export default FormRow;
