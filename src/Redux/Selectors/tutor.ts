import { RootState } from '../Reducers/types';

export const reviewsSelector = (state: RootState) => state.teacherReducer.reviews;

export const teacherDataSelector = (state: RootState) => state.teacherReducer.teacherData;

export const teacherSubjectList = (state: RootState) => state.teacherReducer.teacherSubjectsList;

export const teacherTermList = (state: RootState) => state.teacherReducer.TermList;

export const submitChallengeSelector = (state: RootState) => state.teacherReducer.reviews.submitChallenge;

export const upcomingClasses = (state: RootState) => state.freelanceTeacherReducer.freelanceUpcomingClass;

export const recordedClasses = (state: any) => state.freelanceTeacherReducer.totalRecordedClass;

export const freelanceSubjectList = (state: any) => state.freelanceTeacherReducer.freelanceSubjectList;

// export const schoolSubjectList = (state: any) => state.freelanceTeacherReducer.freelanceSubjectList;

export const salesSelector = (state: RootState) => state.teacherReducer.sales;

export const upcomingCalendarClasses = (state: RootState) => state.freelanceTeacherReducer.calendarUpcomingClass;

export const sessionsCountSelector = (state: RootState) => state.teacherReducer.sessionsCount;

export const schoolSessionsCountSelector = (state: RootState) => state.teacherReducer.schoolSessionsCount;