import React,{useState} from 'react'
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { Typography } from '@material-ui/core';
import './style.scss'
import DescriptionComponent from '../TutorStudentStatistics/DescriptionComponent'
import TutorStatistics from './TutorStatistics'
import StudentList from './StudentList'
import StudentResult from './StudentResult'
import useMenuList from '../../Hooks/useMenuList';
import {useLocation} from 'react-router-dom'
import {structuredStatData} from '../../Helper/tutor/statistics';
import {useSelector,useDispatch} from 'react-redux'
import {getIndividulaExamDetails} from '../../Redux/Actions/teacherAction'
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

function TutorExamResultContainer() {
    const menu = useMenuList('tutor')
    const routes = useLocation()
    const dispatch = useDispatch()
    const {examDetail,isPending} = useSelector((state :rootReducerType) => ({
        examDetail : structuredStatData(state.teacherReducer.individualExamDetail.data),
        isPending : state.teacherReducer.individualExamDetail.isPending,
    }))
    
    React.useEffect(()=>{
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('individualExamId')) {
                const id = (routes as any).state.individualExamId;
                dispatch(getIndividulaExamDetails(id))
            }}
    },[])

    return (
            <NavigationMenu absolute  menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
                {isPending && <FullScreenLoader/>}
                <TutorStatistics data = {examDetail}/>
                <div className="tutor_exam_result_container">
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 p-0">
                        <div className="tutor_homework_header_container">
                            <div className="tutor-exam-coatiner-header">
                                <div className="header_content_1">
                                            <Typography className="tutor_statistics_main_text">Comment</Typography>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                        <div className="tutor_homework_main_container">
                            <div>
                                    <DescriptionComponent data = {examDetail && examDetail.desc}/>
                            </div>
                        </div>
                </div>                
                </div>
                <div className="homework_horizontalline"></div>
                <div className="row">
                    <div className="col-md-6 p-0">
                            <div className="tutor_homework_header_container">
                                <div className="tutor-exam-coatiner-header">
                                            <div className="header_content_1">
                                                <Typography className="tutor_statistics_main_text">Students</Typography>
                                            </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 border_student">
                            <div className="tutor_homework_main_container">
                                <div>
                                    <StudentList data={examDetail && examDetail.student}/>
                                </div>

                                <div className="turorexamresult_horizontalline"></div>
                            </div>
                    </div>   
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                            <div className="tutor_homework_header_container">
                                <div className="tutor-exam-coatiner-header">
                                            <div className="header_content_1">
                                                <Typography className="tutor_statistics_main_text">Results</Typography>
                                            </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 border_student">
                            <div className="tutor_homework_main_container">
                                <div>
                                    <StudentResult data={examDetail && examDetail}/>
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

export default TutorExamResultContainer
