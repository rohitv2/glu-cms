import React from 'react'
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { Typography } from '@material-ui/core';
import './style.scss';
import CommentComponent from './CommentComponent'
import DescriptionComponent from './DescriptionComponent'
import StudentResultStatistics from './StudentResultStatistics'
import useMenuList from '../../Hooks/useMenuList';
import {useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from  'react-redux'
import {getIndivisualStudentExamData} from '../../Redux/Actions/teacherAction'
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import {structuredStudentExamData} from '../../Helper/tutor/statistics'
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';


function StudentResultContiner() {
    const menu = useMenuList('tutor')
    const dispatch = useDispatch()
    const routes =  useLocation()
    const [name,setName] = React.useState()
    const {studentDetail,isPending} = useSelector((state :rootReducerType) => ({
        studentDetail : structuredStudentExamData(state.teacherReducer.individualStudentExamDetail.data),
        isPending : state.teacherReducer.individualStudentExamDetail.isPending,
    }))
    React.useEffect(()=>{
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('studentIdIndividual')) {
                const studentData = (routes as any).state.studentIdIndividual;
                const examId =  studentData.examId
                const studentId = studentData.id
                setName(studentData.name)
                dispatch(getIndivisualStudentExamData(examId,studentId))
            }
        }
        },[])
    return (
        <NavigationMenu absolute menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
                {isPending && <FullScreenLoader/>}
                <StudentResultStatistics data={studentDetail && studentDetail} name={name}/>
                <div className="student_result_main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="tutor_homework_header_container">
                                    <div className="tutor-exam-coatiner-header">
                                        <div className="header_content_1">
                                            <Typography className="tutor_statistics_main_text">Submitted</Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <Typography className="tutor_statistics_main_time">
                                            {studentDetail && studentDetail.submittedDate}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography className="tutor_statistics_main_time">9.20pm</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="tutor_homework_main_container">
                                    <div className="tutor_homework_main_list">
                                    <DescriptionComponent data= {studentDetail && studentDetail.description}/>
                                    <div className="homework_horizontalline"></div>
                                    <CommentComponent data={studentDetail && studentDetail.student.comment}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commonFooter">
                        <PageFooter padding={false} />
                    </div>
                </div>
        </NavigationMenu>    
    )
}

export default StudentResultContiner
