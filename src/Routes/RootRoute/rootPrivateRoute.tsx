import { lazy } from 'react';
const Dashboard = lazy(() => import('../../Views/Dashboard/index'));
const StudentsModule = lazy(() => import('../../Views/StudentsModule/index'));
const TutorModule = lazy(() => import('../../Views/TutorDashboard/Index'));
const ParentDashBoard = lazy(() => import('../../Views/ParentDashBoard/Index'));
const AdminDashBoard = lazy(() => import('../../Views/AdminDashboard/index'));

export const rootPrivateRoute = [
    { component: Dashboard, name:'/dashboard/' },
    { component: StudentsModule, name: '/students/' },
    { component: TutorModule, name: '/tutor/' },
    { component: ParentDashBoard, name: '/parent/' },
    { component: AdminDashBoard, name: '/admin/' },
]
