import React, { FC } from 'react';
import Accordion from '../../../components/Accordions/Accordion';
import Grid from '@material-ui/core/Grid';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    description: {
        color: '#5F5F5F'
    }
})

interface IFAQAccordion {
    title: string;
    description: string;
}

const FAQAccordion: FC<IFAQAccordion> = ({ title, description }) => {
    const classes = useStyles()
    return (
        <Accordion
            title={title}
            DetailsComponent={
                <Grid container>
                    <TextPrimary className={classes.description}>{description}</TextPrimary>
                </Grid>
            }
        />
    );
};

export default FAQAccordion;
