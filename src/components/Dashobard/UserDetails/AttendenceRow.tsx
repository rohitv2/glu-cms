import React, { useEffect, useState } from 'react';
import PercentCard from './PercentCard';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import { Typography } from '@material-ui/core';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { months } from '../../../Helper/months';
import { checkValueReturn0 } from '../../../Helper/checkValueReturn0';

interface props {
    dateRange?: (data: any) => void;
    attendance?: any;
}
const AttendenceRow: React.FC<props> = ({ dateRange, attendance }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);
    const [attendanceDet, setAttendanceDet] = useState({
        attendance: '0',
        puncuality: '0',
    });

    useEffect(() => {
        if (dateRange) {
            dateRange(state);
        }
    }, [state]);
    useEffect(() => {
        if (attendance) {
            setAttendanceDet({
                attendance: checkValueReturn0(attendance.presentPercentage),
                puncuality: checkValueReturn0(attendance.presentPercentage),
            });
        }
    }, [attendance]);
    return (
        <div>
            <div className="row row__margin">
                <div className="col-lg-8 col-md-12 colum__spacing">
                    <CardContainer>
                        <div className="attendace_container_row bg-white">
                            <div className="row">
                                <div className="col-md-4">
                                    <Typography className="calender_title">Calendar</Typography>
                                    <Typography className="calender_from">
                                        <span>From</span> {state[0].startDate.getDate()} <span> </span>
                                        {months[state[0].startDate.getMonth()]} To {state[0].endDate.getDate()}
                                        <span> </span>
                                        {months[state[0].endDate.getMonth()]}
                                    </Typography>
                                </div>
                                <div className="col-md-8">
                                    <DateRangePicker
                                        onChange={(item: any) => setState([item.selection])}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        months={2}
                                        ranges={state}
                                        direction="horizontal"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                </div>
                <div className="col-lg-4 col-md-12 colum__spacing">
                    <PercentCard heading="Attendance" percent={`${attendanceDet.attendance}%`} title="Year to date" />
                    <PercentCard
                        style={{ marginBottom: 0 }}
                        heading="Punctuality"
                        percent={`${attendanceDet.puncuality}%`}
                        title="Year to date (On time)"
                    />
                </div>
            </div>
        </div>
    );
};

export default AttendenceRow;
