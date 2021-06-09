import React from 'react';
import commonImg from '../../Assets/images';
import { Typography, Grid } from '@material-ui/core';
import SmallCard from '../../components/SmallCard';
import ResuableTimeline from '../../components/ReusableTimeline';
import Landscape from './Landscape';
import CalendarComponentParent from '../../components/CalendarComponentParent';
import ParentIndividualTutorBanner from '../../components/ParentTutorIndividual/ParentIndividualTutorBanner';
import LimitedAvailability from '../../components/ParentTutorIndividual/LimitedAvailability';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Link} from 'react-router-dom'
import WhiteCard from '../../components/Cards/WhiteCard';
import ClassesCarousel from './ClassesCarousel';
const useStyles = makeStyles(() => ({
    dateLeftContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    dayText:{
        fontSize: "2.625rem",
        lineHeight: "1.906rem",
        fontFamily: 'CircularXXWeb-Book',

    },
    timeRightContainer:{
        position: "relative"
    },
    time:{
        position: "absolute",
        right: 30,
        fontSize: "2.625rem",
        lineHeight: "1.906rem",
        fontFamily: 'CircularXXWeb-Book',

    }
}))
export default function Personal() {
    const classes = useStyles();
    return (
        <div>
            
            <div className="main_container_dashboard">
                <div className="row set__margin">
                    {/* <ParentIndividualTutorBanner/>
                    <LimitedAvailability/> */}
                    <div className="col-md-6 p-0">
                        <div className="main_container_dashboard_col1 bg-white">
                            {/* <Landscape
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
                            /> */}
                                                    <WhiteCard
                            size={12}
                            title={'Upcoming\nClasses'}
                            titleRightLink="See upcoming"
                            titleRightLinkTo="/parent/upcoming-classes"
                            content={<ClassesCarousel />}
                            titleClassName={classes.upcomingClassCardTitle}
                        />
                        </div>

                    </div>
                    <div className="col-md-6  p-0">
                        <div className="main_container_dashboard_col2">
                            <div className="card__row card_row1">
                                {/* <div className="parent__previous__classes"> */}
                                    <SmallCard
                                        mainHeading={'Previous '}
                                        subHeading1={'Purchased'}
                                        subHeading2={'57'}
                                        linkurl={"/parent/previous-classes"} />
                                {/* </div> */}
                                {/* <div className="parent__whiteboard"> */}
                                    <SmallCard
                                        mainHeading={'Whiteboard'}
                                        subHeading1={'Try out what the class '}
                                        subHeading2={'will be like.'}
                                    />
                                {/* </div> */}
                            </div>

                        </div>
                    </div>
                </div>

                {/* <ParentIndividualTutorBanner/> */}

                {/* Reusable Component  */}
                <div className="row wallet__date__container">
                {/* <Link style={{color:'white',textDecoration:'none'}} to="parent/wallet"> */}
                    <div className="col-md-6  p-0">
                        <div className="main_container_dashboard_col3">
                            <div className="card__row card_row3">
                                <SmallCard linkurl="/parent/wallet" mainHeading={'Wallet'} subHeading1={'Balance'} subHeading2={'AED320'} />
                            </div>

                        </div>
                    </div>
                {/* </Link> */}

                    {/* start */}
                    <CalendarComponentParent
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
                    <div className="horizontal__line__parent">
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0" >
                            <Grid container className={classes.dateLeftContainer}>
                                <Grid item sm={6}>
                                  <Typography className={classes.dayText}>Your Day</Typography>
                                </Grid>
                                <Grid item sm={6} className={classes.timeRightContainer}>
                                     <Typography className={classes.time}>9:21 am</Typography>
                                </Grid>
                            </Grid>
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
        </div>
    )
}
