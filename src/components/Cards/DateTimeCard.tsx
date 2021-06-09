import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../Typographies/TitlePrimary';
import { DateTimeCardElement } from './types';

interface IDateTimeCard extends DateTimeCardElement {}

const DateTimeCard: FC<IDateTimeCard> = ({ date, startTime, endTime }) => {
    return (
        <Grid container direction="column">
            <TitlePrimary>{date}</TitlePrimary>
            {startTime && <TitlePrimary>{startTime}-</TitlePrimary>}
            {endTime && <TitlePrimary>{endTime}</TitlePrimary>}
        </Grid>
    )
}

export default DateTimeCard
