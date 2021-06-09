import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import SyllabusList from './SyllabusList';
import { TextField, Button, Typography } from '@material-ui/core';
import { classes } from '../../Helper/classArray';
import UploadBtn from '../../components/Button/UploadBtn';
import SelectController from '../../components/Inputs/SelectController';
import ErrorMessage from '../../components/ErrorMessage';
import { useForm } from 'react-hook-form';
import { syllabusFormValidation } from '../../Helper/FormValidations/syllabusFormValidation';

const index: React.FunctionComponent = () => {
    const [file, setFile] = useState({ name: '' });
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };

    const { register, errors, handleSubmit, control } = useForm({
        validationSchema: syllabusFormValidation.validationSetting,
    });
    const submit = (data: object) => console.log(data);
    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Syllabus" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <TextField
                                variant="outlined"
                                name="title"
                                inputRef={register}
                                className="custom-input"
                                fullWidth
                                label="Title"
                            />
                            {errors.title && <ErrorMessage msg={syllabusFormValidation.errorMsg.title} />}
                            <SelectController
                                className="custom-input"
                                label="Year Group"
                                options={classes}
                                name="class"
                                control={control}
                            />
                            {errors.class && <ErrorMessage msg={syllabusFormValidation.errorMsg.class} />}
                            <SelectController
                                className="custom-input"
                                label="Form Group"
                                options={['john', 'lea', 'Deven', 'Jinwie']}
                                name="section"
                                control={control}
                            />
                            {errors.section && <ErrorMessage msg={syllabusFormValidation.errorMsg.section} />}
                            <SelectController
                                className="custom-input"
                                label="Select Department"
                                options={['Hindi', 'English', 'Math', 'science']}
                                name="department"
                                control={control}
                            />
                            {errors.department && <ErrorMessage msg={syllabusFormValidation.errorMsg.department} />}
                            <SelectController
                                className="custom-input"
                                label="Select Subject"
                                options={['Hindi', 'English', 'Math', 'science']}
                                name="subject"
                                control={control}
                            />
                            {errors.subject && <ErrorMessage msg={syllabusFormValidation.errorMsg.subject} />}
                            <SelectController
                                className="custom-input"
                                label="Select Teacher"
                                options={['Hindi', 'English', 'Math', 'science']}
                                name="teacher"
                                control={control}
                            />
                            {errors.teacher && <ErrorMessage msg={syllabusFormValidation.errorMsg.teacher} />}
                            <div className="upload-file-container">
                                <div className="file-name-container">
                                </div>
                                <UploadBtn
                                    btnType="inputBtn"
                                    text="Upload Syllabus"
                                    getFile={(data) => {
                                        setFile(data);
                                    }}
                                />
                            </div>
                            <Button type="submit" className="session-button">Create Syllabus</Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <SyllabusList triggerModal={handleToggler} />
        </div>
    );
};

export default index;
