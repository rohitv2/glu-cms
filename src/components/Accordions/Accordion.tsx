import React, { ReactNode, FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddIcon from '@material-ui/icons/Add';
import TitlePrimary from '../Typographies/TitlePrimary';

const useStyles = makeStyles(({ transitions }) => ({
    root: {
        width: 'inherit',
        boxShadow: 'none',
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        '&.Mui-expanded': {
            margin: 0
        },
        '&:first-child': {
            borderTop: 0
        }
    },
    summary: {
        width: 'inherit',
        '& .MuiAccordionSummary-root': {
            padding: 0,
        },
        '& .MuiAccordionSummary-content': {
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            padding: '2.25rem 0',
        },
    },
    summaryRoot: {
        padding: 0,
    },
    summaryExpanded: {
        '& $expandIcon': {
            transform: 'rotate(45deg)',
        },
    },
    summarySection: {
        flexGrow: 1,
    },
    details: {
        padding: '1rem 0 0 0',
        paddingBottom: '5rem',
    },
    expandIcon: {
        transition: transitions.create(['transform'], { duration: 250 }),
    },
    title: {
        whiteSpace: 'nowrap'
    }
}));

interface IAccordion {
    title: string;
    SummaryContentComponent?: ReactNode;
    DetailsComponent: ReactNode;
}

const Accordion: FC<IAccordion> = ({ title, SummaryContentComponent, DetailsComponent }) => {
    const classes = useStyles();
    return (
        <MuiAccordion square className={classes.root}>
            <AccordionSummary
                className={classes.summary}
                classes={{ root: classes.summaryRoot, expanded: classes.summaryExpanded }}
            >
                <Grid container className={classes.summarySection}>
                    <TitlePrimary className={classes.title}>{title}</TitlePrimary>
                </Grid>
                {SummaryContentComponent && (
                    <Grid container className={classes.summarySection}>
                        {SummaryContentComponent}
                    </Grid>
                )}
                <Grid container justify="flex-end" className={classes.summarySection}>
                    <AddIcon className={classes.expandIcon} />
                </Grid>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.details }}>{DetailsComponent}</AccordionDetails>
        </MuiAccordion>
    );
};

export default memo(Accordion);
