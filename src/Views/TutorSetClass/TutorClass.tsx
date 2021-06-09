import React, { useEffect, useState } from 'react';
import { TextField, Typography, makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import ReusableBanner from '../../components/ReusableBanner';
import NewSkillContainer from './NewSkillContainer';
import PageFooter from '../../components/PageFooter';
import { useDispatch } from 'react-redux';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import {
    createZoomLiveMeeting,
    fetchSessionCount,
    teacherSetClassAPIcall,
    uploadResourceAction,
} from '../../Redux/Actions/teacherAction';
import OutlineButton from '../../components/Button/OutlineButton';
import Axios from 'axios';
import {
    freelanceTeacherSetClassAPIcall,
    freelanceTeacherUpdateClassAPIcall,
} from '../../Redux/Actions/freelanceTeacherAction';
import { spinner } from '../../Redux/Actions/uiAction';
import useMenuList from '../../Hooks/useMenuList';
import freeTutorSubjectList from '../../Hooks/tutor/freeTutorSubjectList';
import useUpcomingClass from '../../Hooks/tutor/useUpcomingClass';
import moment from 'moment';
import { checkTimeIsSameOrBefore } from '../../Helper/checkTimeIsSameOrBefore';
import { useHistory, useLocation } from 'react-router';
import { gotoTutorDashboard } from '../../Helper/tutor/gotoTutorDashboard';
import { gotoTutorCalendar } from '../../Helper/tutor/gotoTutorCalendar';

import LinkOpnerButton from '../../components/Button/LinkOpnerButton';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import { checkSchoolOrFreelancer } from '../../Helper/checkSchoolOrFreelancer';
import SearchProfilePreview from '../../components/Dashobard/SearchProfilePreview';
import { useSearchStudent } from '../../Hooks/students/useSearchStudent';
import { getTimeZone, zoomPassword } from '../../Utility/zoom';
import { getAuthData } from '../../Utility/API';

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
    input: {
        '& .MuiInput-input': {
            fontSize: '2rem !important',
        },
    },
});
const TutorClass: React.FunctionComponent = () => {
    const classes = useStyles();
    const menu = useMenuList('tutor');
    const routes = useHistory();
    const subjectList = freeTutorSubjectList();
    const dispatch = useDispatch();
    const [file, setFile] = useState('');
    const [displayStudentInput, setDisplayStudentInput] = useState(true);
    const [imageName, setImageName] = useState('Max size (500mb)');
    const [uploadImageFileName, setUploadImageFIleName] = useState('Max size (500mb)');
    const [skillArray, setSkill] = useState<any>([]);
    const [noOfStudents, setNoOfStudents] = useState('');
    const [pricePerStudent, setPricePerStudent] = useState('');
    const [classTitle, setClassTitle] = useState('');
    const [description, setDescription] = useState('');
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekArray = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const [toggleWeeks, setToggleWeeks] = useState(false);
    const [toggleDays, setToggleDays] = useState(false);
    const [selectValue, setValue] = useState('');
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
    const totalClasses = useUpcomingClass();
    const [totalUpcomingClasses, setTotalUpcomingClasses] = useState([]);
    const [resUrl, setResUrl] = useState('');
    const [coverResUrl, setCoverResUrl] = useState('');
    const [sessionId, setSessionId] = useState(0);
    const [search, setSearch] = useState('');
    const searchResult = useSearchStudent(search);
    const [studentList, setStudentList] = useState<any>([]);

    const findRoutes: any = useLocation();
    useEffect(() => {
        if (findRoutes?.state?.editClass) {
            const data = findRoutes.state.editClass;
            setSubjectDate(moment(data.scheduledOn, 'DD/MM/YY').format('YYYY-MM-DD'));
            setStartTime(moment(data.start, 'h:mma').format('HH:mm'));
            setEndTime(moment(data.end, 'h:mma').format('HH:mm'));
            addSchedule(data.sessionRoutine?.repeatInterval);
            if (data.sessionRoutine?.repeatInterval == 'Never') {
                setToggleDays(false);
                setToggleWeeks(false);
            } else if (
                data.sessionRoutine?.repeatInterval == 'Week' ||
                data.sessionRoutine?.repeatInterval == 'Every 2 Weeks'
            ) {
                setValue(
                    data.sessionRoutine?.repeatInterval == 'Week' ? 'Every Week' : data.sessionRoutine?.repeatInterval
                );
                setToggleDays(true);
                setToggleWeeks(false);
            } else if (data.sessionRoutine?.repeatInterval == 'Every Month') {
                setToggleDays(true);
                setToggleWeeks(true);
            }
            setSelectedDay(data.sessionRoutine?.repeatOn);
            setSelectedDayArray(data.sessionRoutine?.repeatOn?.map((data: any) => data.day));
            setSelectedWeekArray(data.sessionRoutine?.repeatWeeks?.map((data: any) => data.week));
            setStudentList(data.students);
            setSubjectName(data.subjectId);
            setNoOfStudents(data.maxNumberOfStudents);
            setPricePerStudent(data.price);
            setClassTitle(data.sessionName);
            setDescription(data.description);
            setResUrl(data.resources);
            setCoverResUrl(data.coverImg);
            setSessionId(data.id);
            if (data.tags) {
                const tags = data.tags.map((item: any) => {
                    return item.tag;
                });
                setSkill(tags);
            }
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
        if (weeksSelectedArray.includes(val)) {
            let updatedWeek = weeksSelectedArray.filter((week: any) => week != val);
            setSelectedWeekArray(updatedWeek);
            let weekSelected = [];
            for (let i = 0; i < updatedWeek.length; i++) {
                weekSelected.push({ week: updatedWeek[i] });
            }
            setSelectedWeek(weekSelected);
        } else {
            let updatedWeek = [...weeksSelectedArray, val];
            let weekSelected = [];
            for (let i = 0; i < updatedWeek.length; i++) {
                weekSelected.push({ week: updatedWeek[i] });
            }
            setSelectedWeekArray([...weeksSelectedArray, val]);
            setSelectedWeek(weekSelected);
        }
    };
    const selectedDay = (val: string) => {
        if (daysSelectedArray.includes(val)) {
            let updatedDay = daysSelectedArray.filter((day: any) => day != val);
            setSelectedDayArray(updatedDay);
            let daySelected = [];
            for (let i = 0; i < updatedDay.length; i++) {
                daySelected.push({ day: updatedDay[i] });
            }
            setSelectedDay(daySelected);
        } else {
            let updatedDay = [...daysSelectedArray, val];
            let daySelected = [];
            for (let i = 0; i < updatedDay.length; i++) {
                daySelected.push({ day: updatedDay[i] });
            }
            setSelectedDayArray([...daysSelectedArray, val]);
            setSelectedDay(daySelected);
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

    const createMeetingSubmit = async () => {
        const data = {
            topic: classTitle,
            type: 1,
            start_time: new Date(subjectDate + ' ' + startTime).toISOString(),
            duration: 1,
            timezone: getTimeZone,
            host_email: getAuthData()?.email,
            password: zoomPassword,
            agenda: description,
            settings: {
                host_video: false,
                participant_video: false,
                join_before_host: false,
                mute_upon_entry: true,
                watermark: false,
                use_pmi: false,
                approval_type: 0,
            },
        };
        dispatch(createZoomLiveMeeting(data, finalSubmit));
    };

    const finalSubmit = async () => {
        dispatch(spinner(true));
        const resOfPutResource = await Axios.put(`https://cors-anywhere.herokuapp.com/${resResourceUploadUrl}`, file, {
            headers: {
                'x-amz-acl': 'public-read',
                'Content-Type': 'image/jpeg',
            },
        });
        const resOfPutImage = await Axios.put(`https://cors-anywhere.herokuapp.com/${resImageUploadUrl}`, imageFile, {
            headers: {
                'x-amz-acl': 'public-read',
                'Content-Type': 'image/jpeg',
            },
        });

        let resource = null;
        let cover = null;
        const totalTags = skillArray.map((item: any) => {
            return { tag: item };
        });
        let data: any = {
            sessionName: classTitle,
            description: description,
            subjectId: subjectName,
            scheduledOn: subjectDate,
            startTime: startTime,
            endTime: endTime,
            price: pricePerStudent,
            maxNumberOfStudents: noOfStudents,
            isRepeat: selectValue === 'Never' ? false : true,
            repeatInterval: selectValue,
            repeatOn: daySelected,
            repeatWeeks: weeksSelected,
            tags: totalTags,
        };
        if (sessionId === 0) {
            if ((file as any)?.name && resOfPutResource?.status === 200) {
                resource = resResourceUploadUrl.split('?')[0];
                if (checkSchoolOrFreelancer() === 'Freelancer') {
                    data.resources = resource;
                } else if (checkSchoolOrFreelancer() === 'School') {
                    data.resource = resource;
                }
            }
            if ((imageFile as any)?.name && resOfPutImage?.status === 200) {
                cover = resImageUploadUrl.split('?')[0];
                data.coverImage = cover;
            }
            if (checkSchoolOrFreelancer() === 'Freelancer') {
                dispatch(
                    freelanceTeacherSetClassAPIcall(data, () => {
                        dispatch(fetchSessionCount());
                        if (localStorage.getItem('fromCalendar') == 'false') {
                            gotoTutorDashboard(routes);
                        } else {
                            gotoTutorCalendar(routes);
                        }
                    })
                );
            } else if (checkSchoolOrFreelancer() === 'School') {
                const studentId = studentList.map((item: any) => {
                    return { studentId: item.id };
                });
                data.students = studentId;
                dispatch(
                    teacherSetClassAPIcall(data, () => {
                        dispatch(fetchSessionCount());
                        if (localStorage.getItem('fromCalendar') == 'false') {
                            gotoTutorDashboard(routes);
                        } else {
                            gotoTutorCalendar(routes);
                        }
                    })
                );
            }
        } else {
            if ((file as any)?.name && resOfPutResource?.status === 200) {
                resource = resResourceUploadUrl.split('?')[0];
                if (checkSchoolOrFreelancer() === 'Freelancer') {
                    data.resources = resource;
                } else if (checkSchoolOrFreelancer() === 'School') {
                    data.resource = resource;
                }
            } else {
                if (checkSchoolOrFreelancer() === 'Freelancer') {
                    data.resources = resUrl;
                } else if (checkSchoolOrFreelancer() === 'School') {
                    data.resource = resUrl;
                }
            }
            if ((imageFile as any)?.name && resOfPutImage?.status === 200) {
                cover = resImageUploadUrl.split('?')[0];
                data.coverImage = cover;
            } else {
                data.coverImage = coverResUrl;
            }
            if (checkSchoolOrFreelancer() === 'Freelancer') {
                dispatch(
                    freelanceTeacherUpdateClassAPIcall(sessionId, 'freelancer/teacher/session', data, () => {
                        dispatch(fetchSessionCount());
                        if (localStorage.getItem('fromCalendar') == 'false') {
                            gotoTutorDashboard(routes);
                        } else {
                            gotoTutorCalendar(routes);
                        }
                    })
                );
            } else if (checkSchoolOrFreelancer() === 'School') {
                const studentId = studentList.map((item: any) => {
                    return { studentId: item.id };
                });
                data.students = studentId;
                dispatch(
                    freelanceTeacherUpdateClassAPIcall(sessionId, 'teacher/session', data, () => {
                        dispatch(fetchSessionCount());
                        if (localStorage.getItem('fromCalendar') == 'false') {
                            gotoTutorDashboard(routes);
                        } else {
                            gotoTutorCalendar(routes);
                        }
                    })
                );
            }
        }
    };

    const handleResouceUpload = async (e: any) => {
        setFile(e.target.files[0]);
        setImageName(e.target.files[0].name);
        const response: any = await dispatch(uploadResourceAction(e.target.files[0].name));
        if (response?.url) {
            setResResourceUploadUrl(response.url);
        }
    };

    const handleCoverImageUpload = async (e: any) => {
        setImageFile(e.target.files[0]);
        setUploadImageFIleName(e.target.files[0].name);
        const response: any = await dispatch(uploadResourceAction(e.target.files[0].name));
        if (response?.url) {
            setResImageUploadUrl(response.url);
        }
    };

    const handleSelectDate = async (value: any) => {
        let isPreviousDate = moment(value).isBefore(new Date(), 'day');
        if (isPreviousDate) {
            setSubjectDate(moment().format('YYYY-MM-DD'));
            toast.error('can not set previous Date');
        } else {
            setSubjectDate(value);
        }
    };

    const handleSelectStartTime = async (value: any) => {
        setStartTime(value);
    };

    const handleSelectEndTime = async (value: any) => {
        let isSameToday = moment(value, 'hh:mm').isSame(moment(startTime, 'hh:mm'));
        if (!isSameToday && startTime != '') {
            setEndTime(value);
        } else {
            if (startTime === '') {
                toast.error('set start time first');
            } else {
                toast.error('End time should be greater than the start time.');
            }
            setEndTime('');
        }
    };

    const handleSearchAdd = (value: any) => {
        const data = [...studentList];
        data.push(value);
        setStudentList(data);
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
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
                                                        <Typography className="text1">Date and Time </Typography>
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
                                                                        {item.start}-{item.end}
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
                                                            className={classNames('line-input-large', classes.input)}
                                                            label="Date"
                                                            type="date"
                                                            value={subjectDate}
                                                            onChange={(e) => handleSelectDate(e.target.value)}
                                                            fullWidth
                                                        />
                                                    </div>
                                                    <div className="col-md-7 p-0">
                                                        <div className="sub_rows">
                                                            <div className="input_row">
                                                                <div className="input_text">
                                                                    <TextField
                                                                        className={classNames(
                                                                            'line-input-large',
                                                                            classes.input
                                                                        )}
                                                                        label="Start Time"
                                                                        type="time"
                                                                        fullWidth
                                                                        value={startTime}
                                                                        onChange={(e) =>
                                                                            handleSelectStartTime(e.target.value)
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="input_text">
                                                                    <TextField
                                                                        className={classNames(
                                                                            'line-input-large',
                                                                            classes.input
                                                                        )}
                                                                        label="End Time"
                                                                        type="time"
                                                                        fullWidth
                                                                        value={endTime}
                                                                        onChange={(e) =>
                                                                            handleSelectEndTime(e.target.value)
                                                                        }
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
                                                        <SelectFieldUnderlineIdValue
                                                            label="Subject"
                                                            value={subjectName}
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
                                                                            value={noOfStudents}
                                                                            onChange={handleNoOfStudents}
                                                                        />
                                                                    </div>
                                                                    <div className="input_text">
                                                                        <TextField
                                                                            className="line-input-large"
                                                                            label="Price per student"
                                                                            fullWidth
                                                                            value={pricePerStudent}
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
                                                            value={classTitle}
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
                                                                value={description}
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
                                                            onChange={handleResouceUpload}
                                                            style={{ display: 'none' }}
                                                            type="file"
                                                            id="file"
                                                        ></input>
                                                        <label className={classes.upload} htmlFor="file">
                                                            Upload
                                                        </label>

                                                        <div>
                                                            {resUrl === '' || resUrl === null || (file as any).name ? (
                                                                <Typography
                                                                    className="subtext"
                                                                    style={{ transform: 'translate(3rem, 1.8rem)' }}
                                                                >
                                                                    {imageName}
                                                                </Typography>
                                                            ) : (
                                                                <LinkOpnerButton
                                                                    style={{ transform: 'translate(3rem, 1.8rem)' }}
                                                                    exClassName="subtext"
                                                                    linkName={resUrl}
                                                                />
                                                            )}
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
                                        <div className="horizontalline"></div>
                                    </div>
                                    {checkSchoolOrFreelancer() === 'School' && (
                                        <div className="mt-5 pl-5">
                                            <SearchProfilePreview
                                                palceholder="Add new student"
                                                data={searchResult}
                                                list={studentList}
                                                value={search}
                                                searchAdd={handleSearchAdd}
                                                onChange={handleSearch}
                                            />
                                        </div>
                                    )}
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
                                                                    : coverResUrl
                                                                    ? coverResUrl
                                                                    : commonImg.photo
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
                                                                        {coverResUrl === '' ||
                                                                        coverResUrl === null ||
                                                                        (imageFile as any).name ? (
                                                                            <Typography className="subtext">
                                                                                {uploadImageFileName}
                                                                            </Typography>
                                                                        ) : (
                                                                            <LinkOpnerButton
                                                                                width="100%"
                                                                                exClassName="subtext"
                                                                                linkName={coverResUrl}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                    <input
                                                                        id="imgg"
                                                                        type="file"
                                                                        onChange={handleCoverImageUpload}
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
                                                            onClick={() =>
                                                                localStorage.getItem('fromCalendar') == 'false'
                                                                    ? gotoTutorDashboard(routes)
                                                                    : gotoTutorCalendar(routes)
                                                            }
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
                </div>
                <div className="commonFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorClass;
