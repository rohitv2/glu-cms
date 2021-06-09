import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import LeftGrid from './LeftGrid';
import RightGrid from './RightGrid';
import { useDispatch } from 'react-redux';
import useUpcomingClassCalendar from '../../Hooks/tutor/useUpcomingClassCalendar';
import useMenuList from '../../Hooks/useMenuList';
import { handleCalenderFilter } from '../../Helper/handleCalenderFilter';

const useStyles = makeStyles({
    body: {
        padding: '3rem 3.125rem 0 3.125rem',
    },
});

const Index = () => {
    const classes = useStyles();
    const menu = useMenuList('tutor');
    const dispatch = useDispatch();
    const totalClasses = useUpcomingClassCalendar();
    const [availabeClasses, setAvailableClasses] = useState<any>([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    localStorage.setItem("fromCalendar", "true")

    useEffect(() => {
        if (totalClasses) {
            setAvailableClasses(totalClasses);
        }
    }, [totalClasses]);

    const handleDate = (date: Date) => {
        setSelectedDate(date);
        handleCalenderFilter(date, dispatch);
    };

    return (
        <NavigationMenu
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            background="primary"
        >
            <div className={classes.body}>
                <Grid container spacing={4}>
                    <LeftGrid
                        getDate={handleDate}
                        dayStartAt={(totalClasses[0] as any)?.start ? (totalClasses[0] as any).start : 'N/A'}
                    />
                    <RightGrid totalClasses={availabeClasses} selectedDate={selectedDate} />
                </Grid>
            </div>
            <div className="commonFooter">
                <PageFooter />
            </div>
        </NavigationMenu>
    );
};

export default Index;
