import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import PdBox from '../../Containers/Cards/PdBox';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import ChipAdder from '../../components/Cards/ChipAdder';
import SaveController from '../../components/Dashobard/SaveController';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTeacherAPIcall, editTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { addNewSchoolAPIcall } from '../../Redux/Actions/superAdminActions';
import { useHistory, useLocation } from 'react-router';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import {
    getFileUploadAPIcall,
    uploadProfileAmznUrl,
    uploadProfileFileName,
} from '../../Redux/Actions/FileUploadAction';
import { mobileCode } from '../../Helper/mobileCode';
import SelectWithLabelIdValue from '../../components/Inputs/SelectWithLabelIdValue';

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
        schoolName: '',
        email: '',
        mobilePre: '',
        mobileNumber: '',
        password: '',
        website: '',
    });
    const [editMode, setEditMode] = useState(false);
    const [department, setDepartment] = useState('');
    const [subjects, setSubjects] = useState<any>([]);
    const [image, setImage] = useState<File>();
    const [mobileList, setMobileList] = useState<any>([]);
    const fileData = useSelector((state: rootReducerType) => state.fileUploadReducer.fileData);
    const tokenData = useSelector((state: rootReducerType) => state.authReducer.registerData);
    const handleSchoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, schoolName: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };

    const handleWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, website: e.target.value });
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.target.value });
    };
    const handleMobilePre = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, mobilePre: e.target.value });
    };
    const handleMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, mobileNumber: e.target.value });
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const handleFile = (file: File) => {
        setImage(file);
    };
    const handleSubmit = () => {
        const teacher = {
            schoolName: state.schoolName,
            email: state.email,
            phoneNumber: state.mobileNumber,
            password: state.password,
            website: state.website,
        };
        if (editMode) {
            let data: any = { ...teacher };
            delete data.email;
            delete data.phoneNumber;
            dispatch(editTeacherAPIcall(data, state.id, history));
        } else {
            const data = teacher;
            dispatch(addNewSchoolAPIcall(data, history));
        }
    };
    const findRoutes: any = useLocation();
    useEffect(() => {
        const mobileNos = mobileCode.map((item: { name: string; dial_code: string }) => {
            return { id: item.dial_code, value: item.name };
        });
        setMobileList(mobileNos);
        if (findRoutes.hasOwnProperty('state')) {
            if (findRoutes.state.hasOwnProperty('teacherInfo')) {
                const values = (findRoutes as any)?.state?.teacherInfo;
                const subjects = values.subjects.map((item: any) => {
                    return item.Subject.subjectName;
                });
                setSubjects(subjects);
                const data = {
                    id: 23,
                    schoolName: values.schoolName,
                    email: values.email,
                    mobilePre: '',
                    mobileNumber: '',
                    password: '',
                    website: '',
                };
                setState(data);
                setEditMode(true);
            }
        }
    }, []);
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
                        <Typography className={classes.heading}>School Information</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography className={classes.heading}>School Information</Typography>
                        {/* <UploadMaxSize onClick={handleFile} /> */}
                        <InputWithLabel fieldName="School Name" value={state.schoolName} onChange={handleSchoolName} />
                        <InputWithLabel
                            fieldName="Email"
                            placeholder="sample@gmail.com"
                            value={state.email}
                            onChange={handleEmail}
                        />
                        <InputWithLabel
                            fieldName="Website"
                            placeholder="Website"
                            value={state.website}
                            onChange={handleWebsite}
                        />
                        <InputWithLabel
                            fieldName="Password"
                            placeholder="Password"
                            value={state.password}
                            onChange={handlePassword}
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
                    </Grid>
                </Grid>
                <SaveController activeCom={0} visibleAt={1} handleNext={handleSubmit} />
            </PdBox>
        </CardContainer>
    );
};

export default Index;
