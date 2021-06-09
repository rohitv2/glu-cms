import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import BarChart from '../Charts/BarChart';
import Accordion from './Accordion';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    accordionRoot: {
        width: 'inherit',
        boxShadow: 'none',
    },
    accordionSummary: {
        width: 'inherit',
        '& .MuiAccordionSummary-content': {
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            padding: '2.25rem 0',
        },
    },
    accordionDetails: {
        paddingTop: '1.25rem',
        paddingBottom: '5rem',
    },
    detailsTitleContainer: {
        marginBottom: '3.6875rem',
    },
    detailsInfoTitle: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '1.1875rem',
    },
    detailsInfoText: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        color: '#5F5F5F',
        marginBottom: '2.1875rem',
    },
    readMoreText: {
        color: colors.primary,
        cursor: 'pointer',
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '4.6875rem',
    },
});

interface IExamResultAccordion {
    title: string;
    date: string;
    description: string;
    notesTitle: string;
    notesText: string;
}

const ExamResultAccordion: FC<IExamResultAccordion> = ({ title, date, description, notesTitle, notesText }) => {
    const classes = useStyles();
    return (
        <Accordion
            title={title}
            DetailsComponent={
                <Grid container direction="column">
                    <Grid container className={classes.detailsTitleContainer}>
                        <Grid container direction="column" item xs={4}>
                            <TitlePrimary>Date</TitlePrimary>
                            <TitlePrimary>{date}</TitlePrimary>
                        </Grid>
                        <Grid container direction="column" item xs={8}>
                            <TitlePrimary>Tutor</TitlePrimary>
                            <TitlePrimary>{description}</TitlePrimary>
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        <Typography className={classes.detailsInfoTitle}>{notesTitle}</Typography>
                        <Typography className={classes.detailsInfoText}>{notesText}</Typography>
                        <Typography className={classes.readMoreText}>Read more</Typography>
                    </Grid>
                    <Grid>
                        <BarChart
                            chartWidth={410}
                            chartHeight={170}
                            data={[
                                {
                                    data: [85],
                                    color: colors.primary,
                                },
                                {
                                    data: [64],
                                    color: colors.lightPrimary,
                                },
                            ]}
                        />
                    </Grid>
                </Grid>
            }
        />
    );
};

export default memo(ExamResultAccordion);
