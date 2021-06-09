import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ClassesCarousel from './ClassesCarousel';
import WhiteCard from '../../../../components/Cards/WhiteCard';
import ProfileCard from '../../../../components/Cards/ProfileCard';
import CardsGridContainer from '../../../CardsGridContainer';
import CalendarDateSubjectsCard from '../../../../components/Cards/CalendarDateSubjectsCard';
import { DashboardPersonal, UserType } from '../../types';
import { getCurrentTime } from '../../../../Helper/date';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
        '&:last-child': {
            marginBottom: 0,
        },
    },
    upcomingClassCardTitle: {
        marginBottom: '5rem',
    },
    calendarCardTitle: {
        marginBottom: '10.875rem',
    },
});

interface IPersonal extends DashboardPersonal, UserType {}

const Personal: FC<IPersonal> = ({
    userType,
    previousClasses,
    upcomingClasses,
    profile,
    dateSubjectCards,
    carouselCards,
}) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <CardsGridContainer background="secondary" paddingTop={false}>
                <Grid container className={classes.container}>
                    <WhiteCard
                        size={6}
                        title={'Upcoming\nClasses'}
                        titleRightLink="See upcoming"
                        titleRightLinkTo={`/${userType}/profile/upcoming-classes`}
                        content={<ClassesCarousel data={carouselCards} teacherLink={`/${userType}/tutor`} />}
                        titleClassName={classes.upcomingClassCardTitle}
                    />
                    <WhiteCard
                        size={3}
                        title="Previous Classes"
                        description="Purchased"
                        isLoading={previousClasses.isLoading}
                        value={previousClasses.count}
                        titleLink={`/${userType}/profile/recorded-classes`}
                    />
                    <WhiteCard size={3} title="Whiteboard" description={'Try out what the class\nwill be like'} />
                </Grid>
                <Grid container className={classes.container} justify="space-between">
                    <WhiteCard
                        size={3}
                        title="Wallet"
                        description="Balance"
                        value="AED320"
                        titleLink={`/${userType}/wallet`}
                    />
                    <WhiteCard
                        size={6}
                        bigTitle
                        title={'Thursday 30th\nJuly\n2020'}
                        titleRightLink="See calendar"
                        titleRightLinkTo={`/${userType}/calendar`}
                        description="Upcoming classes"
                        value={upcomingClasses.count}
                        isLoading={upcomingClasses.isLoading}
                        titleClassName={classes.calendarCardTitle}
                    />
                </Grid>
            </CardsGridContainer>
            <ProfileCard seeLink={`/${userType}/profile`} editLink={`/${userType}/profile/edit`} {...profile} />
            <CardsGridContainer background="secondary">
                <CalendarDateSubjectsCard
                    background="secondary"
                    padding={false}
                    paddingBottom={false}
                    title="Your Day"
                    time={getCurrentTime()}
                    cards={dateSubjectCards}
                    cardsContainerPaddingBig
                    teacherLink={`/${userType}/tutor`}
                />
            </CardsGridContainer>
        </Grid>
    );
};

export default Personal;
