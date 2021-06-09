import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import AspectRatioImgCard from './AspectRationImgCard';
import TextPrimary from '../Typographies/TextPrimary';
import IconCircle from '../Icons/IconCircle';
import { CalendarSubjectCardElement } from './types';
import ButtonPrimary from '../Button/ButtonPrimary';

const useStyles = makeStyles({
    root: {
        padding: '3.125rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
        },
    },
    imgContainer: {
        width: ({ expanded }: any) => expanded ? '18.75rem' : '8.75rem',
    },
    infoContainer: {
        position: 'relative',
        maxWidth: ({ expanded }: any) => expanded ? 'calc(100% - 18.75rem)' : 'calc(100% - 8.75rem)',
        flexGrow: 1,
        paddingLeft: ({ expanded }: any) => expanded ? '3.125rem' : '1.5625rem',
    },
    time: {
        fontSize: ({ expanded }: any) => expanded ? '2.625rem' : '',
        lineHeight: ({ expanded }: any) => expanded ? '' : '1.0rem',
    },
    button: {
        position: 'absolute',
        right: 0,
        top: 0,
        fontSize: '1.25rem',
        lineHeight: '1rem'
    }
});

interface ICalendarSubjectCard extends CalendarSubjectCardElement {
    expanded?: boolean;
}

const CalendarSubjectCard: FC<ICalendarSubjectCard> = ({ img, time, description, name, subject, expanded }) => {
    const classes = useStyles({ expanded });
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.imgContainer}>
                <AspectRatioImgCard ratio="75%" img={img} />
            </Grid>
            <Grid container className={classes.infoContainer}>
                {expanded && <ButtonPrimary color="secondary" className={classes.button}>Edit</ButtonPrimary>}
                <Grid container direction="column" justify="space-between">
                    <Grid container alignItems="center">
                        <IconCircle small />
                        <TextPrimary className={classes.time}>{time}</TextPrimary>
                    </Grid>
                    <Grid container direction="column">
                        <TextPrimary>{description}</TextPrimary>
                        <TextPrimary>
                            {subject}, {name}
                        </TextPrimary>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CalendarSubjectCard;
