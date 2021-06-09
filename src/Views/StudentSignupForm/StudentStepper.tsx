import React from 'react';

interface props {
    active: number
}
const StudentStepper: React.FunctionComponent<props> = ({active}) => {
    return (
        <ul>
            <li className={`${active >= 0 ? 'active' : ''}`}>Who are you </li>
            <li className={`${active >= 1 ? 'active' : ''}`}>Your details</li>
            <li className={`${active >= 2 || active === 3 ? 'active' : ''}`}>Education</li>
            {/* <li className={`${active >= 4 ? 'active' : ''}`}>Mobile Number</li> */}
            <li className={`${active >= 4 ? 'active' : ''}`}>Verification</li>
        </ul>
    );
};

export default StudentStepper;
