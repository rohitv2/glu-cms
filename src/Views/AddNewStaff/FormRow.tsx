import React, { useEffect, useState } from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import AdornmentInput from '../../components/Inputs/AdornmentInput';

interface props {
    onChange: (value: any) => void;
}
const FormRow: React.FunctionComponent<props> = ({ onChange }) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        gender: '',
        department: '',
        designation: '',
        phoneNumber: '',
        password: '',
    });
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, name: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleGender = (value: string) => {
        setState({ ...state, gender: value });
    };
    const handleDepartment = (value: string) => {
        setState({ ...state, department: value });
    };
    const handleDesignation = (value: string) => {
        setState({ ...state, designation: value });
    };
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, phoneNumber: e.target.value });
    };
    const handlePassword = (value: string) => {
        setState({ ...state, password: value });
    };

    useEffect(() => {
        onChange(state);
    }, [state]);

    return (
        <div className="row">
            <div className="col-lg-4">
                <TextField
                    className="custom-input"
                    label="Name"
                    value={state.name}
                    onChange={handleName}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg-4">
                <TextField
                    className="custom-input"
                    label="Email"
                    value={state.email}
                    onChange={handleEmail}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg-4">
                <SelectField
                    className="custom-input"
                    options={['Male', 'Female']}
                    label="Select Gender"
                    getValue={(value) => {
                        handleGender(value);
                    }}
                />
            </div>
            <div className="col-lg-3">
                <SelectField
                    className="custom-input"
                    options={['computer', 'English', 'science']}
                    label="Department"
                    getValue={(value) => {
                        handleDepartment(value);
                    }}
                />
            </div>
            <div className="col-lg-3">
                <SelectField
                    className="custom-input"
                    options={['senior lecturer', 'junior lecturer']}
                    label="Designation"
                    getValue={(value) => {
                        handleDesignation(value);
                    }}
                />
            </div>
            <div className="col-lg-3">
                <TextField
                    className="custom-input"
                    label="Phone Number"
                    value={state.phoneNumber}
                    onChange={handlePhoneNumber}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg-3">
                <AdornmentInput
                    value={state.password}
                    onChange={(value) => handlePassword(value)}
                    className="custom-input mb-4"
                />
            </div>
        </div>
    );
};

export default FormRow;
