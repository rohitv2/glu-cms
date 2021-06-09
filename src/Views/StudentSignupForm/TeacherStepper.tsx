import React from 'react';

interface props {
    active: number;
}
const TeacherStepper: React.FunctionComponent<props> = ({ active }) => {
    return (
        <ul>
            <li className={`${active >= 0 ? 'active' : ''}`}>Who are you </li>
            <li className={`${active >= 1 ? 'active' : ''}`}>Your details</li>
            <li className={`${active >= 2 ? 'active' : ''}`}>Your biography</li>
            <li className={`${active >= 3 || active === 4 ? 'active' : ''}`}>Your education</li>
            <li className={`${active >= 5 || active === 6 ? 'active' : ''}`}>Experience</li>
            <li className={`${active >= 7 ? 'active' : ''}`}>Skill</li>
            <li className={`${active >= 8 ? 'active' : ''}`}>Identity</li>
            {/* <li className={`${active >= 9 ? 'active' : ''}`}>Mobile number</li> */}
            <li className={`${active >= 9 ? 'active' : ''}`}>Verification</li>
        </ul>
    );
};

export default TeacherStepper;
