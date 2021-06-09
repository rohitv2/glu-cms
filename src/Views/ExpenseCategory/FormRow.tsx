import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { classes } from '../../Helper/classArray';

const FormRow = () => {
    return (
        <div className="row">
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={classes}
                    label="Select A class"
                    getValue={() => {}}
                />
            </div>
        </div>
    );
};

export default FormRow;
