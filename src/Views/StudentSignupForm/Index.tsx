import React, { useState, useEffect, createContext } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import WhoIam from './WhoIam';
import InfoContainer from './InfoContainer';
import Education from './Education';
import PreviewCard from './PreviewCard';
import VerifyAccount from './VerifyAccount';
import VerificationCode from './VerificationCode';
import ParentChildren from './ParentChildren';
import TeacherBio from './TeacherBio';
import TeacherExperience from './TeacherExperience';
import TeacherSkills from './TeacherSkills';
import IdentyCard from './IdentyCard';
import StudentStepper from './StudentStepper';
import ParentStepper from './ParentStepper';
import TeacherStepper from './TeacherStepper';
import ParentPreviewCard from './ParentPreviewCard';
import ExperiencePreviewCard from './ExperiencePreviewCard';
import { useDispatch, useSelector } from 'react-redux';
import {
    registerAPIcall,
    registerPhoneNumberAPIcall,
    studentEduAPIcall,
    teacherExperienceAPIcall,
    verifyOTPAPIcall,
    teacherAddSkillAPIcall,
    teacherAddBioAPIcall,
    teacherDocUploadAPIcall,
    parentChildAddAPIcall,
    verfiyRegisterUserAPIcall,
    updateRegisterAPIcall,
    teacherEduAPIcall,
} from '../../Redux/Actions/registerAction';
import { getFileUploadAPIcall, uploadProfileAmznUrl } from '../../Redux/Actions/FileUploadAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { useHistory, useLocation } from 'react-router';
import { getStepsRegister } from '../../Helper/getStepsRegister';

export const registerContext = createContext<any>({});
const RegisterProvider = registerContext.Provider;

const Index: React.FunctionComponent = () => {
    const stepLength: any = { student: 4, parent: 4, teacher: 9 };
    const [active, setActive] = useState(0);
    const [whoIam, setWhoIam] = useState('');
    const [state, setState] = useState({
        otp: '',
        parent: {
            childs: [{ firstName: '', lastName: '', email: '', phoneCode: '+91', phoneNum: '', location: '' }],
        },
        teacher: {
            skills: [],
            file: null,
            identity: 'dl',
            bio: '',
            experience: [{ workplace: '', position: '', designation: '', from: new Date(), to: new Date() }],
        },
        student: {
            firstName: '',
            lastName: '',
            email: '',
            phoneCode: '+91',
            phoneNum: '',
            location: '',
            password: '',
            tc: false,
            promo: false,
            veriCode: '',
            veriMobile: '',
            gender: 'male',
            education: [{ schoolName: '', qualification: '', course: '', from: new Date(), to: new Date() }],
        },
    });
    const [editMode, setEditMode] = useState(false);
    const [cmsRegister, setcmsRegister] = useState(false);
    const [curActive, setCurActive] = useState(0);
    const [activeLength, setActiveLength] = useState(0);
    const [useUpdateApi, setUseUpdateApi] = useState(false);
    const [stuStepCom, setStuStepCom] = useState({ steps: [true, false, false, false, false], skip: false });
    const [parStepCom, setParStepCom] = useState([true, false, false, false, false]);
    const [teachStepCom, setTeachStepCom] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const [hideButtons, setHideButtons] = useState({ farword: false, backward: false });
    const initial = { title: 'Who are you?', comp: <WhoIam whoAmIHandler={(value: string) => setWhoIam(value)} /> };
    const [renderComponent, setRenderComponent] = useState<any>([initial]);
    const userData = useSelector((state: rootReducerType) => state.authReducer.userData);
    const fileData = useSelector((state: rootReducerType) => state.fileUploadReducer.fileData);
    const loader = useSelector((state: rootReducerType) => state.uiReducer.loader);
    const childToken = useSelector((state: rootReducerType) => state.authReducer.childTokens);

    const handleSPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, student: { ...state.student, password: e.target.value } });
    };
    const handleTc = () => {
        setState({ ...state, student: { ...state.student, tc: !state.student.tc } });
    };
    const handlePromo = () => {
        setState({ ...state, student: { ...state.student, promo: !state.student.promo } });
    };
    const handleSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            schoolName: e.target.value,
        };
        setState(data);
    };
    const handleQualification = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            qualification: e.target.value,
        };
        setState(data);
    };
    const handleCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            course: e.target.value,
        };
        setState(data);
    };
    const handleFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            from: new Date(e.target.value),
        };
        setState(data);
    };
    const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            to: new Date(e.target.value),
        };
        setState(data);
    };
    const handleVeriCode = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        setState({ ...state, student: { ...state.student, veriCode: (e.target as any).value } });
    };
    const handleVeriMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, student: { ...state.student, veriMobile: e.target.value } });
    };
    const handleNext = () => {
        setEditMode(false);
        userRegistration();
        if (active === 0) {
            goToNextPage();
        }
        if (active === 2 && whoIam === 'student') {
            goToNextPage();
            const data = { ...stuStepCom };
            data.steps[active] = true;
            setStuStepCom(data);
        } else if (active === 2 && whoIam === 'parent') {
            goToNextPage();
            const data = [...parStepCom];
            data[active] = true;
            setParStepCom(data);
        }
        if (
            (active === 5 && whoIam === 'student') ||
            (active === 5 && whoIam === 'parent') ||
            (active === 10 && whoIam === 'teacher')
        ) {
            otpVerifyCall();
        }
    };
    const goToNextPage = () => {
        if (whoIam !== '') {
            if (active === activeLength - 1) {
                setHideButtons({ ...hideButtons, farword: true });
            } else {
                setActive((prevState) => prevState + 1);
            }
        }
        if (whoIam === 'student') {
            const data = { ...stuStepCom };
            data.steps[active] = true;
            setStuStepCom(data);
        } else if (whoIam === 'parent') {
            const data = [...parStepCom];
            data[active] = true;
            setParStepCom(data);
        } else if (whoIam === 'teacher') {
            const data = [...teachStepCom];
            data[active] = true;
            setTeachStepCom(data);
        }
        if (whoIam === 'student' && stuStepCom.skip) {
            const data = { ...stuStepCom };
            data.skip = false;
            setStuStepCom(data);
        }
    };
    const checkGoNextOrNot = () => {
        if (whoIam === 'student' && stuStepCom.steps[active]) {
            goToNextPage();
        } else if (whoIam === 'student' && stuStepCom.skip) {
            goToNextPage();
            goToNextPage();
        } else if (whoIam === 'parent' && parStepCom[active]) {
            goToNextPage();
        } else if (whoIam === 'teacher' && teachStepCom[active]) {
            goToNextPage();
        }
    };

    const dispatch = useDispatch();
    const userRegistration = () => {
        let role = '';
        if (whoIam === 'student') {
            role = 'Student';
        } else if (whoIam === 'parent') {
            role = 'Guardian';
        } else if (whoIam === 'teacher') {
            role = 'Teacher';
        }
        const registerData: any = {
            email: state.student.email,
            password: state.student.password,
            firstName: state.student.firstName,
            lastName: state.student.lastName,
            role: role,
            location: state.student.location,
            firebaseToken: '123',
        };
        const educationData = state.student.education.map((item: any) => {
            return {
                school: item.schoolName,
                qualification: item.qualification,
                fieldOfStudy: item.course,
                startDate: item.from.toISOString(),
                endDate: item.to.toISOString(),
            };
        });
        const experienceData = state.teacher.experience.map((item: any) => {
            return {
                workPlace: item.workplace,
                position: item.position,
                department: item.designation,
                startDate: item.from.toISOString(),
                endDate: item.to.toISOString(),
            };
        });
        if (active === 1) {
            if (useUpdateApi) {
                delete registerData.role;
                delete registerData.firebaseToken;
                dispatch(updateRegisterAPIcall(registerData, goToNextPage));
            } else {
                dispatch(registerAPIcall(registerData, goToNextPage));
            }
        } else if (active === 3 && whoIam === 'student') {
            educationData.forEach((item, i: number) => {
                if (i === educationData.length - 1) {
                    dispatch(studentEduAPIcall(item, goToNextPage));
                } else {
                    dispatch(studentEduAPIcall(item));
                }
            });
        } else if (active === 4 && whoIam === 'teacher') {
            educationData.forEach((item, i: number) => {
                if (i === educationData.length - 1) {
                    dispatch(teacherEduAPIcall(item, goToNextPage));
                } else {
                    dispatch(teacherEduAPIcall(item));
                }
            });
        } else if (active === 6 && whoIam === 'teacher') {
            experienceData.forEach((item, i: number) => {
                if (i === experienceData.length - 1) {
                    dispatch(teacherExperienceAPIcall(item, goToNextPage));
                } else {
                    dispatch(teacherExperienceAPIcall(item));
                }
            });
        } else if (active === 7 && whoIam === 'teacher') {
            const skillSet = state.teacher.skills.map((item: string) => {
                return { skillName: item };
            });
            dispatch(teacherAddSkillAPIcall(skillSet, goToNextPage));
        } else if (active === 2 && whoIam === 'teacher') {
            const data = { bio: state.teacher.bio };
            dispatch(teacherAddBioAPIcall(data, userData?.userRoleId, goToNextPage));
        } else if (active === 8 && whoIam === 'teacher') {
            const file: any = state.teacher.file;
            dispatch(getFileUploadAPIcall(file?.name));
        } else if (active === 3 && whoIam === 'parent') {
            state.parent.childs.map((item: any, i: number) => {
                const data = {
                    firstName: item.firstName,
                    lastName: item.lastName,
                    email: item.email,
                    phoneNumber: `${item.phoneCode}${item.phoneNum}`,
                    location: item.location,
                };
                if (i === state.parent.childs.length - 1) {
                    dispatch(parentChildAddAPIcall(data, goToNextPage));
                } else {
                    dispatch(parentChildAddAPIcall(data));
                }
            });
        }
    };
    useEffect(() => {
        if (fileData) {
            const file: any = state.teacher.file;
            dispatch(uploadProfileAmznUrl(fileData.url, file, uploadDocument));
        }
    }, [fileData]);
    const uploadDocument = () => {
        const data = {
            fileName: fileData.fileName,
            documentType: state.teacher.identity,
        };
        dispatch(teacherDocUploadAPIcall(data, goToNextPage));
    };
    const routes = useHistory();
    const gotoWelcome = () => {
        routes.push({
            pathname: '/signup-success',
            state: {
                userName: `${state.student.firstName} ${state.student.lastName}`,
                emailData: {
                    email: state.student.email,
                    token: userData?.access_token,
                    whoIam: whoIam,
                    child: state.parent.childs,
                    childToken: childToken,
                },
            },
        });
    };
    const otpVerifyCall = () => {
        const data = {
            phoneNumber: `${state.student.veriCode}${state.student.veriMobile}`,
            code: state.otp,
        };
        dispatch(verifyOTPAPIcall(data, gotoWelcome));
    };
    const handleCodeSend = (value: string) => {
        const contact = { phoneNumber: `${state.student.veriCode}${state.student.veriMobile}` };
        dispatch(registerPhoneNumberAPIcall(contact, goToNextPage));
    };
    const resendPhoneCode = (value: string) => {
        const contact = { phoneNumber: value };
        dispatch(registerPhoneNumberAPIcall(contact));
    };

    const handleBack = () => {
        if (whoIam !== '') {
            if (hideButtons.farword) {
                setHideButtons({ ...hideButtons, farword: false });
            }
            if (active === 0) {
            } else {
                if (cmsRegister === false) {
                    setActive((prevState) => prevState - 1);
                } else if (cmsRegister === true && active !== 1) {
                    setActive((prevState) => prevState - 1);
                }
            }
        }
    };
    const checkGoBackOrNot = () => {
        if (whoIam === 'student' && stuStepCom.skip) {
            setActive((prevState) => prevState - 2);
        } else {
            handleBack();
        }
    };
    const changePhoneNumer = () => {
        setActive((prevState) => prevState - 1);
    };
    const parentGoBack = () => {
        const data = { ...state };
        data.parent.childs.push({
            firstName: '',
            lastName: '',
            email: '',
            phoneCode: '+91',
            phoneNum: '',
            location: '',
        });

        setState(data);
        setActive((prevState) => prevState - 1);
    };
    const goBack = () => {
        const data = { ...state };
        data.student.education.push({
            schoolName: '',
            qualification: '',
            course: '',
            from: new Date(),
            to: new Date(),
        });
        setState(data);
        setActive((prevState) => prevState - 1);
    };

    const experienceBack = () => {
        const data = { ...state };
        data.teacher.experience.push({
            workplace: '',
            position: '',
            designation: '',
            from: new Date(),
            to: new Date(),
        });
        setState(data);
        setActive((prevState) => prevState - 1);
    };

    const editHandler = (i: number) => {
        setEditMode(true);
        setCurActive(i);
        setActive((prevState) => prevState - 1);
    };

    const searchQuery = useLocation();
    const verifyUser = useSelector((state: rootReducerType) => state.authReducer.verifyUser);
    useEffect(() => {
        const getToken = searchQuery.search.split('ref=');
        if (getToken[1]) {
            dispatch(verfiyRegisterUserAPIcall(getToken[1]));
            setcmsRegister(true);
        }
    }, []);
    useEffect(() => {
        if (verifyUser) {
            let data = {
                firstName: '',
                lastName: '',
                email: '',
                phoneNum: '',
            };
            if (verifyUser.hasOwnProperty('Teacher')) {
                setWhoIam('teacher');
                const teacher = verifyUser.Teacher;
                data = {
                    firstName: teacher.firstName,
                    lastName: teacher.lastName,
                    email: verifyUser.email,
                    phoneNum: teacher.phoneNumber,
                };
            } else if (verifyUser.hasOwnProperty('Gauridan')) {
                setWhoIam('parent');
                const parent = verifyUser.Gauridan;
                data = {
                    firstName: parent.firstName,
                    lastName: parent.lastName,
                    email: verifyUser.email,
                    phoneNum: parent.phoneNumber,
                };
            } else if (verifyUser.hasOwnProperty('Student')) {
                setWhoIam('student');
                const student = verifyUser.Student;
                data = {
                    firstName: student.firstName,
                    lastName: student.lastName,
                    email: verifyUser.email,
                    phoneNum: student.phoneNumber,
                };
            }

            setState({ ...state, student: { ...state.student, ...data } });
            goToNextPage();
            setUseUpdateApi(true);
        }
    }, [verifyUser]);

    const skipPages = () => {
        setActive((prevState) => prevState + 2);
        const data = { ...stuStepCom };
        data.skip = true;
        setStuStepCom(data);
    };

    //==================component render========================//
    const renderStepper: any = {
        student: <StudentStepper active={active} />,
        parent: <ParentStepper active={active} />,
        teacher: <TeacherStepper active={active} />,
    };
    const student = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'Your Education', comp: <Education handler={handleNext} skip={skipPages} /> },
        {
            title: 'Your Education',
            comp: (
                <>
                    <PreviewCard data={state.student.education} title="Education" handleEdit={editHandler} />
                </>
            ),
        },
        { title: 'Verify Account', comp: <VerifyAccount onClick={handleCodeSend} /> },
        {
            title: 'Verify Account',
            comp: <VerificationCode onClick={resendPhoneCode} changeNumber={changePhoneNumer} />,
        },
    ];
    const parent = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'Your Children', comp: <ParentChildren handler={handleNext} /> },
        {
            title: 'Your Children',
            comp: <ParentPreviewCard data={state.parent.childs} title="Child" handleEdit={editHandler} />,
        },
        { title: 'Verify Account', comp: <VerifyAccount onClick={handleCodeSend} /> },
        {
            title: 'Verify Account',
            comp: <VerificationCode onClick={resendPhoneCode} changeNumber={changePhoneNumer} />,
        },
    ];
    const teacher = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'About You', comp: <TeacherBio /> },
        { title: 'Your Education', comp: <Education handler={handleNext} skip={goToNextPage} /> },
        {
            title: 'Your Education',
            comp: <PreviewCard data={state.student.education} title="Education" handleEdit={editHandler} />,
        },
        { title: 'Your Experience', comp: <TeacherExperience nextHandler={handleNext} skip={goToNextPage} /> },
        {
            title: 'Your Experience',
            comp: <ExperiencePreviewCard data={state.teacher.experience} title="Education" handleEdit={editHandler} />,
        },
        { title: 'Your Skill', comp: <TeacherSkills /> },
        { title: 'Your Identity', comp: <IdentyCard /> },
        { title: 'Verify Account', comp: <VerifyAccount onClick={handleCodeSend} /> },
        {
            title: 'Verify Account',
            comp: <VerificationCode onClick={resendPhoneCode} changeNumber={changePhoneNumer} />,
        },
    ];
    const getComponent = () => {
        switch (whoIam) {
            case 'student':
                const studentPages = [initial, ...student];
                setRenderComponent(studentPages);
                setActiveLength(studentPages.length);
                break;
            case 'parent':
                const parentPages = [initial, ...parent];
                setRenderComponent(parentPages);
                setActiveLength(parentPages.length);
                break;
            case 'teacher':
                const teacherPages = [initial, ...teacher];
                setRenderComponent(teacherPages);
                setActiveLength(teacherPages.length);
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        getComponent();
    }, [whoIam]);
    //==================component render========================//
    return (
        <NavigationMenu showMenuOptions={false}>
            <div className="signup__setup">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <Typography className="stepper__title">
                                Step {getStepsRegister(whoIam, active) + 1}/{stepLength[whoIam]}
                            </Typography>
                            <div className="stepper_marker">{renderStepper[whoIam]}</div>
                        </div>
                        <div className="col-md-6 mb-2">
                            <Typography className="stepper__title">Please tell us a bit about yourself...</Typography>
                            <Typography className="stepper__title">{renderComponent[active].title}</Typography>
                            <RegisterProvider
                                value={{
                                    setState: setState,
                                    state: state,
                                    student: state.student,
                                    editMode: editMode,
                                    currentActive: curActive,
                                    whoIam: whoIam,
                                    active: active,
                                    disable: cmsRegister,
                                    goNext: handleNext,
                                    goBack: goBack,
                                    experienceBack: experienceBack,
                                    parentGoBack: parentGoBack,
                                    setNext: goToNextPage,
                                    sendCode: handleCodeSend,
                                    skip: skipPages,
                                    studentHandler: {
                                        password: handleSPassword,
                                        tc: handleTc,
                                        promo: handlePromo,
                                        schoolName: handleSchool,
                                        qualification: handleQualification,
                                        course: handleCourse,
                                        from: handleFromDate,
                                        to: handleToDate,
                                        veriCode: handleVeriCode,
                                        veriMobile: handleVeriMobile,
                                    },
                                    parentHandler: {},
                                }}
                            >
                                <div className="choose__container">{renderComponent[active].comp}</div>
                            </RegisterProvider>
                        </div>
                    </div>
                </div>
                <IconButton className="controller-button back" onClick={checkGoBackOrNot}>
                    <ArrowBack className="icon" />
                </IconButton>
                {!hideButtons.farword && (
                    <IconButton className="controller-button" disabled={loader} onClick={checkGoNextOrNot}>
                        <ArrowForward className="icon" />
                    </IconButton>
                )}
            </div>
        </NavigationMenu>
    );
};

export default Index;
