import { lazy } from 'react';
import { createRouteObj } from '../../Helper/routes';
const Wallet = lazy(() => import('../../Views/StudentsModule/Wallet'));
const Tutors = lazy(() => import('../../Views/StudentsModule/Tutors'));
const LiveClasses = lazy(() => import('../../Views/StudentsModule/LiveClasses'));
const RecordedClasses = lazy(() => import('../../Views/StudentsModule/RecordedClasses'));
const Reports = lazy(() => import('../../Views/StudentsModule/Reports'));
const StudentsDashboard = lazy(() => import('../../Views/StudentsModule/Dashboard'));
const Homepage = lazy(() => import('../../Views/StudentsModule/Homepage'));
const PreviousClasses = lazy(() => import('../../Views/PreviousClasses/PreviousClasses'));
const StudentClassesTutors = lazy(() => import('../../Views/StudentAllClassesTutors/StudentAllClassesTutors'));
const StudentWatchPreviousClass = lazy(() => import('../../Views/StudentWatchPreviousClass/Index'));
const Homework = lazy(() => import('../../Views/StudentsModule/Homework'));
const IndividualHomework = lazy(() => import('../../Views/StudentsModule/IndividualHomework'));
const Favourites = lazy(() => import('../../Views/StudentsModule/Favourites'));
const HelpSupport = lazy(() => import('../../Views/StudentsModule/HelpSupport'));
const TutorProfile = lazy(() => import('../../Views/StudentsModule/TutorProfile'));
const WalletTopOn = lazy(() => import('../../Views/StudentsModule/WalletTopOn'));
const IndividualSubject = lazy(() => import('../../Views/StudentsModule/IndividualSubject'));
const Messages = lazy(() => import('../../Views/StudentsModule/Messages'));
const Calendar = lazy(() => import('../../Views/StudentsModule/Calendar'));
const EditProfile = lazy(() => import('../../Views/StudentsModule/EditProfile'));
const ViewProfile = lazy(() => import('../../Views/StudentsModule/ViewProfile'));
const SchoolInfo = lazy(() => import('../../Views/StudentsModule/SchoolInfo'));
const MyRecordedCLasses = lazy(() => import('../../Views/StudentsModule/MyRecordedClasses'));
const WatchRecordedClass = lazy(() => import('../../Views/StudentsModule/WatchRecordedClass'));
const UpcomingClasses = lazy(() => import('../../Views/StudentsModule/UpcomingClasses'));
const RecommendedClasses = lazy(() => import('../../Views/StudentsModule/Recommended'));
const SearchResults = lazy(() => import('../../Views/StudentsModule/SearchResult'));
const UpcomingClass = lazy(() => import('../../Views/StudentsModule/UpcomingClass'));
const CancelClass = lazy(() => import('../../Views/StudentsModule/CancelClass'));
const CancelClassSuccess = lazy(() => import('../../Views/StudentsModule/ClassCanceled'));

const routes = [
    createRouteObj('/students/home', Homepage),
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/reports', Reports),
    createRouteObj('/students/previous-classes', PreviousClasses),
    createRouteObj('/students/classes', StudentClassesTutors),
    createRouteObj('/students/live-classes', LiveClasses),
    createRouteObj('/students/recorded-classes', RecordedClasses),
    createRouteObj('/students/tutors', Tutors),
    createRouteObj('/students/favourites', Favourites),
    createRouteObj('/students/help', HelpSupport),
    createRouteObj('/students/watch-previous-classes', StudentWatchPreviousClass),
    createRouteObj('/students/wallet', Wallet),
    createRouteObj('/students/homework', Homework),
    createRouteObj('/students/homework/:id', IndividualHomework),
    createRouteObj('/students/tutor/:id', TutorProfile),
    createRouteObj('/students/wallet/top-on', WalletTopOn),
    createRouteObj('/students/subject/:id', IndividualSubject),
    createRouteObj('/students/messages', Messages),
    createRouteObj('/students/calendar', Calendar),
    createRouteObj('/students/profile/edit', EditProfile),
    createRouteObj('/students/profile', ViewProfile),
    createRouteObj('/students/school/info', SchoolInfo),
    createRouteObj('/students/profile/recorded-classes', MyRecordedCLasses),
    createRouteObj('/students/profile/recorded-classes/:id', WatchRecordedClass),
    createRouteObj('/students/profile/upcoming-classes', UpcomingClasses),
    createRouteObj('/students/profile/upcoming-classes/:id', UpcomingClass),
    createRouteObj('/students/profile/cancel-class/:id', CancelClass),
    createRouteObj('/students/profile/cancel-class/:id/success', CancelClassSuccess),
    createRouteObj('/students/recommended', RecommendedClasses),
    createRouteObj('/students/search', SearchResults),
];

export default routes;
