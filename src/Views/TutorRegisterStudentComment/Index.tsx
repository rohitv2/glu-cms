import React from 'react'
import StudentComment from './StudentComment'
import { useLocation } from 'react-router-dom';


function Index() {
    const routes = useLocation();
    const [studentData,setStudentData] = React.useState()

    React.useEffect(()=>{
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('studentTimeTableStudent')) {
                const data = (routes as any).state.studentTimeTableStudent;
                setStudentData(data)
            }
        }
    },[])

    
    return (
        <div>
            <StudentComment data={studentData}/>
        </div>
    )
}

export default Index
