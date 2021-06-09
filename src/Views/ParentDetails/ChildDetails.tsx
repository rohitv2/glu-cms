import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';

interface props {
    name: string;
    phone: string;
    email: string;
    year: string;
    form: string;
}
const ChildDetails: React.FunctionComponent<props> = ({ name, phone, email, year, form }) => {
    return (
        <div className="parent-child-container">
            <img src={commonImg.photo} alt="" />
            <div className="student-info">
                <Typography className="heading">{name}</Typography>
                <Typography className="title">{phone}</Typography>
                <Typography className="title">{email}</Typography>
                <Typography className="title">{year}</Typography>
                <Typography className="title">{form}</Typography>
            </div>
        </div>
    );
};

export default ChildDetails;
