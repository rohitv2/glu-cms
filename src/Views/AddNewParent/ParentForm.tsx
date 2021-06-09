import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, Box, IconButton } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import OutlineButton from '../../components/Button/OutlineButton';
import SaveController from '../../components/Dashobard/SaveController';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addChildrenAPIcall, addNewParentAPIcall } from '../../Redux/Actions/parentAction';
import {
    getFileUploadAPIcall,
    uploadProfileAmznUrl,
    uploadProfileFileName,
} from '../../Redux/Actions/FileUploadAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

const useStyle = makeStyles({
    title: {
        fontSize: '1.562rem',
        color: colors.black,
    },
    childContainer: {
        marginBottom: '1rem',
    },
    closeBtn: {
        float: 'right',
    },
    mobile: {
        paddingTop: '2.6rem',
    },
    mt: {
        marginTop: '2.156rem',
    },
    helpCon: {
        width: '100%',
        marginTop: '5rem',
    },
});
const ParentForm: React.FC = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        title: 'father',
        phonePre: '',
        phoneNumber: '',
        file: '',
    });
    const [children, setChildren] = useState([{ firstName: '', lastName: '', email: '' }]);
    const fileData = useSelector((state: rootReducerType) => state.fileUploadReducer.fileData);
    const registerData = useSelector((state: rootReducerType) => state.authReducer.registerData);
    const classes = useStyle();
    const handleAddChildren = () => {
        const data = [...children];
        data.push({ name: '', email: '' });
        setChildren(data);
    };
    const handleDelete = (i: number) => {
        const data = [...children];
        data.splice(i, 1);
        setChildren(data);
    };
    const handleFile = (file: any) => {
        setState({ ...state, file: file });
    };
    const handleFistName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, firstName: e.target.value });
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, lastName: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleTitle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, title: e.target.value });
    };
    const handleMobilePre = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, phonePre: e.target.value });
    };
    const handleMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, phoneNumber: e.target.value });
    };
    const handleChildFirstName = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const data = [...children];
        data[i].firstName = e.target.value;
        setChildren(data);
    };
    const handleChildLastName = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const data = [...children];
        data[i].lastName = e.target.value;
        setChildren(data);
    };
    const handleChildEmail = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const data = [...children];
        data[i].email = e.target.value;
        setChildren(data);
    };
    const dispatch = useDispatch();
    const routes = useHistory();
    const handleSubmit = () => {
        const data = {
            parents: [
                {
                    firstName: state.firstName,
                    title: state.title,
                    lastName: state.lastName,
                    email: state.email,
                    phoneNumber: `${state.phonePre}${state.phoneNumber}`,
                },
            ],
        };
        dispatch(addNewParentAPIcall(data, routes, profileUpload));
    };
    const profileUpload = () => {
        const file: any = state.file;
        dispatch(getFileUploadAPIcall(file.name));
    };
    useEffect(() => {
        if (fileData) {
            const file: any = state.file;
            dispatch(uploadProfileAmznUrl(fileData.url, file));
        }
    }, [fileData]);

    useEffect(() => {
        if (registerData) {
            const token = registerData[0].token;
            if (fileData) {
                dispatch(uploadProfileFileName(fileData.file, token));
            }
            children.forEach((item) => {
                const data = {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: item.email,
                };
                dispatch(addChildrenAPIcall(data, token));
            });
        }
    }, [registerData]);
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
                <Typography className={classes.title}>Parent Information</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography className={classes.title}>Upload Parent Picture (Optional)</Typography>
                <UploadMaxSize onClick={handleFile} />
                <InputWithLabel fieldName="First Name" value={state.firstName} onChange={handleFistName} />
                <InputWithLabel fieldName="Last Name" value={state.lastName} onChange={handleLastName} />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <InputWithLabel fieldName="Email" value={state.email} onChange={handleEmail} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabel
                            options={['mother', 'father']}
                            fieldName="Title"
                            value={state.title}
                            onChange={handleTitle}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <SelectWithLabel
                            options={['+91']}
                            fieldName="Mobile Number"
                            value={state.phonePre}
                            onChange={handleMobilePre}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className={classes.mobile}>
                            <InputWithLabel
                                fieldName=""
                                type="number"
                                value={state.phoneNumber}
                                onChange={handleMobile}
                            />
                        </div>
                    </Grid>
                </Grid>
                {children.map((item: any, i: number) => (
                    <Box key={i} className={classes.childContainer}>
                        {i !== 0 && (
                            <IconButton className={classes.closeBtn} onClick={() => handleDelete(i)}>
                                <i className="icon-Close_Nav" />
                            </IconButton>
                        )}
                        <InputWithLabel
                            fieldName={`Child FirstName`}
                            value={item.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChildFirstName(e, i)}
                        />
                        <InputWithLabel
                            fieldName={`Child LastName`}
                            value={item.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChildLastName(e, i)}
                        />
                        <InputWithLabel
                            fieldName={`Child email`}
                            value={item.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChildEmail(e, i)}
                        />
                    </Box>
                ))}

                <Grid container alignItems="flex-end" justify="flex-end" className={classes.mt}>
                    <OutlineButton text="Add another child" btnClick={handleAddChildren} />
                </Grid>
            </Grid>
            <Box component="div" className={classes.helpCon}>
                <SaveController handleNext={handleSubmit} activeCom={1} visibleAt={1} />
            </Box>
        </Grid>
    );
};

export default ParentForm;
