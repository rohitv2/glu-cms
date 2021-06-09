import React from 'react'
import NavigationMenu from '../../components/NavigationMenu';
import useMenuList from '../../Hooks/useMenuList';
import { makeStyles, Typography, Grid, TextareaAutosize } from '@material-ui/core';
import './style.scss'
import PageFooter from '../../components/PageFooter';
import { dispatch } from '../../Redux/Store/Store';
import {editStudentComment} from '../../Redux/Actions/teacherAction'
import {useHistory} from 'react-router'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';


const GreenRadio = withStyles({
    root: {
      color: "#50A919",
      '&$checked': {
        color: "#50A919",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles({
    textareaClass: {
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
})

function StudentComment({data} : any) {
    const classes = useStyles()
    const [studentData,setStudentData] = React.useState()
    const [studentComment,setStudentComment] =  React.useState()    
    const menu = useMenuList('tutor')
    const history = useHistory();

    React.useEffect(()=>{
        setStudentData(data)
        setStudentComment(data && data.comment)
    },[data])

    const handleEditStudent = () =>{
        if(studentData){
            const id = studentData.studentId;
            const t_id = studentData.t_id
            let i
            const editedData  = {
                comment: studentComment,
            }
            dispatch(editStudentComment(id,t_id,editedData,history,i=1))
        }
    }
    return (
        <NavigationMenu  menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="student-comment-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="student-comment-header">
                                <Typography className="student-comment-main-text">{studentData && studentData.name}</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">

                        <div className="register-time-header">
                                    <div className="header_content_1">
                                        <Typography className="student-comment-text1">{data && data.Time}</Typography>
                                    </div>
                                    <div className="header_content_2">
                                        <Typography className="student-comment-text1">{data && data.subjectName}</Typography>
                                    </div>
                                    <div className="header_content_3">

                                    <div>
                                            <Typography className="signal-text">
                                                <span 
                                                    className="school-time-signal"
                                                    style={data?.merit ? {backgroundColor : "#50A919"} : {backgroundColor:"#CFCFCF"}}
                                                >
                                                </span>
                                                    Merit
                                            </Typography>

                                    </div>
                                    <div>
                                            <Typography className="signal-text">
                                                <span 
                                                    className="school-time-signal"
                                                    style={data?.sanction ? {backgroundColor : "#50A919"} : {backgroundColor:"#CFCFCF"}}
                                                >
                                                </span>
                                                    Sanction
                                            </Typography>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="comment_horizontalline"></div>
                    <div className="row comment-lower-div">
                        <div className="col-md-6 p-0">
                                <div className="student-comment-header">
                                            <Typography className="student-comment-main-text">Enter Feedback</Typography>
                                </div>
                        </div>
                        <div className="col-md-6 p-0 left_border form-div">
                                <div className="student-comment-header">
                                            <Typography className="student-comment-subtext">Comment</Typography>
                                </div>
                                <TextareaAutosize id="bio" onChange={(e)=>setStudentComment(e.target.value)} value={studentComment} rowsMin={6} className={classes.textareaClass} />
                                <div className="add_button row"  onClick = {handleEditStudent}>
                                    <Typography
                                        style={{ cursor: 'pointer' }}
                                        className="addCanceltext" 
                                    >
                                    Save
                                    </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonWhiteFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    )
}

export default StudentComment
