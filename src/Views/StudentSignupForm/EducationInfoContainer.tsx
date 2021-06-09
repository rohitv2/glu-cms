import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { registerContext } from './Index';

const EducationInfoContainer = () => {
    const context = useContext(registerContext);
    let length = context.student.education.length - 1;
    if (context.editMode) {
        length = context.currentActive;
    }
    return (
        <div className="row">
            <div className="col-lg-12">
                <TextField
                    className="line-input mb-3"
                    label="School/College"
                    value={context.student.education[length].schoolName}
                    onChange={context.studentHandler.schoolName}
                    fullWidth
                />
            </div>
            <div className="col-lg-12">
                <TextField
                    className="line-input mb-3"
                    label="Qualification"
                    value={context.student.education[length].qualification}
                    onChange={context.studentHandler.qualification}
                    fullWidth
                />
            </div>
            <div className="col-lg-12">
                <TextField
                    className="line-input mb-3"
                    label="Field of Study"
                    value={context.student.education[length].course}
                    onChange={context.studentHandler.course}
                    fullWidth
                />
            </div>
            <div className="col-lg-6">
                <TextField
                    type="date"
                    className="line-input mb-3 mt-3"
                    value={context.student.education[length].from.toISOString().split('T')[0]}
                    onChange={context.studentHandler.from}
                    fullWidth
                    inputProps={{
                        onKeyDown: (event) => {
                            event.preventDefault();
                        },
                    }}
                />
            </div>
            <div className="col-lg-6">
                <TextField
                    type="date"
                    className="line-input mb-3 mt-3"
                    value={context.student.education[length].to.toISOString().split('T')[0]}
                    onChange={context.studentHandler.to}
                    fullWidth
                    inputProps={{
                        onKeyDown: (event) => {
                            event.preventDefault();
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default EducationInfoContainer;
