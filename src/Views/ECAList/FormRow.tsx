import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { classes } from '../../Helper/classArray';

const FormRow = () => {
    return (
        <div className="row">
            <div className="col-lg">
                <SelectField
                    className="custom-select-input mb-0"
                    options={classes}
                    label="Year Group"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-select-input mb-0"
                    options={["A", "B"]}
                    label="Form Group"
                    getValue={() => {}}
                />
            </div>
        </div>
    );
};

export default FormRow;
