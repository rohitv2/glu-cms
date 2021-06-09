import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
interface props {
    mainHeading: string;
    subHeading1: string | number;
    subHeading2: string;
    heading1: string;
    heading2: string;
}
const CalendarComponent: React.FunctionComponent<props> = ({
    mainHeading,
    heading1,
    heading2,
    subHeading1,
    subHeading2 = '37/40',
}) => {
    return (
        <>
            <div className="col-md-6 d-flex p-0">
                <div className="main_container_dashboard_col4 bg-white">
                    <div className="cardtitle__subtitle__container">
                        <Typography className="card_title">{mainHeading}</Typography>
                        <div className="card_subtitle">
                            <Link to="/tutor/tutor-calender" style={{ color: '#2267FF', textDecoration: 'none' }}>
                                See calendar
                            </Link>
                        </div>
                    </div>
                    <div className="card_subtext">
                        <div className="row">
                            <div className="col-5">
                                <Typography className="card_subtext_1">Upcoming Classes</Typography>
                                <Typography className="card_subtext_1">{subHeading1}</Typography>
                            </div>
                            <div className="col-7">
                                <Typography className="card_subtext_1">Total Spaces</Typography>
                                <Typography className="card_subtext_1">{subHeading2}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendarComponent;
