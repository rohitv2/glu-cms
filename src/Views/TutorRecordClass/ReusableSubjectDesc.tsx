import React, { useEffect, useState } from 'react';
import { TextField, Typography, makeStyles } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import freeTutorSubjectList from '../../Hooks/tutor/freeTutorSubjectList';
interface props {
    displayStudentInput?: boolean;
    subjects?: any;
    getStateValue: (data: any) => void;
    state?: any;
    setState?: any;
}
const useStyles = makeStyles({
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3rem, #ccc 3.0625rem, white 3.0625rem)',
        lineHeight: '3rem',
        padding: '0rem 1rem',
        border: 'none',
        width: '100%',
        height: '15.385rem',
        color: '#505050',
        fontSize: '1.5rem',
    },
});

const ReusableSubjectDesc: React.FunctionComponent<props> = ({
    subjects,
    state,
    setState,
    displayStudentInput,
    getStateValue,
}) => {
    const dropdownList = freeTutorSubjectList();
    const inputEventHandler = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        const data: any = { ...state };
        data[label] = e.target.value;
        setState(data);
    };
    const handleSubject = (value: string) => [setState({ ...state, subject: value })];
    return (
        <>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 p-0">
                        <SelectFieldUnderlineIdValue
                            label="Subject"
                            value={state.subject}
                            className="select-large"
                            options={dropdownList}
                            getValue={(value: string) => {
                                handleSubject(value);
                            }}
                        />
                    </div>
                    <div className="col-md-7 p-0">
                        {displayStudentInput && (
                            <div className="sub_rows">
                                <div className="input_row">
                                    <div className="input_text">
                                        <TextField
                                            className="line-input-large"
                                            label="No. Of Students"
                                            value={state.student}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                inputEventHandler(e, 'student')
                                            }
                                            fullWidth
                                        />
                                    </div>
                                    <div className="input_text">
                                        <TextField
                                            className="line-input-large"
                                            label="Price per student"
                                            value={state.price}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                inputEventHandler(e, 'price')
                                            }
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11 p-0">
                        <TextField
                            className="line-input-large"
                            label="Title (45 Characters)"
                            value={state.title}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputEventHandler(e, 'title')}
                            fullWidth
                        />
                    </div>
                    <div className="col-md-11 p-0">
                        <div className="description_container">
                            <Typography className="title">Description</Typography>
                            <textarea
                                rows={5}
                                style={{ fontSize: '2.625rem', width: '100%' }}
                                className="textbox"
                                value={state.description}
                                onChange={(e: React.ChangeEvent<any>) => inputEventHandler(e, 'description')}
                            />
                            {/* <ReusableTextArea noOfRows={6}/>
                            {/* <TextField
                                placeholder="MultiLine with rows: 2 and rowsMax: 4"
                                multiline
                                rows={2}
                                rowsMax={4}
                            /> */}
                            {/* <TextareaAutosize rowsMin={6} className={classes.textareaClass} /> */}
                        </div>
                    </div>

                    <div className="col-12 p-0 horizontalline"></div>
                </div>
            </div>
        </>
    );
};

export default ReusableSubjectDesc;
