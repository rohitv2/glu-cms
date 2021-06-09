import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, Container, Divider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import TotalClasses from './TotalClasses';
import UpcomingClasses from './UpcomingClasses';
import TutorListMiddle from './TutorListMiddle';
import UpcomingClassesPartSec from './UpcomingClassesPartSec';
import OutlineButton from '../../components/Button/OutlineButton';
import Footer from '../Footer/Footer';
import TutorListBottom from './TutorListBottom';
import { useHistory } from 'react-router';
import { parentMenus } from '../../Helper/parentMenus';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddIcon from '@material-ui/icons/Add';
import UpcomingClassCardParent from '../../components/Cards/UpcomingClassCardParent';

function Classes() {
    return (
        <>
            <TotalClasses />
            <UpcomingClassCardParent
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608149/gluschool/women_x9nbtk.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                subject="English."
                description="How to structure"
                name="Jeff Lee"
                subTitle="AED200"
            />
            <TutorListMiddle />
            {/* <UpcomingClassesPartSec /> */}
            <UpcomingClassCardParent
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607715/gluschool/penpadgirl_hclxwv.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                subject="English."
                description="How to structure"
                name="Jeff Lee"
                subTitle="AED200"
            />
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
        </>
    )
}

export default Classes
