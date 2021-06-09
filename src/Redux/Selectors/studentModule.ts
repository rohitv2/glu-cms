import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { RootState } from '../Reducers/types';

export const homeworkSelector = (state: RootState) => state.studentModule.homework;

export const teachersSelector = (state: RootState) => state.studentModule.teachers;

export const upcomingClassesSelector = (state: RootState) => state.studentModule.upcomingClasses;

export const previousClassesSelector = (state: RootState) => state.studentModule.previousClasses;

export const featuredSubjectsSelector = (state: RootState) => state.studentModule.featuredSubjects;

export const infoSelector = (state: RootState) => state.studentModule.info;

export const subjectsSelector = (state: RootState) => state.studentModule.subjects;

export const updateInfoSelector = (state: RootState) => state.studentModule.updateInfo;

export const educationSelector = (state: RootState) => state.studentModule.education;

export const deleteEducationSelector = (state: RootState) => state.studentModule.education.deleteEducation;

export const editEducationSelector = (state: RootState) => state.studentModule.education.editEducation;

export const watchRecordedClassSelector = (state: RootState) => state.studentModule.watchRecordedClass;

export const createEducationSelector = (state: RootState) => state.studentModule.education.createEducation;

export const recommendationsSelector = (state: RootState) => state.studentModule.recommendations;

export const homeworkDetailsSelector = (state: RootState) => state.studentModule.homeworkDetails;

export const submitHomeworkSelector = (state: RootState) => state.studentModule.homeworkDetails.submitHomework;

export const submitHomeworkPhysicallySelector = (state: RootState) =>
    state.studentModule.homeworkDetails.submitPhysically;

export const searchStudent = (state: rootReducerType) => state.studentReducer.searchStudent;

export const teacherStudentSearchLike = (state: rootReducerType) => state.teacherReducer.teacherStudentLike;

export const teacherProfileSelector = (state: RootState) => state.studentModule.teacherProfile;

export const previousClassesByTeacherSelector = (state: RootState) => state.studentModule.previousClassesByTeacher;

export const upcomingClassesByTeacherSelector = (state: RootState) => state.studentModule.upcomingClassesByTeacher;

export const allTeacherSearchLike = (state: rootReducerType) => state.schoolReducer.teacherSearchLike;
