import React from 'react';

interface props {
    active: number;
}
const ParentStepper: React.FunctionComponent<props> = ({ active }) => {
    return (
        <ul>
            <li className={`${ active>=0 ? 'active' : ''}`}>Who are you </li>
            <li className={`${active >= 1 ? 'active' : ''}`}>Your details</li>
            <li className={`${active >= 2 || active === 3 ? 'active' : ''}`}>Your Children</li>
            <li className={`${active >= 4 || active === 5 ? 'active' : ''}`}>Verification</li>
        </ul>
    );
};

export default ParentStepper;
