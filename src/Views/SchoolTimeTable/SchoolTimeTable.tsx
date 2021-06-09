import React from 'react';
import ProgressBar from '../PersonalSchool2/ProgressBar';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { Typography } from '@material-ui/core';
import {useHistory} from 'react-router'
import useMenuList from '../../Hooks/useMenuList';
import Calendar from 'react-calendar';
import moment from 'moment';
import {useDispatch,useSelector} from 'react-redux';
import {getTutorTimeTable} from '../../Redux/Actions/teacherAction'
import {dataToProgressBar} from '../../Helper/tutor/progressBarData';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

const PersonalSchoolToggle: React.FunctionComponent = () => {
    const history = useHistory()
    const menu = useMenuList('tutor')
    const dispatch = useDispatch()
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const {timeTableList,isPending} = useSelector((state: rootReducerType) => ({
        timeTableList :dataToProgressBar(state.teacherReducer.tutorTimeTable.data),
        isPending : state.teacherReducer.tutorTimeTable.isPending,
    }))

    const handleDateChange = (selectedDate: any) => {
        setSelectedDate(selectedDate);
    };
    
    const onClickRegister = (e,item: any) =>{
        history.push({
            pathname: '/tutor/school-table/register',
            state:{
                timeTableList : item,
            }
        })
    }

    React.useEffect(()=>{
        const date = moment(selectedDate).format("YYYY-MM-DD")
        dispatch(getTutorTimeTable(date))
    },[selectedDate,setSelectedDate])

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'} >
            {isPending && <FullScreenLoader/>}
            <div className="personal_school_timetable">
                <div className="personal_school_timetable_subcontainer">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="school_table_calendar_container">
                                <div className="personal_school_calendarDate row">
                                    <div className="col-6 p-0">
                                        <Typography className="calendarsubText1">{moment(selectedDate).format("LL")}</Typography>
                                        <Calendar
                                            next2Label={null}
                                            prev2Label={null}
                                            onChange={handleDateChange}
                                            value={selectedDate}
                                        />

                                    </div>
                                    <div className="col-6">
                                        <Typography className="calendarsubText2">
                                            {timeTableList[0] ? timeTableList[0].startTime : "00:00"}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 school_borderline p-0">
                            <div className="school_table_progress_container">
                                <div className="row">
                                    <div className="big_timetable_date">
                                        <Typography className="calendarText">{moment(selectedDate).format("LL")}</Typography>
                                    </div>
                                </div>
                        
                                    {
                                    timeTableList.length > 0 ?
                                    (timeTableList.map((item,index) => (
                                        <>
                                            <ProgressBar
                                                time={item.time}
                                                subject={item.subjectName}
                                                typeClassroom={'Classroom'}
                                                type={'Attendance'}
                                                typeNumber={item.attendance}
                                                classType={item.roomName}
                                                progress={item.progressBar}
                                                onClickRegister={(e) => onClickRegister(e,item)}
                                            />
                                            {index < timeTableList.length - 1 && (
                                                (<div className="row school_horizontalline"></div>) 
                                            )}
                                        </>
                                        ))
                                    ): "No Data Found"
                                    }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="commonWhiteFooter">
                <PageFooter/>
            </div>
            </div>
        </NavigationMenu>
    );
};
export default PersonalSchoolToggle;
