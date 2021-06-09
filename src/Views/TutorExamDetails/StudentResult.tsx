import React from 'react'
import { useHistory } from 'react-router'


function StudentResult(data: any) {
    const route = useHistory();
    const [studentList,setStudentList] = React.useState<any>()

    const gotToPage = (e:any,data: any) =>{
        route.push({
            pathname: '/tutor/exam/student-individual',
            state:{
                studentIdIndividual : data,
            }
        })
    }

    React.useEffect(()=>{
        setStudentList(data.data)
    },[data])

    const handleResult = (e:any,studentData: any) =>{
        route.push({
            pathname: '/tutor/examresult/student-edit',
            state:{
                studentEditData : studentData
            }
        })
    }

    return (
        <div className="student_result_container">
            {
                studentList && studentList.student.map((student: any)=>(
                     <div className="student_result_div">
                         <div className="student_name" 
                            onClick={(e)=>gotToPage(e,
                                data={
                                    id : student.studentId,
                                    examId: student.examId,
                                    name:student.name
                                })}
                            >
                                {student.name}
                        </div>
                         <div className="student_mark">
                                {
                                student.percentage ? student.percentage + "%": ""
                                }
                        </div>
                         <div 
                            className="option_button" 
                            onClick={(e)=>handleResult(e,
                                data={
                                    student : student,
                                    subject:{
                                        subjectName:studentList.subject.subjectName,
                                        subjectId :  studentList.subject.subjectId,
                                    },
                                    topic: studentList.topic,
                                })}
                            >
                             {
                                 student.percentage ? 'Edit' : 'Enter Result'
                             }
                         </div>
                     </div>
                ))
            }
        </div>
    )
}

export default StudentResult
