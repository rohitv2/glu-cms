import React from 'react';
import { Grid, Typography, makeStyles, TextareaAutosize, Button, useMediaQuery } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SmallButton from './SmallButton';
import ReusableTextArea from '../../components/ReusableTextArea';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
    headingSecondary: {
        fontSize: '2.625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    small: { fontSize: '1.5625rem', fontFamily: 'CircularXXWeb-Book' },
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3rem, #ccc 3.0625rem, white 3.0625rem)',
        lineHeight: '3rem',
        padding: '0rem 1rem',
        border: 'none',
        width: '90%',
        height: '15.385rem',
        color: '#505050',
        fontSize: '1.5rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    topMarg: {
        marginTop: '5rem',
        marginBottom: '2rem',
    },
    confirm: {
        marginTop: '6rem',
    },
    submit: {
        padding: '0.3rem 0rem',
        fontSize: '1.25rem',
        width: '9.375rem',
        border: '1.2px solid #A8A8A8',
        marginRight: '0.5rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    cancel: {
        color: 'gray',
    },
    leftGrid: {
        borderRight: '1px solid lightgrey',
        boxSizing: 'border-box',
        width: '48.5% ',
    },
    mainGrid: {
        paddingBottom: '0',
    },
    rightGrid: {
        width: '48.5% ',
    },
    recommended: {
        transform: 'translateY(28rem)',
    },
});

const ClassReviewRating = () => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            {isSmallScreen ? (
                <Grid container className={classes.mainGrid} justify="space-between">
                    <Grid item xs={12}>
                        <Typography className={classes.headingSecondary}>Tutor Rating</Typography>
                        <Typography className={`${classes.headingSecondary} ${classes.recommended}`}>
                            Recommended
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography className={classes.small}>Feedback</Typography>
                        <TextareaAutosize rowsMin={6} className={classes.textareaClass} />
                        <Typography style={{ marginTop: '41.5px' }} className={classes.small}>
                            Stars
                        </Typography>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <hr className={classes.topMarg} />
                        <Typography className={classes.small}>Would you recommend the Tutor?</Typography>
                        <SmallButton label="Yes" />
                        <SmallButton label="No" />
                        <div className={classes.confirm}>
                            <Button className={classes.submit}>Submit</Button>
                            <Button className={classes.cancel}>Cancel</Button>
                        </div>
                    </Grid>
                </Grid>
            ) : (
                <Grid container className={classes.mainGrid} justify="space-between">
                    <Grid item className={classes.leftGrid}>
                        <Typography className={classes.headingSecondary}>Tutor Rating</Typography>
                        <Typography className={`${classes.headingSecondary} ${classes.recommended}`}>
                            Recommended
                        </Typography>
                    </Grid>

                    <Grid item className={classes.rightGrid}>
                        <Typography className={classes.small}>Feedback</Typography>
                        {/* <TextareaAutosize rowsMin={6} className={classes.textareaClass} /> */}
                        <ReusableTextArea noOfRows={5} />

                        <Typography style={{ marginTop: '41.5px' }} className={classes.small}>
                            Stars
                        </Typography>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <hr className={classes.topMarg} />
                        <Typography className={classes.small}>Would you recommend the Tutor?</Typography>
                        <SmallButton label="Yes" />
                        <SmallButton label="No" />
                        <div className={classes.confirm}>
                            <Button className={classes.submit}>Submit</Button>
                            <Button className={classes.cancel}>Cancel</Button>
                        </div>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default ClassReviewRating;
