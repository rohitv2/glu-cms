import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { classes } from '../../Helper/classArray';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    datePickerStyle: {
        color: '#000',
        margin:0,
        backgroundColor: '#fff',
        borderRadius: '3px',
        width: '100%',
        height: '40px',
        '& fieldset.MuiOutlinedInput-notchedOutline': {
            border: '1px solid rgba(0, 0, 0, 0.23)',
        },
    },
});
const FormRow = () => {
    const {datePickerStyle} = useStyles();
    return (
        <div className="row">
            <div className="col-lg">
                <DateSelector style={datePickerStyle}/>
            </div>
            <div className="col-lg">
                <SelectField
                    className=" custom-select-input mb-0"
                    options={classes}
                    label="Year Group"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className=" custom-select-input mb-0"
                    options={["A", "B", "C"]}
                    label="Form Group"
                    getValue={() => {}}
                />
            </div>
        </div>
    );
};

export default FormRow;
