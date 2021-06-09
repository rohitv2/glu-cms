import React, { FC, memo } from 'react';
import Div100vh from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import { BannerCardElement } from './types';

const useStyles = makeStyles({
    root: {
        background: ({ img }: any) => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img}) center / cover`,
        padding: '0 3.125rem',
        color: '#fff',
    },
    content: {
        paddingBottom: '12.5rem',
    },
    title: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    time: {
        fontSize: '1.5625rem',
        lineHeight: '2.75rem',
        textIndent: '0.3125rem'
    }
});

export interface IndividualSubjectBannerCardElement {
    img?: string;
    name?: string;
    subject?: string;
    description?: string;
    time?: string;
}

const IndividualSubjectBannerCard: FC<IndividualSubjectBannerCardElement> = ({ img, name, subject, time, description }) => {
    const classes = useStyles({ img });
    return (
        <Grid container direction="column" justify="flex-end" component={Div100vh} className={classes.root}>
            <Grid container justify="flex-end">
                <Grid item xs={6}>
                    <Typography className={classes.time}>{time}</Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.content}>
                <Grid container direction="column" item xs={6}>
                    <Typography variant="h2" className={classes.title}>
                        {name}
                    </Typography>
                </Grid>
                <Grid container direction="column" item xs={6}>
                    <Typography variant="h2" className={classes.title}>
                        {subject}
                    </Typography>
                    <Typography variant="h2" className={classes.title}>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(IndividualSubjectBannerCard);
