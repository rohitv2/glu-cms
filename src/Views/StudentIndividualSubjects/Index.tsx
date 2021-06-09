import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';
import TotalClasses from './TotalClasses';
import UpcomingClasses from './UpcomingClasses';
import TutorListMiddle from './TutorListMiddle';
import UpcomingClassesPartSec from './UpcomingClassesPartSec';
import OutlineButton from '../../components/Button/OutlineButton';
import Footer from '../Footer/Footer';
import TutorListBottom from './TutorListBottom';
import WrapperScroller from '../../Containers/WrapperScroller';
import commonImg from '../../Assets/images';
import ImageOverlayContainer from './ImageOverlayContainer';

const PreviousClasses: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];

    return (
        <NavigationMenu menuList={menu} absolute>
            <div className="student__classes__tutor">
                <div className="banner__holding__container">
                    <div className="large__text">
                        <Typography className="title">
                            Maths. <br /> We have 135 Tutors <br /> and 2039 Classes
                        </Typography>
                        <Typography className="subtitle">
                            <FavoriteBorder className="icon" />
                            Favourite
                        </Typography>
                    </div>
                    <Typography className="bottom__left__text">Scroll to discover</Typography>
                </div>
                <WrapperScroller>
                    <div className="top__holding__container">
                        <img className="holding" src={commonImg.blueshirtman} alt="" />
                        <Typography className="left__text">Charlie Ray</Typography>
                        <div className="overy-heading">
                            <Typography className="small__heading">AED200 / 45mins</Typography>
                            <Typography className="large__heading">
                                Maths. <br /> An introduction to <br /> trigonometry
                            </Typography>
                        </div>
                    </div>
                    <UpcomingClasses />
                    <TotalClasses />
                    <ImageOverlayContainer />
                    <TutorListMiddle />
                    <UpcomingClassesPartSec />
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
                </WrapperScroller>
            </div>
        </NavigationMenu>
    );
};

export default PreviousClasses;
