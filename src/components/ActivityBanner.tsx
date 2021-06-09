import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {deleteClassTeacher } from '../Redux/Actions/teacherAction';
import {useDispatch,useSelector}  from 'react-redux'

const useStyles = makeStyles({
    linkBtn: {
        cursor: 'pointer',
        '&:hover': {
            textDecoation: 'underline',
        },
    },
});
interface props {
    heading?: string;
    image?: any;
    date?: string;
    startTime?: string;
    endTime?: string;
    activityDesc?: string;
    button1?: string;
    button2?: string;
    coverImg?: string;
    resources?: string;
    sessionName?: string;
    tags?: string;
    price?: string;
    maxNumberOfStudents?: string;
    subjectName?: string;
    sessionRoutine?: string;
    editData?: any;
    id?:any;
}
const ActivityBanner: React.FunctionComponent<props> = ({
    sessionRoutine,
    subjectName,
    maxNumberOfStudents,
    price,
    coverImg,
    resources,
    sessionName,
    tags,
    heading,
    image,
    date,
    startTime,
    endTime,
    activityDesc,
    button1,
    button2,
    editData,
    id
}) => {
    const classes = useStyles();
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleEdit = () => {
        routes.push({
            pathname: '/tutor/set-class',
            state: {
                editClass: editData,
            },
        });
    };

    const handleDelete = () => {
        dispatch(deleteClassTeacher(id));  
        routes.push({
            pathname: '/tutor/tutor-upcoming-classes',
        });
    }
    return (
        <>
            <div className="reusable_activity_banner">
                <div className="activity_banner">
                    <div className="sec1">
                        <Typography className="activity_text">{heading}</Typography>
                    </div>
                    <div className="sec2">
                        <img src={image} height="393px" width="535px" className="img-fluid" />
                    </div>
                    <div className="sec3">
                        <Typography className="activity_text">{date}</Typography>
                        <Typography className="activity_text">{`${startTime}-`}</Typography>
                        <Typography className="activity_text">{endTime}</Typography>
                    </div>
                    <div className="sec4">
                        <Typography className="activity_bigtext">{sessionName}</Typography>
                        <Typography className="activity_bigtext">{subjectName}</Typography>

                            <div className="edit_delete_container">
                                <Typography
                                    className={`activity_smalltext pr-3 ${classes.linkBtn}`}
                                    onClick={handleEdit}
                                >
                                    {button1}
                                </Typography>
                                <Typography className={`activity_smalltext  ${classes.linkBtn}`} onClick={handleDelete}>
                                    {button2}
                                </Typography>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default ActivityBanner;
