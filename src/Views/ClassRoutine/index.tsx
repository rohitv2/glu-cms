import React, { useState, useEffect } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { Button } from '@material-ui/core';
import SelectController from '../../components/Inputs/SelectController';
import { classes } from '../../Helper/classArray';
import ClassRoutine from './ClassRoutine';
import { dayNames } from '../../Helper/dayNames';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import { routineFormValidation } from '../../Helper/FormValidations/routineFormValidation';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import SelectionInput from '../../components/Inputs/SelectionInput';
import { useDispatch } from 'react-redux';
import { getTimeTableAPIcall } from '../../Redux/Actions/schoolAction';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const dispatch = useDispatch();
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { errors, handleSubmit, control } = useForm({
        validationSchema: routineFormValidation.validationSetting,
    });
    const submit = (data: object) => console.log(data);
    useEffect(()=>{
        dispatch(getTimeTableAPIcall())
    },[])
    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Class Routine" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <SelectController
                                className="custom-input"
                                label="Year Group"
                                control={control}
                                options={classes}
                                name="class"
                            />
                            {errors.class && <ErrorMessage msg={routineFormValidation.errorMsg.class} />}
                            <SelectController
                                className="custom-input mb-3"
                                label="Form Group"
                                control={control}
                                options={['A', 'B', 'C']}
                                name="section"
                            />
                            {errors.section && <ErrorMessage msg={routineFormValidation.errorMsg.section} />}
                            <SelectionInput
                                labelName="Select Students"
                                option={['john', 'chingwank', 'tom']}
                            />
                            <SelectController
                                className="custom-input"
                                label="Select Department"
                                control={control}
                                options={['Hindi', 'English', 'Maths']}
                                name="department"
                            />
                            {errors.department && <ErrorMessage msg={routineFormValidation.errorMsg.department} />}
                            <SelectController
                                className="custom-input"
                                label="Select Teacher"
                                control={control}
                                options={['John', 'Alex', 'david']}
                                name="teacher"
                            />
                            {errors.teacher && <ErrorMessage msg={routineFormValidation.errorMsg.teacher} />}
                            <SelectController
                                className="custom-input"
                                label="Select Subject"
                                control={control}
                                options={['Hindi', 'English', 'Math']}
                                name="subject"
                            />
                            {errors.subject && <ErrorMessage msg={routineFormValidation.errorMsg.subject} />}
                            <SelectController
                                className="custom-input"
                                label="Select Day"
                                control={control}
                                options={dayNames}
                                name="day"
                            />
                            {errors.day && <ErrorMessage msg={routineFormValidation.errorMsg.day} />}
                            <div className="mb-4">
                                <DateSelector handler={() => {}} />
                            </div>
                            <TimeSelector label="Start Time" />
                            <TimeSelector label="End Time" />
                            <Button className="session-button" type="submit">
                                Create Class Routine
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <ClassRoutine triggerModal={handleToggler} />
        </div>
    );
};

export default index;
