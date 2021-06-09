import React from 'react'
import TimeTableDetails from './TimeTableDeatils'
import {useSelector , useDispatch} from  'react-redux';
import {getTimeTableAPIcall} from '../../Redux/Actions/schoolAction'
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

function TimeTableList() {
    const dispatch =  useDispatch()
    const timeTableList = useSelector((state: rootReducerType) => state.schoolReducer.timeTableList.data);
    React.useEffect(()=>{
        dispatch(getTimeTableAPIcall())
    },[])
    
    return (
        <TimeTableDetails timeTable={timeTableList && timeTableList}/>
    )
}

export default TimeTableList
