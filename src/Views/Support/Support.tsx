import React, { useState } from 'react';
import MenuContainer from '../../components/MenuContainer';
import SlidingMenu from '../../components/SlidingMenu';
import BannerTop from './BannerTop';
import HelpGuides from './HelpGuides';
import NavigationMenuResuable from '../../components/NavigationMenuReusable';
import AskSomething from './AskSomething';

const Support = () => {
    const menuList = [
        { link: '', name: 'Accounts' },
        { link: '', name: 'Payment' },
        { link: '', name: 'Settings' },
        { link: '', name: 'Features' },
        { link: '', name: 'Tips And Advice' },
        { link: '', name: 'Whiteboard' },
        { link: '', name: 'Tutors' },
        { link: '/help-support', name: 'Help' },
        { link: '/support', name: 'Support' },
    ];
    const [menuShow, setMenuShow] = useState(false);
    const handleMenu = () => {
        setMenuShow(!menuShow);
    };
    return (
        <div className="content-wrapper">
            <NavigationMenuResuable customBackgroundColor="customBackgroundColor" />
            <div className="header-banner">
                {/* <SlidingMenu show={menuShow} handler={() => handleMenu()} menus={menuList} />
                <MenuContainer handleMenu={() => handleMenu()} /> */}

                <BannerTop />
            </div>
            <AskSomething />

            <HelpGuides />
        </div>
    );
};

export default Support;
