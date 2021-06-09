import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { makeStyles } from '@material-ui/core';
import Header from './Header';
import PageFooter from './../../components/PageFooter';
import UpcomingClass from '../TutorUpcomingClass/UpcomingClass';
import useMenuList from '../../Hooks/useMenuList';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#F7F7F7',
    },
    head: {
        padding: '0 3.125rem',
        paddingTop: '3.75rem',
        backgroundColor: '#F7F7F7',
        paddingBottom: '9.06rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    body: {
        padding: '0 3.125rem',
    },
    body2: {
        backgroundColor: '#F7F7F7',
        padding: '0 3.125rem',
    },

    headerText: {
        fontSize: '2.265rem',
        fontFamily: 'CircularXXWeb-Book',
    },
});

const TutorExtraCurr = () => {
    const classes = useStyles();
    const menu = useMenuList('tutor');
    return (
        <div>
            <NavigationMenu
                menuList={menu}
                showBurgerNav={'hide'}
                tutorOptions={'show'}
                reverseButtons={'yes'}
                background="secondary"
            >
                <div className={classes.head}>
                    <Header />
                </div>
                <div className={classes.body}>
                    <UpcomingClass totalClasses={[]} btnTxt="Create" />
                    <div style={{ marginTop: '4.625rem' }}>Showing 16 of 16</div>
                </div>
                <div className="commonFooter">
                    <PageFooter />
                </div>
            </NavigationMenu>
        </div>
    );
};

export default TutorExtraCurr;
