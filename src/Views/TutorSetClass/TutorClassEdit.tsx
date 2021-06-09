import React, { useEffect, useState } from 'react';
import { TextField, Typography, makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import ReusableBanner from '../../components/ReusableBanner';
import NewSkillContainer from './NewSkillContainer';
import PageFooter from '../../components/PageFooter';
import { useDispatch } from 'react-redux';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { uploadResourceAction } from '../../Redux/Actions/teacherAction';
import OutlineButton from '../../components/Button/OutlineButton';
import Axios from 'axios';
import { freelanceTeacherSetClassAPIcall } from '../../Redux/Actions/freelanceTeacherAction';
import { spinner } from '../../Redux/Actions/uiAction';
import useMenuList from '../../Hooks/useMenuList';
import freeTutorSubjectList from '../../Hooks/tutor/freeTutorSubjectList';
import useUpcomingClass from '../../Hooks/tutor/useUpcomingClass';
import moment from 'moment';
import { checkTimeIsSameOrBefore } from '../../Helper/checkTimeIsSameOrBefore';

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
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1.53125rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',

        '&:hover': {
            cursor: 'pointer',
        },
    },
    smallText: {
        display: 'inline-block',
        marginLeft: '1.875rem',
        transform: 'translateY(-0.1rem)',
        fontFamily: 'CircularXXWeb-Book',
    },
});
const TutorClass: React.FunctionComponent = () => {
    const classes = useStyles();
    const menu = useMenuList('tutor');
    const subjectList = freeTutorSubjectList();
    const dispatch = useDispatch();
    const [file, setFile] = useState('');
    const [image, setImage] = useState('Max size (5MB)');
    const [putUrl, setPutUrl] = useState('');
    const [displayStudentInput, setDisplayStudentInput] = useState(true);
    const [imageName, setImageName] = useState('Max size (500mb)');
    const [uploadImageFileName, setUploadImageFIleName] = useState('Max size (500mb)');
    const [skillArray, setSkill] = useState<any>([]);
    const [skillArrayObject, setSkillArrayObject] = useState<any>([]);
    const [subject, setSubject] = useState('');
    const [noOfStudents, setNoOfStudents] = useState('');
    const [pricePerStudent, setPricePerStudent] = useState('');
    const [classTitle, setClassTitle] = useState('');
    const [description, setDescription] = useState('');
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekArray = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const [toggleWeeks, setToggleWeeks] = useState(false);
    const [toggleDays, setToggleDays] = useState(false);
    const [selectValue, setValue] = useState('Never');
    const [daySelected, setSelectedDay] = useState<any>([]);
    const [weeksSelected, setSelectedWeek] = useState<any>([]);
    const [weeksSelectedArray, setSelectedWeekArray] = useState<any>([]);
    const [daysSelectedArray, setSelectedDayArray] = useState<any>([]);
    const [subjectName, setSubjectName] = useState('');
    const [subjectDate, setSubjectDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [resImageUploadUrl, setResImageUploadUrl] = useState('');
    const [resResourceUploadUrl, setResResourceUploadUrl] = useState('');
    const [resourcefile, setResourceFile] = useState('');
    const totalClasses = useUpcomingClass();
    const [totalUpcomingClasses, setTotalUpcomingClasses] = useState([]);
    const [editClassData, setEditClassData] = useState();
    const [routineInterval, setRoutineInterval] = useState("");

    useEffect(() => {
        let routineData = JSON.parse(localStorage.getItem('setClassEdit')).sessionRoutine
        setRoutineInterval(routineData.repeatInterva)


        if (location?.state?.hasOwnProperty('setClassEdit')) {
            setEditClassData((location as any)?.state?.setClassEdit);
            let classData = (location as any)?.state?.setClassEdit;
        }
    }, []);


    useEffect(() => {
        if (totalClasses) {
            const classdata: any = [];
            totalClasses.forEach((item: any) => {
                const tempDate = moment(new Date()).format('DD/MM/YY');
                if (item.scheduledOn === tempDate && checkTimeIsSameOrBefore(item.startTime)) {
                    classdata.push(item);
                }
            });
            setTotalUpcomingClasses(classdata);
        }
    }, [totalClasses]);

    const addSchedule = (value: string) => {
        setValue(value);
        if (value == 'Never') {
            setToggleDays(false);
            setToggleWeeks(false);
        } else if (value == 'Every Week' || value == 'Every 2 Weeks') {
            setToggleDays(true);
            setToggleWeeks(false);
        } else if (value == 'Every Month') {
            setToggleDays(true);
            setToggleWeeks(true);
        }
    };
    const chooseWeek = (val: string) => {
        setSelectedWeek([...weeksSelected, { week: val }]);
        if (weeksSelectedArray.includes(val)) {
            let updatedWeek = weeksSelectedArray.filter((week: any) => {
                week != val;
            });
            setSelectedWeekArray(updatedWeek);
        } else {
            setSelectedWeekArray([...weeksSelectedArray, val]);
        }
    };
    const selectedDay = (val: string) => {
        setSelectedDay([...daySelected, { day: val }]);
        if (daysSelectedArray.includes(val)) {
            let updatedDay = daysSelectedArray.filter((day: any) => {
                day != val;
            });
            setSelectedDayArray(updatedDay);
        } else {
            setSelectedDayArray([...daysSelectedArray, val]);
        }
    };

    const handleDescription = (e: any) => {
        setDescription(e.target.value);
    };

    const handleSubject = (e: string) => {
        setSubjectName(e);
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
            let data = {
                sessionName: classTitle,
                description: description,
                subjectName: subjectName,
                scheduledOn: subjectDate,
                startTime: startTime,
                endTime: endTime,
                price: pricePerStudent,
                maxNumberOfStudents: noOfStudents,
                isRepeat: true,
                repeatInterval: 'Week',
                repeatOn: daySelected,
                repeatWeeks: weeksSelected,
                tags: skillArrayObject,
                resources: resource,
                coverImage: cover,
            };
            dispatch(freelanceTeacherSetClassAPIcall(data));
        }
    };

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="tutor_class_container">
                <div className="tutor_class_subcontainer">
                    <ReusableBanner heading={'Set Class'} description={'Create and publish a new class .'} />
                    <div className="tutor_class_subcontainer2">
                        <div className="row horizontalline"></div>
                        <div className="reusableDate">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="date_time">
                                        <div className="col-md-12 p-0">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="print_dateTime">
                                                        <Typography className="text1">Date and Time</Typography>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="print_timeline">
                                                        <ul>
                                                            {totalUpcomingClasses.map((item: any) => (
                                                                <li>
                                                                    <Typography className="text_list">
                                                                        <span>{item.subjectName}</span>
                                                                    </Typography>
                                                                    <Typography className="text_list">
                                                                        {JSON.parse(localStorage.getItem('setClassEdit'))? JSON.parse(localStorage.getItem('setClassEdit'))["startTime"] : item.start}-{item.end}
                                                                    </Typography>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0 border_dateTime">
                                    <div className="setDateTime">
                                        <>
                                            <div className="reusableDateandTime col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 p-0">
                                                        <TextField
                                                            className="line-input-large"
                                                            label="Date"
                                                            type="date"
                                                            value={JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["date"] : ""}
                                                            onChange={(e) => setSubjectDate(e.target.value)}
                                                            fullWidth
                                                        />
                                                    </div>
                                                    <div className="col-md-7 p-0">
                                                        <div className="sub_rows">
                                                            <div className="input_row">
                                                                <div className="input_text">
                                                                    <TextField
                                                                        className="line-input-large"
                                                                        label="Start Time"
                                                                        type="time"
                                                                        fullWidth
                                                                        // value={homework.endTime}
                                                                        onChange={(e) => setStartTime(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="input_text">
                                                                    <TextField
                                                                        className="line-input-large"
                                                                        label="End Time"
                                                                        type="time"
                                                                        fullWidth
                                                                        // value={homework.endTime}
                                                                        onChange={(e) => setEndTime(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-11 col-12 p-0">
                                                        <SelectFieldUnderline
                                                            label="Repeat"
                                                            value={selectValue}
                                                            className="select-large"
                                                            options={[
                                                                'Never',
                                                                'Every Week',
                                                                'Every 2 Weeks',
                                                                'Every Month',
                                                            ]}
                                                            getValue={(value) => addSchedule(value)}
                                                        />
                                                    </div>

                                                    {toggleWeeks && (
                                                        <div className="col-md-12">
                                                            <div className="week_container">
                                                                <div className="row">
                                                                    <Typography className="text">Choose</Typography>
                                                                </div>
                                                                <div className="row choose_weeks">
                                                                    {weekArray.map((val, index) => (
                                                                        <Typography
                                                                            className={
                                                                                weeksSelectedArray.includes(val)
                                                                                    ? 'border-boxes'
                                                                                    : 'boxes'
                                                                            }
                                                                            key={index}
                                                                            onClick={() => chooseWeek(val)}
                                                                        >
                                                                            {val}
                                                                        </Typography>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {toggleDays && (
                                                        <div className="col-md-12">
                                                            <div className="week_container">
                                                                <div className="row">
                                                                    <Typography className="text">On</Typography>
                                                                </div>
                                                                <div className="row choose_weeks">
                                                                    {daysArray.map((val, index) => (
                                                                        <Typography
                                                                            className={
                                                                                daysSelectedArray.includes(val)
                                                                                    ? 'border-boxes'
                                                                                    : 'boxes'
                                                                            }
                                                                            key={index}
                                                                            onClick={() => selectedDay(val)}
                                                                        >
                                                                            {val}
                                                                        </Typography>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="col-md-12 p-0 horizontalline"></div>
                                                </div>
                                            </div>
                                        </>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="class_time ">
                                        <Typography className="text1">Class</Typography>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0 border_dateTime">
                                    <div className="setClass">
                                        <>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 p-0">
                                                        <SelectFieldUnderline
                                                            label="Subject"
                                                            value={JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["subjectName"] : subjectName}
                                                            className="select-large"
                                                            options={subjectList}
                                                            getValue={(e) => {
                                                                handleSubject(e);
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
                                                                            fullWidth
                                                                            value = {JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["maxNumberOfStudents"] : ""}
                                                                            onChange={handleNoOfStudents}
                                                                        />
                                                                    </div>
                                                                    <div className="input_text">
                                                                        <TextField
                                                                            className="line-input-large"
                                                                            label="Price per student"
                                                                            fullWidth
                                                                            value={JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["price"] : ""}
                                                                            onChange={handlePricePerStudent}
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
                                                            fullWidth
                                                            value={JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["sessionName"] : ""}
                                                            onChange={handleTitle}
                                                        />
                                                    </div>
                                                    <div className="col-md-11 p-0">
                                                        <div className="description_container">
                                                            <Typography className="title">Description</Typography>
                                                            <textarea
                                                                rows={5}
                                                                style={{ fontSize: '2.625rem', width: '100%' }}
                                                                className="textbox"
                                                                value={JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["activityDesc"] : ""}
                                                                Placeholder={JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["activityDesc"] : ""}
                                                                onChange={handleDescription}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 p-0">
                                                        <div className="sub_heading_container">
                                                            <Typography className="sub_heading">Resources</Typography>
                                                        </div>
                                                    </div>
                                                    <div className="upload_component">
                                                        <input
                                                            onChange={async (e: any) => {
                                                                setFile(e.target.files[0]);
                                                                setImageName(e.target.files[0].name);
                                                                const url: any = await dispatch(
                                                                    uploadResourceAction(e.target.files[0].name)
                                                                );
                                                                url && setPutUrl(url?.url ? url.url : null);
                                                                url &&
                                                                    url &&
                                                                    setResResourceUploadUrl(url?.url ? url.url : null);
                                                            }}
                                                            style={{ display: 'none' }}
                                                            type="file"
                                                            id="file"
                                                        ></input>
                                                        <label className={classes.upload} htmlFor="file">
                                                            Upload
                                                        </label>

                                                        <div>
                                                            <Typography
                                                                className="subtext"
                                                                style={{ transform: 'translate(3rem, 1.8rem)' }}
                                                            >
                                                                {imageName}
                                                            </Typography>
                                                        </div>
                                                        <input
                                                            id="upload-button"
                                                            type="file"
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>

                                                    <div className="col-12 p-0 horizontalline"></div>
                                                </div>
                                            </div>
                                        </>
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
                                    <div className="outerAddSkill">
                                        <NewSkillContainer skillArray={skillArray} setSkill={setSkill} />
                                        <div className="  horizontalline"></div>
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
                                                                imageFile
                                                                    ? URL.createObjectURL(imageFile)
                                                                    : JSON.parse(localStorage.getItem('setClassEdit')) ? JSON.parse(localStorage.getItem('setClassEdit'))["coverImg"] : commonImg.photo
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
                                                                    <div className="upload_button">
                                                                        <label htmlFor="imgg" className="text">
                                                                            Upload
                                                                        </label>
                                                                    </div>
                                                                    <div>
                                                                        <Typography className="subtext">
                                                                            {uploadImageFileName}
                                                                        </Typography>
                                                                    </div>
                                                                    <input
                                                                        id="imgg"
                                                                        type="file"
                                                                        onChange={async (e: any) => {
                                                                            setImageFile(e.target.files[0]);
                                                                            setUploadImageFIleName(
                                                                                e.target.files[0].name
                                                                            );
                                                                            const url: any = await dispatch(
                                                                                uploadResourceAction(
                                                                                    e.target.files[0].name
                                                                                )
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
                                                        <div className="c_button">
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
                </div>
                <div className="commonFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorClass;
