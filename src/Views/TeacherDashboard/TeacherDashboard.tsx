import React from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';
import { Face, PeopleAlt, ArrowForward, ControlPoint, ArrowForwardIos } from '@material-ui/icons';
import CardContainer from '../../Containers/Cards/CardContainer';
import CardStatus from './CardStatus';
import SessionInsightsChart from './SessionInsightsChart';
import OutlineBtn from '../../components/Button/OutlineBtn';
import CardTable from '../../components/Table/CardTable';

interface tableProps {
    student: string;
    class: string;
    invoice: string;
    amount: string;
    status: string;
}
const TeacherDashboard: React.FunctionComponent = () => {
    const userList = [
        { email: 'Student', total: 200 },
        { email: 'Teachers', total: 10 },
        { email: 'Parents', total: 5 },
        { email: 'Staff', total: 5 },
    ];
    const eventList = [
        { eventName: 'Annual Sports Meet', eventDate: 'Monday, Dec 21, 2020' },
        { eventName: '15th Graduation ceremony', eventDate: 'Tuesday, Jan 09, 2021' },
        { eventName: 'Parents Teacher Meet', eventDate: 'Tuesday, Jan 15, 2021' },
    ];
    localStorage.setItem("fromCalendar", "false")
    return (
        <div className="row">
            <div className="col-md-8">
                <CardContainer>
                    <div className="dashboard-session-card-wrapper">
                        <SessionInsightsChart />
                    </div>
                </CardContainer>
                <div className="row">
                    {userList.map((item) => (
                        <div className="col-md-6">
                            <CardContainer>
                                <CardStatus
                                    icon={<PeopleAlt className="status-icon" />}
                                    heading={item.email}
                                    total={item.total}
                                />
                            </CardContainer>
                        </div>
                    ))}
                </div>
               
            </div>
            <div className="col-md-4 position-relative">
                <div style={{ top: 0 }} className="position-sticky">
                    <CardContainer>
                        <div className="card-status attandece-card">
                            <div className="status-header primary">
                                <Face className="status-icon" />
                                <Typography className="status-heading">Today's Attendence</Typography>
                            </div>
                            <Typography className="total-no">189</Typography>
                            <Typography className="total-status mb-3">STUDENTS ARE ATTENDING TODAY</Typography>
                            <OutlineBtn
                                title="Go To Attendance"
                                color="#fff"
                                icon={<ArrowForward style={{ color: '#fff' }} />}
                            />
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <div className="upcomming-event-container">
                            <div className="event-header">
                                <Typography className="heading">Upcoming Events</Typography>
                                <IconButton>
                                    <ControlPoint className="icon" />
                                </IconButton>
                            </div>
                            <div className="event-body">
                                {eventList.map((item) => (
                                    <div className="event-chip-card">
                                        <div className="left">
                                            <div className="circle">
                                                {item.eventDate.split(' ')[2].replace(',', '')}
                                            </div>
                                        </div>
                                        <div className="middle">
                                            <Typography className="heading">{item.eventName}</Typography>
                                            <Typography className="subheading">{item.eventDate}</Typography>
                                        </div>
                                        <div className="right">
                                            <ArrowForwardIos className="icon" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
