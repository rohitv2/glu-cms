import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import MadeBy from '../Footer/MadeBy';
import { makeStyles } from '@material-ui/core';
import StudentHomeworkHeader from './StudentHomeworkHeader';
import StudentHomeworkSubmission from './StudentHomeworkSubmission';
import StudentHomeworkFeedback from './StudentHomeworkFeedback';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { markStudentHomeworkAction } from '../../Redux/Actions/teacherAction';
import useMenuList from '../../Hooks/useMenuList';

const useStyles = makeStyles({
    body: {
        padding: '3.0625rem',
    },
    topMarg: {
        marginTop: '6.28125rem',
    },
    footerTopMargin: {
        marginTop: '3.28125rem',
    },
});

const StudentHomework = () => {
    const classes = useStyles();
    const location: { state: { studentId: any; homeworkId: any; name: any } } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(markStudentHomeworkAction(location.state.studentId, location.state.homeworkId));
    }, []);
    const menu = useMenuList('tutor')
    return (
        <NavigationMenu menuList={menu} background="secondary">
            <StudentHomeworkHeader />
            <div className={classes.body}>
                <hr className={classes.topMarg} />
                <StudentHomeworkSubmission />
                <hr className={classes.topMarg} />
                <StudentHomeworkFeedback />
            </div>
            <div className={`footer ${classes.footerTopMargin}`}>
                <MadeBy />
            </div>
        </NavigationMenu>
    );
};

export default StudentHomework;
