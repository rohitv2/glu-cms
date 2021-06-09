import React, { FC, memo } from 'react';
import Div100vh from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextLeftIcon from '../Typographies/TextLeftIcon';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
    },
    title: {
        fontSize: '7.5rem',
        lineHeight: '7.5rem',
    },
});

export interface IWhiteBannerCarousal {
    subject: string;
    tutorsCount: number;
    classesCount: number;
}

const IndividualSubjectBannerCard: FC<IWhiteBannerCarousal> = ({ subject, tutorsCount, classesCount }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            component={Div100vh}
            className={classes.root}
        >
            <Grid container direction="column" justify="center" alignItems="center">
                <Typography className={classes.title}>{subject}</Typography>
                <Typography className={classes.title}>We have {tutorsCount} Tutors</Typography>
                <Typography className={classes.title}>and {classesCount} Classes</Typography>
                <TextLeftIcon icon="icon-Favourites_Nav" text="Favourite" />
            </Grid>
        </Grid>
    );
};

export default memo(IndividualSubjectBannerCard);
