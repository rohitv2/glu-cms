import React from 'react';
import PrticularAttendance from '../../../../components/Dashobard/PrticularAttendance';
import CardContainer from '../../../../Containers/Cards/CardContainer';

interface props{
    attendance?:any
}

const Attendance: React.FunctionComponent<props> = ({attendance}) => {
    return (
        <CardContainer>
            <div className="row row__margin">
                <div className="col-md-12 colum__spacing">
                    {attendance.map((item: any, i: number) => (
                        <PrticularAttendance
                            key={i}
                            day={item.day}
                            dateNum={item.dateNum}
                            date={item.date}
                            status={item.status}
                            color={item.color}
                        />
                    ))}
                </div>
            </div>
        </CardContainer>
    );
};

export default Attendance;
