import React from 'react'
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { Typography,TextField,TextareaAutosize,makeStyles } from '@material-ui/core';
import useMenuList from '../../Hooks/useMenuList';
import TitleBig from '../../components/Typographies/TitleBig';
import './style.scss';
import {editStudentResult} from '../../Redux/Actions/teacherAction';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'


const useStyles = makeStyles({

    textAreaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3.0625rem, #ccc 3rem, white 3.0625rem)',
        lineHeight: '3rem',
        border: 'none',
        width: '100%',
        height: '14rem',
        color: 'inherit',
        fontFamily: 'CircularXXWeb-Book',

        fontSize: '2.625rem',
        '&:hover': {
            border: 'none',
            cursor: 'text',
        },
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
        font: 'normal normal normal 42px/62px CircularXXWeb;',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '4.1px',
        marginTop: '5rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',

        '&:hover': {
            cursor: 'pointer',
        },
    },
        })

function EditResult({studentData}) {

    const dispatch = useDispatch()
    const classes = useStyles()
    const history =  useHistory()
    const menu = useMenuList('tutor')
    const [pageData, setPageData] = React.useState<any>()
    const [editStudent,setEditStudent] = React.useState<any>({
        comment : null,
        percentage:null,
    })

    React.useEffect(()=>{
        setPageData(studentData)
        setEditStudent({
            comment:studentData && studentData.student.comment,
            percentage:studentData && studentData.student.percentage 
        })
    },[studentData])

    const handleEditStudent = () =>{
        const examId = pageData.student.examId;
        const studentId = pageData.student.studentId
        dispatch(editStudentResult(editStudent,examId,studentId,history))
    }

    return (
        <NavigationMenu   menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
        <div className="student-edit-conatiner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="student-edit-header">
                        <Typography className="student-edit-name-header">{pageData && pageData.student.name}</Typography>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="student-edit-header">
                        <TitleBig>{pageData?.subject?.subjectName}.</TitleBig>
                        <TitleBig>{pageData?.topic}.</TitleBig>
                        <TitleBig>{pageData?.term?.termName}</TitleBig>
                    </div>
                </div>
            </div>
            <div className="studentEdit_horizontalline"></div>
            <div className="row">
            <div className="col-md-6 p-0">
                    <div className="student-edit-header">
                    <Typography className="student-edit-name-header">Enter Results</Typography>
                    </div>
                </div>
                <div className="col-md-6 p-0 left_border bottom-part">
                    <div>
                        <TextField
                                className="line-input-large"
                                label="Percentage"
                                type="number"
                                value={editStudent.percentage}
                                onChange={(e)=>{
                                    setEditStudent(
                                        {
                                            ...editStudent,
                                            percentage: e.target.value === "" ? null : e.target.value
                                        }

                                    )
                                }}
                                style={{ color: 'red' }}
                        />
                    </div>

                    <div>
                        <Typography className="title">Comment</Typography>
                        <TextareaAutosize 
                                id="bio" 
                                rowsMin={6} 
                                className={classes.textAreaClass}
                                onChange={(e)=>{
                                    setEditStudent(
                                        {
                                            ...editStudent,
                                            comment: e.target.value
                                        }

                                    )
                                }}
                                value={editStudent.comment}
                        />
                    </div>

                    <div>
                        <label 
                            className={classes.upload} 
                            style={{ marginBottom: '8rem' }}
                            onClick = {handleEditStudent}
                        >
                            Save
                        </label>
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

export default EditResult
