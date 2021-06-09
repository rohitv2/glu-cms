import React from 'react';
import { Typography } from '@material-ui/core';
import BorderCardContainer from './BorderCardContainer';
import commonImg from '../../Assets/images';
import { Apple } from '@material-ui/icons';
import { Icons } from '../../Assets/Icons';

const PeopleSaying: React.FunctionComponent = () => {
    return (
        <div className="section-seven">
            <div className="row bg-gray">
                <hr className="line" />
                <div className="col-md-4 col-lg-5">
                    <Typography className="people-saying">What people are saying...</Typography>
                </div>
                <div className="col-md-8 col-lg-7 align-grid">
                    <div className="row">
                        <div className="col-md-6 pd-right">
                            <BorderCardContainer
                                heading="“Best thing for school in years”"
                                title="Candice Lazare"
                                subtitle=" Teacher at CCA"
                            />
                        </div>
                        <div className="col-md-6">
                            <BorderCardContainer
                                heading="“Exactly what i need for my exam revision”"
                                title="Vivienne Williams"
                                subtitle="Student at Mount Stewart"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="break-section"></div>
            <div className="section-seven-padding">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <img className="pen-pad-girl" src={commonImg.penpadgirl} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex align-items-center">
                        <div className="text-section-container">
                            <Typography className="title">
                                Download Glu to open the door to endless learning, with 365 day around the clock access
                                to teachers, lessons and classes
                            </Typography>
                            <Typography className="subtitle">App Store and Google Play</Typography>
                            <div className="icon__container">
                                <Apple className="apple-icon" />
                                <img className="google-icon" src={Icons.realgoogleIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSaying;
