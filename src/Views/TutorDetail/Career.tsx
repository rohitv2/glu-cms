import React from 'react';

const About: React.FunctionComponent = () => {
    return (
        <div className="career__container">
            <h1 className="heading">Career</h1>
            <div className="experience__box">
                <h2 className="title">Experience</h2>
                <p className="para">2014-Present Dubai British School Chemistry Head of Department</p>
                <p className="para">2012-2014 Gems Intl. School Science Teacher</p>
            </div>
            <div className="education__box">
                <h2 className="title">Education</h2>
                <p className="para">University of Essex Project Management MSc</p>
                <p className="para">Westmister University Biomedical Science BSc Honours</p>
            </div>
        </div>
    );
};

export default About;
