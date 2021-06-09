import { checkSchoolOrFreelancer } from './checkSchoolOrFreelancer';
import moment from 'moment';
import {
    getAllFreelanceAllsessionOnDateFilterAPIcall,
    getTeacherAllsessionOnDateFilterAPIcall,
} from '../Redux/Actions/freelanceTeacherAction';
import { Dispatch } from 'react';

export const handleCalenderFilter = (date: Date | string, dispatch: Dispatch<any>) => {
    const data = moment(date).format('YYYY-MM-DD');
    if (checkSchoolOrFreelancer() === 'Freelancer') {
        dispatch(getAllFreelanceAllsessionOnDateFilterAPIcall(data));
    } else if (checkSchoolOrFreelancer() === 'School') {
        dispatch(getTeacherAllsessionOnDateFilterAPIcall(data));
    }
};
