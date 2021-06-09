import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import TotalClasses from './TotalClasses';
import LiveClasses from './LiveClasses';
import TutorListMiddle from './TutorListMiddle';
import LiveClassesPartSec from './LiveClassesPartSec';
import OutlineButton from '../../components/Button/OutlineButton';
import Footer from '../Footer/Footer';
import TutorListBottom from '../StudentAllClassesTutors/TutorListBottom';
import SlidingDrawerContent from './SlidingDrawerContent';
import { studentMenus } from '../../Helper/studentMenus';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu
            menuList={studentMenus}
            menuDrawerWidth="65vw"
            menuDrawerAnimation={false}
            MenuDrawerComponent={<SlidingDrawerContent />}
        >
            <div className="student__classes__tutor">
                <div className="spacing no-mt">
                    <div className="filter__row__container">
                        <div className="button__container">
                            <Typography className="title active">Live Classes</Typography>
                        </div>
                        <div className="sort__container">
                            <ExpandMore className="arrow__downward" />
                            <Typography className="sort__title">Sort</Typography>
                        </div>
                    </div>
                    <TotalClasses />
                    <LiveClasses />
                    <TutorListMiddle />
                    <LiveClassesPartSec />
                    <TutorListBottom />
                    <div className="row">
                        <div className="show__more__wrapper">
                            <div className="show__more__contianer">
                                <OutlineButton text="Show more" />
                                <Typography className="title">Showing 50 of 5488</Typography>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default Index;
