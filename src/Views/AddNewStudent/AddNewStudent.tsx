import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Typography } from '@material-ui/core';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import SaveController from '../../components/Dashobard/SaveController';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import { useDispatch, useSelector } from 'react-redux';
import {
    getFileUploadAPIcall,
    uploadProfileAmznUrl,
    uploadProfileFileName,
} from '../../Redux/Actions/FileUploadAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { addNewStudentAPIcall, editStudentAPIcall } from '../../Redux/Actions/studentAction';
import { useHistory, useLocation } from 'react-router';
import { checkValue } from '../../Helper/checkValue';
import { getAllFormGroupById, getAllYearGroup } from '../../Redux/Actions/classAction';
import SelectWithLabelIdValue from '../../components/Inputs/SelectWithLabelIdValue';

const AddNewStudent: React.FunctionComponent = () => {
    const [next, setNext] = useState(1);
    const [image, setImage] = useState<File>();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: 'male',
        formGroup: 'A',
        yearGroup: '',
        fatherName: '',
        motherName: '',
        studentId: -1,
    });
    const [yearDropdown, setYearDropdown] = useState([]);
    const [formDropdown, setFormDropdown] = useState([]);
    const fileData = useSelector((state: rootReducerType) => state.fileUploadReducer.fileData);
    const tokenData = useSelector((state: rootReducerType) => state.authReducer.registerData);
    const yearGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.yearGroups);
    const formGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.formGroups);

    const [editMode, setEditMode] = useState(false);
    const handleNext = () => {
        hitStudentAPIcall();
    };
    const dispatch = useDispatch();
    const routes = useHistory();
    const handleFile = (file: File) => {
        setImage(file);
    };
    // update student info
    const routeState = useLocation();
    useEffect(() => {
        dispatch(getAllYearGroup());
        if (routeState.hasOwnProperty('state')) {
            if ((routeState as any).state.hasOwnProperty('studentInfo')) {
                const data = (routeState as any).state.studentInfo;
                const newState = {
                    firstName: checkValue(data.firstName),
                    lastName: checkValue(data.lastName),
                    email: checkValue(data.email),
                    gender: checkValue(data.gender),
                    yearGroup: checkValue(data.yearId),
                    formGroup: checkValue(data.formId),
                    fatherName: checkValue(data.fatherName),
                    motherName: checkValue(data.motherName),
                    studentId: checkValue(data.studentId),
                };
                setState(newState);
                setEditMode(true);
            }
        }
    }, []);
    const hitStudentAPIcall = () => {
        let year = null;
        let form = null;
        yearDropdown.forEach((item: any) => {
            if (item.id === +state.yearGroup) {
                year = item.value;
            }
        });
        formDropdown.forEach((item: any) => {
            if (item.id === +state.formGroup) {
                form = item.value;
            }
        });
        const data = {
            className: year,
            sectionName: form,
            students: [
                {
                    firstName: state.firstName,
                    gender: state.gender,
                    lastName: state.lastName,
                    email: state.email,
                    fatherName: state.fatherName,
                    motherName: state.motherName,
                },
            ],
        };
        if (editMode) {
            const editdata = { ...data, students: data.students[0] };
            dispatch(editStudentAPIcall(editdata, state.studentId, routes));
        } else {
            if (image) {
                dispatch(addNewStudentAPIcall(data));
            } else {
                dispatch(addNewStudentAPIcall(data, goBack));
            }
        }
    };
    useEffect(() => {
        if (yearGroupDropdown) {
            const data = yearGroupDropdown.map((item: any) => {
                return { id: item.data.id, value: item.data.title };
            });
            setYearDropdown(data);
        }
    }, [yearGroupDropdown]);
    useEffect(() => {
        if (state.yearGroup !== '') {
            dispatch(getAllFormGroupById(state.yearGroup));
        }
    }, [state.yearGroup]);
    useEffect(() => {
        if (formGroupDropdown?.result) {
            const data = formGroupDropdown?.result.ClassSections.map((item: any) => {
                return { id: item?.Section?.id, value: item?.Section?.sectionName };
            });
            setFormDropdown(data);
        }
    }, [formGroupDropdown]);
    useEffect(() => {
        if (tokenData) {
            if (image) {
                dispatch(getFileUploadAPIcall((image as any).name, tokenData[0].token));
            }
        }
    }, [tokenData]);

    useEffect(() => {
        if (fileData) {
            dispatch(uploadProfileAmznUrl(fileData.url, image as any, uploadProfile));
        }
    }, [fileData]);

    const uploadProfile = () => {
        if (fileData) {
            dispatch(uploadProfileFileName(fileData.fileName, tokenData[0].token, goBack));
        }
    };

    const goBack = () => {
        routes.push('/dashboard/students');
    };

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, firstName: e.target.value });
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, lastName: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, gender: e.target.value });
    };
    const handleYearGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, yearGroup: e.target.value });
    };
    const handleFormGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, formGroup: e.target.value });
    };
    const handleMotherName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, motherName: e.target.value });
    };
    const handleFatherName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, fatherName: e.target.value });
    };
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <div className="multi-step-form-container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <Typography className="left_title">Student Information</Typography>
                        </div>
                        <div className="col-md-8 mb-4">
                            <Typography className="right_title">Upload Students Picture</Typography>
                            <UploadMaxSize onClick={handleFile} />
                            <InputWithLabel fieldName="First Name" value={state.firstName} onChange={handleFirstName} />
                            <InputWithLabel fieldName="Last Name" value={state.lastName} onChange={handleLastName} />
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <InputWithLabel fieldName="Email" value={state.email} onChange={handleEmail} />
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <SelectWithLabel
                                        fieldName="Gender"
                                        options={['male', 'female', 'other']}
                                        value={state.gender}
                                        onChange={handleGender}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <SelectWithLabelIdValue
                                        fieldName="Year Group"
                                        options={yearDropdown}
                                        value={state.yearGroup}
                                        onChange={handleYearGroup}
                                    />
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <SelectWithLabelIdValue
                                        fieldName="Form Group"
                                        options={formDropdown}
                                        value={state.formGroup}
                                        onChange={handleFormGroup}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <InputWithLabel
                                        fieldName="Fathers name"
                                        value={state.fatherName}
                                        onChange={handleFatherName}
                                    />
                                    <InputWithLabel
                                        fieldName="Mothers name"
                                        value={state.motherName}
                                        onChange={handleMotherName}
                                    />
                                    <InputWithLabel fieldName="Additional field 1" />
                                    <InputWithLabel fieldName="Additional field 2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 w-100">
                            <SaveController handleNext={handleNext} visibleAt={1} activeCom={next} />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddNewStudent;
