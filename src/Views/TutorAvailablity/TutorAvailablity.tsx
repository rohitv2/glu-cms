import React, { useState, useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField, makeStyles } from '@material-ui/core';
import Banner from '../../components/ReusableBanner';
import PageFooter from '../../components/PageFooter';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import {
    getTutorAvailabilityAction,
    updateTutorAvailibilityAction,
    deleteTutorAvailibilityAction,
    getTeacherDayOffAction,
    createTutorAvailibilityAction,
    addOffDayAction,
    deleteTutorDayOff,
    getTeacherFeesAction,
    updateTeacherFeeAction,
    editOffDayAction,
} from '../../Redux/Actions/teacherAction';
import useMenuList from '../../Hooks/useMenuList';
import {  MuiPickersUtilsProvider } from '@material-ui/pickers';

const useStyles = makeStyles({
    timeInputInactive: {
        fontFamily: 'inherit',
        color: '#8b8b8b',
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        border: 'none',
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
    },
    timeInputActive: {
        fontFamily: 'inherit',
        color: 'black',
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        border: 'none',
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
    },
    designClassInactive: {
        borderBottom: 0,
        border: 'none',
        '& input': {},
        '& .MuiInputBase-input': {
            fontFamily: 'inherit',
            color: '#8b8b8b',
            fontSize: '2.625rem',
            lineHeight: '2.8125rem',
            border: 'none',
            padding: 0,
        },
    },

    designClassActive: {
        borderBottom: 0,
        border: 'none',
        '& input': {},
        '& .MuiInputBase-input': {
            fontFamily: 'inherit',
            color: 'black',
            fontSize: '2.625rem',
            lineHeight: '2.8125rem',
            border: 'none',
            padding: 0,
        },
    },
});

const PersonalSchoolToggle: React.FunctionComponent = () => {
    const history = useHistory();
    const classes = useStyles();
    const availability = useSelector((state: any) => state.teacherReducer.tutorAvailability);
    const tutorFee = useSelector((state: any) => state.teacherReducer.tutorFee);
    const daysOff = useSelector((state: any) => state.teacherReducer.tutorDayOff);
    const [deleted, setDeleted] = useState(1);

    const [deleteId, setDeleteId] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTutorAvailabilityAction());
    }, []);
    useEffect(() => {
        dispatch(getTeacherDayOffAction());
    }, []);

    useEffect(() => {
        dispatch(getTeacherFeesAction());
    }, []);
    const menu = useMenuList('tutor');
    const [weeklySchedule, setWeeklySchedule] = useState([
        { day: 'Monday', startTime: '', endTime: '', id: '' },
        { day: 'Tuesday', startTime: '', endTime: '', id: '' },
        { day: 'Wednesday', startTime: '', endTime: '', id: '' },
        { day: 'Thursday', startTime: '', endTime: '', id: '' },
        { day: 'Friday', startTime: '', endTime: '', id: '' },
        { day: 'Saturday', startTime: '', endTime: '', id: '' },
        { day: 'Sunday', startTime: '', endTime: '', id: '' },
    ]);

    useEffect(() => {
        tutorFee && setAed(parseInt(tutorFee.fee));
    }, [tutorFee]);
    useEffect(() => {
        setWeeklySchedule((prevState: any) => {
            return prevState.map((item: any) => {
                if (item.id === deleteId) {
                    return { ...item, id: '', endTime: '', startTime: '' };
                } else item;
            });
        });
    }, [deleted, deleteId]);

    useEffect(() => {
        setWeeklySchedule([
            { day: 'Monday', startTime: '', endTime: '', id: '' },
            { day: 'Tuesday', startTime: '', endTime: '', id: '' },
            { day: 'Wednesday', startTime: '', endTime: '', id: '' },
            { day: 'Thursday', startTime: '', endTime: '', id: '' },
            { day: 'Friday', startTime: '', endTime: '', id: '' },
            { day: 'Saturday', startTime: '', endTime: '', id: '' },
            { day: 'Sunday', startTime: '', endTime: '', id: '' },
        ]);
    }, [deleted]);

    useEffect(() => {
        if (availability && availability.length > 0) {
            var newAvail =
                availability &&
                availability.map((item: any) => {
                    return {
                        day: item.day.charAt(0).toUpperCase() + item.day.slice(1),
                        startTime: item.startTime.substring(0, 5),
                        endTime: item.endTime.substring(0, 5),
                        id: item.id,
                    };
                });
        }

        let newSchedule = [...weeklySchedule];
        if (newSchedule && newAvail) {
            for (let i = 0; i < newSchedule.length; i++) {
                for (let j = 0; j < newAvail.length; j++) {
                    if (newSchedule[i].day === newAvail[j].day) {
                        newSchedule[i] = newAvail[j];
                    }
                }
            }
            setWeeklySchedule(newSchedule);
        }
    }, [availability]);

    const [aed, setAed] = useState(0);
    const [dateData, setDateData] = useState(null);
    const [addNewSel, setAddNewSel] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editDateData, setEditDateData] = useState('');
    const [editId, setEditId] = useState('');
    const handleOnBlur = async (e:any) => {
        const data: any = weeklySchedule.filter((item) => item.day === e.target.id.split('X')[0]);
        if (data[0].startTime && data[0].endTime) {
            if (data[0].id) {
                const id = data[0].id;
                const newData = { ...data[0] };
                delete newData.id;
                await dispatch(
                    updateTutorAvailibilityAction(
                        {
                            ...newData,
                            day: e.target.id.split('X')[0].toLowerCase(),
                        },
                        id
                    )
                );
                dispatch(getTutorAvailabilityAction());
                toast.success('Successfully edited availibility');
            } else if (!data[0].id) {
                delete data[0].id;
                await dispatch(
                    createTutorAvailibilityAction({
                        ...data[0],
                        day: e.target.id.split('X')[0].toLowerCase(),
                    })
                );
                toast.success('Successfully created availability');
            }
        }
    };

    const handleClickDelete = async (val: any) => {
        if (val.id) {
            setDeleteId(val);
            setDeleted((prevState) => prevState + 1);
        }
        if (val.id) {
            const res = await dispatch(deleteTutorAvailibilityAction(val.id));
            if (res.status === 200) {
                toast.success('Successfully deleted availibility');
            }
        }
    };

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="tutor_availablity_container">
                <div className="tutor_availablity_subcontainer">
                    <div className="tutor_availablity_subcontainer_banner">
                        <Banner heading={'Availability'} description={'Configure your general availability.'} />
                    </div>
                    <div className="row horizontalline"></div>
                    <div className="tutor_availablity_subcontainer_weekly">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="schedule_text_padding1">
                                    <Typography className="weeklyText">Weekly Schedule</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 weeklyborderline">
                                <div className="weeklyDays">
                                    <div className="row">
                                        <div className="col-4">
                                            <Typography className="weeklySubtext">Date</Typography>
                                        </div>
                                        <div className="col-4">
                                            <Typography className="weeklySubtext">Start</Typography>
                                        </div>
                                        <div className="col-4">
                                            <Typography className="weeklySubtext">End</Typography>
                                        </div>
                                    </div>
                                    <div className="weekScheduleMap">
                                        {weeklySchedule &&
                                            weeklySchedule.map((val: any, index: any) => (
                                                <div className="row" key={index}>
                                                    <div className="col-4">
                                                        <Typography
                                                            id={val.day}
                                                            className={
                                                                val.startTime && val.endTime
                                                                    ? classes.timeInputActive
                                                                    : classes.timeInputInactive
                                                            }
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => handleClickDelete(val)}
                                                        >
                                                            {val.day}
                                                        </Typography>
                                                    </div>
                                                    <div className="col-4">
                                                        <Typography
                                                            className={
                                                                val.startTime && val.endTime
                                                                    ? classes.timeInputActive
                                                                    : classes.timeInputInactive
                                                            }
                                                        >
                                                            <input
                                                                className={
                                                                    val.startTime && val.endTime
                                                                        ? classes.timeInputActive
                                                                        : classes.timeInputInactive
                                                                }
                                                                value={val.startTime}
                                                                id={`${val.day}Xs`}
                                                                type="time"
                                                                onBlur={handleOnBlur}
                                                                onChange={(e) => {
                                                                    const stateCopy = weeklySchedule && [
                                                                        ...weeklySchedule,
                                                                    ];
                                                                    const newStateCopy = stateCopy.map((item) => {
                                                                        if (item.day === e.target.id.split('X')[0]) {
                                                                            return {
                                                                                ...item,
                                                                                startTime: e.target.value,
                                                                            };
                                                                        } else {
                                                                            return item;
                                                                        }
                                                                    });
                                                                    setWeeklySchedule(newStateCopy);
                                                                }}
                                                            ></input>
                                                        </Typography>
                                                    </div>
                                                    <div className="col-4">
                                                        <Typography
                                                            className={
                                                                val.startTime && val.endTime
                                                                    ? classes.timeInputActive
                                                                    : classes.timeInputInactive
                                                            }
                                                        >
                                                            <input
                                                                className={
                                                                    val.startTime && val.endTime
                                                                        ? classes.timeInputActive
                                                                        : classes.timeInputInactive
                                                                }
                                                                onBlur={handleOnBlur}
                                                                value={val.endTime}
                                                                type="time"
                                                                id={`${val.day}Xe`}
                                                                onChange={(e) => {
                                                                    const stateCopy = weeklySchedule && [
                                                                        ...weeklySchedule,
                                                                    ];
                                                                    const newStateCopy = stateCopy.map((item) => {
                                                                        if (item.day === e.target.id.split('X')[0]) {
                                                                            return {
                                                                                ...item,
                                                                                endTime: e.target.value,
                                                                            };
                                                                        } else {
                                                                            return item;
                                                                        }
                                                                    });
                                                                    setWeeklySchedule(newStateCopy);
                                                                }}
                                                            ></input>
                                                        </Typography>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    <div className="weekhorizontalline col-12"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="schedule_text_padding2">
                                    <Typography className="weeklyText">Days Off</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 weeklyborderline">
                                <div className="daysoff_container">
                                    <div className="row">
                                        <div className="col-12">
                                            <Typography className="weeklySubtext">Days Off</Typography>
                                        </div>
                                    </div>
                                    <div className="editDelete_maincontainer">
                                        {daysOff &&
                                            daysOff.map((val: any) => (
                                                <div className="row" key={val.id}>
                                                    <div className="col-8">
                                                        <Typography className="weeklyText">{val.date}</Typography>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="editDelete_container">
                                                            <label
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    marginLeft: '105px',
                                                                    marginRight: '30px',
                                                                }}
                                                                htmlFor="date"
                                                                className="weeklySubtext"
                                                                onClick={() => {
                                                                    setIsEdit(true);
                                                                    setEditDateData(val.date);
                                                                    setEditId(val.id);
                                                                }}
                                                            >
                                                                Edit
                                                            </label>

                                                            <Typography
                                                                className="weeklySubtext"
                                                                style={{ cursor: 'pointer' }}
                                                                onClick={async () => {
                                                                    await dispatch(deleteTutorDayOff(val.id));
                                                                    toast.success('Successfully deleted tutor day off');
                                                                }}
                                                            >
                                                                Delete
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    {!addNewSel && !isEdit && (
                                        <div className="reusable_addCancel_subcontainer" style={{ marginTop: '50px' }}>
                                            <div
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setAddNewSel(true);
                                                }}
                                                className="add_button"
                                            >
                                                <Typography className="addCanceltext" style={{ cursor: 'pointer' }}>
                                                    Add New
                                                </Typography>
                                            </div>
                                        </div>
                                    )}

                                    {addNewSel && (
                                        <div className="addNew_container">
                                            <div className="row">
                                                <div className="col-5">
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <KeyboardDatePicker
                                                            className="line-input3"
                                                            label="Add New"
                                                            format="yyyy-MM-dd"
                                                            margin="normal"
                                                            value={dateData}
                                                            placeholder="YYYY-MM-DD"
                                                            fullWidth
                                                            onChange={(date: any) => {
                                                                setDateData(date);
                                                            }}
                                                        />
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </div>
                                            <div className="addCancel_container">
                                                <div className="reusable_addCancel_subcontainer">
                                                    <div
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={async () => {
                                                            await dispatch(addOffDayAction({ date: dateData }));
                                                            toast.success('Successfully added a day off');
                                                            setDateData(null);
                                                            setAddNewSel(false);
                                                        }}
                                                        className="add_button"
                                                    >
                                                        <Typography className="addCanceltext">Add</Typography>
                                                    </div>
                                                    <div className="cancel_button">
                                                        <Typography
                                                            style={{ cursor: 'pointer' }}
                                                            className="addCanceltext"
                                                            onClick={() => {
                                                                setAddNewSel(false);
                                                            }}
                                                        >
                                                            Cancel
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {isEdit && (
                                        <div className="addNew_container">
                                            <div className="row">
                                                <div className="col-5">
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <KeyboardDatePicker
                                                            className="line-input3"
                                                            label="Edit"
                                                            format="yyyy-MM-dd"
                                                            margin="normal"
                                                            value={editDateData}
                                                            placeholder="YYYY-MM-DD"
                                                            fullWidth
                                                            onChange={(date: any) => {
                                                                setEditDateData(date);
                                                            }}
                                                        />
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </div>
                                            <div className="addCancel_container">
                                                <div className="reusable_addCancel_subcontainer">
                                                    <div
                                                        onClick={async () => {
                                                             await dispatch(
                                                                editOffDayAction({ date: editDateData }, editId)
                                                            );

                                                            await dispatch(getTeacherDayOffAction());
                                                            toast.success('Successfully edited');
                                                            setIsEdit(false);
                                                        }}
                                                        style={{ cursor: 'pointer' }}
                                                        className="add_button"
                                                    >
                                                        <Typography className="addCanceltext">Save</Typography>
                                                    </div>
                                                    <div className="cancel_button">
                                                        <Typography
                                                            style={{ cursor: 'pointer' }}
                                                            className="addCanceltext"
                                                            onClick={() => {
                                                                setIsEdit(false);
                                                            }}
                                                        >
                                                            Cancel
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="weekhorizontalline  col-12"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="schedule_text_padding2">
                                    <Typography className="weeklyText">Your Fee</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 weeklyborderline">
                                <div className="yourfee_container">
                                    <div className="row">
                                        <div className="col-4">
                                            <TextField
                                                type="number"
                                                className="line-input3"
                                                label="AED Per Hour"
                                                InputProps={{ inputProps: { min: 0, max: 10000 } }}
                                                value={aed}
                                                fullWidth
                                                onChange={(e: any) => {
                                                    setAed(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="savecancel_container">
                                        <>
                                            <div className="reusable_addCancel_subcontainer">
                                                <div
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={async () => {
                                                        dispatch(updateTeacherFeeAction({ fee: aed }));
                                                        history.goBack();
                                                    }}
                                                    className="add_button"
                                                >
                                                    <Typography className="addCanceltext">Save</Typography>
                                                </div>
                                                <div className="cancel_button">
                                                    <Typography
                                                        onClick={() => {
                                                            setAed(parseInt(tutorFee.fee));
                                                        }}
                                                        style={{ cursor: 'pointer' }}
                                                        className="addCanceltext"
                                                    >
                                                        Cancel
                                                    </Typography>
                                                </div>
                                            </div>
                                        </>
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
export default PersonalSchoolToggle;
