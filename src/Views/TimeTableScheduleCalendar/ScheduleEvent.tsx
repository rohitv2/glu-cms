import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Calendar as DatePicker } from 'react-calendar';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
    getIndividualTimeTableBlock,
    editTimeTableName,
    getTimeTableInfoApiCall,
} from '../../Redux/Actions/schoolAction';
import { makeEvent } from './event/makeEvent';
import AddName from './AddName';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';

const localizer = momentLocalizer(moment);
var eventArray: any = [];

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

function ScheduleEvent({ data }: any) {
    const lsYearGroup = localStorage.getItem('yearGroup');
    const history = useHistory();
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [yearGroup, setYearGroup] = useState<any>(lsYearGroup ? JSON.parse(lsYearGroup) : '');
    const handleDateChange = (selectedDate: any) => {
        setSelectedDate(selectedDate);
    };
    const { timeTableDetails, isPending } = useSelector((state: any) => ({
        timeTableDetails: state.schoolReducer.individualTimeTableBlockList.data,
        isPending: state.schoolReducer.individualTimeTableBlockList.isPending,
    }));
    const timeTableInfo = useSelector((state: any) => state.schoolReducer.getTimeTableInfo);

    //differ between first time creating event or under a timetable block & dispatch to get inidividual time table
    React.useEffect(() => {
        if (data) {
            dispatch(getTimeTableInfoApiCall(data?.id));
            dispatch(getIndividualTimeTableBlock(data && data?.id));
        }
    }, [,data]);
    
    ///creating all event by rrule generator

    useEffect(()=>{
            if (timeTableDetails) {
                eventArray = []
                eventArray = makeEvent(timeTableDetails)
            }
    },[timeTableDetails])


    //routes to add timetable with selecting block start & end time , day
    const handleCreateEvent = ({ start, end }: any) => {
        if (yearGroup === '') {
            toast.success('Year group can not be empty.');
        } else {
            history.push({
                pathname: '/dashboard/time-tables/add-new-timetable',
                state: {
                    timeTableDetails: {
                        start,
                        end,
                        id: data?.id,
                        yearGroup: yearGroup,
                        timetableName: data?.title
                    },
                },
            });
        }
    };

    //for upper side name edit from child componnet
    const eventName = (value: string) => {
        if (value !== '' && value != null) {
            let edited_data = {
                blockName: value,
            };
            dispatch(editTimeTableName(data?.id, edited_data));
        }
    };

    //styling event block and the popover conatiner
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
                                {
                                    event?.subjectName || event?.sectionName  ? 
                                    <div className="popover-body-item">
                                        <EventAvailableIcon className="popover-icon" />
                                        <div className="title-popover-event">
                                            {
                                                event?.subjectName ?
                                                event?.subjectName : 
                                                event?.sectionName
                                            }
                                        </div>
                                    </div> : ""
                                } 
                                    <div className="popover-body-item">
                                        <ScheduleIcon className="popover-icon" />
                                        <div className="desc-popover-event">
                                            {
                                            moment(event?.start).format('hh:mma') 
                                                +'-' +
                                            moment(event?.end).format('hh:mma')
                                            }
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
                        <div>{event?.eventTitle}</div>
                    </div>
                </EventTooltip>
            </div>
        );
    };

    const handleEvent = (event: any) => {
        history.push({
            pathname: '/dashboard/time-tables/edit-timetable',
            state: {
                timeTableBlockDetails: event && event,
                routerIndicator: timeTableDetails?.length,
                timetableName: data?.title
            },
        });
    };

    const handleDropdownValue = (value: any) => {
        localStorage.setItem('yearGroup', JSON.stringify(value));
        setYearGroup(value);
    };

    return (
        <React.Fragment>
            {isPending && <FullScreenLoader />}
            <CardContainer>
                <AddName
                    valueName={timeTableInfo ? timeTableInfo.blockName : ''}
                    name={eventName}
                    yearValue={yearGroup}
                    getDropdownValue={handleDropdownValue}
                    disabled={false}
                />
            </CardContainer>
            <CardContainer>
                <div className="bg-white calender-container">
                    <Calendar
                        selectable
                        localizer={localizer}
                        popup
                        events={eventArray ? eventArray : []}
                        startAccessor="start"
                        onSelectEvent={(event: any) => {
                            handleEvent(event);
                        }}
                        endAccessor="end"
                        date={selectedDate} //navigate date
                        style={{ height: 500 }}
                        views={['month', 'week', 'day']}
                        defaultView={Views.WEEK}
                        className="event-scheduler"
                        onSelectSlot={handleCreateEvent}
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
            </CardContainer>
        </React.Fragment>
    );
}

export default ScheduleEvent;
