import React from 'react'
import FormControlSelect from '../../components/Form/FormControlSelect';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {useHistory} from 'react-router'
import {dataToFormattedData} from '../../Helper/tutor/studentTimeTable';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {editStudentComment} from '../../Redux/Actions/teacherAction'
import {useDispatch} from 'react-redux'

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
    inputRoot: {
        minWidth: 'fit-content',
  
    },
})

function StudentBar({data}: any) {
    const history = useHistory()
    const classes = useStyles();
    const [cardArray, setCardArray] = React.useState<any>()
    const dispatch = useDispatch()
    const handleStudentComment = (e,item: any) =>{
        history.push({
            pathname: '/tutor/school-table/student/comment',
            state:{
                studentTimeTableStudent : item,
            }
        })
    }
    
    React.useEffect(()=>{
        if(data){
            setCardArray(dataToFormattedData(data))
        }
    },[data])

    const handleEvent = (e :  any , item: any) =>{
        let i
        const edited_data = {
            status : e.target.value
        }
        dispatch(editStudentComment(item.studentId,item.t_id,edited_data,history,i=0))
    }

    const handleChangeRadio = (e, item: any) =>{
        let i
        const edited_data = {
            merit : e.target.value === "merit" ? true : false,
            sanction : e.target.value === "sanction" ? true : false
        }
        dispatch(editStudentComment(item.studentId,item.t_id,edited_data,history,i=0))
    }

    return(
            <>
            {cardArray ?
             cardArray && cardArray.filter((item: any )=>(item.studentId!=null)).map((item: any, index: number) => (
                <>
                <div className="container-fluid  card-horizontal"></div>
                <div className="student-card-container row container-fluid">
                <div className="student-card-name">{item.name}</div>
                <div className="student-card-description">{item.comment}</div>
                    <div className="student-card-dropdown">
                        <FormControlSelect
                            name= "student-form"                    
                            options={[
                                {
                                    label : "Present",
                                    value : "present"
                                },
                                {
                                    label : "Absent",
                                    value : "absent"
                                },
                                {
                                    label : "Late",
                                    value : "late"
                                }
                            ]}
                            onChange={(event) => {handleEvent(event,item)}}
                            value={item.status}
                            variant="outlined"
                            placeholder="Select"
                            inputRootClassName={classes.inputRoot}
                        />
                        </div>
                        <div className="merit-sanction-block">
                        <FormControl component="fieldset">
                                    <RadioGroup row 
                                        aria-label="position" 
                                        name="position" 
                                        className="radio-conatiner"
                                        value={item.merit ? "merit" : "" || item.sanction ? "sanction" : ""}
                                        onChange={(e)=>{handleChangeRadio(e,item)}} 
                                    >
                                        <FormControlLabel 
                                            value="merit" 
                                            control={<GreenRadio/>} 
                                            label={<Typography style={{fontSize:"1.34rem"}}>Merit</Typography>}
                                            />
                                        <FormControlLabel 
                                            value="sanction" 
                                            control={<GreenRadio/>} 
                                            label={<Typography style={{fontSize:"1.34rem"}}>Sanction</Typography>}
                                            />
                                    </RadioGroup>
                        </FormControl>

                        </div>
                        <div className="student-card-button" 
                                onClick = {(e) => handleStudentComment(e,item)}>
                                {item.action}
                        <CheckCircleOutlineIcon style={{marginLeft:".7rem"}}/>
                        </div>
                    </div>
                    </>
            )) : "No Data Found"
        }
        </>
    )
}

export default StudentBar
