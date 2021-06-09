import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import WhiteCard from '../../../../components/Cards/WhiteCard';
import LineChart from '../../../../components/Charts/LineChart';
import ProfileCard from '../../../../components/Cards/ProfileCard';
import CardsGridContainer from '../../../CardsGridContainer';
import { DashboardSchool, UserType } from '../../types';
import CalendarIndividualSubjects from '../../../../components/Cards/CalendarIndividualSubjects';
import { colors } from '../../../../Styles/colors';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
    },
    calendarCardTitle: {
        marginBottom: '10.875rem',
    },
});

interface ISchool extends DashboardSchool, UserType {}

const School: FC<ISchool> = ({ userType, homework, upcomingClasses, profile, individualSubjects, recommended }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container direction="column">
                <CardsGridContainer background="secondary" paddingTop={false}>
                    <Grid container className={classes.container}>
                        <WhiteCard
                            size={6}
                            title={'Class Reports\nMar-Aug'}
                            titleRightLink="See reports"
                            titleRightLinkTo="/students/reports"
                            content={
                                <LineChart
                                    data={[
                                        {
                                            name: 'Your average',
                                            data: [0, 100, 70, 150, 100, 130],
                                            color: colors.primary,
                                            dashStyle: 'Solid',
                                        },
                                        {
                                            name: 'Student average',
                                            data: [30, 60, 50, 90, 20, 10],
                                            color: colors.lightPrimary,
                                            dashStyle: 'Solid',
                                        },
                                    ]}
                                />
                            }
                        />
                        <WhiteCard size={3} title="School Timetable" description="Classes" value="5" />
                        <WhiteCard
                            size={3}
                            title="School Info"
                            titleLink={`/${userType}/school/info`}
                            description="Secondary"
                            value="Dubai, UAE"
                        />
                    </Grid>
                    <Grid container className={classes.container}>
                        <WhiteCard
                            size={3}
                            title="Homework"
                            description="Assignment"
                            titleLink={`/${userType}/homework`}
                            value={homework.count}
                            isLoading={homework.isLoading}
                        />
                        <WhiteCard
                            size={3}
                            title="Recommended"
                            titleLink={`/${userType}/recommended`}
                            description="Total"
                            value={recommended.count}
                            isLoading={recommended.isLoading}
                        />
                        <WhiteCard
                            size={6}
                            bigTitle
                            title={'Thursday 30th\nJuly\n2020'}
                            titleRightLink="See calendar"
                            titleRightLinkTo={`/${userType}/calendar`}
                            description="Upcoming classes"
                            isLoading={upcomingClasses.isLoading}
                            value={upcomingClasses.count}
                            titleClassName={classes.calendarCardTitle}
                        />
                    </Grid>
                    <Grid container justify="flex-end" className={classes.container}>
                        <WhiteCard
                            size={3}
                            title="Whiteboard"
                            description={'Try out what the class\nwill be like'}
                            forcePadding
                        />
                        <WhiteCard
                            size={3}
                            title="School Bus Tracking"
                            description={'Try out what the class\nwill be like'}
                        />
                    </Grid>
                </CardsGridContainer>
            </Grid>
            <ProfileCard seeLink={`/${userType}/profile`} editLink={`/${userType}/profile/edit`} {...profile} />
            <CardsGridContainer background="secondary">
                <CalendarIndividualSubjects data={individualSubjects} teacherLink={`/${userType}/tutor`} />
            </CardsGridContainer>
        </Grid>
    );
};

export default School;
