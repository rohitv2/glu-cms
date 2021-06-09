import React from 'react';
import StudentTimeTable from '../Table/StudentTimeTable';
import { studenttimetable } from './tabledata';
const TimeTableRow = () => {
    return (
        <div className="row row__margin">
            <div className="col-md-12 colum__spacing pt-0">
                <div className="bg-white">
                    <StudentTimeTable tableName="Timetable" data={studenttimetable} />
                </div>
            </div>
        </div>
    );
};

export default TimeTableRow;
