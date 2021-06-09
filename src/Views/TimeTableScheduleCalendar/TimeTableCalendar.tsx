import React from 'react'
import { useLocation } from 'react-router';
import ScheduleEvent from './ScheduleEvent'

function TimeTableCalendar() {
    const [scheduleData,setScheduleData] = React.useState<any>()
    const findRoutes = useLocation();
    React.useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('timeTableRowData')) {
                const value =  (findRoutes as any).state.timeTableRowData
                    setScheduleData(value);
            }
        }
    }, []);

    return (
        <div>
           <ScheduleEvent data={scheduleData}/>
        </div>
    )
}

export default TimeTableCalendar
