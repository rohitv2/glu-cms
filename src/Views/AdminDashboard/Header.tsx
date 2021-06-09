import React from 'react';
import { Typography, IconButton, makeStyles } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import { resetTokenAndLocalStorage } from '../../Utility/API';
import commonImg from '../../Assets/images';
import { Icons } from '../../Assets/Icons';

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
    return (
        <div className="dashboard-header">
            <div className="header-top">
                <div className="school-name-container">
                    <div className="name__logo__container">
                        {/* <div className="logo__container"> */}
                            {/* <img src={commonImg.schoolLogo} alt="" /> */}
                        {/* </div> */}
                        <div>
                            <Typography className="school-name"> </Typography>
                            {/* <Typography className="title">Visit website</Typography> */}
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

export default Header;
