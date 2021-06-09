import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
interface props {
    date?: any;
    subject?: string;
    subjectDesc?: string;
    desc?: string;
    DueOrComplete?: string;
    submissions?: string;
    isSubmitted?: boolean;
    linkurl?: string;
}
const HomeworkStatusList: React.FunctionComponent<props> = ({
    date,
    subject,
    subjectDesc,
    desc,
    submissions,
    isSubmitted,
    DueOrComplete,
    linkurl,
}) => {
    return (
        <>
            <div className="reusable_homework_main">
                <div className="homework_main_title">
                    <Link to={linkurl} style={{ textDecoration: 'none', color: 'black' }}>
                        {' '}
                        <Typography className="tutor_homework_main_text">{subject}</Typography>
                    </Link>
                    <Typography className="tutor_homework_main_text">{subjectDesc}</Typography>
                </div>
                <div className="homework_main_subtitle">
                    <div className="homework_main_subtitle_1">
                        <Typography className="tutor_homework_main_smtext">{DueOrComplete}</Typography>
                        <Typography className="tutor_homework_main_smtext">{date}</Typography>
                    </div>
                    <div className="homework_main_subtitle_2">
                        <Typography className="tutor_homework_main_smtext">Submissions</Typography>
                        <Typography className="tutor_homework_main_smtext">{submissions}</Typography>
                    </div>
                </div>
                <div className="homework_main_desc">
                    <Typography className="tutor_homework_main_smgreytext">{desc}</Typography>
                </div>
                {isSubmitted && (
                    <div className="homework_main_submitted">
                        {/* <Typography className="tutor_homework_main_xxstext"><span className="tickcircleicon"><CheckCircleOutlineSharpIcon/></span>Submitted</Typography> */}
                    </div>
                )}
            </div>
        </>
    );
};

export default HomeworkStatusList;
