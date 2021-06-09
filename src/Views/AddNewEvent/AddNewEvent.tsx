import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import EventCalender from './EventCalender';
import { TextField, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import SelectField from '../../components/Inputs/SelectField';

const AddNewEvent: React.FunctionComponent = () => {
    const [eventFor, setEventFor] = useState('wholeSchool');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventFor(e.target.value);
    };
    return (
        <div className="event-wrapper">
            <CardContainer>
                <div className="event-container">
                    <div className="row">
                        <div className="col-md-5">
                            <EventCalender />
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6">
                                    <TextField
                                        label="Event Name"
                                        className="custom-input"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                                <div className="col-md-6">
                                    <DateSelector />
                                </div>
                                <div className="col-md-6">
                                    <TimeSelector />
                                </div>
                                <div className="col-md-6">
                                    <TimeSelector />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <RadioGroup
                                        className="radio-group"
                                        name={name}
                                        aria-label="EventFor"
                                        value={eventFor}
                                        onChange={handleChange}>
                                        <FormControlLabel
                                            className="title"
                                            value="wholeschool"
                                            control={<Radio className="icon" />}
                                            label="All"
                                        />
                                        <FormControlLabel
                                            className="title absent"
                                            value="perticular"
                                            control={<Radio className="icon" />}
                                            label=""
                                        />
                                    </RadioGroup>
                                </div>
                                <div className="col-md-6">
                                    {eventFor === 'perticular' && (
                                        <SelectField
                                            className="custom-input"
                                            options={[
                                                'departments',
                                                'year groups',
                                                'parents',
                                                'students',
                                                'teachers',
                                                'form groups',
                                                'extram curricular activities',
                                            ]}
                                            label="Select Event For"
                                            getValue={(value) => {}}
                                        />
                                    )}
                                </div>
                                <div className="col-md-12">
                                    <textarea className="description-box" placeholder="Event description..." rows={5} />
                                    <Button className="primary-btn mt-4">Create Event</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddNewEvent;
