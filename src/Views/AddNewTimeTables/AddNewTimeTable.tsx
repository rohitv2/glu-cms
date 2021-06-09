import React, { useEffect, useState } from 'react';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import { Grid } from '@material-ui/core';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useGetAllGroup from '../../Hooks/schools/useGetAllGroup';
import SelectWithLabelIdValue from '../../components/Inputs/SelectWithLabelIdValue';
import { createTimeTableBlockAPICall } from '../../Redux/Actions/schoolAction';
import './style.scss';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import moment from 'moment';
import SearchProfilePreview from '../../components/Dashobard/SearchProfilePreview';
import { useSearchTeacherDepSub } from '../../Hooks/schools/useSearchTeacherDepSub';
import { useGetAllClassGroupBySubjectId } from '../../Hooks/schools/useGetAllClassGroupBySubjectId';
import { filterStudentAPIcall } from '../../Redux/Actions/studentAction';
import { useSearchStudentYearFromId } from '../../Hooks/students/useSearchStudentYearFromId';
import { useSearchAllTeacher } from '../../Hooks/schools/useSearchAllTeacher';
import { useSearchStudent } from '../../Hooks/students/useSearchStudent';
import { useSearchStudentByClassGroupId } from '../../Hooks/schools/useSearchStudentByClassGroupId';
import { useGetAllClassGroupDropdown } from '../../Hooks/schools/useGetAllClassGroupDropdown';

const useStyles = makeStyles(() => ({
    time: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
    },
    button: {
        marginTop: '3rem',
        fontSize: '1.2rem',
        border: '1px solid gray',
        width: 'max-content',
        padding: '3px 15px 3px 15px',
        cursor: 'pointer',
    },
}));

function AddNewTimeTable() {
    const history = useHistory();
    const dispatch = useDispatch();
    const routes = useLocation();
    const classes = useStyles();
    const [subjectByDepartment, setSubjectByDepartment] = useState<any>();
    const [timeTableId, setTimeTableId] = useState<any>();
    const [subTitle, setSubTitle] = useState<any>();
    const [timeTable, setTimeTable] = useState<any>({
        classGroupId: null,
        timetableName: '',
        formGroupId: null,
        yearGroupId: null,
        departmentId: null,
        subjectId: null,
        teachersId: [],
        startTime: '',
        endTime: '',
        location: null,
        day: '',
        studentIds: [],
    });
    const [studentSearch, setStudentSearch] = useState('');
    const [teacherSearch, setTeacherSearch] = useState('');
    const stIfNoclassGroup = useSearchAllTeacher(teacherSearch);
    const ssIfNoFormGroup = useSearchStudent(studentSearch);

    const { teachersSearchResult, totalTeachers } = useSearchTeacherDepSub(
        null,
        null,
        timeTable.classGroupId,
        teacherSearch
    );
    const classGroupDopdown = useGetAllClassGroupBySubjectId(timeTable.subjectId);
    const { cgYgId } = useGetAllClassGroupDropdown(timeTable.yearGroupId);
    const { studentSearchResult, totalStudentList } = useSearchStudentYearFromId(
        timeTable.yearGroupId,
        timeTable.formGroupId,
        studentSearch
    );
    const { studentsByClassGroup, searchStudentData } = useSearchStudentByClassGroupId(
        timeTable.classGroupId,
        studentSearch
    );
    const [teacherList, setTeacherList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const { yearGroupDropdownList, formGroupDropdownList, departmentListArray, subjectList } = useGetAllGroup(
        timeTable.yearGroupId
    );
    const [timetableName, setTimetableName] = useState('');

    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if (routes?.state?.hasOwnProperty('timeTableDetails')) {
                const timeDetails = (routes as any).state.timeTableDetails;
                setTimeTableId(timeDetails?.id);
                setTimetableName(timeDetails.timetableName);
                setTimeTable({
                    ...timeTable,
                    startTime: moment(timeDetails.start).format('HH:mm'),
                    endTime: moment(timeDetails.end).format('HH:mm'),
                    day: moment(timeDetails.start).format('dddd'),
                    yearGroupId: timeDetails.yearGroup,
                });
            }
        }
    }, []);

    useEffect(() => {
        if (timeTable?.yearGroupId) {
            const subtitle = yearGroupDropdownList?.find((item) => {
                return item?.id == timeTable?.yearGroupId;
            });
            setSubTitle(subtitle);
        }
    }, [yearGroupDropdownList]);

    useEffect(() => {
        if (totalTeachers) {
            setTeacherList(totalTeachers);
        }
    }, [totalTeachers]);

    useEffect(() => {
        if (timeTable.departmentId) {
            subjectList.filter((item: any) => {
                if (item.id == timeTable.departmentId) {
                    const formatData =
                        item.Subjects &&
                        item.Subjects.map((item1: any) => {
                            return {
                                id: item1.id,
                                value: item1.subjectName,
                            };
                        });
                    setSubjectByDepartment(formatData);
                }
            });
        }
    }, [timeTable.departmentId]);

    useEffect(() => {
        if (timeTable.yearGroupId !== '' && timeTable.formGroupId !== '') {
            dispatch(filterStudentAPIcall(timeTable.yearGroupId, timeTable.formGroupId, '', '', ''));
        }
    }, [timeTable.yearGroupId, timeTable.formGroupId]);

    useEffect(() => {
        if (totalStudentList && ![null, undefined, ''].includes(timeTable.formGroupId)) {
            setStudentList(totalStudentList);
        }

        if (studentsByClassGroup && ![null, undefined, ''].includes(timeTable.classGroupId)) {
            setStudentList(studentsByClassGroup);
        }
    }, [totalStudentList, studentsByClassGroup]);

    const handlePublish = () => {
        const teachersId = teacherList.map((item: any) => item.id);
        const studentsId = studentList.map((item: any) => item.id);
        const data: any = { ...timeTable };
        data.teachersId = teachersId;
        data.studentIds = studentsId;
        for (var propName in data) {
            if ([null, undefined, ''].includes(data[propName])) {
                delete data[propName];
            }
        }
        dispatch(createTimeTableBlockAPICall(data, timeTableId, history));
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        if (label === 'teacher') {
            setTeacherSearch(e.target.value);
        } else {
            setStudentSearch(e.target.value);
        }
    };

    const handleSearchAdd = (value: any, label: string) => {
        if (label === 'teacher') {
            const data: any = [...teacherList];
            data.push(value);
            setTeacherList(data);
            setTeacherSearch('');
        } else {
            const data: any = [...studentList];
            data.push(value);
            setStudentList(data);
            setStudentSearch('');
        }
    };

    const handleDelete = (i: number, label: string) => {
        if (label === 'teacher') {
            const data = [...teacherList];
            data.splice(i, 1);
            setTeacherList(data);
        } else {
            const data = [...studentList];
            data.splice(i, 1);
            setStudentList(data);
        }
    };

    return (
        <div>
            <TwoColGrid titleOne="Time Table" subTitle={timetableName}>
                <InputWithLabel
                    fieldName="Event Name"
                    mt="mt-0"
                    value={timeTable.timetableName}
                    onChange={(e) => {
                        setTimeTable({
                            ...timeTable,
                            timetableName: e.target.value,
                        });
                    }}
                />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{ marginTop: '3.5rem' }}>
                        <TextField
                            className="line-input-large1 col-md-6"
                            label="Start Time"
                            type="time"
                            value={timeTable.startTime}
                            fullWidth
                            onChange={(e) => {
                                setTimeTable({
                                    ...timeTable,
                                    startTime: e.target.value,
                                });
                            }}
                        />
                        <TextField
                            className="line-input-large1 col-md-6"
                            label="End Time"
                            type="time"
                            value={timeTable.endTime}
                            fullWidth
                            onChange={(e) => {
                                setTimeTable({
                                    ...timeTable,
                                    endTime: e.target.value,
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabel
                            options={['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
                            fieldName="Day"
                            value={timeTable.day}
                            onChange={(e) => {
                                setTimeTable({
                                    ...timeTable,
                                    day: e.target.value,
                                });
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabelIdValue
                            disabled={true}
                            options={yearGroupDropdownList ? yearGroupDropdownList : []}
                            fieldName="Year group"
                            value={timeTable.yearGroupId}
                            onChange={(e) => {
                                setTimeTable({
                                    ...timeTable,
                                    yearGroupId: e.target.value,
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabelIdValue
                            options={formGroupDropdownList ? formGroupDropdownList : []}
                            fieldName="Form Group"
                            value={timeTable.formGroupId}
                            onChange={(e) => {
                                setStudentList([]);
                                setTeacherList([]);
                                setTimeTable({
                                    ...timeTable,
                                    formGroupId: e.target.value,
                                    classGroupId: '',
                                });
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabelIdValue
                            options={departmentListArray ? departmentListArray : []}
                            fieldName="Department"
                            onChange={(e) => {
                                setTimeTable({
                                    ...timeTable,
                                    departmentId: e.target.value,
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabelIdValue
                            options={subjectByDepartment ? subjectByDepartment : []}
                            fieldName="Subject"
                            onChange={(e) => {
                                setTimeTable({
                                    ...timeTable,
                                    subjectId: e.target.value,
                                });
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabelIdValue
                            options={timeTable.subjectId ? classGroupDopdown : cgYgId}
                            fieldName="Class group"
                            value={timeTable.classGroupId}
                            onChange={(e) => {
                                setTeacherList([]);
                                setStudentList([]);
                                setTimeTable({
                                    ...timeTable,
                                    classGroupId: e.target.value,
                                    formGroupId: '',
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputWithLabel
                            fieldName="Location"
                            onChange={(e) => {
                                setTimeTable({
                                    ...timeTable,
                                    location: e.target.value,
                                });
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <SearchProfilePreview
                        palceholder="Add new teacher"
                        ap={true}
                        apText="Teachers"
                        data={timeTable.classGroupId ? teachersSearchResult : stIfNoclassGroup}
                        value={teacherSearch}
                        searchAdd={(e) => handleSearchAdd(e, 'teacher')}
                        onChange={(e) => handleSearch(e, 'teacher')}
                        list={teacherList}
                        handleDelete={(i: number) => handleDelete(i, 'teacher')}
                    />
                </Grid>
                <Grid item md={12}>
                    <SearchProfilePreview
                        palceholder="Add new student"
                        data={
                            timeTable.formGroupId
                                ? studentSearchResult
                                : timeTable.classGroupId
                                ? searchStudentData
                                : ssIfNoFormGroup
                        }
                        value={studentSearch}
                        searchAdd={(e) => handleSearchAdd(e, 'student')}
                        onChange={(e) => handleSearch(e, 'student')}
                        list={studentList}
                        handleDelete={(i: number) => handleDelete(i, 'student')}
                    />
                </Grid>
                <Grid>
                    <Typography className={classes.button} onClick={handlePublish}>
                        Publish
                    </Typography>
                </Grid>
            </TwoColGrid>
        </div>
    );
}

export default AddNewTimeTable;
