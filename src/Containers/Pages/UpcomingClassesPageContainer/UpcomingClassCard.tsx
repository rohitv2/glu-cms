import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import AspectRatioImgCard from '../../../components/Cards/AspectRationImgCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DateSubjectCard from '../../../components/Cards/DateSubjectCard';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import { UpcomingClassCardElement } from './types';
import { TeacherLink } from '../../../components/Cards/types';

const useStyles = makeStyles({
    root: {
        padding: '3.125rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
        },
    },
    imgContainer: {
        paddingRight: '9.35rem',
    },
    dateCardContainer: {
        marginBottom: ({ text }: any) => (text ? '4.1875rem' : 0),
    },
    text: {
        color: '#5F5F5F',
    },
});

interface IUpcomingClassCard extends UpcomingClassCardElement, TeacherLink {
    link: string;
}

const UpcomingClassCard: FC<IUpcomingClassCard> = ({ text, img, teacherLink, link, ...dateSubjectCard }) => {
    const classes = useStyles({ text });
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={4} className={classes.imgContainer}>
                <AspectRatioImgCard
                    ratio="76%"
                    img={img}
                />
            </Grid>
            <Grid container item xs={8}>
                <Grid container className={classes.dateCardContainer}>
                    <DateSubjectCard {...dateSubjectCard} teacherLink={teacherLink} link={link} />
                </Grid>
                <TextPrimary className={classes.text}>{text}</TextPrimary>
            </Grid>
        </Grid>
    );
};

export default UpcomingClassCard;
