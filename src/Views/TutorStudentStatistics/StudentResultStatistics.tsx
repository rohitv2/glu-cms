import React, { FC } from 'react';
import CardsGridContainer from '../../Containers/CardsGridContainer';
import CardsGrid from '../../Containers/CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitleBig from '../../components/Typographies/TitleBig';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BarChart from '../../components/Charts/BarChart';
import { colors } from '../../Styles/colors';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import PercentCard from '../../components/Cards/PercentCard';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {Typography} from '@material-ui/core';
import {useHistory} from 'react-router'
import {useDispatch} from 'react-redux'
import {removeStudentFromExam} from '../../Redux/Actions/teacherAction'


const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '4.375rem',
    },
    percentCardsContainer: {
        flexGrow: 1,
    },
    edit_delete: {
        display : "flex",
        justifyContent: "flex-start",
        margin : "2rem 0 0 .5rem"
    },
    delete: {
        marginLeft: "2rem",
        cursor : "pointer",
    },
    edit:{
        cursor : "pointer",
    }
});


const StudentResultStatistics = (data: any) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const route = useHistory()
    const [state, setstate] = React.useState()
    const [chartValue,setChartValue] =  React.useState<any>()

    React.useEffect(()=>{
        setstate(data.data)
        setChartValue(parseInt(data?.data?.student?.percentage))
    },[data])

    const goToStudentEdit = () =>{
        Object.assign(state && state.student, {name: data.name})
        route.push({
            pathname: '/tutor/examresult/student-edit',
            state:{
                studentEditData : state
            }
        })
    }

    const handleRemoveStudent = () =>{
        const examId = state && state.student.examId
        const studentId = state && state.student.studentId
        dispatch(removeStudentFromExam(examId,studentId,route))
    }


    return (
            <CardsGridContainer background="secondary" >
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <Grid container>
                            <TitlePrimary>{data && data.name} <PlayCircleFilledIcon style={{color:"blue"}}/></TitlePrimary>
                        </Grid>
                        <Grid container alignItems="center" className={classes.percentCardsContainer}>
                            <Grid container direction="column">
                                <PercentCard
                                    title="Student Mark"
                                    value={ state && state.student.percentage ? state.student.percentage +"%" : ""}
                                    dif=""
                                    color={colors.primary}
                                    marginBottom
                                />
                                <PercentCard
                                    title="Predicted Mark"
                                    value="64%"
                                    dif=""
                                    color="rgba(0, 0, 0, 0.25)"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        <Grid container direction="column" className={classes.titleContainer}>
                            <TitleBig>{state?.subject?.subjectName}:</TitleBig>
                            <TitleBig>{state?.topic}.</TitleBig>
                            <TitleBig>{state?.term?.termName}</TitleBig>
                            <div className={classes.edit_delete}>
                                <Typography 
                                    className={classes.edit}
                                    onClick={goToStudentEdit}
                                    >
                                    Edit
                                </Typography>
                                <Typography 
                                    className={classes.delete}
                                    onClick={handleRemoveStudent}>
                                        Delete
                                </Typography>
                            </div>
                        </Grid>
                        <Grid container>
                        <BarChart
                            column = {true}
                            chartWidth={410}
                            chartHeight={270}
                            barWidth={50}
                            data={[
                                {
                                    data: [chartValue],
                                    color: colors.primary,
                                },
                                {
                                    data: [64],
                                    color: colors.lightPrimary,
                                },
                            ]}
                        />
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
    );
};

export default StudentResultStatistics;
