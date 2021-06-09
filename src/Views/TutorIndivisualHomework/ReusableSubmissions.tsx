import React from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface props {
    name?: string;
    isComplete?: string;
    date?: string;
    time?: string;
    isEdit?: string;
    studentId?: string;
    homeworkId?: string; 
    isSubmitted?: string;
}
const ReusableSubmissions: React.FunctionComponent<props> = ({
    homeworkId,
    studentId,
    name,
    isComplete,
    date,
    time,
    isEdit,
    isSubmitted,
}) => {
    const history = useHistory();

    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <Typography className="leftText ">
                        {name}
                        <br></br>
                        {isSubmitted && isComplete ? "Completed" : isSubmitted && !isComplete ? "Incomplete" : isSubmitted ? "Submitted": ""}
                    </Typography>
                </div>
                <div className="col-md-7">
                    <div className="mark_or_edit submissions_dateTime">
                        <Typography className="leftText">{date}</Typography>
                        <Typography
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                history.push({
                                    pathname: `/tutor/mark-student-homework`,
                                    state: {
                                        homeworkId: homeworkId,
                                        studentId: studentId,
                                        name: name,
                                        date: date,
                                        time: time,
                                    },
                                });
                            }}
                        >
                            <Typography className="resources_subtext">{isEdit}</Typography>
                        </Typography>
                    </div>
                    <div className="col-md-12 p-0">
                        <Typography className="leftText">{time}</Typography>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReusableSubmissions;
