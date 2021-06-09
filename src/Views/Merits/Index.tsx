import React,{useEffect , useState} from 'react';
import Filter from './Filter';
import {useLocation} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {
        getMeritSanctionByClassGroup ,
        getMeritSanctionByTeacher,
        getMeritByDepartmentApiCall
    } from '../../Redux/Actions/schoolAction'
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import CardContainer from '../../Containers/Cards/CardContainer';
import moment from 'moment';
import MeritSanctionFeedbackCard from '../../components/Cards/MeritSanctionFeedbackCard'
import {checkStatus} from '../../Helper/schools/meritSanction'

const useStyles = makeStyles({
    pdBox: {
        paddingLeft: '3.75rem',
        paddingRight: '3.75rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    topParent: {
        marginBottom: '5rem',
    },
    heading: {
        fontSize: '2.625rem',
        color: colors.black,
        marginTop: '1rem',
    },
    hrLine: {
        height: '1px',
        width: '100%',
        backgroundColor: colors.lightGray,
        marginTop: '3rem',
    },
});

const Index = () => {
    const dispatch = useDispatch();
    const findRoutes = useLocation();
    const [state , setState] = useState<any>({key:"",id:""})
    const classes = useStyles()
    const [rowData,setRowData] = useState<any[]>()
    const [allData,setAllData] =useState<any[]>()
    const meritSanctionList = useSelector((state: any) => state.schoolReducer.meritSanctionList)
    
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('key') ) {
                const data  = (findRoutes as any)?.state?.data
                setState({
                    key : (findRoutes as any).state?.key,
                    id : data?.id
                })
            }
        }
    }, []);

    useEffect (()=>{
        if(state.key==="classGroup"){
            dispatch(getMeritSanctionByClassGroup(state?.id))
        }
        if(state.key === "teacher"){
            dispatch(getMeritSanctionByTeacher(state?.id))
        }
        if(state.key === "department"){
            dispatch(getMeritByDepartmentApiCall(state?.id))
        }
    },[state,setState])
    
    useEffect(()=>{        
        if(meritSanctionList){
            let result = meritSanctionList.map((item: any)=>{
                if(item?.merit === true || item?.sanction===true){
                    return{
                        name : item?.Student?.firstName + " " + item?.Student?.lastName,
                        status : checkStatus(item.merit,item.sanction),
                        comment: item.comment,
                        updatedAt: moment(item.createdAt).format("MM/DD/YYYY"),
                        profile : item?.Student?.User?.profile,
                        subjectName: item?.Timetable?.Subject?.subjectName,
                        classGroupId : item?.classGroupId
                    }
                }
            })
            result = result.filter(function( element : any) {
                return element !== undefined;
             })
            setAllData(result)
            setRowData(result)
        }
    },[meritSanctionList])

    const handleValue = (value: any) =>{
        let data = allData?.filter((item: any)=> value.type === item.status || value.class === item.classGroupId || value.date === item.updatedAt )
        if(value.type && value.date){
            data = allData?.filter((item: any)=> value.type === item.status && moment(value.date).isSame(item.updatedAt) )
        }
        if(value.type && value.date && value.class){
            data = allData?.filter((item: any)=> value.type === item.status && value.class === item.classGroupId && moment(value.date).isSame(item.updatedAt) )
        }
        if(value.type && value.class){
            data = allData?.filter((item: any)=> value.type === item.status && value.class === item.classGroupId)
        }
        if(value.date && value.class){
            data = allData?.filter((item: any)=> value.class === item.classGroupId && moment(value.date).isSame(item.updatedAt) )
        }

        setRowData(data)
    }


   
    return (       
        <div className="student-wrapper">
            <Grid container spacing={0} className={classes.topParent}>
                <Grid item xs={12} md={3}>
                    <Typography className={classes.heading}>Merit/Sanction</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Filter role={state && state.key} getFilterValue={handleValue}/>
                </Grid>
            </Grid>
            {rowData && rowData.length > 0 ?
             rowData.map((element: any,index: number)=>
                <CardContainer>
                <Box className={classes.pdBox}>
                    <MeritSanctionFeedbackCard
                        imageLink = {element.profile}
                        studentName={element.name}
                        subjectName = {element.subjectName}
                        comment={element.comment ? element.comment : ""}
                        status = {element.status} 
                        date={element.updatedAt}
                        detailHeader = {"Details"}
                    />
                    {index < rowData.length - 1 && (
                    ( <Box className={classes.hrLine}/> ) 
                    )}
                </Box>
            </CardContainer>            
            ) : "No Data Found"}

        </div>
    );
};

export default Index;