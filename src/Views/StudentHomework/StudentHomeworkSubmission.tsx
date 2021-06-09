import React from 'react';
import { makeStyles, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const useStyles = makeStyles({
    rightGrid: {
        width: '23.5%',
    },
    leftGrid: {
        borderRight: '1px solid lightgrey',
        width: '47%',
        marginRight: '3%',
    },
    centerGrid: {
        borderRight: '1px solid lightgrey',
        width: '23.5%',
        marginRight: '3%',
    },
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
        cursor: 'pointer',
    },
    smallText2: {
        fontSize: '1.25rem',
        color: '#5F5F5F',
        fontFamily: 'CircularXXWeb-Book',
        cursor: 'pointer',
    },
});

const StudentHomeworkSubmission = () => {
    const comment = useSelector((state: { teacherReducer: any }) =>
        state.teacherReducer?.markHomework?.studentComment
            ? state.teacherReducer.markHomework.studentComment
            : 'No comments'
    );
    const document = useSelector((state: { teacherReducer: any }) =>
        state.teacherReducer?.markHomework?.homeworkDocument ? state.teacherReducer.markHomework.homeworkDocument : null
    );

    const homework = useSelector((state: { teacherReducer: any }) =>
    state.teacherReducer?.markHomework? state.teacherReducer.markHomework : null 
); 


    const history = useHistory();
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    const routes = useLocation();
    const dispatch = useDispatch()

    React.useEffect(()=>{
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state) {
                const date = (routes as any).state?.date;
                const time = (routes as any).state?.time;
                // dispatch(getStudentTimeTable(id))
                // setItem(timeTableList) 
            }
        }
    },[])



    return (
        <div>
            {isSmallScreen ? (
                <Grid container className={classes.mainGrid}>
                    <Grid xs={12} item>
                        <Typography className={classes.bigText} style={{ marginBottom: '3rem' }}>
                            Submitted
                            <br /> {homework?.createdAt != null ? moment(homework.createdAt).format('DD/MM/YY') : ""} <br /> {homework?.createdAt != null ? moment(homework.createdAt).format('LT') : ""}
                        </Typography> 
                    </Grid>
                    <Grid item container spacing={4} style={{ marginBottom: '3rem' }}>
                        <Grid xs={6} item style={{ borderRight: '1px solid lightgrey' }}>
                            <Typography className={classes.commonText}>Comments</Typography>
                            <Typography className={classes.commonTextSub}>
                                {comment ? comment : 'No comments'}
                            </Typography>
                            <Typography className={classes.smallText}>Reply</Typography>
                        </Grid>
                        <Grid xs={6} item>
                            <Typography className={classes.commonText}>Submitted Files</Typography>
                            <Typography className={classes.commonTextSub}>Homework Files</Typography>
                            <div
                                onClick={() => {
                                    history.push(`${document}`);
                                }}
                                className={classes.smallText2}
                                style={{ cursor: 'pointer' }}
                            >
                                Download
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                [
                    <Grid container className={classes.mainGrid}>
                        <Grid item className={classes.leftGrid}>
                            <Typography className={classes.bigText}>
                                Submitted
                                <br /> {homework?.createdAt != null ? moment(homework.createdAt).format('DD/MM/YY') : ""}  <br /> {homework?.createdAt != null ? moment(homework.createdAt).format('LT') : ""}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.centerGrid}>
                            <Typography className={classes.commonText}>Comments</Typography>
                            <Typography className={classes.commonTextSub}>
                                {comment ? comment : 'No comments'}
                            </Typography>
                            <Typography className={classes.smallText}>Reply</Typography>
                        </Grid>
                        <Grid item className={classes.rightGrid}>
                            <Typography className={classes.commonText}>Submitted Files</Typography>
                            <Typography className={classes.commonTextSub}>Homework Files</Typography>
                            <Typography
                                onClick={() => {
                                    // history.push(`${document}`);
                                    window.open(document, "_blank")
                                }}
                                className={classes.smallText2}
                            >
                                Download
                            </Typography>
                        </Grid>
                    </Grid>,
                ]
            )}
        </div>
    );
};

export default StudentHomeworkSubmission;
