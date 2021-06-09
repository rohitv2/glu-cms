import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import HorizontalLine from '../../components/HorizontalLine';

const SectionFive = () => {
    return (
        <div className={`section-five`}>
            <HorizontalLine />
            <div className={`row`}>
                <div className="col-md-6 col-lg-4 mr-auto">
                    <div style={{top: "3rem"}} className="make__position__sticky">
                        <Typography className="learn-title">
                            Learn or teach, we have over 30 subjects to pick from
                        </Typography>
                        {/* <img className="subject" src={commonImg.subectIconSvg} /> */}
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="subject-list-container">
                        <ul>
                            <li>Maths</li>
                            <li>Science</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Biology</li>
                            <li>Business Studies</li>
                            <li>Language</li>
                            <li>PE</li>
                            <li>Religious Education</li>
                            <li>English</li>
                            <li>Art</li>
                            <li>Geography</li>
                            <li>History</li>
                            <li>ICT</li>
                            <li>Computer Science</li>
                            <li>Drama</li>
                        </ul>
                        <Typography className="scrolling__text">Maths, Science, Physics, Chemistry,
                        Biology, Business Studies, Language, PE, Religious Education, English, Art, Geography,
                        History, ICT, Computer Science, Drama
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFive;
