import React, { useState } from 'react';
import StudentAttendaceChart from './StudentAttendaceChart';
import SessionInsightsChart from './SessionInsightsChart';
import { IconButton, Button } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import ExamReportChart from './ExamReportChart';
import HomeWorkChart from './HomeWorkChart';

const availGraph = [
    { name: 'Active Users', render: 'session' },
    { name: 'Daily Attendance', render: 'attendance' },
    { name: 'Exam Result', render: 'result' },
    { name: 'Homework Completed', render: 'homework' },
];
const GraphContainer: React.FunctionComponent = () => {
    const [hideShow, setHideShow] = useState(false);
    const [render, setRender] = useState('session');
    const handleHideShow = () => {
        setHideShow(!hideShow);
    };
    const handleRender = (render: string) => {
        setRender(render);
        handleHideShow();
    };
    const renderGraph = () => {
        switch (render) {
            case 'attendance': {
                return <StudentAttendaceChart />;
            }
            case 'result': {
                return <ExamReportChart />;
            }
            case 'homework': {
                return <HomeWorkChart />;
            }
            default: {
                return <SessionInsightsChart />;
            }
        }
    };
    return (
        <div className="dashboard-session-card-wrapper">
            <div className="menu-options">
                {/* <IconButton onClick={handleHideShow}>
                    <MoreVert />
                </IconButton> */}
                {/* <div style={{display: hideShow ? 'block': 'none'}} className="menu-list">
                    <div className="arrow-up"></div>
                    <ul>
                        {availGraph.map((item) => (
                            <li onClick={() => handleRender(item.render)} key={uuidv4()}>
                                <Button>{item.name}</Button>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>
            {renderGraph()}
        </div>
    );
};

export default GraphContainer;
