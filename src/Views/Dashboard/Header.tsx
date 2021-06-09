import React, { useEffect } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { resetTokenAndLocalStorage } from '../../Utility/API';
import commonImg from '../../Assets/images';
import { Icons } from '../../Assets/Icons';
import { getSchoolAPIcall } from '../../Redux/Actions/schoolAction';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';

interface headerProps {
    title: string;
    icon: any;
}

const Header: React.FunctionComponent<headerProps> = ({ icon }) => {
    const history = useHistory();
    const resetAuth = () => {
        resetTokenAndLocalStorage();
        history.push('/');
    };
    const schoolData = useSelector((state: any) => state.schoolReducer?.schoolData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSchoolAPIcall());
    }, []);
    return (
        <div className="dashboard-header">
            <div className="header-top">
                <div className="school-name-container">
                    <div className="name__logo__container">
                        <div className="logo__container">
                            <img
                                src={
                                    schoolData && schoolData.User.profile
                                        ? schoolData.User.profile
                                        : commonImg.schoolLogo
                                }
                                alt=""
                            />
                        </div>
                        <div>
                            <Typography className="school-name">
                                {schoolData ? schoolData.schoolName : '...'}
                            </Typography>
                            <a href={schoolData ? schoolData.website : ''}>
                                <Typography className="title">Visit website</Typography>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bages-avatar">
                    <img src={Icons.user} width={20} height={22} alt="" />
                    <IconButton onClick={resetAuth} className="notification-btn mr-0 ml-4">
                        <img src={Icons.exit} width={20} height={22} alt="" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { getSchoolAPIcall })(Header);
