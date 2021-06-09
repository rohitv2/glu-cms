import React, { FC } from 'react';
import ColumnsContainer from '../../Containers/ColumnsContainer';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../Typographies/TitlePrimary';
import { getCurrentTime } from '../../Helper/date';
import IndividualSubjectCard from './IndividualSubjectCard';
import { IndividualSubjectCardElement, TeacherLink } from './types';

interface ICalendarIndividualSubjects extends TeacherLink {
    data: IndividualSubjectCardElement[];
}

const CalendarIndividualSubjects: FC<ICalendarIndividualSubjects> = ({ data, teacherLink }) => {
    return (
        <ColumnsContainer
            leftContent={
                <Grid container direction="column">
                    <Grid container justify="space-between">
                        <TitlePrimary>Your Morning</TitlePrimary>
                        <TitlePrimary>{getCurrentTime()}</TitlePrimary>
                    </Grid>
                </Grid>
            }
            rightContent={
                <Grid container direction="column">
                    {data.map((card) => (
                        <IndividualSubjectCard
                            {...card}
                            key={card.id}
                            teacherLink={teacherLink + `/${card.teacherId}`}
                        />
                    ))}
                </Grid>
            }
        />
    );
};

CalendarIndividualSubjects.defaultProps = {
    data: [],
};

export default CalendarIndividualSubjects;
