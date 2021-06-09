import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SlidingDrawer from '../../components/SlidingDrawer';
import SlidingPushDrawerContent from '../ParentsHomePage/SlidingPushDrawerContent';
import SlidingDrawerContent from '../ParentsHomePage/SlidingDrawerContent';
import Tabs from './Tabs';
import Personal from './Personal';
import School from './School';

const ParentDashboard: React.FunctionComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openPushDrawer, setOpenPushDrawer] = useState(false);
    const [activeTab, setActiveTab] = useState('personal');

    const menu = [
        { link: '/parent/home', name: 'Home' },
        { link: '/parent/dashboard', name: 'Dashboard' },
        { link: '', name: 'Subject' },
        { link: '', name: 'Messages' },
    ];

    const handleDrawer = () => {
        // const drawer = document.getElementById('menu__drawer');
        // drawer.style.zIndex = "25";
        setOpenPushDrawer(false);
        setOpenDrawer(!openDrawer);
    };

    const handlePushDrawer = () => {
        setOpenDrawer(false);
        setOpenPushDrawer(!openPushDrawer);
    };
    return (
        <NavigationMenu absolute background="transparent" menuList={menu} TopDrawerMenuComponent>
            <div className="main_container">
                <div className="title__container">
                    <Tabs value={activeTab} onChange={setActiveTab} />
                    <div className="dropdown">
                        <Typography variant="h5">Child 1</Typography>
                        <Typography variant="h5">
                            <ExpandMoreIcon style={{ fontSize: '3rem' }} />
                        </Typography>
                    </div>
                </div>
                {activeTab === 'school' && (
                    <div className="school__container">
                        <School />
                    </div>
                )}

                {activeTab === 'personal' && <Personal />}
                <div className="drawer" id="menu__drawer">
                    <SlidingDrawer title="Upcoming Class" show={openDrawer} handler={handleDrawer}>
                        <SlidingDrawerContent />
                    </SlidingDrawer>
                </div>

                <div className="drawer push__drawer" id="notification__drawer">
                    <SlidingDrawer title="Upcoming Class" show={openPushDrawer} handler={handlePushDrawer}>
                        <SlidingPushDrawerContent />
                    </SlidingDrawer>
                </div>
                <div className="main_container_4">
                    <div className="footer">
                        <MadeBy />
                    </div>
                </div>
            </div>
        </NavigationMenu>
    );
};
export default ParentDashboard;
