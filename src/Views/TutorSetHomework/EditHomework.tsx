import React, { useState, useRef, useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableBanner from '../../components/ReusableBanner';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { getTeacherStudentLike, editTeacherHomework } from '../../Redux/Actions/teacherAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import PageFooter from '../../components/PageFooter';
import { makeStyles } from '@material-ui/core';
import {
    uploadResourceAction,
    getHomeworkById,
    addStudentToHomework,
    deleteStudentFromHomework,
} from '../../Redux/Actions/teacherAction';
import Axios from 'axios';
import { useHistory } from 'react-router';
import useMenuList from '../../Hooks/useMenuList';
import { Close } from '@material-ui/icons';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import { useTeacherClassGroups } from '../../Hooks/tutor/useTeacherClassGroups';

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
const EditHomework: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const teacherHomeworkData = useSelector((state: any) => state.teacherReducer.singleHomework);
    const teacherStudentLike = useSelector((state: rootReducerType) => state.teacherReducer.teacherStudentLike);
    const teacherHomeworkCreate = useSelector((state: rootReducerType) => state.teacherReducer.teacherCreateHomework);
    const classGroupDropdown = useTeacherClassGroups();

    const classes = useStyles();
    const history: any = useHistory();
    const [file, setFile] = useState('');
    const [image, setImage] = useState(
        teacherHomeworkData &&
            teacherHomeworkData.homeworkData[0].resource.split('/')[
                teacherHomeworkData.homeworkData[0].resource.split('/').length - 1
            ]
    );
    const [putUrl, setPutUrl] = useState('');

    const menu = useMenuList('tutor');
    const [homework, setHomework] = useState({
        title: teacherHomeworkData && teacherHomeworkData.homeworkData[0].title,
        description: teacherHomeworkData && teacherHomeworkData.homeworkData[0].description,
        dueDate: teacherHomeworkData && teacherHomeworkData.homeworkData[0].dueDate.split('T')[0],
        endTime: teacherHomeworkData && teacherHomeworkData.homeworkData[0].endTime.substring(0, 5),
        subjectName: teacherHomeworkData && teacherHomeworkData.homeworkData[0].Subject.subjectName,
        classGroupId: teacherHomeworkData && teacherHomeworkData.homeworkData[0].classGroupId,
        students:
            teacherHomeworkData &&
            teacherHomeworkData.studentData.map((item: any) => {
                return { id: item.studentId };
            }),
        resource: teacherHomeworkData && teacherHomeworkData.homeworkData[0].resource,
    });
    const [query, setQuery] = useState({
        name: '',
    });
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        dispatch(getTeacherStudentLike(query));
    }, [query]);

    useEffect(() => {
        dispatch(getHomeworkById(parseInt(history.location.state)));
    }, []);

    const stateData =
        teacherHomeworkData &&
        teacherHomeworkData.studentData.map((item: any) => {
            return {
                name: `${item.Student.firstName} ${item.Student.lastName}`,
                id: item.studentId,
            };
        });
    const [todo, setTodo] = useState(stateData);

    const inputRef = useRef(null);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (query.name == '') return;
        setTodo([...todo, { name: query.name, id: '' }]);
        (inputRef as any).current.value = '';
        setShowList(false);
    };
    const handleChange = (e: any) => {
        setQuery({ name: e.target.value });
        setShowList(true);
    };

    const keyUpFunction = (e: any) => {
        if (e.keyCode === 13) {
            const dataToSend = homework.students[homework.students.length - 1];
            let studentArray = todo.map((student: any) => student.id);
            if (!studentArray.includes(dataToSend.id)) {
                const mod = {
                    students: [
                        {
                            id: dataToSend.id,
                        },
                    ],
                };
                dispatch(addStudentToHomework(mod, history.location.state));
            }
        }
    };

    const finalSubmit = async () => {
        if (putUrl) {
            await Axios.put(putUrl, file, {
                headers: {
                    'x-amz-acl': 'public-read',
                    'Content-Type': 'multipart/form-data; boundary=something',
                },
            });
        }

        dispatch(editTeacherHomework(homework, teacherHomeworkData.homeworkData[0].id, history));
    };

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="set_homework_container ">
                <div className="set_homework_container_subcontainer1">
                    <div className="banner_container">
                        <ReusableBanner heading={'Edit Homework'} description={'Edit homework.'} />
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
                                                <SelectFieldUnderline
                                                    label="Subject"
                                                    value={homework.subjectName}
                                                    className="select-large"
                                                    options={[
                                                        'English',
                                                        'Physics',
                                                        'Biology',
                                                        'Geography',
                                                        'Mathematics',
                                                    ]}
                                                    getValue={(val) => {
                                                        setHomework({ ...homework, subjectName: val });
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-7 p-0"></div>
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
                                                    onChange={async (e: any) => {
                                                        setFile(e.target.files[0]);
                                                        setImage(e.target.files[0].name);
                                                        const url = await dispatch(
                                                            uploadResourceAction(e.target.files[0].name)
                                                        );

                                                        document;
                                                        setPutUrl(url);
                                                        setHomework({ ...homework, resource: url });
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
                                                        {image}
                                                    </Typography>
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
                                    <Typography className="homeworkText">Students</Typography>
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
                                                            onKeyUp={(e) => keyUpFunction(e)}
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
                                                                                onClick={() => {
                                                                                    setShowList(false);
                                                                                    (inputRef as any).current.focus();
                                                                                    (inputRef as any).current.value =
                                                                                        val.firstName +
                                                                                        ' ' +
                                                                                        val.lastName;
                                                                                    setQuery({
                                                                                        name:
                                                                                            val.firstName +
                                                                                            ' ' +
                                                                                            val.lastName,
                                                                                    });
                                                                                    setHomework((prev) => {
                                                                                        return {
                                                                                            ...prev,
                                                                                            students: [
                                                                                                ...prev.students,
                                                                                                {
                                                                                                    id: val.id,
                                                                                                    name:
                                                                                                        val.firstName +
                                                                                                        ' ' +
                                                                                                        val.lastName,
                                                                                                },
                                                                                            ],
                                                                                        };
                                                                                    });
                                                                                    setTodo([
                                                                                        ...todo,
                                                                                        {
                                                                                            id: val.id,
                                                                                            name:
                                                                                                val.firstName +
                                                                                                ' ' +
                                                                                                val.lastName,
                                                                                        },
                                                                                    ]);
                                                                                }}
                                                                            >{`${val.firstName} ${val.lastName}`}</li>
                                                                        </ul>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="col-md-12">
                                                        <div className="skill_container">
                                                            <div className="row choose_weeks">
                                                                {todo &&
                                                                    todo.map((val: any, index: number) => (
                                                                        <div key={index} className="chip">
                                                                            {val.name}
                                                                            <Close
                                                                                className="close-icon"
                                                                                onClick={() => {
                                                                                    setTodo((todo: any) => {
                                                                                        return todo.filter(
                                                                                            (item: any) =>
                                                                                                item.id !== val.id
                                                                                        );
                                                                                    });
                                                                                    if (val.id != '') {
                                                                                        dispatch(
                                                                                            deleteStudentFromHomework(
                                                                                                {
                                                                                                    studentId: val.id,
                                                                                                },
                                                                                                history.location.state
                                                                                            )
                                                                                        );
                                                                                    }
                                                                                }}
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
                                            disabled={teacherHomeworkCreate && teacherHomeworkCreate.success}
                                            className="p_button"
                                            style={{ backgroundColor: 'transparent' }}
                                            onClick={async () => {
                                                if (putUrl) {
                                                    const resOfPut = await Axios.put(putUrl, file, {
                                                        headers: {
                                                            'x-amz-acl': 'public-read',
                                                            'Content-Type': 'image/jpeg',
                                                        },
                                                    });
                                                }

                                                dispatch(
                                                    editTeacherHomework(
                                                        homework,
                                                        teacherHomeworkData.homeworkData[0].id,
                                                        history
                                                    )
                                                );
                                            }}
                                        >
                                            <Typography className="text">Publish</Typography>
                                        </button>
                                        <div
                                            onClick={() => {
                                                history.push(
                                                    `/tutor/individual-homework/${teacherHomeworkData.homeworkData[0].id}`
                                                );
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

export default EditHomework;
