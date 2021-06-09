import React, { useEffect } from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';
import CardContainer from '../../Containers/Cards/CardContainer';
import CardStatus from './CardStatus';
import CardTable from '../../components/Table/CardTable';
import GraphContainer from './GraphContainer';
import { v4 as uuidv4 } from 'uuid';
import { Icons } from '../../Assets/Icons';
import { getallTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { getallparentAPIcall } from '../../Redux/Actions/parentAction';
import { getallStudentAPIcall } from '../../Redux/Actions/studentAction';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router'

interface tableProps {
    student: string;
    class: string;
    invoice: string;
    amount: string;
    status: string;
}

interface mainProps {
    getallTeacherAPIcall: () => void;
    getallparentAPIcall: () => void;
    getallStudentAPIcall: () => void;
}
const Dashboard: React.FunctionComponent<mainProps> = ({
    getallTeacherAPIcall,
    getallparentAPIcall,
    getallStudentAPIcall,
}) => {
    const studentcountData = useSelector((state: { studentReducer: any }) => state.studentReducer.studentData);
    const teachercountData = useSelector((state: { teacherReducer: any }) => state.teacherReducer.teacherList);
    const parentcountData = useSelector((state: { parentReducer: any }) => state.parentReducer.parentData);
    useEffect(() => {
        getallTeacherAPIcall();
    }, []);
    useEffect(() => {
        getallparentAPIcall();
    }, []);
    useEffect(() => {
        getallStudentAPIcall();
    }, []);

    const history = useHistory()

    const gotToAttendance = () => {
        history.push('/dashboard/attendance-details')
    }

    const userList = [
        { email: 'Student', total: studentcountData ? studentcountData.length : '' },
        { email: 'Teachers', total: teachercountData ? teachercountData.length : '' },
        { email: 'Parents', total: parentcountData ? parentcountData.length : '' },
        { email: 'Staff', total: 0 },
    ];
    const eventList = [
        { eventTime: '10:00-11:00', eventName: 'What was life in Bennin', eventDate: '07/06', eventOrg: 'jamie lee' },
        { eventTime: '10:00-11:00', eventName: 'What was life in Bennin', eventDate: '07/06', eventOrg: 'jamie lee' },
        { eventTime: '10:00-11:00', eventName: 'What was life in Bennin', eventDate: '07/06', eventOrg: 'jamie lee' },
    ];
    return (
        <div className="row row__margin">
            <div className="col-md-8 colum__spacing">
                <div className="row row__margin">
                    <div className="col-md-12 pt-0 pb-0 colum__spacing">
                        <CardContainer mb="mb-2">
                            <GraphContainer />
                        </CardContainer>
                    </div>
                </div>
                <div className="row row__margin">
                    {userList.map((item) => (
                        <div key={uuidv4()} className="col-md-6 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading={item.email} total={item.total} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row row__margin">
                    <div className="col-md-12 colum__spacing">
                        <CardContainer>
                            <div className="dashboard-table-container">
                                <div className="table-header">
                                    <Typography className="heading">Accounts</Typography>
                                </div>
                                <CardTable
                                    showToolbar={true}
                                    showPagination={true}
                                    columns={[
                                        {
                                            width: '23%',
                                            title: 'Student',
                                            field: 'student',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Class',
                                            field: 'class',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Invoice',
                                            field: 'invoice',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Amount',
                                            field: 'amount',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Status',
                                            field: 'status',
                                            render: (rowData: tableProps) => (
                                                <Typography style={{ fontSize: '1.25rem' }}>
                                                    {rowData.status}
                                                </Typography>
                                            ),
                                        },
                                        {
                                            width: '23%',
                                            title: 'Action',
                                            field: 'action',
                                            render: () => <Button className="download-btn">Download</Button>,
                                        },
                                    ]}
                                    rowData={[
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                    ]}
                                />
                            </div>
                        </CardContainer>
                    </div>
                </div>
            </div>
            <div className="col-md-4 colum__spacing  position-relative">
                <div style={{ top: 0 }} className="attendance_column">
                    <CardContainer>
                        <div className="card-status attandece-card">
                            <div className="status-header primary">
                                <Typography className="status-heading">Today's Attendence</Typography>
                            </div>
                            <Typography className="total-no">189</Typography>
                            <Typography className="total-status mb-3">Students are attending today</Typography>
                            <Typography className="primary__text" onClick={gotToAttendance} style={{cursor:"pointer"}}>Go to attendance</Typography>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <div className="upcomming-event-container">
                            <div className="event-header">
                                <Typography className="heading">Upcoming Events</Typography>
                                <IconButton>
                                    <img src={Icons.calendar} width={22} height={18} />
                                </IconButton>
                            </div>
                            <div className="event-body">
                                {eventList.map((item) => (
                                    <div key={uuidv4()} className="event-chip-card">
                                        <div className="left">
                                            <div className="circle">{item.eventDate}</div>
                                        </div>
                                        <div className="middle">
                                            <Typography className="heading">{item.eventTime}</Typography>
                                            <Typography className="heading">{item.eventName}</Typography>
                                            <Typography className="heading org">{item.eventOrg}</Typography>
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

export default connect(null, { getallTeacherAPIcall, getallparentAPIcall, getallStudentAPIcall })(Dashboard);
