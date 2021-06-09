import React, { useState, useEffect } from 'react';
import { makeStyles, Grid, Typography, useMediaQuery, Button, TextareaAutosize } from '@material-ui/core';
import TextAreaReusable from '../../components/ReusableTextArea';
import { markComplete } from '../../Redux/Actions/teacherAction';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    mainGrid: {
        paddingTop: '2rem',
    },
    commonText: {
        fontSize: '1.5625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    bigText: {
        fontSize: '2.625rem',
        lineHeight: 1,
        fontFamily: 'CircularXXWeb-Book',
    },
    commonTextSub: {
        fontSize: '1.5625rem',
        lineHeight: 1,
        marginTop: '1.6rem',
        width: '80%',
        fontFamily: 'CircularXXWeb-Book',
    },
    smallText: {
        fontSize: '1.25rem',
        marginTop: '1.8rem',
        color: '#5F5F5F',
        fontFamily: 'CircularXXWeb-Book',
    },
    smallText2: {
        fontSize: '1.25rem',
        color: '#5F5F5F',
        fontFamily: 'CircularXXWeb-Book',
    },
    leftGrid: {
        width: '47.1%',
        borderRight: '1px solid lightgrey',
        marginRight: '4%',
    },
    rightGrid: {
        width: '48%',
    },
    confirm: {
        marginTop: '5rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    submit: {
        padding: '0.2rem 0rem',
        fontSize: '1.25rem',
        width: '9.375rem',
        border: '1.2px solid #A8A8A8',
        marginRight: '0.5rem',
        textTransform: 'capitalize',
        fontFamily: 'CircularXXWeb-Book',
    },
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3.0625rem, #ccc 3rem, white 3.0625rem)',
        lineHeight: '3rem',
        border: 'none',
        width: '100%',
        height: '14rem',
        color: 'inherit',
        fontFamily: 'CircularXXWeb-Book',

        fontSize: '2.625rem',
        '&:hover': {
            border: 'none',
            cursor: 'text',
        },
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
        font: 'normal normal normal 42px/62px CircularXXWeb;',
    },
});

const StudentHomeworkFeedback = () => {
    const history = useHistory();
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [comment, setComment] = useState('');
    const studentId = useSelector((state: any) =>
        state.teacherReducer.markHomework?.studentId ? state.teacherReducer.markHomework.studentId : ''
    );
    const homeworkId = useSelector((state: any) =>
        state.teacherReducer.markHomework?.homeworkId ? state.teacherReducer.markHomework.homeworkId : ''
    );
    const teacherComment = useSelector((state: { teacherReducer: any }) =>
    state.teacherReducer?.markHomework?.comment ? state.teacherReducer.markHomework.comment : null
    );
    const dispatch = useDispatch();
    return (
        <div>
            {isSmallScreen ? (
                <Grid container className={classes.mainGrid} spacing={6}>
                    <Grid xs={12} item>
                        <Typography className={classes.bigText}>Feedback</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography className={classes.commonText}>Comment</Typography>

                        <Typography className={classes.confirm}>
                            <Button className={classes.submit}>Complete</Button>
                            <Button className={classes.submit}>Incomplete</Button>
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid container className={classes.mainGrid}>
                    <Grid item className={classes.leftGrid}>
                        <Typography className={classes.bigText}>Feedback</Typography>
                    </Grid>
                    <Grid item className={classes.rightGrid}>
                        <Typography className={classes.commonText}>Comment</Typography>
                        <TextareaAutosize
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            id="bio"
                            value={comment ? comment : teacherComment}
                            rowsMin={5}
                            className={classes.textareaClass}
                        />
                        <Typography className={classes.confirm}>
                            <Button
                                onClick={() => {
                                    dispatch(markComplete(studentId, homeworkId, true, comment, history));
                                }}
                                className={classes.submit}
                            >
                                Complete
                            </Button>
                            <Button
                                onClick={() => {
                                    dispatch(markComplete(studentId, homeworkId, false, comment, history));
                                }}
                                className={classes.submit}
                            >
                                Incomplete
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default StudentHomeworkFeedback;
