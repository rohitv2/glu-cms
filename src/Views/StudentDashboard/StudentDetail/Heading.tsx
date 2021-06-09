import React from 'react';
import { Link } from 'react-router-dom';

interface props {
    name: string;
    about?: string;
    country: string;
    contact: string;
}

const Heading: React.FunctionComponent<props> = ({ name, about, country, contact }) => {
    return (
        <>
            <div className="middle__heading">
                <h2>{name}</h2>
            </div>
            <div className="para__box">
                <p>{about}</p>
                <p className="subpara">
                    {country}
                    <br />
                    {contact}
                </p>
                <Link to="/edit-student-profile" className="edit">
                    Edit profile
                </Link>
            </div>
        </>
    );
};

export default Heading;
