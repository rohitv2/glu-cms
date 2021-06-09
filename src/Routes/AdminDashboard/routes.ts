import React from "react";
const Dashboard = React.lazy(()=>import('../../Views/AdminDashboard/Dashboard'));
const StudentList = React.lazy(()=>import('../../Views/StudentList/Index'));
const SchoolList = React.lazy(()=>import('../../Views/AdminDashboard/SchoolList/Index'));
const VideoList = React.lazy(()=>import('../../Views/AdminDashboard/VideoList/Index'));
const AdminTeacherList = React.lazy(()=>import('../../Views/AdminDashboard/TeacherList/Index'));
const TeacherDetailAdminPage = React.lazy(()=>import('../../Views/AdminDashboard/TeacherList/TeacherDetail/TeacherDetail'));
const AdminStudentList = React.lazy(()=>import('../../Views/AdminDashboard/StudentList/Index'));
const AdminParentList = React.lazy(()=>import('../../Views/AdminDashboard/ParentsList/Index'));
const AddNewSchool = React.lazy(()=>import('../../Views/AddNewSchool/Index'));
const StudentDetailAdminPage = React.lazy(()=>import('../../Views/AdminDashboard/StudentList/StudentDetail/StudentDetail'));
const SchoolDetailAdminPage = React.lazy(()=>import('../../Views/AdminDashboard/SchoolList/SchoolDetail/SchoolDetail'));
const ParentDetailAdminPage = React.lazy(()=>import('../../Views/AdminDashboard/ParentsList/ParentDetail/ParentDetail'));
const AddNewTeacher = React.lazy(()=>import('../../Views/AddNewTeacherSuperAdmin/Index'));

export const dashboardRoutes = [
    { pathname: '/admin/dashboard', component: Dashboard },
    { pathname: '/admin/school', component: SchoolList },
    { pathname: '/admin/videos', component: VideoList },
    { pathname: '/admin/teacher', component: AdminTeacherList },
    { pathname: '/admin/student', component: AdminStudentList },
    { pathname: '/admin/parent', component: AdminParentList },
    { pathname: '/admin/parent/detail', component: ParentDetailAdminPage },
    { pathname: '/admin/school/add-new-school', component: AddNewSchool },
    { pathname: '/admin/teacher/add-new-teacher', component: AddNewTeacher },
    { pathname: '/admin/teacher/detail', component: TeacherDetailAdminPage },
    { pathname: '/admin/student/detail', component: StudentDetailAdminPage },
    { pathname: '/admin/school/detail', component: SchoolDetailAdminPage },
    { pathname: '/admin/dashboard/students', component: StudentList },
];
