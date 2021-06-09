import React from 'react'
import EditResult from './EditResult'
import {useLocation} from 'react-router-dom'

function Index() {
    const routes = useLocation()
    const [studentData,setStudentData] = React.useState()

    React.useEffect(()=>{
    if (routes.hasOwnProperty('state')) {
        if ((routes as any).state.hasOwnProperty('studentEditData')) {
            const stData = (routes as any).state.studentEditData;
            setStudentData(stData)
        }
    }
    },[])
    return (
        <div>
            <EditResult studentData = {studentData}/>
        </div>
    )
}

export default Index
