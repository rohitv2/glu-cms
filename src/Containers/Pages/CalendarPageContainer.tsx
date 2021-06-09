import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { UserType } from './types';
import NavigationMenu from '../../components/NavigationMenu';
import useMenuList, { useMenuOptions } from '../../Hooks/useMenuList';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import ColumnsContainer from '../ColumnsContainer';
import FullHeightContainer from '../FullHeightContainer';
import PageFooter from '../../components/PageFooter';
import FormControlCalendar from '../../components/Form/FormControlCalendar';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import TitleBig from '../../components/Typographies/TitleBig';
import CalendarSubjectCard from '../../components/Cards/CalendarSubjectCard';
import { cards } from '../../data/calendar';

const useStyles = makeStyles({
    leftContainer: {
    },
    titleContainer: {
        marginBottom: '1.875rem'
    }
});

interface ICalendarPageContainer extends UserType {}

const CalendarPageContainer: FC<ICalendarPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    const menuOptions = useMenuOptions(userType);
    const classes = useStyles();
    return (
        <NavigationMenu
            absolute
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
            {...menuOptions}
        >
            <FullHeightContainer container direction="column" justify="space-between">
                <CardsGridContainer paddingBottomVariant={2}>
                    <ColumnsContainer
                        topBorder={false}
                        leftContent={
                            <Grid container className={classes.leftContainer}>
                                <Grid container item xs={6}>
                                    <FormControlCalendar />
                                </Grid>
                                <Grid container justify="flex-end" item xs={6}>
                                    <TitlePrimary>9.21am</TitlePrimary>
                                </Grid>
                            </Grid>
                        }
                        rightContent={<Grid container>
                            <Grid container direction="column">
                                <Grid container direction="column" className={classes.titleContainer}>
                                    <TitleBig>24th July 2020</TitleBig>
                                    <TitleBig>Friday</TitleBig>
                                </Grid>
                                <Grid container direction="column">
                                    {cards.map((card, index) => (
                                        <CalendarSubjectCard key={index} expanded={index === 0} {...card} />
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>}
                    />
                </CardsGridContainer>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

export default CalendarPageContainer;
