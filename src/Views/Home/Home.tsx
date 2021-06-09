import React, { useState, useEffect } from 'react';
import MenuContainer from '../../components/MenuContainer';
import LaunchingSoon from './LaunchingSoon';
import BottomRight from './BottomRight';
import commonImg from '../../Assets/images';
import SectionOne from './SectionOne';
import SectionTwoReusable from '../../components/Home/SectionTwoReusable';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import PeopleSaying from './PeopleSaying';
import Footer from '../Footer/Footer';
import SlidingMenu from '../../components/SlidingMenu';
import { Icons } from '../../Assets/Icons';
import BottomGAtext from './BottomGAtext';

const Home: React.FunctionComponent = () => {
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
    const [show, setShow] = useState(false);
    const [animationCompelte, setAnimationComplete] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const [hideAnimationMobile, setHideAnimationMobile] = useState(true);
    const handleMenu = () => {
        setMenuShow(!menuShow);
    };
    useEffect(() => {
        let content: any = document.querySelector('.home-wrapper');
        setTimeout(() => {
            setShowOthers(true);
            content.style.cssText = 'overflow:unset;height:auto';
        }, 5000);
        setTimeout(() => {
            setAnimationComplete(true);
        }, 1500);
        setTimeout(() => {
            setShow(true);
        }, 3000);
        if (window.screen.width <= 767) {
            content.style.cssText = 'overflow:unset;height:auto';
            setShowOthers(true);
            setAnimationComplete(true);
            setShow(true);
        } else {
            setHideAnimationMobile(false);
        }
    }, []);


    return (
        <div className="home-wrapper" >
            <SlidingMenu show={menuShow} handler={() => handleMenu()} menus={menuList} />
            <div className="holding-container">
                <div className={`rotating-box default-clip ${animationCompelte ? 'full-clip' : ''}`}>
                    {hideAnimationMobile ? null : (
                        <>
                            <img
                                className={`slogan ${animationCompelte ? 'show' : ''} ${showOthers ? 'hide' : ''} `}
                                src={Icons.logo}
                            />
                            <img
                                src={Icons.maskLong}
                                className={`${
                                    animationCompelte ? (show ? 'hide__mask' : 'white__mask') : 'defaultMask'
                                }`}
                            />
                        </>
                    )}
                    {showOthers && <MenuContainer handleMenu={() => handleMenu()} />}
                    {/* {showOthers && <ScrollButton />} */}
                    {showOthers && <LaunchingSoon />}
                    {showOthers && <BottomRight />}
                    {showOthers && <BottomGAtext />}
                </div>
            </div>
            {showOthers && (
                <React.Fragment>
                    <SectionOne />
                    <SectionTwoReusable
                        image={commonImg.girlsideviewcroped}
                        mobileImg={commonImg.bluetopcropgirl}
                        leftTitle="Tutors"
                        title="Tutors"
                        desktopTitle="Qualified Teachers"
                        msg={<>Earn money from the comfort of your own home</>}
                    />

                    <SectionThree
                        containerName="device__animationA"
                        image={commonImg.deviceA}
                        msg="By using Glu all concerned parties are able to view and share any relevant educational information as well as the past, present and future study skills of the student"
                    />

                    <SectionFour
                        imageOne={commonImg.scaffgirl}
                        imageTwo={commonImg.lappygirl}
                        msg="Glu aims to improve the learning outcomes for a student by facilitating interactions, and
                            work in tandem, between schools, teachers, parents and students"
                        show={false}
                        text="Innovative Learning"
                    />

                    <SectionFive />
                    <SectionSix />
                    <div className="curly__hair__container">
                        <SectionTwoReusable
                            image={commonImg.curlyhair}
                            mobileImg={commonImg.curlygirlcroped}
                            leftTitle="Messages"
                            desktopTitle="Contact Time"
                            title="Tutors"
                            msg={<>Keep the convo going with the in-app messenger</>}
                        />
                    </div>
                    <SectionThree
                        containerName="device__animationB"
                        image={commonImg.deviceB}
                        msg="Our range of qualified and experienced teachers allow for 24/7 access to lessons and live classes, enabling learning in a student’s own time and environment"
                    />
                    <div className="smile__girl__boy">
                        <SectionFour
                            imageOne={commonImg.smilegirl}
                            imageTwo={commonImg.boy}
                            msg="Our innovative whiteboard allows for classes with real time interactions between students and teachers, just like in a classroom, but from the comfort of your own space"
                            show={true}
                            text="Interactive whiteboard"
                        />
                    </div>
                    <PeopleSaying />
                    <Footer />
                </React.Fragment>
            )}
        </div>
    );
};

export default Home;
