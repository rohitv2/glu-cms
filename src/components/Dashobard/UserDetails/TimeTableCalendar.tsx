import React,{useState,useEffect} from 'react'
import {Calendar,momentLocalizer,Views} from 'react-big-calendar'
import moment from 'moment'
import { Typography,makeStyles } from '@material-ui/core';
import {Calendar as DatePicker} from 'react-calendar';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';


const EventTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#fafafa',
        color: 'rgba(0, 0, 0, 0.87)',
        minWidth: 400,
        fontSize: theme.typography.pxToRem(12),
        border: 'none !important',
        padding: '30px',
        borderRadius: '8px',
        boxShadow:
            '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)',
    },
}))(Tooltip);

const localizer = momentLocalizer(moment)
var eventArray:any = []

const useStyles = makeStyles({
    parent: {
        borderTop: '1px solid  #e7e7e7',
        paddingTop: '3rem',
        paddingBottom: '3rem',
    },
    calendarContainer : {
        display: "flex"
    }
});


let events:any = []

interface props{
    eventArray?: any,
    getDate?: (data: any) => void;
}

const TimeTableCalendar: React.FC<props> = ({eventArray,getDate}) => {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (selectedDate: any) => {
        setSelectedDate(selectedDate);
        getDate(selectedDate)
    };

    const EventComponent = ({ event }: any) => {
        return (
            <div>
                <EventTooltip
                    placement="right"
                    arrow={true}
                    title={
                        <React.Fragment>
                            <div className="custom-popover">
                                <div className="popover-body-content">
                                    <div className="popover-body-item">
                                        <EventAvailableIcon className="popover-icon" />
                                        <div className="title-popover-event">{event?.subjectName}</div>
                                    </div>
                                    <div className="popover-body-item">
                                        <ScheduleIcon className="popover-icon" />
                                        <div className="desc-popover-event">
                                            {
                                            moment(event?.start).format('hh:mma') +
                                                '-' +
                                            moment(event?.end).format('hh:mma')}
                                        </div>
                                    </div>
                                    <div className="popover-body-item">
                                        <EventNoteIcon className="popover-icon" />
                                        <div className="desc-popover-event">{event?.title}</div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                >
                    <div>
                        <div>{event.subjectName}</div>
                    </div>
                </EventTooltip>
            </div>
        );
    };


    return (

        <div className="row row__margin">
        <div className="col-md-12 colum__spacing pt-0">
            <div className="bg-white time__table">
                <Typography className="sub_heading">Timetable</Typography>
            <div className = {classes.calendarContainer}>
                <Calendar
                        localizer={localizer}
                        popup
                        events={eventArray ? eventArray : []}
                        startAccessor="start"
                        // onSelectEvent={(event) => {handleEvent(event)}}
                        endAccessor="end"
                        date={selectedDate} //navigate date
                        style={{ height: 500 }}
                        views={['month', 'week', 'day']}
                        defaultView={Views.WEEK}
                        className="event-scheduler"
                        tooltipAccessor={null}
                        components={{
                            event: EventComponent,
                        }}
                        />
                <div className="Calendar-right">
                        <DatePicker
                            next2Label={null}
                            prev2Label={null}
                            onChange={handleDateChange}
                            value={selectedDate}
                        />
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TimeTableCalendar
