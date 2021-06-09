import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { attendanceForm } from '../../Helper/FormValidations/attendanceForm';
import ErrorMessage from '../../components/ErrorMessage';

interface props {
    data: { name: string; attendance: string };
    handler: (value: string) => void;
    control: any;
    errors: any;
    name: string;
}
const AttendanceCard: React.FunctionComponent<props> = ({ data, handler, control, errors, name }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handler((e.target as HTMLInputElement).value);
    };
    return (
        <>
            <div className="attendance-card">
                <Typography className="name">{data.name}</Typography>
                <div className="attendance-checkbox">
                    {/* <Controller
                        as={ */}
                            <RadioGroup
                                className="radio-group"
                                name={name}
                                aria-label="gender"
                                value={data.attendance}
                                onChange={handleChange}>
                                <FormControlLabel
                                    className="title"
                                    value="present"
                                    control={<Radio className="icon" />}
                                    label="Present"
                                />
                                <FormControlLabel
                                    className="title absent"
                                    value="absent"
                                    control={<Radio className="icon" />}
                                    label="Absent"
                                />
                            </RadioGroup>
                        {/* }
                        name={name}
                        control={control}
                        defaultValue=""
                    /> */}
                </div>
            </div>
            {/* {errors.attendance && <ErrorMessage msg={attendanceForm.errorMsg.section} />} */}
        </>
    );
};

export default AttendanceCard;
