import React from 'react';

const Home = React.lazy(() => import('../../Views/Home/Home'));
const Support = React.lazy(() => import('../../Views/Support/Support'));
const HelpSupport = React.lazy(() => import('../../Views/HelpSupport/HelpSupport'));
const Login = React.lazy(() => import('../../Views/Auth/Login/Login'));
const StudentLogin = React.lazy(() => import('../../Views/StudentLogin/StudentLogin'));
const StudentForgotPassword = React.lazy(() => import('../../Views/StudentForgotPassword/StudentForgotPassword'));
const StudentPasswordNew = React.lazy(() => import('../../Views/StudentPasswordNew/StudentPasswordNew'));
const Signup = React.lazy(() => import('../../Views/StudentSignupForm/Index'));
const ShowWelcome = React.lazy(() => import('../../Views/StudentSignupForm/ShowWelcome'));
const ForgotPassword = React.lazy(() => import('../../Views/Auth/ForgotPassword/ForgotPassword'));
const SetNewPassword = React.lazy(() => import('../../Views/Auth/ForgotPassword/SetNewPassword'));
const verification = React.lazy(() => import('../../Views/Auth/Verification/Verification'));
const StudentIndividualSubjects = React.lazy(() => import('../../Views/StudentIndividualSubjects/Index'));

const TutorsUpcomingClasses = React.lazy(() => import('../../Views/TutorsUpcomingClasses/Index'));
const StudentTutorPreviousClasses = React.lazy(() => import('../../Views/StudentTutorPreviousClasses/Index'));

const studentDetail = React.lazy(() => import('../../Views/StudentDashboard/StudentDetail/Index'));
const studentIncompleteDetail = React.lazy(() => import('../../Views/StudentDashboard/StudentIncompleteDetail/Index'));

const studentSchoolInfo = React.lazy(() => import('../../Views/StudentSchoolInfo/Index'));
const studentNoFavourite = React.lazy(() => import('../../Views/StudentNoFavourite/Index'));
const studentNoPreviousClass = React.lazy(() => import('../../Views/StudentNoPreviousClass/Index'));
const studentFavourite = React.lazy(() => import('../../Views/StudentFavourite/Index'));

const studentSearchResult = React.lazy(() => import('../../Views/StudentSearchResult/Index'));
const studentNoResult = React.lazy(() => import('../../Views/StudentNoResult/Index'));
const ParentsHomePage = React.lazy(() => import('../../Views/ParentsHomePage/index'));
const EmailVerification = React.lazy(() => import('../../Views/EmailVerification/EmailVerification'));
const UserEmailVerification = React.lazy(() => import('../../Views/EmailVerification/UserEmailVerification'));
const ChildEMailVerification = React.lazy(() => import('../../Views/EmailVerification/ChildEMailVerification'));
const ParentDashboard = React.lazy(() => import('../../Views/ParentDashBoard/Dashboard'));
const WatchSession = React.lazy(() => import('../../Views/SessionList/WatchSession'));

export const rootRoute = [
    { component: Home, name: '/' },
    { component: Support, name: '/support' },
    { component: HelpSupport, name: '/help-support' },
    { component: Login, name: '/admin-login' },
    { component: StudentLogin, name: '/login' },
    { component: StudentForgotPassword, name: '/forgot-password' },
    { component: StudentPasswordNew, name: '/reset-password' },
    { component: Signup, name: '/signup' },
    { component: ShowWelcome, name: '/signup-success' },
    { component: verification, name: '/verification' },

    { component: StudentIndividualSubjects, name: '/student-individual-subjects' },
    { component: TutorsUpcomingClasses, name: '/tutor-upcoming-classes' },
    { component: StudentTutorPreviousClasses, name: '/student-previous-classes' },
    { component: studentDetail, name: '/student-detail' },
    { component: studentIncompleteDetail, name: '/student-incomplete-detail' },

    { component: studentSchoolInfo, name: '/student-school-info' },
    { component: studentNoFavourite, name: '/student-no-favourite' },
    { component: studentNoPreviousClass, name: '/student-no-previous-class' },
    { component: studentFavourite, name: '/student-favourite' },
    { component: studentSearchResult, name: '/student-search' },
    { component: studentNoResult, name: '/student-no-result' },
    { component: EmailVerification, name: '/email-verification' },
    { component: UserEmailVerification, name: '/user-email-verificaition' },
    { component: ChildEMailVerification, name: '/child-email-verification' },

    { component: ParentsHomePage, name: '/parent/home' },
    { component: ParentDashboard, name: '/parent/dashboard' },
    { component: WatchSession, name: '/watch-session' },
];
