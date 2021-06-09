import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import PdBox from '../../Containers/Cards/PdBox';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import SaveController from '../../components/Dashobard/SaveController';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTeacherAPIcall, editTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { useHistory, useLocation } from 'react-router';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import {
    getFileUploadAPIcall,
    uploadProfileAmznUrl,
    uploadProfileFileName,
} from '../../Redux/Actions/FileUploadAction';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import SelectWithLabelIdValue from '../../components/Inputs/SelectWithLabelIdValue';
import { getSubjectByDepartmentId } from '../../Redux/Actions/subjectAction';
import ChipAdderWithDropdown from '../../components/Cards/ChipAdderWithDropdown';
import { toast } from 'react-toastify';
import { useYearGroup } from '../../Hooks/schools/useYearGroup';
import { mobileCode } from '../../Helper/mobileCode';
import { useDepartment } from '../../Hooks/schoolCMS/common/useDepartment';

const useStyle = makeStyles({
    root: {
        marginBottom: '5rem',
    },
    heading: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
        color: colors.black,
        fontWeight: 500,
    },
    mobile: {
        paddingTop: '2.6rem',
    },
});

const Index = () => {
    const classes = useStyle();
    const [state, setState] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        mobilePre: '',
        mobileNumber: '',
        gender: '',
        designation: '',
        department: '',
        yearGroupId: '',
        formGroupId: '',
    });
    const [editMode, setEditMode] = useState(false);
    const departmentDropdowns = useDepartment();
    const [subjects, setSubjects] = useState<any>([]);
    const [image, setImage] = useState<File>();
    const [subjectDropdown, setSubjectDropdown] = useState([]);
    const [mobileList, setMobileList] = useState<any>([]);
    const { yearGroupDropdown, formGroupDropdown } = useYearGroup(state.yearGroupId);

    const fileData = useSelector((state: rootReducerType) => state.fileUploadReducer.fileData);
    const tokenData = useSelector((state: rootReducerType) => state.authReducer.registerData);
    const subjectList = useSelector((state: rootReducerType) => state.subjectReducer.sujbectListByDepId);

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, firstName: e.target.value });
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, lastName: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleMobilePre = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, mobilePre: e.target.value });
    };
    const handleMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, mobileNumber: e.target.value });
    };
    const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, gender: e.target.value });
    };
    const handleDesgination = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, designation: e.target.value });
    };
    const handleDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const data: any = { ...state };
        data.department = e.target.value;
        setState(data);
        setSubjects([]);
    };
    const handleYearGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, yearGroupId: e.target.value });
    };
    const handleFormGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, formGroupId: e.target.value });
    };
    const handleSubjects = (value: string) => {
        const check = subjects.some((item: any) => item.id == value);
        if (!check) {
            const temp = subjectDropdown.filter((item: any) => item.id == value);
            const data = [...subjects];
            if (temp) {
                data.push(...temp);
                setSubjects(data);
            }
        } else {
            toast.success('Subject already added.');
        }
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const handleFile = (file: File) => {
        setImage(file);
    };
    const handleSubmit = () => {
        const totalSubjects = subjects.map((item: any) => {
            return { subjectId: item.id };
        });
        const teacher = {
            firstName: state.firstName,
            gender: state.gender,
            lastName: state.lastName,
            email: state.email,
            phoneNumber: state.mobileNumber,
            designation: state.designation,
            departmentId: state.department,
            yearGroupId: state.yearGroupId,
            formGroupId: state.formGroupId,
            subjectIds: totalSubjects,
        };
        if (editMode) {
            let data: any = { ...teacher };
            delete data.gender;
            delete data.email;
            delete data.phoneNumber;
            dispatch(editTeacherAPIcall(data, state.id, history));
        } else {
            const data = {
                teachers: [teacher],
            };
            dispatch(addNewTeacherAPIcall(data, history));
        }
    };
    const findRoutes: any = useLocation();
    useEffect(() => {
        const mobileNos = mobileCode.map((item: { name: string; dial_code: string }) => {
            return { id: item.dial_code, value: item.name };
        });
        setMobileList(mobileNos);
        dispatch(getAllDepartmentAPIcall());
        if (findRoutes.hasOwnProperty('state')) {
            if (findRoutes.state.hasOwnProperty('teacherInfo')) {
                const values = (findRoutes as any)?.state?.teacherInfo;
                const subjects = values.subjects.map((item: any) => {
                    return { id: item.Subject.id, value: item.Subject.subjectName };
                });
                setSubjects(subjects);

                const data: any = {
                    id: values.staffId,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    mobilePre: values.mobilePre,
                    mobileNumber: values.mobileNumber,
                    gender: values.gender,
                    designation: values.designation,
                    department: values.departmentId,
                };
                if (values.classSection.length) {
                    data.yearGroupId = values.classSection[0].ClassSection.Class.id;
                    data.formGroupId = values.classSection[0].ClassSection.Section.id;
                }
                setState({ ...state, ...data });
                setEditMode(true);
            }
        }
    }, []);

    useEffect(() => {
        if (state.department !== '') {
            dispatch(getSubjectByDepartmentId(state.department));
        }
    }, [state.department]);
    useEffect(() => {
        if (subjectList) {
            const data = subjectList.map((item: any) => {
                return { id: item.id, value: item.subjectName };
            });
            setSubjectDropdown(data);
        }
    }, [subjectList]);
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
            dispatch(uploadProfileFileName(fileData.fileName, tokenData[0].token));
        }
    };

    return (
        <CardContainer>
            <PdBox>
                <Grid container className={classes.root}>
                    <Grid item xs={12} md={4}>
                        <Typography className={classes.heading}>Teachers Information</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography className={classes.heading}>Teachers Information</Typography>
                        <UploadMaxSize onClick={handleFile} />
                        <InputWithLabel fieldName="First Name" value={state.firstName} onChange={handleFirstName} />
                        <InputWithLabel fieldName="Last Name" value={state.lastName} onChange={handleLastName} />
                        <InputWithLabel
                            fieldName="Email"
                            placeholder="sample@gmail.com"
                            value={state.email}
                            onChange={handleEmail}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <SelectWithLabelIdValue
                                    options={mobileList}
                                    fieldName="Mobile number"
                                    value={state.mobilePre}
                                    onChange={handleMobilePre}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <div className={classes.mobile}>
                                    <InputWithLabel fieldName="" value={state.mobileNumber} onChange={handleMobile} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <SelectWithLabel
                                    options={['male', 'female']}
                                    fieldName="Gender"
                                    value={state.gender}
                                    onChange={handleGender}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectWithLabel
                                    options={['junior', 'senior']}
                                    fieldName="Designation"
                                    value={state.designation}
                                    onChange={handleDesgination}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <SelectWithLabelIdValue
                                    options={yearGroupDropdown ? yearGroupDropdown : []}
                                    fieldName="Year Group"
                                    value={state.yearGroupId}
                                    onChange={handleYearGroup}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectWithLabelIdValue
                                    options={formGroupDropdown ? formGroupDropdown : []}
                                    fieldName="Form Group"
                                    value={state.formGroupId}
                                    onChange={handleFormGroup}
                                />
                            </Grid>
                        </Grid>
                        <SelectWithLabelIdValue
                            options={departmentDropdowns}
                            fieldName="Departments"
                            value={state.department}
                            onChange={handleDepartment}
                        />
                        <ChipAdderWithDropdown
                            fieldName="Subjects"
                            dropdown={subjectDropdown}
                            data={subjects}
                            onChange={handleSubjects}
                        />
                    </Grid>
                </Grid>
                <SaveController activeCom={0} visibleAt={1} handleNext={handleSubmit} />
            </PdBox>
        </CardContainer>
    );
};

export default Index;
