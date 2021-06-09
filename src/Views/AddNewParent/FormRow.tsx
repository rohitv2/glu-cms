import React, { useState, useEffect } from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import { checkValue } from '../../Helper/checkValue';
import { useLocation } from 'react-router-dom';

interface props {
    onChange: (value: any) => void;
    editable: ()=> void;
    setId: Function;
    disable?: boolean;
}
const FormRow: React.FunctionComponent<props> = ({ onChange, editable, setId, disable }) => {
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        // password: '',
    });
    const [edit, setEdit] = useState<boolean>(false);
    const routes = useLocation();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('parentInfo')) {
                const data = (routes as any).state.parentInfo;
                const newState = {
                    first_name: checkValue(data.first_name),
                    last_name: checkValue(data.last_name),
                    email: checkValue(data.email),
                    gender: checkValue(data.gender),
                    phoneNumber: checkValue(data.phoneNumber),
                };
                setState(newState);
                editable();
                setId(data.parentId);
                setEdit(true);
            }
        }
    }, []);
    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, phoneNumber: e.target.value });
    };

    useEffect(() => {
        onChange(state);
    }, [state]);
    return (
        <div className={`row ${edit ? 'w-100' : ''}`}>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    label="First Name"
                    value={state.first_name}
                    onChange={handleFirstName}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    label="Last Name"
                    value={state.last_name}
                    onChange={handleLastName}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    label="Email"
                    value={state.email}
                    onChange={handleEmail}
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
                <TextField
                    className="custom-input"
                    label="Phone Number"
                    value={state.phoneNumber}
                    onChange={handlePhoneNumber}
                    variant="outlined"
                    fullWidth
                />
            </div>
            {/* <div className="col-lg">
                <AdornmentInput value={state.password} onChange={(value)=> handlePassword(value)} className="custom-input mb-4" />
            </div> */}
        </div>
    );
};

export default FormRow;
