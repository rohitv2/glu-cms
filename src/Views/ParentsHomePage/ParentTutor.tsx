import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import DrawerProvider from '../../Providers/DrawerProvider';
import SlidingDrawerContent from '../../Views/ParentsHomePage/SlidingDrawerContent';

import ParentIndividualTutorBanner from '../../components/ParentTutorIndividual/ParentIndividualTutorBanner';
import LimitedAvailability from '../../components/ParentTutorIndividual/LimitedAvailability';
import { Link } from 'react-router-dom';
import LeftDrawerMenuContent from '../../Containers/Menus/LeftDrawerMenuContent';

function ParentTutor() {
    localStorage.setItem("tabValue","classes")
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openPushDrawer, setOpenPushDrawer] = useState(false);

    const navigations = [
        { link: '/parent/home', name: 'Home' },
        { link: 'parent/dashboard', name: 'Dashboard' },
        { link: '', name: 'Subject' },
        { link: '', name: 'Messages' },
    ];

    const handleDrawer = () => {
        setOpenPushDrawer(false);
        setOpenDrawer(!openDrawer);
    };

    const handlePushDrawer = () => {
        setOpenDrawer(false);
        setOpenPushDrawer(!openPushDrawer);
    };

    const menu = [
        { link: '/parent/home', name: 'Home' },
        { link: '/parent/dashboard', name: 'Dashboard' },
        { link: '', name: 'Subject' },
        { link: '', name: 'Messages' },
    ];


    return (
        <NavigationMenu absolute background="transparent" menuList={menu} colorWhite  LeftDrawerMenuComponent={<LeftDrawerMenuContent userType="parent" />}>

        <DrawerProvider open={openPushDrawer} onClose={handlePushDrawer} drawerWidth={321} drawerContent={<SlidingDrawerContent />}>

        <div className="parent__tutor">
                {/* <div className="navigation__menu__parent__tutor">
                    <NavigationMenu 
                        menuList={navigations} 
                        handler={handleDrawer} 
                        handlerNotification={handlePushDrawer} 
                        MenuDrawerComponent={<SlidingDrawerContent />} 
                        menuDrawerWidth="68.875rem"
                        menuDrawerAnimation={false}/>
                </div> */}
            <ParentIndividualTutorBanner />
            <LimitedAvailability />
        </div>
        </DrawerProvider>
        </NavigationMenu>
    )
}

export default ParentTutor
