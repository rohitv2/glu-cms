import React from 'react';
import VideoLectureContainer from '../../components/VideoLectureContainer2';
import { Typography } from '@material-ui/core';

const ExtraCurricularBanner:  React.FunctionComponent = () => {
    return (
        <>
            <div className="tutor_indivisual_extra_curr_container1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="container1_text_wrapper">
                                        <Typography className="extra_curricular_text">Extra Curricular</Typography>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="container1_right_container">
                                        <div className="container1_bigtext_wrapper">
                                            <Typography className="extra_curricular_bigtext">
                                                Skateboarding. Week 3 of the entry level basics
                                            </Typography>
                                        </div>
                                        <div className="container1_extrasmall_text_wrapper">
                                            <div className="rating">
                                                <Typography className="extra_curricular_smalltext">
                                                    <svg
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 16 16"
                                                        className="bi bi-star-fill"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <span>4/5</span>
                                                </Typography>
                                            </div>
                                            <div className="edit">
                                                <Typography className="extra_curricular_smalltext">Edit</Typography>
                                            </div>
                                            <div className="delete">
                                                <Typography className="extra_curricular_smalltext">Delete</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video_container_tutor">
                                <VideoLectureContainer/>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default ExtraCurricularBanner;