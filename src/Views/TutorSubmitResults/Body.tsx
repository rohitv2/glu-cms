import React, { useRef } from 'react';
import { makeStyles, Typography, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useTutorSubjects from '../../Hooks/tutor/useTutorSubjects';
import { getSudentNameSuggestions, editExamDetails } from '../../Redux/Actions/teacherAction';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import useTermList from '../../Hooks/tutor/useTermList';
import { submitExamInfo } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useTeacherClassGroups } from '../../Hooks/tutor/useTeacherClassGroups';

const useStyles = makeStyles({
    subTitle: {
        fontSize: '2.625rem',
    },
    title: {
        fontSize: '5rem',
        lineHeight: 1,
    },
    hr: {
        marginTop: '8rem',
    },
    formControl: {
        minWidth: '16rem',
    },
    selectEmpty: {},
    small: {
        fontSize: '1.5625rem',
        color: 'black',
        fontWeight: 500,
    },
    greyText: {
        color: '#5F5F5F',
    },
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3.0625rem, #ccc 3rem, white 3.0625rem)',
        lineHeight: '3rem',
        border: 'none',
        width: '100%',
        height: '14rem',
        color: 'inherit',
        fontFamily: 'CircularXXWeb-Book',

        fontSize: '2.625rem',
        '&:hover': {
            border: 'none',
            cursor: 'text',
        },
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
        font: 'normal normal normal 42px/62px CircularXXWeb;',
    },
    lastName: {
        width: '48%',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    inputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        fontFamily: 'CircularXXWeb-Book',

        height: '3.19rem',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
    inputLabel: {
        display: 'block',
        marginTop: '1.9375rem',
        fontSize: '1.5625rem',
        font: 'normal normal normal 25px/30px CircularXXSub-RegularSubset',
        marginBottom: '0',
        fontFamily: 'CircularXXWeb-Book',
    },
    email: {
        marginTop: '2.5625rem',
        width: '100%',
        fontFamily: 'CircularXXWeb-Book',
    },
    chipContainer: {
        marginTop: '3.1875rem',
    },
    term: {
        margin: '2.5rem 0 2.5rem 0',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '4.1px',
        marginTop: '5rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',

        '&:hover': {
            cursor: 'pointer',
        },
    },
});

const Body = () => {
    const classes = useStyles();
    const history = useHistory();
    const routes = useLocation();
    const { subjectsOptions } = useTutorSubjects();
    const classGroupDropdown = useTeacherClassGroups();
    const { termList } = useTermList();
    const dispatch = useDispatch();
    const [todo, setTodo] = React.useState<any>([]);
    const suggestedStudentList = useSelector((state: rootReducerType) => state.teacherReducer.suggestedStudents.data);
    const [query, setQuery] = React.useState({
        name: '',
        id: '',
    });
    const [showList, setShowList] = React.useState(false);
    const inputRef: any = useRef(null);
    const [examId, setExamId] = React.useState(0);
    const [exam, setExam] = React.useState<any>({
        title: '',
        description: '',
        subjectId: '',
        students: [],
        termId: '',
        classGroupId: '',
    });

    const handleChange = (e: any) => {
        setQuery({ name: e.target.value, id: '' });
        setShowList(true);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (query.name !== '') {
            setTodo([...todo, { name: query.name, id: query.id }]);
            inputRef.current.value = '';
            setShowList(false);
            // if (examId) {

            // dispatch(addStudentToExam(examId, exam.students));
            const students = [...exam.students];
            students.push(query.id);
            setExam({
                ...exam,
                students: students,
            });
            // }
        }
    };

    React.useEffect(() => {
        if ((routes as any)?.state?.editExamData) {
            const data = (routes as any).state.editExamData;
            setExamId(data.id);
            const studentIdArray: any[] = [];
            const studentArray = data.student.map((item: any) => {
                studentIdArray.push(item.studentId);
                return {
                    name: item.name,
                    id: item.studentId,
                };
            });
            setExam({
                title: data.topic,
                description: data.desc,
                subjectId: data.subject.subjectId,
                students: studentIdArray,
                termId: data.term.termId,
                classGroupId: data.classGroupId,
            });
            setTodo(studentArray);
        }
    }, []);

    const handleSubmitExam = () => {
        if (examId) {
            dispatch(editExamDetails(examId, exam, history));
        } else {
            dispatch(submitExamInfo(exam, history));
        }
    };

    React.useEffect(() => {
        dispatch(getSudentNameSuggestions(exam.classGroupId, query.name));
    }, [query]);

    const handleDeleteStudents = (i: number) => {
        const data = [...todo];
        data.splice(i, 1);
        const students = [...exam.students];
        students.splice(i, 1);
        setExam({ ...exam, students: students });
        setTodo(data);
    };

    return (
        <div>
            <Grid container spacing={6}>
                <Grid item md={6}>
                    <Typography className={classes.subTitle}>Exam</Typography>
                    <Typography className={classes.subTitle} style={{ marginTop: '40rem' }}>
                        Students
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <Typography className={classes.small}>Class Group</Typography>
                            <FormControl fullWidth className={classes.formControl}>
                                <Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    value={exam.classGroupId}
                                    className={classes.selectEmpty}
                                    onChange={(e) => setExam({ ...exam, classGroupId: e.target.value })}
                                >
                                    {classGroupDropdown &&
                                        classGroupDropdown.map((item: any) => (
                                            <MenuItem value={item.id}>{item.value}</MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.small}>Subject</Typography>
                            <FormControl fullWidth className={classes.formControl}>
                                <Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    value={exam.subjectId}
                                    className={classes.selectEmpty}
                                    onChange={(e) => setExam({ ...exam, subjectId: e.target.value })}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {subjectsOptions &&
                                        subjectsOptions.map((item) => (
                                            <MenuItem value={item.value}>{item.label}</MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.small}>Term</Typography>
                            <FormControl fullWidth className={classes.formControl}>
                                <Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    value={exam.termId}
                                    className={classes.selectEmpty}
                                    onChange={(e) => setExam({ ...exam, termId: e.target.value })}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {termList &&
                                        termList.map((item) => <MenuItem value={item.value}>{item.label}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <div className={classes.email}>
                        <p htmlFor="title" className={classes.inputLabel}>
                            Title <span className={classes.greyText}>(45 characters)</span>
                        </p>
                        <input
                            type="text"
                            id="title"
                            className={classes.inputBox}
                            onChange={(e) => setExam({ ...exam, title: e.target.value })}
                            value={exam.title}
                        ></input>
                    </div>

                    <Typography className={classes.small} style={{ marginTop: '4rem' }}>
                        Description
                    </Typography>
                    <TextareaAutosize
                        id="bio"
                        rowsMin={5}
                        className={classes.textareaClass}
                        onChange={(e) => setExam({ ...exam, description: e.target.value })}
                        value={exam.description}
                    />
                    <div className="col-md-12">
                        <form action="" onSubmit={(e) => handleSubmit(e)}>
                            <div className="row">
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
                                            {suggestedStudentList &&
                                                suggestedStudentList.map((val: any) => (
                                                    <ul
                                                        style={{
                                                            display: query.name == '' ? 'none' : 'block',
                                                        }}
                                                    >
                                                        <li
                                                            className="students_like_text"
                                                            onClick={() => {
                                                                setShowList(false);
                                                                inputRef.current.focus();
                                                                inputRef.current.value =
                                                                    val?.Student?.firstName +
                                                                    ' ' +
                                                                    val?.Student?.lastName;
                                                                setQuery({
                                                                    name:
                                                                        val?.Student?.firstName +
                                                                        ' ' +
                                                                        val?.Student?.lastName,
                                                                    id: val?.Student?.id,
                                                                });
                                                            }}
                                                        >{`${val?.Student?.firstName} ${val?.Student?.lastName}`}</li>
                                                    </ul>
                                                ))}
                                        </div>
                                    </div>
                                )}
                                <div className="col-md-12">
                                    <div className="skill_container">
                                        <div className="row choose_weeks">
                                            {todo.map((val: any, index: number) => (
                                                <Typography
                                                    key={index}
                                                    className="boxes"
                                                    onClick={() => handleDeleteStudents(index)}
                                                >
                                                    {val.name}
                                                </Typography>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <label
                        className={classes.upload}
                        for="file"
                        style={{ marginBottom: '8rem' }}
                        onClick={handleSubmitExam}
                    >
                        Publish
                    </label>
                </Grid>
                <hr />
            </Grid>
        </div>
    );
};

export default Body;
