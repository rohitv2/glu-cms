import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { Button } from '@material-ui/core';
import { classes } from '../../Helper/classArray';
import DailyAttendance from './DailyAttendance';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import OutlineBtn from '../../components/Button/OutlineBtn';
import { colors } from '../../Styles/colors';
import AttendanceCard from './AttendanceCard';
import ErrorMessage from '../../components/ErrorMessage';
import { useForm } from 'react-hook-form';
import { attendanceForm } from '../../Helper/FormValidations/attendanceForm';
import SelectController from '../../components/Inputs/SelectController';

const students = [
    { name: 'John', attendance: '' },
    { name: 'Sonu', attendance: '' },
    { name: 'Shubham', attendance: '' },
    { name: 'Govind', attendance: '' },
    { name: 'John', attendance: '' },
    { name: 'Sonu', attendance: '' },
    { name: 'Shubham', attendance: '' },
    { name: 'Govind', attendance: '' },
    { name: 'John', attendance: '' },
    { name: 'Sonu', attendance: '' },
    { name: 'Shubham', attendance: '' },
    { name: 'Govind', attendance: '' },
    { name: 'John', attendance: '' },
    { name: 'Sonu', attendance: '' },
    { name: 'Shubham', attendance: '' },
    { name: 'Govind', attendance: '' },
    { name: 'John', attendance: '' },
    { name: 'Sonu', attendance: '' },
    { name: 'Shubham', attendance: '' },
    { name: 'Govind', attendance: '' },
];

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const [totalStudent, setTotalStudent] = useState(students);
    const handleToggler = () => {
        setToggler(!toggler);
    };

    const handlePresent = () => {
        let students = [...totalStudent];
        students.forEach((item) => {
            item.attendance = 'present';
        });
        setTotalStudent(students);
    };

    const handleAbsent = () => {
        const students = [...totalStudent];
        students.forEach((item) => {
            item.attendance = 'absent';
        });
        setTotalStudent(students);
    };

    const handleAttendance = (value: string, index: number) => {
        const students = [...totalStudent];
        students[index].attendance = value;
        setTotalStudent(students);
    };
    const { errors, handleSubmit, control } = useForm({
        validationSchema: attendanceForm.validationSetting,
    });
    const submit = (data: object) => console.log(data);
    return (
        <div>
            {toggler ? (
                <ModalBox title="Take Attendance" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="mb-4">
                                <DateSelector />
                            </div>
                            <SelectController
                                className="custom-input"
                                options={classes}
                                label="Year Group"
                                name="class"
                                control={control}
                            />
                            {errors.class && <ErrorMessage msg={attendanceForm.errorMsg.class} />}
                            <SelectController
                                className="custom-input"
                                options={['A', 'B', 'C']}
                                name="section"
                                control={control}
                                label="Form Group"
                            />
                            {errors.section && <ErrorMessage msg={attendanceForm.errorMsg.section} />}
                            <div className="button-container">
                                <OutlineBtn title="Present All" trigger={handlePresent} color={colors.primary} />
                                <OutlineBtn title="Absent All" trigger={handleAbsent} color={colors.primary} />
                            </div>
                            <div className="attendance-table">
                                {totalStudent.map((item, i) => {
                                    return (
                                        <AttendanceCard
                                            name={`st${i}`}
                                            errors={errors}
                                            control={control}
                                            handler={(value: string) => handleAttendance(value, i)}
                                            data={item}
                                        />
                                    );
                                })}
                            </div>
                            <Button className="session-button" type="submit">
                                Update Attendance
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <DailyAttendance triggerModal={handleToggler} />
        </div>
    );
};

export default index;
