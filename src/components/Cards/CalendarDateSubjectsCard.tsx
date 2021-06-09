import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import DateSubjectCard from './DateSubjectCard';
import { CalendarDateSubjectsCardElement, DateSubjectCardElement, TeacherLink } from './types';
import ColumnsContainer from '../../Containers/ColumnsContainer';

const useStyles = makeStyles({
    root: {
        padding: ({ padding }: any) => (padding ? '6.25rem 3.125rem' : 0),
        paddingBottom: ({ paddingBottom }: any) => (paddingBottom ? '6.25rem' : 0),
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
    },
    card: {
        paddingBottom: '4.6875rem',
        paddingTop: '2.1875rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:first-child': {
            paddingTop: 0
        },
        '&:last-child': {
            borderBottom: 0,
        },
    },
});

interface ICalendarDateSubjectsCard extends CalendarDateSubjectsCardElement, TeacherLink {
    title?: string;
    date?: string;
    time?: string;
    cards: DateSubjectCardElement[];
    padding?: boolean;
    paddingBottom?: boolean;
    cardsContainerPaddingBig?: boolean;
    background?: 'primary' | 'secondary';
}

const CalendarDateSubjectsCard: FC<ICalendarDateSubjectsCard> = ({
    title = 'Calendar',
    date,
    time,
    cards,
    padding,
    paddingBottom,
    cardsContainerPaddingBig,
    background,
    teacherLink,
}) => {
    const classes = useStyles({ padding, paddingBottom, background, cardsContainerPaddingBig });
    return (
        <Grid container className={classes.root}>
            <ColumnsContainer
                leftContent={
                    <Grid container>
                        <Grid container item xs={6}>
                            <TitlePrimary>{title}</TitlePrimary>
                        </Grid>
                        <Grid container justify="space-between" item xs={6}>
                            <TitlePrimary>{date}</TitlePrimary>
                            {time && <TitlePrimary>{time}</TitlePrimary>}
                        </Grid>
                    </Grid>
                }
                rightContent={
                    <Grid container direction="column">
                        {cards.map((card, index) => (
                            <Grid container className={classes.card} key={index}>
                                <DateSubjectCard {...card} teacherLink={teacherLink} />
                            </Grid>
                        ))}
                    </Grid>
                }
            />
        </Grid>
    );
};

CalendarDateSubjectsCard.defaultProps = {
    cards: [],
    padding: true,
    paddingBottom: true,
    background: 'primary',
};

export default CalendarDateSubjectsCard;
