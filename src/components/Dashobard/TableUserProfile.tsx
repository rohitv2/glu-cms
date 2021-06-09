import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    name?: string;
    profile?: string;
}
const TableUserProfile:React.FunctionComponent<props> = ({name, profile}) => {
    return (
        <div className="user_profile_cotainer">
        <img src={profile} style={{ width: "3.75rem", height: "3.75rem" }} />
            <Typography className="name">{name}</Typography>
        </div>
    );
}

export default TableUserProfile;
