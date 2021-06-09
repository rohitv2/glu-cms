import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const EventCalender: React.FunctionComponent = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={[
                { title: 'Sport Day', start: '2020-06-25' },
                { title: 'Holiday', start: '2020-06-30' },
            ]}
        />
    );
};

export default EventCalender;
