import React from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router'

interface props{
    subject?:string;
    subjectDesc?:string;
    postedDate?:string;
    averageStudent?:string;
    summary?:string;
    id?:any;
}
const PersonalSchoolToggle: React.FunctionComponent<props> = ({subject,subjectDesc,postedDate,averageStudent,summary,id}) => {
    const route = useHistory();

    const handleClickToStatistic = (e: any,id: any) =>{
        route.push({
            pathname: '/tutor/exams/statistics',
            state : {
                individualExamId: id
            }
        });
    }

    return (
        <>
            <div className="reusable_results_description_container">
                <div className="exams_subcontainer1">
                    <div className="row">
                        <div className="col-md-10 col-12">
                            <span
                                onClick={(e) =>{handleClickToStatistic(e,id)}}
                            >
                            <Typography className="examsText">{subject}</Typography>
                            <Typography className="examsText">
                                    {subjectDesc}
                            </Typography>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="exams_subcontainer2">
                    <div className="row">
                        <div className="col-5 ">
                            <Typography className="examsSmallText">Posted</Typography>
                            <Typography className="examsSmallText">{postedDate}</Typography>
                        </div>
                        <div className="col-5 ">
                            <Typography className="examsSmallText">Average Student</Typography>
                            <Typography className="examsSmallText">{averageStudent}</Typography>
                        </div>
                    </div>
                </div>
                <div className="exams_subcontainer3">
                    <div className="row">
                        <div className="col-md-10 col-12">
                            <Typography className="examsSmallGreyText">
                                {summary}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PersonalSchoolToggle;
