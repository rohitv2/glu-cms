import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import SmallCard from '../../components/SmallCard';
import ResuableTimeline from '../../components/ReusableTimeline';
import Landscape from './Landscape';
import CalendarComponent from '../../components/CalendarComponent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SlidingDrawer from '../../components/SlidingDrawer';
import SlidingPushDrawerContent from './Index';

const Dashboard: React.FunctionComponent = () => {
    const [openPushDrawer, setOpenPushDrawer] = useState(false);

    const menu = [
        { link: '/parent/home', name: 'Home' },
        { link: 'parent/dashboard', name: 'Dashboard' },
        { link: '', name: 'Subject' },
        { link: '', name: 'Messages' },
    ];

    const handlePushDrawer = () => {
        setOpenPushDrawer(!openPushDrawer);
        let screen = document.getElementById('root');
        if (screen) {
            if (openPushDrawer === false && screen) {
                screen.style.marginRight = '32.312rem';
                screen.style.marginLeft = '-32.312rem';
                screen.style.transition = 'all 0.75s ease';
            } else {
                screen.style.marginRight = '0px';
                screen.style.marginLeft = '0px';
                screen.style.transition = 'all 0.75s ease';
            }
        }
    };

    return (
        <NavigationMenu menuList={menu}>
            <div className="main_container">
                <div className="title__container">
                    <Typography className="main_container_dashboard_title">Personal School</Typography>
                    <div className="dropdown">
                        <Typography variant="h5">Child 1</Typography>
                        <Typography variant="h5">
                            <ExpandMoreIcon style={{ fontSize: '3rem' }} />
                        </Typography>
                    </div>
                </div>

                <div className="drawer push__drawer">
                    <SlidingDrawer title="Upcoming Class" show={openPushDrawer} handler={handlePushDrawer}>
                        <SlidingPushDrawerContent />
                    </SlidingDrawer>
                </div>

                <div className="main_container_dashboard">
                    <div className="row set__margin">
                        <div className="col-md-6 p-0">
                            <div className="main_container_dashboard_col1 bg-white">
                                <Landscape
                                    imgSrc={commonImg.tutorDashboard}
                                    title1={'Upcomming'}
                                    title2={'Classes'}
                                    date={'29/09/20'}
                                    subheading1={'45min'}
                                    time1={'9am-'}
                                    time2={'10.15am'}
                                    subheading2={'Fully Booked'}
                                    subject={'Geography.'}
                                    desc={'Igneous, Sedimentary,'}
                                />
                            </div>
                        </div>
                        <div className="col-md-6  p-0">
                            <div className="main_container_dashboard_col2">
                                <div className="card__row card_row1">
                                    <SmallCard
                                        mainHeading={'Previous Classes'}
                                        subHeading1={'Purchased'}
                                        subHeading2={'57'}
                                    />
                                    <SmallCard
                                        mainHeading={'Whiteboard'}
                                        subHeading1={'Try out what the class '}
                                        subHeading2={'will be like.'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reusable Component  */}
                    <div className="row wallet__date__container">
                        <div className="col-md-6  p-0">
                            <div className="main_container_dashboard_col3">
                                <div className="card__row card_row3">
                                    <SmallCard mainHeading={'Wallet'} subHeading1={'Balance'} subHeading2={'AED320'} />
                                </div>
                            </div>
                        </div>

                        {/* start */}
                        <CalendarComponent
                            mainHeading={'Thursday 30th July 2020'}
                            heading1={'Upcomming Classes'}
                            heading2={'Total Spaces'}
                            subHeading1={'4'}
                            subHeading2={'37/40'}
                        />
                    </div>
                </div>

                <div className="second_component">
                    <div className="main_container3">
                        <div className="horizontal__line__parent"></div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="main_container_col11">
                                    <Typography className="subtext">Your Day</Typography>
                                    <Typography className="subtext">9:21 am</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="main_container_col12">
                                    <div className="main_subcontainer">
                                        <ResuableTimeline
                                            date={'29/07/20'}
                                            time1={'9am-'}
                                            time2={'10.15am'}
                                            subject={'Geography.'}
                                            subheading1={'45min'}
                                            desc={'Igneous, Sedimentary, '}
                                            subheading2={'Fully Booked'}
                                        />
                                        <hr></hr>
                                        <ResuableTimeline
                                            date={'29/07/20'}
                                            time1={'11am-'}
                                            time2={'10.15am'}
                                            subject={'English.'}
                                            subheading1={'45min'}
                                            desc={'Organising a'}
                                            subheading2={'3/5 Spaces'}
                                        />
                                        <hr></hr>
                                        <ResuableTimeline
                                            date={'29/07/20'}
                                            time1={'3pm-'}
                                            time2={'10.15am'}
                                            subject={'French'}
                                            subheading1={'45min'}
                                            desc={'How Does Language.'}
                                            subheading2={'Fully Booked'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
export default Dashboard;
