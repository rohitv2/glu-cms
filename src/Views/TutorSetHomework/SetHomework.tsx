import React, { useState, useRef, useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableBanner from '../../components/ReusableBanner';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField } from '@material-ui/core';
import {
    getHomeworkById,
    getSudentNameSuggestions,
    postTeacherHomework,
    editTeacherHomework,
} from '../../Redux/Actions/teacherAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import PageFooter from '../../components/PageFooter';
import { makeStyles } from '@material-ui/core';
import { uploadResourceAction } from '../../Redux/Actions/teacherAction';
import Axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import useMenuList from '../../Hooks/useMenuList';
import { spinner } from '../../Redux/Actions/uiAction';
import { useTeacherClassGroups } from '../../Hooks/tutor/useTeacherClassGroups';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import useTutorSubjects from '../../Hooks/tutor/useTutorSubjects';
import { Close } from '@material-ui/icons';
import LinkOpnerButton from '../../components/Button/LinkOpnerButton';

const useStyles = makeStyles({
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
const TutorSetHomework: React.FunctionComponent = () => {
    const classes = useStyles();
    const history = useHistory();
    const findState: any = useLocation();
    const inputRef: any = useRef(null);
    const classGroupDropdown = useTeacherClassGroups();
    const { subjectsOptions } = useTutorSubjects();
    const [file, setFile] = useState('');
    const [imageName, setImageName] = useState('Max size (500mb)');
    const [putUrl, setPutUrl] = useState('');
    const [subjectDropdowns, setSubjectDropdowns] = useState([]);
    const [query, setQuery] = useState({ name: '' });
    const [showList, setShowList] = useState(false);
    const [todo, setTodo] = useState<any>([]);
    const [editMode, setEditMode] = useState(false);
    const [editHwId, setEditHwId] = useState(0);

    const menu = useMenuList('tutor');
    const dispatch = useDispatch();
    const [homework, setHomework] = useState({
        title: '',
        description: '',
        dueDate: '',
        endTime: '',
        subjectId: '',
        students: [],
        resource: '',
        resourceName: '',
        classGroupId: '',
    });

    const teacherStudentLike = useSelector((state: rootReducerType) => state.teacherReducer.suggestedStudents.data);
    const teacherHomeworkData = useSelector((state: any) => state.teacherReducer.singleHomework);

    useEffect(() => {
        const hwId = findState.state?.id;
        if (hwId) {
            dispatch(getHomeworkById(hwId));
        }
    }, []);

    useEffect(() => {
        dispatch(getSudentNameSuggestions(homework.classGroupId, query.name));
    }, [query]);

    useEffect(() => {
        if (subjectsOptions) {
            const data: any = subjectsOptions.map((item: any) => {
                return { id: item.value, value: item.label };
            });
            setSubjectDropdowns(data);
        }
    }, [subjectsOptions]);

    useEffect(() => {
        if (teacherHomeworkData?.homeworkData) {
            setEditMode(true);
            const { homeworkData, studentData } = teacherHomeworkData;
            const students: any = [];
            const tempStudents = studentData.map((item: any) => {
                students.push({ id: item.studentId });
                return item.Student.firstName + ' ' + item.Student.lastName;
            });
            setTodo(tempStudents);
            homeworkData.forEach((item: any) => {
                setEditHwId(item.id);
                const data = {
                    title: item.title,
                    description: item.description,
                    dueDate: item.dueDate,
                    endTime: item.endTime,
                    subjectId: item.subjectId,
                    students: students,
                    resource: item.resource,
                    resourceName: '',
                    classGroupId: item.classGroupId,
                };
                setHomework(data);
            });
        }
    }, [teacherHomeworkData]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (query.name == '') return;
        setTodo([...todo, query.name]);
        inputRef.current.value = '';
        setShowList(false);
    };

    const handleChange = (e: any) => {
        setQuery({ name: e.target.value });
        setShowList(true);
    };

    const finalSubmit = async () => {
        dispatch(spinner(true));

        const resOfPut = await Axios.put(`https://cors-anywhere.herokuapp.com/${putUrl}`, file, {
            headers: {
                'x-amz-acl': 'public-read',
                'Content-Type': 'image/jpeg',
            },
        });
        if (editMode) {
            dispatch(editTeacherHomework(homework, editHwId, history));
        } else {
            dispatch(postTeacherHomework(homework, history));
        }
    };

    const deleteStudent = (val: string, i: number) => {
        let studentList = todo.filter((student: any) => student != val);
        setTodo(studentList);
        const data = [...homework.students];
        data.splice(i, 1);
        setHomework({ ...homework, students: data });
    };

    const setHomeworkStudents = (id: number) => {
        let studentsList = [...homework.students, { id: id }];
        let studentsListUnique: any = [];
        let uniqueObject: any = {};
        for (let i in studentsList) {
            id = studentsList[i]['id'];
            uniqueObject[id] = studentsList[i];
        }
        for (let i in uniqueObject) {
            studentsListUnique.push(uniqueObject[i]);
        }
        setHomework((prev: any) => {
            return {
                ...prev,
                students: studentsListUnique,
            };
        });
    };

    const handleResourceUpload = async (e: React.ChangeEvent<any>) => {
        setFile(e.target.files[0]);
        setImageName(e.target.files[0].name);
        const url: any = await dispatch(uploadResourceAction(e.target.files[0].name));
        url && setPutUrl(url?.url ? url.url : null);
        url &&
            setHomework({
                ...homework,
                resource: url.url.split('?')[0],
            });
    };

    const handleStudentLike = (val: any) => {
        setShowList(false);
        inputRef.current.focus();
        inputRef.current.value = val?.Student?.firstName + ' ' + val?.Student?.lastName;
        setQuery({
            name: val?.Student?.firstName + ' ' + val?.Student?.lastName,
        });
        setHomeworkStudents(val?.Student?.id);
    };
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="set_homework_container ">
                <div className="set_homework_container_subcontainer1">
                    <div className="banner_container">
                        <ReusableBanner heading={'Set Homework'} description={'Create and publish a new assignment.'} />
                    </div>
                    <div className="row horizontalline"></div>
                    <div className="set_homework_container_subcontainer2">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="homeSubtext0">
                                    <Typography className="homeworkText">Due Date</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 homeworkBorder p-0">
                                <div className="homework_date_container">
                                    <div className="row">
                                        <div className="col-6">
                                            <TextField
                                                className="line-input-large"
                                                label="Date"
                                                type="date"
                                                fullWidth
                                                value={homework.dueDate}
                                                onChange={(e) => setHomework({ ...homework, dueDate: e.target.value })}
                                                style={{ color: 'red' }}
                                            />
                                        </div>
                                        <div className="col-3">
                                            <TextField
                                                className="line-input-large"
                                                label="End Time"
                                                type="time"
                                                fullWidth
                                                value={homework.endTime}
                                                onChange={(e) => setHomework({ ...homework, endTime: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="line_container">
                                        <div className="col-md-12 p-0 horizontalline"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="homeSubtext1">
                                    <Typography className="homeworkText">Assignment</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 homeworkBorder">
                                <div className="setClass">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-4 p-0">
                                                <SelectFieldUnderlineIdValue
                                                    label="Class Group"
                                                    value={homework.classGroupId}
                                                    className="select-large"
                                                    options={classGroupDropdown}
                                                    getValue={(val) => {
                                                        setHomework({ ...homework, classGroupId: val });
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <SelectFieldUnderlineIdValue
                                                    label="Subject"
                                                    value={homework.subjectId}
                                                    className="select-large"
                                                    options={subjectDropdowns}
                                                    getValue={(val) => {
                                                        setHomework({ ...homework, subjectId: val });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-11 p-0">
                                                <TextField
                                                    className="line-input-large"
                                                    label="Title (45 Characters)"
                                                    value={homework.title}
                                                    fullWidth
                                                    onChange={(e) =>
                                                        setHomework({ ...homework, title: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-11 p-0">
                                                <div className="description_container">
                                                    <Typography className="title">Description</Typography>
                                                    <textarea
                                                        rows={5}
                                                        style={{ fontSize: '2.625rem', width: '100%' }}
                                                        className="textbox"
                                                        value={homework.description}
                                                        onChange={(e) =>
                                                            setHomework({ ...homework, description: e.target.value })
                                                        }
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
                                                    onChange={handleResourceUpload}
                                                    style={{ display: 'none' }}
                                                    type="file"
                                                    id="file"
                                                ></input>
                                                <label className={classes.upload} htmlFor="file">
                                                    Upload
                                                </label>

                                                <div>
                                                    {file ? (
                                                        <Typography
                                                            className="subtext"
                                                            style={{ transform: 'translate(3rem, 1.8rem)' }}
                                                        >
                                                            {imageName}
                                                        </Typography>
                                                    ) : (
                                                        <LinkOpnerButton
                                                            width="100%"
                                                            exClassName="subtext"
                                                            style={{ transform: 'translate(3rem, 1.8rem)' }}
                                                            linkName={homework.resource}
                                                        />
                                                    )}
                                                </div>
                                                <input id="upload-button" type="file" style={{ display: 'none' }} />
                                            </div>

                                            <div className="col-12 p-0 horizontalline"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-12 horizontalline"></div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="homeSubtext1">
                                    <Typography className="homeworkText">Student</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 homeworkBorder">
                                <div className="set_homework_skill_container">
                                    <div className="addSkill">
                                        <div className="col-md-12">
                                            <form action="" onSubmit={(e) => handleSubmit(e)}>
                                                <div className="row">
                                                    {/* <div className="col-md-12 p-0">
                        <Typography className="sub_heading">Add New</Typography>
                    </div> */}
                                                    <div className="col-md-12 p-0">
                                                        <TextField
                                                            inputRef={inputRef}
                                                            className="line-input-large"
                                                            label="Add New"
                                                            style={{ width: '90%' }}
                                                            fullWidth
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                    {showList && (
                                                        <div className="col-md-12">
                                                            <div className="show_students_like">
                                                                {teacherStudentLike &&
                                                                    teacherStudentLike.map((val: any) => (
                                                                        <ul
                                                                            style={{
                                                                                display:
                                                                                    query.name == '' ? 'none' : 'block',
                                                                            }}
                                                                        >
                                                                            <li
                                                                                className="students_like_text"
                                                                                onClick={() => handleStudentLike(val)}
                                                                            >{`${val?.Student?.firstName} ${val?.Student?.lastName}`}</li>
                                                                        </ul>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="col-md-12">
                                                        <div className="skill_container">
                                                            <div className="row choose_weeks">
                                                                {todo.map((val: string, index: number) => (
                                                                    <div key={index} className="chip">
                                                                        {val}
                                                                        <Close
                                                                            className="close-icon"
                                                                            onClick={() => deleteStudent(val, index)}
                                                                        />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="set_homework_publish_container">
                                    <div className="publish_cancel_buttons">
                                        <button
                                            className="p_button"
                                            style={{ backgroundColor: 'transparent' }}
                                            onClick={() => finalSubmit()}
                                        >
                                            <Typography className="text">Publish</Typography>
                                        </button>
                                        <div
                                            onClick={() => {
                                                history.push(`/tutor/homework`);
                                            }}
                                            className="c_button"
                                        >
                                            <Typography className="text">Cancel</Typography>
                                        </div>
                                    </div>
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

export default TutorSetHomework;
