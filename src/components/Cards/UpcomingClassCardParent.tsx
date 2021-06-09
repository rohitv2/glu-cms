import React, { FC, memo } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../Typographies/TitlePrimary';
import AspectRatioImgCard from './AspectRationImgCard';
import DateSubjectCard from './DateSubjectCard';
import IconCircle from '../Icons/IconCircle';
import { UpcomingClassCardElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: '9.375rem 3.125rem',
        background: '#F7F7F7',
    },
    content: {
        paddingLeft: '10.4375rem',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    iconAdd: {
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
});

interface IUpcomingClassCard extends UpcomingClassCardElement {}

const UpcomingClassCard: FC<IUpcomingClassCard> = ({
    img,
    date,
    startTime,
    endTime,
    description,
    name,
    subject,
    subTitle,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={5}>
                <AspectRatioImgCard
                    img={img}
                    ratio="76%"
                />
            </Grid>
            <Grid container item xs={7} className={classes.content}>
                <Grid container direction="column" justify="space-between">
                    <Grid container>
                        <TitlePrimary className={classes.title}>
                            <IconCircle />
                            Upcoming Class
                        </TitlePrimary>
                    </Grid>
                    <Grid container>
                        <Grid container item xs={10}>
                            <DateSubjectCard
                                date={date}
                                startTime={startTime}
                                endTime={endTime}
                                subject={subject}
                                description={description}
                                name={name}
                                subTitle={subTitle}
                            />
                        </Grid>
                        <Grid container justify="flex-end" item xs={2}>
                            {/* <i className={classNames('icon-Add', classes.iconAdd)} /> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(UpcomingClassCard);
