import React, { FC, memo } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        '& .react-audio-player ': {
            width: '100%',
        },
    },
    label: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        marginBottom: '1.5625rem',
    },
});

interface IFormControlAudio {
    title: string;
}

const FormControlAudio: FC<IFormControlAudio> = ({ title }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Typography className={classes.label}>{title}</Typography>
            <ReactAudioPlayer src="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg" controls />
        </Grid>
    );
};

export default memo(FormControlAudio);
