import React, { useContext } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { adminContext } from './Admin';

const SchoolBasicInfo: React.FunctionComponent = () => {
    const context = useContext<any>(adminContext);
    return (
        <div className="school-information-container">
            <div className="row">
                <div className="col-md-12">
                    <TextField
                        className="line-input2"
                        label="School/College Name"
                        value={context.basicInfo.schoolName}
                        onChange={context.schoolName}
                        fullWidth
                    />
                </div>
                <div className="col-md-12">
                    <TextField
                        className="line-input2"
                        label="Address"
                        value={context.basicInfo.address}
                        onChange={context.address}
                        fullWidth
                    />
                </div>
                <div className="col-md-12">
                    <div className="biograpghy__container">
                        <Typography className="title">Bio</Typography>
                        <textarea rows={5} className="textbox" value={context.basicInfo.bio} onChange={context.bio} />
                    </div>
                </div>
                {/* <div className="col-md-12">
                    <div className="biograpghy__container">
                        <Typography className="title">Long Bio</Typography>
                        <textarea rows={10} className="textbox" value={context.basicInfo.bio} onChange={context.bio} />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default SchoolBasicInfo;
