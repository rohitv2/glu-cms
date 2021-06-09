import React, { FC, useState } from 'react';
import CardsGridContainer from '../../Containers/CardsGridContainer';
import CardsGrid from '../../Containers/CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitleBig from '../../components/Typographies/TitleBig';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BarChart from '../../components/Charts/BarChart';
import { colors } from '../../Styles/colors';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import PercentCard from '../../components/Cards/PercentCard';
import {Typography} from '@material-ui/core';
import {useHistory} from 'react-router'
import {deleteTutorExam} from '../../Redux/Actions/teacherAction'
import {useDispatch} from 'react-redux'


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
        cursor : "pointer"
    },
    edit : {
        cursor : "pointer"
    }
});


const TutorStatistics = (data: any) => {
    const classes = useStyles();
    const [state, setstate] = useState()
    const [chartValue,setChartValue] = useState()
    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(()=>{  
        setstate(data.data)
        setChartValue(parseInt(data?.data?.averageStudent))
    },[data])



    const handleEditExam = (e:any,data:any) =>{
        history.push({
            pathname: '/tutor/tutor-submit-results',
            state:{
                editExamData: data
            }
        })
    }

    const handleDeleteExam = () => {
        const examId = state && state.id
        dispatch(deleteTutorExam(examId,history))
    }

    return (
            <CardsGridContainer background="secondary" >
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <Grid container>
                            <TitlePrimary>Submitted</TitlePrimary>
                        </Grid>
                        <Grid container>
                                <TitlePrimary>
                                    {state?.submittedDate}
                                </TitlePrimary>
                        </Grid>
                        
                        <Grid container alignItems="center" className={classes.percentCardsContainer}>
                            <Grid container direction="column">
                                <PercentCard
                                    title="Student average"
                                    value={state? state.averageStudent+"%": "0:00"}
                                    dif=""
                                    color={colors.primary}
                                    marginBottom
                                />
                                <PercentCard
                                    title="Predicted average"
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
                                <Typography onClick={(e)=>{handleEditExam(e,state && state)}} className={classes.edit}>Edit</Typography>
                                <Typography 
                                    className={classes.delete}
                                    onClick = {handleDeleteExam}
                                    >
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

export default TutorStatistics;
