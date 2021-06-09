import React, { FC } from 'react';
import TextPrimary from '../Typographies/TextPrimary';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ExperienceViewCardElement } from './types';

const useStyles = makeStyles({
    root: {
        marginBottom: '1.875rem',
        '&:last-child': {
            marginBottom: 0
        }
    }
})

interface IExperienceViewCard extends ExperienceViewCardElement {}

const ExperienceViewCard: FC<IExperienceViewCard> = ({ startDate, endDate, title, subject, position }) => {
    const classes = useStyles()
    return (
        <Grid container direction="column" className={classes.root}>
            <TextPrimary>{startDate}-{endDate}</TextPrimary>
            <TextPrimary>{title}</TextPrimary>
            <TextPrimary>{subject}</TextPrimary>
            <TextPrimary>{position}</TextPrimary>
        </Grid>
    )
}

export default ExperienceViewCard
