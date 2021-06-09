import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { makeStyles } from '@material-ui/core';
import Header from './Header';
import UpcomingClasses from './UpcomingClass';
import PrevClasses from './PreviousClass';
import PageFooter from './../../components/PageFooter';
import useUpcomingClass from '../../Hooks/tutor/useUpcomingClass';
import useRecordClasses from '../../Hooks/tutor/useRecordClasses';
import useMenuList from '../../Hooks/useMenuList';
import moment from 'moment';
import { useUpcomingClassesFilter } from '../../Hooks/tutor/useUpcomingClassesFilter';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#F7F7F7',
    },
    head: {
        padding: '0 3.125rem',
        backgroundColor: '#F7F7F7',
        paddingTop: '3.75rem',
    },
    body1: {
        padding: '0 3.125rem',
    },
    body2: {
        backgroundColor: '#F7F7F7',
        padding: '0 3.125rem',
        marginTop: '149px',
    },

    headerText: {
        fontSize: '2.265rem',
    },
});

function filterScheduledOn({ scheduledOn }: any) {
    return moment(scheduledOn, 'DD/MM/YY').diff(moment()) >= 0;
}

const TutorUpcomingClass = () => {
    const classes = useStyles();
    const menu = useMenuList('tutor');
    const { recordClass } = useRecordClasses(true);
    const totalUpcomingClasses = useUpcomingClass();

    const filteredUpcomingClasses = useUpcomingClassesFilter(true);

    return (
        <div>
            <NavigationMenu
                menuList={menu}
                showBurgerNav={'hide'}
                tutorOptions={'show'}
                reverseButtons={'yes'}
                background={'secondary'}
            >
                <div className={classes.head}>
                    <Header nextClass={totalUpcomingClasses.length ? filteredUpcomingClasses[0] : null} />
                </div>
                <div className={classes.body1}>
                    <UpcomingClasses btnTxt="Set class" totalClasses={filteredUpcomingClasses} />
                </div>
                <div className={classes.body2}>
                    <PrevClasses previousClasses={recordClass} />
                </div>
                <div className={classes.footer}>
                    <PageFooter />
                </div>
            </NavigationMenu>
        </div>
    );
};

export default TutorUpcomingClass;
