import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    mainGrid: {
        lineHeight: 1,
        backgroundColor: '#F7F7F7',
        padding: '3.0625rem',
        height: '30rem',
    },
    leftGrid: {
        fontSize: '2.625rem',
    },
    rightGrid: {
        fontSize: '5rem',
    },
});

const StudentHomeworkHeader: React.FunctionComponent = () => {
    const location: { state: { name: any } } = useLocation();
    const classes = useStyles();
    const dispatch = useDispatch();

    const title = useSelector((state: { teacherReducer: any }) =>
        state.teacherReducer?.markHomework?.Homework?.title ? state.teacherReducer.markHomework.Homework.title : 'Title'
    );
    const subject = useSelector((state: { teacherReducer: any }) =>
        state.teacherReducer?.markHomework?.Homework?.Subject?.subjectName
            ? state.teacherReducer.markHomework.Homework.Subject.subjectName
            : 'Subject'
    );

    return (
        <div>
            <Grid container className={classes.mainGrid} spacing={6}>
                <Grid item xs={12} md={6} className={classes.leftGrid}>
                    {location.state.name}
                    <span style={{ marginLeft: '2rem', width: '30px', height: '30px', fontSize: '30px' }}>
                        <i className="icon-Message"></i>
                    </span>
                </Grid>
                <Grid item xs={12} md={6} className={classes.rightGrid}>
                    {subject} <br />
                    {title}
                </Grid>
            </Grid>
        </div>
    );
};

export default StudentHomeworkHeader;
