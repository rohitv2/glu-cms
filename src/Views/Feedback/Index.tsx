import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import MeritSanctionFeedbackCard from '../../components/Cards/MeritSanctionFeedbackCard';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllFeedbacksOnDepartmentAPIcall,
    getFeedBackByClassGroup,
    getFeedBackTeacher,
} from '../../Redux/Actions/schoolAction';
import { formatFeedbackData, formatTutorFeedback } from '../../Helper/schools/feedBack';
import CardContainer from '../../Containers/Cards/CardContainer';
import moment from 'moment';
import { departmentFeedback } from '../../Helper/schools/departmentFeedback';

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
    const classes = useStyles();
    const [rowData, setRowData] = useState<any[]>();
    const [allData, setAllData] = useState<any[]>();
    const [state, setState] = useState<any>({ key: '', id: '' });
    const findRoutes = useLocation();
    const dispatch = useDispatch();
    const feedBackDetails = useSelector((state: any) => state.schoolReducer.feedBackDetails);
    const feedbackDepartment = useSelector((state: any) => state.schoolReducer.departmentFeedack);

    useEffect(() => {
        if (feedBackDetails && state.key === 'teacher') {
            let data = formatTutorFeedback([feedBackDetails]);
            setRowData(data);
            setAllData(data);
        }
        if (feedBackDetails && state.key === 'classGroup') {
            let data = formatFeedbackData(feedBackDetails);
            setRowData(data);
            setAllData(data);
        }
    }, [feedBackDetails]);

    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('key')) {
                const data = (findRoutes as any)?.state?.data;
                setState({
                    key: (findRoutes as any).state.key,
                    id: data?.id,
                });
            }
        }
    }, []);

    useEffect(() => {
        if (state.key === 'classGroup') {
            dispatch(getFeedBackByClassGroup(state?.id));
        }
        if (state.key === 'teacher') {
            dispatch(getFeedBackTeacher(state?.id));
        }
        if (state.key === 'department') {
            dispatch(getAllFeedbacksOnDepartmentAPIcall(state?.id, '', ''));
        }
    }, [state, setState]);

    useEffect(() => {
        if (feedbackDepartment && state.key === 'department') {
            setRowData(departmentFeedback(feedbackDepartment));
        }
    }, [feedbackDepartment, state]);

    const handleValue = (value: any) => {
        let data = allData?.filter((item: any) => moment(value.date).isSame(item.date));
        setRowData(data);
    };

    return (
        <div className="student-wrapper">
            <Grid container spacing={0} className={classes.topParent}>
                <Grid item xs={12} md={3}>
                    <Typography className={classes.heading}>Feedback's</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Filter role={state && state.key} getFilterValue={handleValue} />
                </Grid>
            </Grid>
            {rowData && rowData.length > 0
                ? rowData.map((element: any, index: number) => (
                      <CardContainer>
                          <Box className={classes.pdBox}>
                              <MeritSanctionFeedbackCard
                                  // imageLink = {element.profile}
                                  studentName={element.name}
                                  subjectName={element.title}
                                  comment={element.comment}
                                  detailHeader={'Feedback'}
                                  date={element.date}
                              />
                              {index < rowData.length - 1 && <Box className={classes.hrLine} />}
                          </Box>
                      </CardContainer>
                  ))
                : 'No Data Found'}
        </div>
    );
};

export default Index;
