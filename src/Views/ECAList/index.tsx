import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { Button, TextField } from '@material-ui/core';
import SelectController from '../../components/Inputs/SelectController';
import { classes } from '../../Helper/classArray';
import ECATable from './ECATable';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import { routineFormValidation } from '../../Helper/FormValidations/routineFormValidation';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import SelectionInput from '../../components/Inputs/SelectionInput';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { errors, handleSubmit, control, register } = useForm({
        validationSchema: routineFormValidation.validationSetting,
    });
    const submit = (data: object) => console.log(data);

    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Extra Curricular Activity" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <TextField
                                className="custom-input"
                                variant="outlined"
                                label="Activity Name"
                                inputRef={register}
                                name="activityName"
                                fullWidth
                            />
                            {errors.class && <ErrorMessage msg={routineFormValidation.errorMsg.class} />}
                            <div className="mb-4">
                                <DateSelector getDate={() => {}} />
                            </div>
                            <TimeSelector label="Start Time" />
                            <TimeSelector label="End Time" />
                            {errors.section && <ErrorMessage msg={routineFormValidation.errorMsg.section} />}
                            <SelectController
                                className="custom-input mb-3"
                                label="Select Department"
                                control={control}
                                options={['Hindi', 'English', 'Maths']}
                                name="department"
                            />
                            {errors.department && <ErrorMessage msg={routineFormValidation.errorMsg.department} />}
                            {errors.subject && <ErrorMessage msg={routineFormValidation.errorMsg.subject} />}
                            <SelectionInput option={['raju', 'mohit', 'rahul']} labelName="Select Teachers" />
                            {errors.teacher && <ErrorMessage msg={routineFormValidation.errorMsg.teacher} />}

                            <SelectController
                                className="custom-input"
                                label="Year Group"
                                control={control}
                                options={classes}
                                name="class"
                            />
                            <SelectController
                                className="custom-input mb-3"
                                label="Form Group"
                                control={control}
                                options={['A', 'B']}
                                name="section"
                            />
                            <SelectionInput option={['john', 'venky', 'chinchan']} labelName="Select Students" />
                            <Button className="session-button" type="submit">
                                Create Class Routine
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <ECATable triggerModal={handleToggler} />
        </div>
    );
};

export default index;
