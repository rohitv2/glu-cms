import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import ReusableSubjectDesc from './ReusableSubjectDesc';
import NewSkillContainer from './NewSkillContainer';
import { uploadResourceAction } from '../../Redux/Actions/teacherAction';
import Axios from 'axios';
import commonImg from '../../Assets/images';
import PageFooter from '../../components/PageFooter';
import { useDispatch, useSelector } from 'react-redux';
import { freelanceTeacherRecordClassAPIcall } from '../../Redux/Actions/freelanceTeacherAction';
import { whiteboard } from '../../Utility/baseurls';
import { getToken } from '../../Utility/API';
import OutlineButton from '../../components/Button/OutlineButton';
import { spinner } from '../../Redux/Actions/uiAction';
import useMenuList from '../../Hooks/useMenuList';
import freeTutorSubjectList from '../../Hooks/tutor/freeTutorSubjectList';
import { gotoTutorDashboard } from '../../Helper/tutor/gotoTutorDashboard';
import { useHistory } from 'react-router';
import { checkSchoolOrFreelancer } from '../../Helper/checkSchoolOrFreelancer';

const TutorRecordClass: React.FunctionComponent = () => {
    const menu = useMenuList('tutor');
    const dispatch = useDispatch();
    const routes = useHistory();
    const [uploadResourceFileName, setUploadResourceFIleName] = useState('Max size (500mb)');
    const [uploadImageFileName, setUploadImageFIleName] = useState('Max size (500mb)');
    const [resourcefile, setResourceFile] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [resImageUploadUrl, setResImageUploadUrl] = useState('');
    const [skillSet, setSkillSet] = useState([]);
    const [disableRecordClass, setDisableRecordClass] = useState(true);
    const [resResourceUploadUrl, setResResourceUploadUrl] = useState('');
    const [state, setState] = useState({ subject: '', title: '', description: '', student: '', price: '' });
    const classSaved = useSelector((state: any) => state.freelanceTeacherReducer.recordClassUploaded);
    const sessionIdData = useSelector((state: any) => state.freelanceTeacherReducer.sessionIdData);
    const subjectDropdown = freeTutorSubjectList();
    const finalSubmit = async () => {
        dispatch(spinner(true));
        const resOfPutResource = await Axios.put(
            `https://cors-anywhere.herokuapp.com/${resResourceUploadUrl}`,
            resourcefile,
            {
                headers: {
                    'x-amz-acl': 'public-read',
                    'Content-Type': 'image/jpeg',
                },
            }
        );
        const resOfPutImage = await Axios.put(`https://cors-anywhere.herokuapp.com/${resImageUploadUrl}`, imageFile, {
            headers: {
                'x-amz-acl': 'public-read',
                'Content-Type': 'image/jpeg',
            },
        });

        let resource = null;
        let cover = null;
        if (resOfPutResource?.status === 200 && resOfPutImage?.status === 200) {
            resource = resResourceUploadUrl.split('?')[0];
            cover = resImageUploadUrl.split('?')[0];
            const data = {
                title: state.title,
                description: state.description,
                subjectId: state.subject,
                price: state.price,
                maxStudent: state.student,
                tags: skillSet,
                resource: resource,
                coverImage: cover,
                type: localStorage.getItem('toggleState') === 'isSchool' ? 'School' : 'Freelancer',
            };
            dispatch(freelanceTeacherRecordClassAPIcall(data));
        }
    };

    const handleState = (data: any) => {
        setState({ ...state, ...data });
    };
    useEffect(() => {
        if (classSaved) {
            setDisableRecordClass(false);
        }
    }, [classSaved]);

    const handleRecordButton = () => {
        const token = getToken();
        let id = null;
        if (sessionIdData) {
            id = sessionIdData.id;
        }
        if (token !== '') {
            const url = `${whiteboard}${state.title.replace(
                ' ',
                '-'
            )}&sessionId=${id}&type=${checkSchoolOrFreelancer()}&token=${token.split(' ')[1]}&temp=`;
            window.open(url, '_self');
        }
    };
    return (
        <NavigationMenu
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            background="secondary"
        >
            <div className="tutor_record_container">
                <div className="tutor_record_container_1">
                    <div className="tutor_record_container_1_1">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <Typography className="text">Record Class</Typography>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="tutor_record_container_1_1_subcontainer">
                                    <div className="row">
                                        <div className="col-md-12 p-0">
                                            <Typography className="mainText">
                                                Create and publish a new class.
                                            </Typography>
                                        </div>
                                        <OutlineButton
                                            disable={disableRecordClass}
                                            exClass="recordButton"
                                            text="Record"
                                            btnClick={handleRecordButton}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <VideoLectureContainer2 /> */}
                    </div>
                </div>
                <div className="tutor_record_container_2">
                    <div className="row horizontalline"></div>
                    <div className="reusableDate">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="record_class_title">
                                    <Typography className="text">Class</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="recordClass">
                                    <ReusableSubjectDesc
                                        getStateValue={handleState}
                                        subjects={subjectDropdown}
                                        displayStudentInput={true}
                                        state={state}
                                        setState={setState}
                                    />
                                </div>

                                <div className="col-md-12 p-0" style={{ marginLeft: '3.2rem' }}>
                                    <div className="sub_heading_container">
                                        <Typography className="sub_heading">Resources</Typography>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '3.2rem' }} className="upload_component">
                                    <div className="">
                                        <label
                                            htmlFor="file"
                                            style={{
                                                fontSize: '1.25rem',
                                                paddingTop: '0.3rem',
                                                paddingBottom: '0.3rem',
                                                marginBottom: '0',
                                                cursor: 'pointer',
                                            }}
                                            className="text upload_button"
                                        >
                                            Upload
                                        </label>
                                    </div>
                                    <div className="upload__container">
                                        <Typography className="subtext">{uploadResourceFileName}</Typography>
                                    </div>
                                    <input
                                        onChange={async (e: any) => {
                                            setResourceFile(e.target.files[0]);
                                            setUploadResourceFIleName(e.target.files[0].name);
                                            const url: any = await dispatch(
                                                uploadResourceAction(e.target.files[0].name)
                                            );
                                            url && setResResourceUploadUrl(url?.url ? url.url : null);
                                        }}
                                        type="file"
                                        id="file"
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="class_time">
                                    <Typography className="text1">Tags</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="record_skill_container">
                                    <NewSkillContainer skillArray={skillSet} setSkill={setSkillSet} />
                                    <div className=" record_horizontalline"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="class_time">
                                    <Typography className="text1">Cover Image</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="addCoverImg">
                                    <>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-5 p-0 ">
                                                    <img
                                                        className="img-fluid"
                                                        src={
                                                            imageFile ? URL.createObjectURL(imageFile) : commonImg.photo
                                                        }
                                                        width="301px"
                                                        height="233px"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="col-md-7 p-0 ">
                                                    <div className="upload_container">
                                                        <div className="upload_image_container">
                                                            <div className="col-md-12 p-0">
                                                                <Typography className="textCover">
                                                                    Add A Cover Image To Your Class
                                                                </Typography>
                                                            </div>
                                                            <div className="upload_component">
                                                                <div className="">
                                                                    <label
                                                                        htmlFor="imgg"
                                                                        style={{
                                                                            fontSize: '1.25rem',
                                                                            paddingTop: '0.3rem',
                                                                            paddingBottom: '0.3rem',
                                                                            marginBottom: '0',
                                                                            cursor: 'pointer',
                                                                        }}
                                                                        className="text upload_button"
                                                                    >
                                                                        Upload
                                                                    </label>
                                                                </div>
                                                                <div className="upload__container">
                                                                    <Typography className="subtext">
                                                                        {uploadImageFileName}
                                                                    </Typography>
                                                                </div>
                                                                <input
                                                                    id="imgg"
                                                                    type="file"
                                                                    onChange={async (e: any) => {
                                                                        setImageFile(e.target.files[0]);
                                                                        setUploadImageFIleName(e.target.files[0].name);
                                                                        const url: any = await dispatch(
                                                                            uploadResourceAction(e.target.files[0].name)
                                                                        );
                                                                        url &&
                                                                            setResImageUploadUrl(
                                                                                url?.url ? url.url : null
                                                                            );
                                                                    }}
                                                                    style={{ display: 'none' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="publish_cancel_buttons">
                                                    <OutlineButton
                                                        exClass="p_button"
                                                        text="Publish"
                                                        btnClick={finalSubmit}
                                                    />
                                                    <div
                                                        className="c_button"
                                                        onClick={() => gotoTutorDashboard(routes)}
                                                    >
                                                        <Typography className="text">Cancel</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonWhiteFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorRecordClass;
