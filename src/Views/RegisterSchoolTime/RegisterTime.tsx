import React ,{useEffect,useState}from 'react'
import NavigationMenu from '../../components/NavigationMenu';
import useMenuList from '../../Hooks/useMenuList';
import { Typography } from '@material-ui/core';
import './style.scss'
import FormControlSelect from '../../components/Form/FormControlSelect';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PageFooter from '../../components/PageFooter';
import StudentBar from './StudentBar'
import {useSelector,useDispatch} from 'react-redux'
import {getStudentTimeTable} from '../../Redux/Actions/teacherAction'
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import { useLocation } from 'react-router-dom';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

const useStyles = makeStyles({
    inputRoot: {
        minWidth: 'fit-content',
    },
})

function RegisterTime() {
    const menu = useMenuList('tutor')
    const routes = useLocation();
    const classes = useStyles();
    const dispatch = useDispatch()
    const [item,setItem] = useState()
    const {list,isPending} = useSelector((state: rootReducerType) => ({
        list : state.teacherReducer.studentTimeTable.data,
        isPending : state.teacherReducer.studentTimeTable.isPending,
    }))

    React.useEffect(()=>{
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('timeTableList')) {
                const id = (routes as any).state.timeTableList.timeTableId;
                const timeTableList = (routes as any).state.timeTableList;
                dispatch(getStudentTimeTable(id))
                setItem(timeTableList)            
            }
        }
    },[])

    return (
        <NavigationMenu  menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            {isPending && <FullScreenLoader/>}
            <div className="register-time-container">
            <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="register-time-header">
                                    <Typography className="register_time_main_text">Register</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="register-time-header">
                                    <div className="header_content_1">
                                        <Typography className="register_time_text1">{item && item.time}</Typography>
                                    </div>
                                    <div className="header_content_2">
                                        <Typography className="register_time_text2">{item && item.subjectName}</Typography>
                                    </div>
                                    <div className="header_content_3">
                                    <FormControlSelect
                                        name="child"
                                        value={''}
                                        options={[
                                            {
                                                label:"Active",
                                                value : "Active"
                                            },
                                            {
                                                label:"Batch Update",
                                                value : "Batch update"
                                            },

                                        ]}
                                        onChange={()=>{}}
                                        variant="outlined"
                                        placeholder="select"
                                        inputRootClassName={classes.inputRoot}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row student-list">
                            <StudentBar data={list && list}/>
                        </div>
            </div>
            <div className="commonWhiteFooter">
                    <PageFooter />
            </div>
            </div>
        </NavigationMenu>
    )
}

export default RegisterTime
