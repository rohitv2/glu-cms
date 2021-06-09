import React, { useState } from 'react';
import { TextField, Typography, makeStyles } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
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

const ReusableSubjectDesc: React.FunctionComponent<props> = ({ displayStudentInput }) => {
    const classes = useStyles();

    const [subject, setSubject] = useState('');
    const [noOfStudents, setNoOfStudents] = useState('');
    const [pricePerStudent, setPricePerStudent] = useState('');
    const [classTitle, setClassTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleDescription = (e: any) => {
        setDescription(e.target.value);

    };

    const handleSubject = (e: string) => {
        setSubject(e);
    };

    const handleNoOfStudents = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNoOfStudents(e.target.value);
    };


    const handlePricePerStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPricePerStudent(e.target.value);
    };


    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClassTitle(e.target.value);
    };


    return (
        <>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 p-0">
                        <SelectFieldUnderline
                            label="Subject"
                            value="English"
                            className="select-large"
                            options={['English', 'Hindi', 'Maths']}
                            getValue={(e) => {handleSubject(e)}}
                        />
                    </div>
                    <div className="col-md-7 p-0">
                        {displayStudentInput && (
                            <div className="sub_rows">
                                <div className="input_row">
                                    <div className="input_text">
                                        <TextField className="line-input-large" label="No. Of Students" fullWidth onChange={handleNoOfStudents} />
                                    </div>
                                    <div className="input_text">
                                        <TextField className="line-input-large" label="Price per student" fullWidth onChange={handlePricePerStudent} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11 p-0">
                        <TextField className="line-input-large" label="Title (45 Characters)" fullWidth onChange={handleTitle} />
                    </div>
                    <div className="col-md-11 p-0">
                        <div className="description_container">
                            <Typography className="title">Description</Typography>
                            <textarea rows={5}  style={{ fontSize:'2.625rem', width: '100%' }} className="textbox" onChange={handleDescription}/>
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
                    <div className="col-md-12 p-0">
                        <div className="sub_heading_container">
                            <Typography className="sub_heading">Resources</Typography>
                        </div>
                    </div>
                    <div className="upload_component">
                        <div className="upload_button">
                            <Typography className="text">Upload</Typography>
                        </div>
                        <div>
                            <Typography className="subtext">Max size (5MB)</Typography>
                        </div>
                        <input type="file" style={{ display: 'none' }} />
                    </div>
                    <div className="col-12 p-0 horizontalline"></div>
                </div>
            </div>
        </>
    );
};

export default ReusableSubjectDesc;
