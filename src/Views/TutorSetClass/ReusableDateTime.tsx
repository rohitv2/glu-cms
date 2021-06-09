import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { String } from 'lodash';

const ReusableDateTime: React.FunctionComponent = () => {
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekArray = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const [toggleWeeks, setToggleWeeks] = useState(false);
    const [toggleDays, setToggleDays] = useState(false);
    const [selectValue, setValue] = useState('Never');
    const [monthsSelected, setSelectedMonth] = useState<any>([]);
    const [weeksSelected, setSelectedWeek] = useState<any>([]);

    const [subjectName, setSubjectName] = useState('');
    const [subjectDate, setSubjectDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const addSchedule = (value: string) => {
        setValue(value);
        if (value == 'Never') {
            setToggleDays(false);
            setToggleWeeks(false);
        } else if (value == 'Every Week' || value == 'Every 2 Weeks') {
            setToggleDays(true);
            setToggleWeeks(false);
        } else if (value == 'Every Month') {
            setToggleDays(true);
            setToggleWeeks(true);
        }
    };
    const selectedMonths = (val:string) => {
        setSelectedMonth([...monthsSelected, val])
    }
    const selectedWeek = (val:string) => {
        setSelectedWeek([...weeksSelected, val])
    }
    return (
        <>
            <div className="reusableDateandTime col-md-12">
                <div className="row">
                    <div className="col-md-4 p-0">
                        <TextField className="line-input-large" label="Date" type='date' onChange={(e) => setSubjectDate(e.target.value )} fullWidth />
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="sub_rows">
                            <div className="input_row">
                                <div className="input_text">
                                <TextField
                                    className="line-input-large"
                                    label="Start Time"
                                    type="time"
                                    fullWidth
                                // value={homework.endTime}
                                    onChange={(e) => setStartTime(e.target.value )}
                                />
                                </div>
                                <div className="input_text">
                                <TextField
                                        className="line-input-large"
                                        label="End Time"
                                        type="time"
                                        fullWidth
                                    // value={homework.endTime}
                                        onChange={(e) => setEndTime(e.target.value )}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11 col-12 p-0">
                        <SelectFieldUnderline
                            label="Repeat"
                            value={selectValue}
                            className="select-large"
                            options={['Never', 'Every Week', 'Every 2 Weeks', 'Every Month']}
                            getValue={(value) => addSchedule(value)}
                        />
                    </div>

                    {toggleWeeks && (
                        <div className="col-md-12">
                            <div className="week_container">
                                <div className="row">
                                    <Typography className="text">Choose</Typography>
                                </div>
                                <div className="row choose_weeks">
                                    {weekArray.map((val, index) => (
                                        <Typography className="boxes" key={index} onClick={() => selectedMonths(val)}>
                                            {val}
                                        </Typography>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {toggleDays && (
                        <div className="col-md-12">
                            <div className="week_container">
                                <div className="row">
                                    <Typography className="text">On</Typography>
                                </div>
                                <div className="row choose_weeks">
                                    {daysArray.map((val, index) => (
                                        <Typography className="boxes" key={index} onClick={() => selectedWeek(val)}>
                                            {val}
                                        </Typography>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col-md-12 p-0 horizontalline"></div>
                </div>
            </div>
        </>
    );
};

export default ReusableDateTime;
