import React, { FC, memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Accordion from './Accordion';
import TitlePrimary from '../Typographies/TitlePrimary';
import ButtonPrimary from '../Button/ButtonPrimary';
import { WalletActivityAccordionElement } from './types';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '2.5rem',
    },
    descriptionContainer: {
        marginBottom: '0.875rem',
    },
    description: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    button: {
        color: '#5F5F5F',
        fontSize: '1.25rem',
        lintHeight: '1.5625rem',
    },
});

interface IWalletActivityAccordion extends WalletActivityAccordionElement {}

const WalletActivityAccordion: FC<IWalletActivityAccordion> = ({
    title,
    value,
    date,
    time,
    description,
    subject,
    name,
}) => {
    const classes = useStyles();
    return (
        <Accordion
            title={title}
            SummaryContentComponent={<TitlePrimary>{value}</TitlePrimary>}
            DetailsComponent={
                <Grid container direction="column">
                    <Grid container className={classes.titleContainer}>
                        <Grid container direction="column" item xs={4}>
                            <TitlePrimary>Date</TitlePrimary>
                            <TitlePrimary>{date}</TitlePrimary>
                        </Grid>
                        <Grid container direction="column" item xs={8}>
                            <TitlePrimary>Time</TitlePrimary>
                            <TitlePrimary>{time}</TitlePrimary>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" className={classes.descriptionContainer}>
                        <Typography className={classes.description}>{description}</Typography>
                        <Typography className={classes.description}>
                            {subject}, {name}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <ButtonPrimary className={classes.button}>Refund</ButtonPrimary>
                    </Grid>
                </Grid>
            }
        />
    );
};

export default memo(WalletActivityAccordion);
