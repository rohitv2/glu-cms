import React, { FC, useState, ReactNode, useMemo } from 'react';
import { Typography} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DateAndResources from './DateAndResources';
import NavigationMenu from '../NavigationMenu';
import LeftDrawerMenuContent from '../../Containers/Menus/LeftDrawerMenuContent';
import MadeByFooter from '../../Views/Footer/MadeBy';
import PageFooter from '../PageFooter';
import { createMenuList } from '../../Helper/menus';

const useStyles = makeStyles(() => ({
    container: {
        width: "100vw",
        height: "32.375rem",
        backgroundColor: "#F7F7F7",
        fontFamily: 'CircularXXWeb-Book',
        margin: '0rem',
        paddingLeft: '3.125rem',
        paddingRight: '3.062rem',
    },
    elementsContainer: {
        height: "90vh",
        marginTop: "9.25rem",
    },
    left:{
        color: "black",
        fontSize: "2.625rem",
        lineHeight: "2.812rem",
    },
    right:{
        color: "black",
        fontSize: "5rem",
        lineHeight: "5rem",
    }
}));

const menu = [
    { link: '/parent/home', name: 'Home' },
    { link: '/parent/dashboard', name: 'Dashboard' },
    { link: '', name: 'Subject' },
    { link: '', name: 'Messages' },
]; 

const ParentIndividualHomeworkBanner: FC = () => {
    const classes = useStyles();

    const menuList = useMemo(() => createMenuList("parent"), ["parent"])

    return (
        <NavigationMenu absolute background="transparent" menuList={menuList} TopDrawerMenuComponent  LeftDrawerMenuComponent={<LeftDrawerMenuContent userType="parent" />}>
            <Grid container className={classes.container}>
                <Grid container className={classes.elementsContainer}>
                    <Grid item container xs={6}>
                        <Typography className={classes.left}>Mr J Cole</Typography>
                        <PlayCircleFilledIcon style={{ fontSize: "3rem", marginLeft: "1.25rem", color:"#2267FF" }} />
                    </Grid>

                    <Grid item container xs={6}>
                        <Typography className={classes.right}>Maths. <br/>  Introducing Advanced Linear Alegbra</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <DateAndResources/>
            <PageFooter/>
       </NavigationMenu>
    );
};

export default ParentIndividualHomeworkBanner;
