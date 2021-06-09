import React from 'react';
import { Typography } from '@material-ui/core';
interface props {
    time?: string;
    subject?: string;
    classType?: string;
    attendance?: string;
    progress?: Number;
    type?: string;
    typeNumber?: string;
    typeClassroom?: string;
    onClickRegister?: (e: any) => void;
}
const ProgressBar: React.FunctionComponent<props> = ({
    time,
    subject,
    classType,
    progress,
    type,
    typeNumber,
    typeClassroom,
    onClickRegister
}) => {
    return (
        <>
        <div className="reusableProgress">
            <div className="row progress-bar-header">
                <Typography className="text">{time}</Typography>
                {onClickRegister ? 
                <Typography className="small-text" onClick={onClickRegister}>Register</Typography>
                : ""}
            </div>
            <div className="row">
                <Typography className="text">{subject}</Typography>
            </div>
            <div className="row">
                <div className="col-6 p-0">
                    <div className="subtext_container">
                        <Typography className="subtext">{typeClassroom}</Typography>
                        <Typography className="subtext">{classType}</Typography>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="subtext_container">
                        <Typography className="subtext">{type}</Typography>
                        <Typography className="subtext">{typeNumber}</Typography>
                    </div>
                </div>
            </div>
            <div className="row w-75">
                <div className="progressBar">
                    <span className="bar" style={{ width: `${progress}%` }}></span>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProgressBar;
