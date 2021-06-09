import React from 'react';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import DateSelector from '../../components/DateTimeSelector/DateSelector';

import { Button } from '@material-ui/core';
const Section1: React.FunctionComponent = () => {
    return (
        <div className="section">
            <h1 className="availbility">Limited Availablitiy</h1>
            <div className="description">
                <p className="description__text">
                    I am an American author, life coach, and philanthropist. Known for my infomercials, seminars, and
                    self-help books including the books Unlimited Power and Awaken the Giant Within. In 2015 and 2016 I
                    was listed on the Worth Magazine Power 100 list.
                </p>
            </div>
            <div className="availability__date">
                <div>
                    <h1 className="availability__date__subject__title">Subjects</h1>
                    <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label="Maths"
                        options={['Maths']}
                        getValue={() => {}}
                    />
                </div>
                <div>
                    <h1 className="availability__date__date__title">Date</h1>
                    <DateSelector />
                </div>
                <div className="start_time">
                    <h1 className="availability__date__time__title">Start Time</h1>
                    <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label="10.00am"
                        options={['10.00am']}
                        getValue={() => {}}
                    />
                </div>
                <div className="end_time">
                    <h1 className="availability__date__time__title">End Time</h1>
                    <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label="10.00am"
                        options={['10.00am']}
                        getValue={() => {}}
                    />
                </div>
                <div className="button__box">
                    <Button>Book</Button>
                    <span className="price">AED200</span>
                </div>
            </div>
        </div>
    );
};

export default Section1;
