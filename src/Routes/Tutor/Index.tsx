import React from 'react';
import { createRouteObj } from '../../Helper/routes';

// import Dashboard from "../../Views/TutorDashboard/Dashboard";
const TutorProfile = React.lazy(() => import('../../Views/TutorProfile/TutorProfile'));
const TutorSetClass = React.lazy(() => import('../../Views/TutorSetClass/TutorClass'));
const TutorSetClassEdit = React.lazy(() => import('../../Views/TutorSetClass/TutorClassEdit'));
const TutorMyClassEdit = React.lazy(() => import('../../Views/TutorRecordClass/TutorMyClassEdit'));
const TutorRecordClass = React.lazy(() => import('../../Views/TutorRecordClass/TutorRecordClass'));
const TutorRecordClassSchool = React.lazy(() => import('../../Views/TutorRecordClass/TutorRecordClassSchool'));

const TutorIndivisualHomework = React.lazy(() => import('../../Views/TutorIndivisualHomework/TutorIndivisualHome'));
const TutorSetHomework = React.lazy(() => import('../../Views/TutorSetHomework/SetHomework'));
const PersonalSchoolToggle = React.lazy(() => import('../../Views/PersonalSchoolMain/PersonalSchoolToggle'));
const UpcomingClasses = React.lazy(() => import('../../Views/UpcomingClasses/Index'));
const SchoolTimetable = React.lazy(() => import('../../Views/SchoolTimeTable/SchoolTimeTable'));
const TutorAvailablity = React.lazy(() => import('../../Views/TutorAvailablity/TutorAvailablity'));

// Added by Vivek
const ClassReview = React.lazy(() => import('../../Views/TutorReviewPage/ClassReview'));
const TutorReview = React.lazy(() => import('../../Views/TutorReviewPage/TutorReview'));
const TutorEdit = React.lazy(() => import('../../Views/TutorEditPage/TutorEdit'));
const TutorUpcomingClasses = React.lazy(() => import('../../Views/TutorUpcomingClass/Index'));
const TutorExtraCurr = React.lazy(() => import('../../Views/TutorExtraCurr/Index'));
const TutorCalender = React.lazy(() => import('../../Views/TutorCalender/index'));
const StudentHomework = React.lazy(() => import('../../Views/StudentHomework/StudentHomework'));
const TutorSchoolInfo = React.lazy(() => import('../../Views/TutorSchoolInfo/SchoolInfo'));
const TutorEduEditForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/EditFormEdu'));
const TutorExpEditForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/EditFormExp'));
const TutorAddExpForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/AddFormExp'));
const TutorAddEduForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/AddFormEdu'));
const TutorSubmitResults = React.lazy(() => import('../../Views/TutorSubmitResults/Index'));
const TutorHomeworkEdit = React.lazy(() => import('../../Views/TutorSetHomework/EditHomework'));

// const TutorAvailablity= React.lazy(() => import('../../Views/TutorAvailablity/TutorAvailablity'));
const TutorExams = React.lazy(() => import('../../Views/TutorExams/TutorExams'));
const TutorExamsStatistics = React.lazy(() => import('../../Views/TutorExamDetails/TutorExamResultContainer'));
const TutorRecommend = React.lazy(() => import('../../Views/TutorRecommend/TutorRecommend'));
const TutorRecommendEdit = React.lazy(() => import('../../Views/TutorRecommend/TutorRecommendEdit'));
const TutorUpcomingClass = React.lazy(() => import('../../Views/TutorUpcommingClass/TutorUpcoming'));
const TutorReviews = React.lazy(() => import('../../Views/TutorReviews'));
const TutorMessages = React.lazy(() => import('../../Views/TutorMessages'));
const RegisterSchoolTime = React.lazy(() => import('../../Views/RegisterSchoolTime/RegisterTime'));
const TutorIndivisualExtraCurricular = React.lazy(
    () => import('../../Views/TutorIndivisualExtraCurricular/IndivisualExtraCurricular')
);
const TutorIndividualExtraCurricular2 = React.lazy(
    () => import('../../Views/TutorIndividualExtraCurricular2/TutorIndividualExtraCurricular2')
);
const TutorPrivate = React.lazy(() => import('../../Views/TutorPrivate/TutorPrivate'));
const TutorTotalRecommendations = React.lazy(
    () => import('../../Views/TutorTotalRecommendations/TotalRecommendations')
);
const TutorMyClasses = React.lazy(() => import('../../Views/TutorClasses/TutorMyclass'));
const TutorHomework = React.lazy(() => import('../../Views/TutorHomework/TutorHomework'));
const TutorWallet = React.lazy(() => import('../../Views/TutorWallet'));
const TutorStatistic = React.lazy(() => import('../../Views/TutorStatistic'));
const TutorExamStudentIndividual = React.lazy(
    () => import('../../Views/TutorStudentStatistics/StudentResultConatiner')
);

const EditStudentResult = React.lazy(
    () => import('../../Views/EditStudentResult/Index')
);
const RegisterStudentComment = React.lazy(() => import('../../Views/TutorRegisterStudentComment/Index'));
export const tutorRoutes = [
    createRouteObj('/tutor/', PersonalSchoolToggle),
    createRouteObj('/tutor/profile', TutorProfile),
    createRouteObj('/tutor/set-class', TutorSetClass),
    createRouteObj('/tutor/set-class/edit', TutorSetClassEdit),

    createRouteObj('/tutor/my-class/edit', TutorMyClassEdit),
    createRouteObj('/tutor/individual-homework/:id', TutorIndivisualHomework),
    createRouteObj('/tutor/homework/edit', TutorHomeworkEdit),
    createRouteObj('/tutor/set-homework', TutorSetHomework),
    createRouteObj('/tutor/upcoming-classes', UpcomingClasses),
    createRouteObj('/tutor/school-table', SchoolTimetable),
    createRouteObj('/tutor/tutor-availablity', TutorAvailablity),
    createRouteObj('/tutor/class-review', ClassReview),
    createRouteObj('/tutor/tutor-review', TutorReview),
    createRouteObj('/tutor/availability', TutorAvailablity),
    createRouteObj('/tutor/exams', TutorExams),
    createRouteObj('/tutor/exams/statistics', TutorExamsStatistics),
    createRouteObj('/tutor/exam/student-individual', TutorExamStudentIndividual),
    createRouteObj('/tutor/recommend', TutorRecommend),
    createRouteObj('/tutor/recommend/edit', TutorRecommendEdit),
    createRouteObj('/tutor/upcoming-class', TutorUpcomingClass),
    createRouteObj('/tutor/reviews', TutorReviews),
    createRouteObj('/tutor/individual-extra-curricular', TutorIndivisualExtraCurricular),
    createRouteObj('/tutor/individual-extra-curricular-edit', TutorIndividualExtraCurricular2),
    createRouteObj('/tutor/tutor-private', TutorPrivate),
    createRouteObj('/tutor/total-recommendations', TutorTotalRecommendations),
    createRouteObj('/tutor/my-classes', TutorMyClasses),
    createRouteObj('/tutor/homework', TutorHomework),
    createRouteObj('/tutor/tutor-edit', TutorEdit),
    createRouteObj('/tutor/tutor-edit/education-edit-form/:id', TutorEduEditForm),
    createRouteObj('/tutor/tutor-edit/experience-edit-form/:id', TutorExpEditForm),
    createRouteObj('/tutor/tutor-edit/add-experience', TutorAddExpForm),
    createRouteObj('/tutor/tutor-edit/add-education', TutorAddEduForm),
    createRouteObj('/tutor/tutor-upcoming-classes', TutorUpcomingClasses),
    createRouteObj('/tutor/extra-curriculam', TutorExtraCurr),
    createRouteObj('/tutor/tutor-calender', TutorCalender),
    createRouteObj('/tutor/mark-student-homework', StudentHomework),
    createRouteObj('/tutor/school-info', TutorSchoolInfo),
    createRouteObj('/tutor/tutor-submit-results', TutorSubmitResults),
    createRouteObj('/tutor/wallet', TutorWallet),
    createRouteObj('/tutor/statistic', TutorStatistic),
    createRouteObj('/tutor/record-class', TutorRecordClass),
    createRouteObj('/tutor/record-class-school', TutorRecordClassSchool),
    createRouteObj('/tutor/messages', TutorMessages),
    createRouteObj('/tutor/school-table/register', RegisterSchoolTime),
    createRouteObj('/tutor/school-table/student/comment', RegisterStudentComment),
    createRouteObj('/tutor/examresult/student-edit', EditStudentResult),
];
