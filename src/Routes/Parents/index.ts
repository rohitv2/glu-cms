import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage'));
const ParentsDashboard = lazy(() => import('../../Views/ParentDashBoard/Dashboard'));
// const LiveClasses = lazy(() => import('../../Views/LiveClasses/Index'));
// const TutorList = lazy(() => import('../../Views/TutorList/TutorList'));
const ParentTutor = lazy(() => import('../../Views/ParentsHomePage/ParentTutor'));
// const ParentRecordedClasses = lazy(() => import('../../Views/ParentRecordedClasses/Index'));
const ParentPreviousClasses = lazy(() => import('../../Views/ParentPreviousClasses/Index'));
const ClassesTutorsWithFilter = lazy(() => import('../../Views/ClassesTutorsWithFilter/ClassesTutorsWithFilter'));
const ParentCalendar = lazy(() => import('../../Views/ParentCalendar/ParentCalendar'));
const SchoolTimetableParent = lazy(() => import('../../Views/SchoolTimeTableParent/SchoolTimeTable'));
const Favourites = lazy(() => import('../../Views/StudentFavourite/Index'));
const HelpSupport = lazy(() => import('../../Views/HelpSupport/HelpSupport'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));
const ParentIndividualHomeWork = lazy(() => import('../../components/ParentIndividualHomeWork/ParentIndividualHomeworkBanner'));
// const Reports = lazy(() => import('../../Views/ParentDashBoard/Reports'));
const Reports = lazy(() => import('../../Views/StudentsModule/Reports'));
const ParentSchoolInfo = lazy(() => import('../../Views/ParentSchoolInfo/SchoolInfo'));
const ParentMessages = lazy(() => import('../../Views/ParentsHomePage/Messages/ParentMessages'));
const NewMessages = lazy(() => import('../../Views/ParentsHomePage/Messages/NewMessages'));
const Wallet  = lazy(() => import('../../Views/ParentDashBoard/Wallet'));
const RecordedClasses = lazy(() => import('../../Views/ParentsHomePage/RecordedClasses'));
const LiveClasses = lazy(() => import('../../Views/ParentsHomePage/LiveClasses'));
const TutorsPage = lazy(() => import('../../Views/ParentsHomePage/TutorsPage'));
const IndividualSubject = lazy(() => import('../../Views/ParentsHomePage/IndividualSubject'));
const AllHomework = lazy(() => import('../../Views/ParentsHomePage/AllHomework'));
import { createRouteObj } from '../../Helper/routes';

export const routes = [
    createRouteObj('/parent/home', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentsDashboard),
    createRouteObj('/parent/live-classes', LiveClasses),
    createRouteObj('/parent/tutors', TutorsPage),
    createRouteObj('/parent/tutors/tutor', ParentTutor),
    createRouteObj('/parent/recorded-classes', RecordedClasses),
    createRouteObj('/parent/classes', ClassesTutorsWithFilter),
    createRouteObj('/parent/previous-classes', ParentPreviousClasses),
    createRouteObj('/parent/parent-calender', ParentCalendar),
    createRouteObj('/parent/school-table', SchoolTimetableParent),
    createRouteObj('/parent/favourites', Favourites),
    createRouteObj('/parent/help', HelpSupport),
    createRouteObj('/parent/upcoming-classes', UpcomingClasses),
    createRouteObj('/parent/individual-homework', ParentIndividualHomeWork),
    createRouteObj('/parent/reports', Reports),
    createRouteObj('/parent/school-info', ParentSchoolInfo),
    createRouteObj('/parent/messages', ParentMessages),
    createRouteObj('/parent/parent/messages/new-messages', NewMessages),
    createRouteObj('/parent/wallet', Wallet),
    createRouteObj('/parent/individual-subject', IndividualSubject),
    createRouteObj('/parent/all-homework', AllHomework),
    createRouteObj('/parent/all-homework/homework', ParentIndividualHomeWork),
    

  



];

export default routes;
