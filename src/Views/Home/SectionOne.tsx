import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';

const SectionOne = () => {
    return (
        <div className="section-one">
            <div className="row make__col__reverse">
                <div className="col-md-6 col-lg-6">
                    <div className="img-container">
                        <img className="spect-boy" src={commonImg.spectsboy} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="section-one-right-part">
                        <Typography className="title">
                            Glu is an innovative, web based app that bridges the gap between schools, teachers, parents
                            and students. The Glu platform allows for a more collaborative learning experience
                        </Typography>
                        <Typography className="subtitle">Remote Education</Typography>
                        <img className="sppon-girl" src={commonImg.girlgreenleaf} alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
                    <Typography className="workable-solution">
                        Glu provides workable solutions to issues encountered, when pushing for the best learning
                        outcomes for students
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;
