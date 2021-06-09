import React from 'react';
import Skill from './Skill';
const About: React.FunctionComponent = () => {
    return (
        <div className="about__container">
            <h1 className="heading">About</h1>
            <div className="description__box">
                <p className="description">
                    I am an American author, life coach, and philanthropist. Known for my infomercials, seminars, and
                    self-help books including the books Unlimited Power and...
                </p>
                <h2 className="skill">Skills</h2>
                <div className="skill__box">
                    <Skill title="Mathematics" />
                    <Skill title="English" />
                    <Skill title="Hindi" />
                    <Skill title="Computer Science" />
                    <Skill title="Project Management" />
                    <Skill title="Japanese" />
                    <Skill title="Japanese" />
                    <Skill title="Japanese" />
                </div>
            </div>
        </div>
    );
};

export default About;
