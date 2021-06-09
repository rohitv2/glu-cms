import React from 'react';
import { Typography } from '@material-ui/core';
import { PeopleAlt } from '@material-ui/icons';

interface cardStatusProps {
    icon?: any;
    heading: string;
    total: number;
}

const CardStatus: React.FunctionComponent<cardStatusProps> = ({ icon, heading, total }) => {
    return (
        <div className="card-status">
            <div className="status-header">
                {icon}
                <Typography className="status-heading">{heading}</Typography>
            </div>
            <Typography className="total-no">{total}</Typography>
            <Typography className="total-status">Total No Of {heading}</Typography>
        </div>
    );
};

export default CardStatus;
