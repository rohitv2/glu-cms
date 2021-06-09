import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import AdornmentInput from '../../components/Inputs/AdornmentInput';

const FormRow = () => {
    return (
        <div className="row">
            <div className="col-lg">
                <TextField className="custom-input" label="Name" variant="outlined" fullWidth />
            </div>
            <div className="col-lg">
                <TextField className="custom-input" label="Email" variant="outlined" fullWidth />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={['Male', 'Female']}
                    label="Select Gender"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg">
                <TextField className="custom-input" label="Phone Number" variant="outlined" fullWidth />
            </div>
            <div className="col-lg">
                <AdornmentInput className="custom-input mb-4" />
            </div>
        </div>
    );
};

export default FormRow;
