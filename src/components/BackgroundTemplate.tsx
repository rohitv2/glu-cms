import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTeacherDetails } from '../Redux/Actions/teacherAction';
import { useLocation } from 'react-router';

interface props {
    imgSrc?: any;
}
const BackgroundTemplate: React.FunctionComponent<props> = ({ imgSrc }) => {
    const dispatch = useDispatch();
    const loc = useLocation();
    useEffect(() => {
        dispatch(getTeacherDetails());
    }, []);
   
    const detail = useSelector((state: any) => state.teacherReducer.teacherData);
    return (
        <div className="main_container2_subcontainer">
            <div className="img_container">
                <div className="row">
                    <div className="col-6 p-0">
                        <div className="main_container_dashboard_col6">
                            <Typography className="card_text">Profile</Typography>
                        </div>
                    </div>
                    <div className="col-6 p-0">
                        <div className="main_container_dashboard_col7">
                            <div className="image_link">
                                {location.pathname === '/tutor/' && (
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/tutor/profile">
                                        <Typography className="subtext">See</Typography>
                                    </Link>
                                )}
                            </div>
                            <img src={imgSrc} className=" img-class img-fluid" width="393px" height="393px" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="main_container_dashboard_col8">
                        <Typography className="text">{detail && `${detail.firstName} ${detail.lastName}`}</Typography>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="main_container_dashboard_col9">
                        <Typography className="text">{detail && detail.location}</Typography>
                        <Typography className="text">{detail && detail.phoneNumber}</Typography>
                        <Link style={{ textDecoration: 'none' }} to="/tutor/tutor-edit">
                            <Typography className="subtext">Edit Profile</Typography>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundTemplate;
