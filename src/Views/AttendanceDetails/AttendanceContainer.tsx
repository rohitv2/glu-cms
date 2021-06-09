import React,{useState,useEffect} from 'react'
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import TableFilter, { dispatchActionType } from '../../components/Dashobard/Table/TableFilter'
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import './style.scss'
import { Typography} from '@material-ui/core';

function AttendanceContainer() {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);

    return (
        <div>
            <CardContainer>
                <AddButton title="Attendance" />
            </CardContainer>
            <TableFilter/>
            <div className="attendance-wrapper">
            <div className="row">
                <div className="col-md-8 bg-white">
                    <div className="row">
                    <div className="col-md-3">
                        <Typography className="calendar">Calendar</Typography>
                        <Typography className="range"><span>From</span> 15th October</Typography>
                    </div>
                    <div className="col-md-9">
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
                <div className="col-md-4 ">
                    <div className="col-md-12 bg-white rightside-card">
                        <Typography className="header">Attendance</Typography>
                        <Typography className="perchantage">24%</Typography>
                        <Typography className="time">Year of date</Typography>
                        
                    </div>
                    <div className="col-md-12 bg-white rightside-card" style={{marginTop:"1rem"}}>
                        <Typography className="header">Punctuality</Typography>
                        <Typography className="perchantage">35%</Typography>
                        <Typography className="time">Year of date(On Time)</Typography>
                    </div>
                </div>
            </div>
            <div className="row bg-white stat-conatiner">
                    <div className="col-md-2 lower-card">
                        <Typography className="perchantage">26%</Typography>
                        <Typography className="text">Present</Typography>
                    </div>
                    <div className="col-md-2 lower-card border-card">
                        <Typography className="perchantage">12 days</Typography>
                        <Typography className="text">Present</Typography>
                    </div>
                    <div className="col-md-2 lower-card border-card">
                         <Typography className="perchantage">74%</Typography>
                        <Typography className="text">Absent</Typography>
                    </div>
                    <div className="col-md-2 lower-card border-card">
                        <Typography className="perchantage">37 days</Typography>
                        <Typography className="text">Absent</Typography>
                    </div>
                    <div className="col-md-2 lower-card border-card">
                        <Typography className="perchantage">37 days</Typography>
                        <Typography className="text">On Time</Typography>
                    </div>
                    <div className="col-md-2 lower-card border-card">
                        <Typography className="perchantage">37 days</Typography>
                        <Typography className="text">Late</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceContainer
