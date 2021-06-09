import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import { registerContext } from './Index';

const ExperienceContainer: React.FunctionComponent = () => {
    const context = useContext(registerContext);
    let length = context.state.teacher.experience.length - 1;
    const teacher = context.state.teacher.experience;
    if (context.editMode) {
        length = context.currentActive;
    }

    const workspaceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].workplace = e.target.value;
        context.setState(data);
    };
    const positionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].position = e.target.value;
        context.setState(data);
    };
    const departmentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].designation = e.target.value;
        context.setState(data);
    };

    const fromDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].from = new Date(e.target.value);
        context.setState(data);
    };
    const toDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].to = new Date(e.target.value);
        context.setState(data);
    };

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        className="line-input mb-3"
                        label="Workplace"
                        value={teacher[length].workplace}
                        onChange={workspaceHandler}
                        fullWidth
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        className="line-input mb-3"
                        label="Position"
                        value={teacher[length].position}
                        onChange={positionHandler}
                        fullWidth
                    />
                </div>
                <div className="col-lg-12">
                    <TextField
                        className="line-input mb-3"
                        label="Department"
                        value={teacher[length].designation}
                        onChange={departmentHandler}
                        fullWidth
                    />
                </div>
                <div className="col-lg-6">
                    <TextField
                        type="date"
                        className="line-input mb-3 mt-3"
                        value={teacher[length].from.toISOString().split('T')[0]}
                        onChange={fromDateHandler}
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
                        value={teacher[length].to.toISOString().split('T')[0]}
                        onChange={toDateHandler}
                        fullWidth
                        inputProps={{
                            onKeyDown: (event) => {
                                event.preventDefault();
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExperienceContainer;
