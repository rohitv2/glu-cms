import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import ReusableSubjectDesc from './ReusableSubjectDesc';
import ReusableCoverImage from './ReusableCoverImage';
import NewSkillContainer from './NewSkillContainer';
import VideoLectureContainer2 from '../../components/VideoLectureContainer2';
import commonImg from '../../Assets/images';
import PageFooter from '../../components/PageFooter';
import { useDispatch, useSelector } from 'react-redux';
import { getFreelanceTeacherSubject } from '../../Redux/Actions/freelanceTeacherAction';
import { useHistory, useLocation } from 'react-router';
import { uploadResourceAction } from '../../Redux/Actions/teacherAction';
import { spinner } from '../../Redux/Actions/uiAction';
import Axios from 'axios';
import { freelanceTeacherUpdateRecordClassAPIcall } from '../../Redux/Actions/freelanceTeacherAction';
import OutlineButton from '../../components/Button/OutlineButton';
import { getToken } from '../../Utility/API';
import { whiteboard } from '../../Utility/baseurls';
import useMenuList from '../../Hooks/useMenuList';
import LinkOpnerButton from '../../components/Button/LinkOpnerButton';
import { checkSchoolOrFreelancer } from '../../Helper/checkSchoolOrFreelancer';

const TutorRecord: React.FunctionComponent = () => {
    const [skillSet, setSkillSet] = useState([]);
    const [state, setState] = useState<any>({
        subject: '',
        subjectName: '',
        title: '',
        description: '',
        student: '',
        price: '',
        videolink: '',
        coverImage: '',
        resource: '',
    });
    const [subjectDropdown, setSubjectDropdown] = useState([]);
    const [resImageUploadUrl, setResImageUploadUrl] = useState('');
    const [uploadResourceFileName, setUploadResourceFIleName] = useState('Max size (500mb)');
    const [resourcefile, setResourceFile] = useState('');
    const [resResourceUploadUrl, setResResourceUploadUrl] = useState('');
    const subjectList = useSelector((state: any) => state.freelanceTeacherReducer.freelanceSubjectList);

    const dispatch = useDispatch();
    const findRoute = useLocation();
    const routes = useHistory();
    useEffect(() => {
        dispatch(getFreelanceTeacherSubject());
        if (findRoute?.state?.hasOwnProperty('record')) {
            const data = (findRoute as any)?.state?.record;
            setState({ ...state, ...data });
            if (data?.tags?.length) {
                setSkillSet(data.tags);
            }
            if (data?.resource) {
            }
        }
    }, []);
    useEffect(() => {
        if (subjectList) {
            const data = subjectList.map((item: any) => {
                return { subjectName: item.subjectName, id: item.id };
            });
            setSubjectDropdown(data);
        }
    }, [subjectList]);

    const menu = useMenuList('tutor');
    const handleState = (data: any) => {
        setState({ ...state, ...data });
    };
    const handleRecordButton = () => {
        const token = getToken();
        if (token !== '') {
            const url = `${whiteboard}${state.title.replace(' ', '-')}&sessionId=${
                state.id
            }&type=${checkSchoolOrFreelancer()}&token=${token.split(' ')[1]}`;
            window.open(url, '_self');
        }
    };
    const handleSubmit = async () => {
        dispatch(spinner(true));
        const data: any = {
            title: state.title,
            description: state.description,
            subjectId: state.subject,
            price: state.price,
            maxStudent: state.student,
            tags: skillSet,
        };
        if (state.coverImage?.name || state.resourcefile?.name) {
            const resOfPutImage = await Axios.put(
                `https://cors-anywhere.herokuapp.com/${resImageUploadUrl}`,
                state.coverImage,
                {
                    headers: {
                        'x-amz-acl': 'public-read',
                        'Content-Type': 'image/jpeg',
                    },
                }
            );
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
            let cover = null;
            let resource = null;

            if (resOfPutImage?.status === 200) {
                cover = resImageUploadUrl.split('?')[0];
                data.coverImage = cover;
            }
            if (resOfPutResource?.status === 200) {
                resource = resResourceUploadUrl.split('?')[0];
                data.resource = resource;
            }
        }
        dispatch(freelanceTeacherUpdateRecordClassAPIcall(data, state.id, handleRoutes));
    };

    const handleRoutes = () => {
        routes.push('/tutor/my-classes');
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
                                            <Typography className="mainText">{state.title}</Typography>
                                        </div>
                                        <OutlineButton
                                            exClass="recordButton"
                                            text="Record Again"
                                            btnClick={handleRecordButton}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <VideoLectureContainer2 link={state.videolink} />
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
                                        displayStudentInput={true}
                                        subjects={subjectDropdown}
                                        state={state}
                                        setState={setState}
                                        // clickHandler={handleClick}
                                        // chengeHandler={handleChange}
                                        // ref={hiddenFileInput}
                                    />
                                </div>
                                <div className="col-md-12 p-0" style={{ marginLeft: '3.2rem' }}>
                                    <div className="sub_heading_container">
                                        <Typography className="sub_heading">Resources</Typography>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '3.2rem' }} className="upload_component">
                                    <div className="upload__container">
                                        <label
                                            htmlFor="file"
                                            style={{ cursor: 'pointer', marginTop: '0.5rem' }}
                                            className="text upload_button"
                                        >
                                            Upload
                                        </label>
                                    </div>
                                    <div className="upload__container">
                                        {state.resource === '' ||
                                        state.resource === null ||
                                        (resourcefile as any)?.name ? (
                                            <Typography className="subtext">{uploadResourceFileName}</Typography>
                                        ) : (
                                            <LinkOpnerButton
                                                exClassName="subtext"
                                                width="100%"
                                                linkName={state.resource}
                                            />
                                        )}
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
                                    <ReusableCoverImage
                                        coverUrl={state.resource}
                                        submit={handleSubmit}
                                        handleFile={async (file: File) => {
                                            setState({ ...state, coverImage: file });
                                            const url: any = await dispatch(uploadResourceAction(file.name));
                                            url && setResImageUploadUrl(url?.url ? url.url : null);
                                        }}
                                        imgSrc={
                                            state.coverImage
                                                ? state.coverImage.name
                                                    ? URL.createObjectURL(state.coverImage)
                                                    : state.coverImage
                                                : commonImg.tutorDashboard
                                        }
                                    />
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

export default TutorRecord;
