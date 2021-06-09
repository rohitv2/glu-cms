import React from 'react';
import { TextField } from '@material-ui/core';
import UnderLineAddornment from '../../../components/Inputs/UnderLineAddornment';
const Header: React.FunctionComponent = () => {
    return (
        <>
            <div className="detail__box">
                <h2 className="detail__heading">Your Details</h2>
                <TextField className="line-input" label="First Name" fullWidth />
                <TextField className="line-input" label="Last Name" fullWidth />
                <TextField className="line-input" label="Email" fullWidth />
                <TextField className="line-input" label="Location" fullWidth />
                <TextField className="line-input" label="Password" fullWidth />
            </div>
        </>
    );
};

export default Header;
