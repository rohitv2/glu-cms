import React from "react";
const Dashboard = React.lazy(()=>import( '../../Views/Dashboard/Dashboard'));
const StudentList = React.lazy(()=>import( '../../Views/StudentList/Index'));
const AddNewStudent = React.lazy(()=>import( '../../Views/AddNewStudent/AddNewStudent'));
const AddNewTeacher = React.lazy(()=>import( '../../Views/AddNewTeacher/Index'));
const AddNewStaff = React.lazy(()=>import( '../../Views/AddNewStaff/AddNewStaff'));
const AddNewParent = React.lazy(()=>import( '../../Views/AddNewParent/AddNewParent'));
const ParentList = React.lazy(()=>import( '../../Views/ParentList/Index'));
const TeacherList = React.lazy(()=>import( '../../Views/TeacherList/Index'));
const StaffList = React.lazy(()=>import( '../../Views/StaffList/StaffList'));
const DailyAttendance = React.lazy(()=>import( '../../Views/DailyAttendace'));
const ClassRoutine = React.lazy(()=>import( '../../Views/ClassRoutine'));
const SubjectList = React.lazy(()=>import( '../../Views/SubjectList'));
const SessionList = React.lazy(()=>import( '../../Views/SessionList'));
const ClassList = React.lazy(()=>import( '../../Views/ClassList'));
const Departments = React.lazy(()=>import( '../../Views/Departments'));
const syllabusList = React.lazy(()=>import( '../../Views/SyllabusList'));
const AddSyllabus = React.lazy(()=>import( '../../Views/AddSyllabus/AddSyllabus'));
const PermissionList = React.lazy(()=>import( '../../Views/PermissionLIist/PermissionList'));
const StudentFees = React.lazy(()=>import( '../../Views/StudentFees'));
const ExpenseCategory = React.lazy(()=>import( '../../Views/ExpenseCategory'));
const ExpenseManager = React.lazy(()=>import( '../../Views/ExpenseManager'));
const AddStudentBulk = React.lazy(()=>import( '../../Views/AddStudentBulk/AddStudentBulk'));
const AddParentBulk = React.lazy(()=>import( '../../Views/AddParentBulk/AddParentBulk'));
const AddTeacherBulk = React.lazy(()=>import( '../../Views/AddTeacherBulk/AddTeacherBulk'));
const AddStaffBulk = React.lazy(()=>import( '../../Views/AddStaffBulk/AddStaffBulk'));
const TeacherProfile = React.lazy(()=>import( '../../Views/TeacherProfile/TeacherProfile'));
const Admin = React.lazy(()=>import( '../../Views/Admin/Admin'));
const AddNewEvent = React.lazy(()=>import( '../../Views/AddNewEvent/AddNewEvent'));
const ECA = React.lazy(()=>import( '../../Views/ECAList'));
const StudentDetails = React.lazy(()=>import( '../../Views/StudentDetails/StudentDetails'));
const ParentDetails = React.lazy(()=>import( '../../Views/AddNewParent/ParentDetails'));
const DepartmentDetails = React.lazy(()=>import( '../../Views/DepartmentDetails/Index'));
const TimeTableBulk = React.lazy(()=>import( '../../Views/TimeTableBulk/TimeTableBulk'));
const ECAbulk = React.lazy(()=>import( '../../Views/ECAbulk/ECAbulk'));
const StudentHWdetails = React.lazy(()=>import( '../../Views/StudentDetails/StudentHomeWork/Index'));
const StudentExamReport = React.lazy(()=>import( '../../Views/StudentDetails/StudentSubjectDetail/Index'));
const StaffDetails = React.lazy(()=>import( '../../Views/StaffDetails/StaffDetails'));
const MeritsSanction = React.lazy(()=>import( '../../Views/Merits/Index'));
const Feedback = React.lazy(()=>import( '../../Views/Feedback/Index'));
const AddYearGroup = React.lazy(()=>import( '../../Views/AddYearGroup/Index'));
const FormGroup = React.lazy(()=>import( '../../Views/FormGroup/index'));
const AddFormGroup = React.lazy(()=>import( '../../Views/AddFormGroup/Index'));
const Notification = React.lazy(()=>import( '../../Views/SendNotification/Index'));
const YearGroupDetail = React.lazy(()=>import( '../../Views/YearGroupDetails/index'));
const AddNewYearGroup = React.lazy(()=>import( '../../Views/AddNewYearGroup/Index'));
const AddNewClassGroup = React.lazy(()=>import( '../../Views/AddNewClassGroup/Index'));
const AddNewDepartment = React.lazy(()=>import( '../../Views/AddNewDepartments/Index'));
const TeacherClassGroupDetails = React.lazy(()=>import( '../../Views/TeacherDetails/ClassGroups/Index'));
const TeacherCGAttendance = React.lazy(()=>import( '../../Views/TeacherDetails/ClassGroups/Attendance/Index'));
const TeacherCGPerticularAttendance = React.lazy(()=>import( '../../Views/TeacherDetails/ClassGroups/PerticularAttendace/Index'));
const TeacherCGExamResult = React.lazy(()=>import( '../../Views/TeacherDetails/ClassGroups/ExamResult/Index'));
const TeacherCGHomework = React.lazy(()=>import( '../../Views/TeacherDetails/ClassGroups/HomeWork/Index'));
const CmsNotification = React.lazy(()=>import( '../../Views/CmsNotification/CmsNotification'));
const TimeTableList = React.lazy(()=>import( '../../Views/TimeTable/TimeTableList'));
const AddNewTimeTable = React.lazy(()=>import( '../../Views/AddNewTimeTables/AddNewTimeTable'));
const TimeTableCalendar = React.lazy(()=>import( '../../Views/TimeTableScheduleCalendar/TimeTableCalendar'));
const Index = React.lazy(()=>import( '../../Views/AttendanceDetails/Index'));
const DepartmentSubjects = React.lazy(()=>import( '../../Views/DepartmentSubjectsList/index'));
const AddNewsubject = React.lazy(()=>import( '../../Views/AddNewSubject/Index'));
const StudentClassGroupList = React.lazy(()=>import( '../../Views/TeacherDetails/StudentList/Index'));
const EditTimeTable = React.lazy(()=>import( '../../Views/EditTimeTable/EditTimeTable'))
const TeacherHomework = React.lazy(()=>import( '../../Views/StaffDetails/HomeWork/Index'));
const AddTitle = React.lazy(()=>import( '../../Views/AddTimetableTitle/AddTitle'));


export const dashboardRoutes = [
    { pathname: '/dashboard', component: Dashboard },
    { pathname: '/dashboard/students', component: StudentList },
    { pathname: '/dashboard/student/add-new-student', component: AddNewStudent },
    { pathname: '/dashboard/teacher/add-new-teacher', component: AddNewTeacher },
    { pathname: '/dashboard/staff/add-new-staff', component: AddNewStaff },
    { pathname: '/dashboard/parent/add-new-parent', component: AddNewParent },
    { pathname: '/dashboard/parents', component: ParentList },
    { pathname: '/dashboard/teachers', component: TeacherList },
    { pathname: '/dashboard/Staff', component: StaffList },
    { pathname: '/dashboard/daily-attendance', component: DailyAttendance },
    { pathname: '/dashboard/timetables', component: ClassRoutine },
    { pathname: '/dashboard/class-groups', component: SubjectList },
    { pathname: '/dashboard/sessions', component: SessionList },
    { pathname: '/dashboard/time-tables', component: TimeTableList },
    { pathname: '/dashboard/time-tables/add-timetable-title' , component : AddTitle},
    { pathname: '/dashboard/time-tables/add-new-timetable' , component : AddNewTimeTable},
    { pathname: '/dashboard/time-tables/edit-timetable' , component : EditTimeTable},
    { pathname: '/dashboard/time-tables/time-table-calendar' , component : TimeTableCalendar},
    { pathname: '/dashboard/year-group', component: ClassList },
    { pathname: '/dashboard/departments', component: Departments },
    { pathname: '/dashboard/syllabus', component: syllabusList },
    { pathname: '/dashboard/add-syllabus', component: AddSyllabus },
    { pathname: '/dashboard/permissions', component: PermissionList },
    { pathname: '/dashboard/studen-free-manager', component: StudentFees },
    { pathname: '/dashboard/expense-category', component: ExpenseCategory },
    { pathname: '/dashboard/expense-manager', component: ExpenseManager },
    { pathname: '/dashboard/student/bulk-upload', component: AddStudentBulk },
    { pathname: '/dashboard/teacher/bulk-upload', component: AddTeacherBulk },
    { pathname: '/dashboard/parent/bulk-upload', component: AddParentBulk },
    { pathname: '/dashboard/staff/bulk-upload', component: AddStaffBulk },
    { pathname: '/dashboard/teacher-profile', component: TeacherProfile },
    { pathname: '/dashboard/admin', component: Admin },
    { pathname: '/dashboard/event-calender', component: AddNewEvent },
    { pathname: '/dashboard/extra-curricular-activities', component: ECA },
    { pathname: '/dashboard/student-details', component: StudentDetails },
    { pathname: '/dashboard/teacher-details', component: StaffDetails },
    { pathname: '/dashboard/parent-details', component: ParentDetails },
    { pathname: '/dashboard/department-details', component: DepartmentDetails },
    { pathname: '/dashboard/timetable-bulk-upload', component: TimeTableBulk },
    { pathname: '/dashboard/extra-curricular-activities-bulk-upload', component: ECAbulk },
    { pathname: '/dashboard/student-details/homework', component: StudentHWdetails },
    { pathname: '/dashboard/student-details/exam', component: StudentExamReport },
    { pathname: '/dashboard/staff-details', component: StaffDetails },
    { pathname: '/dashboard/merits-sanctions', component: MeritsSanction },
    { pathname: '/dashboard/feedback', component: Feedback },
    { pathname: '/dashboard/edit-year-group', component: AddYearGroup },
    { pathname: '/dashboard/form-group', component: FormGroup },
    { pathname: '/dashboard/edit-form-group', component: AddFormGroup },
    { pathname: '/dashboard/parent/send-notification', component: Notification },
    { pathname: '/dashboard/year-group/details', component: YearGroupDetail },
    { pathname: '/dashboard/year-group/add-year-group', component: AddNewYearGroup },
    { pathname: '/dashboard/year-group/edit-year-group', component: AddNewYearGroup },
    { pathname: '/dashboard/class-group/add-class-group', component: AddNewClassGroup },
    { pathname: '/dashboard/department/add-new-department', component: AddNewDepartment },
    { pathname: '/dashboard/class-groups/class-group-details', component: TeacherClassGroupDetails },
    {
        pathname: '/dashboard/class-groups/class-group-details/attendance/punctuality',
        component: TeacherCGAttendance,
    },
    { pathname: '/dashboard/class-groups/class-group-details/perticular', component: TeacherCGPerticularAttendance },
    {
        pathname: '/dashboard/class-groups/class-group-details/exam-results',
        component: TeacherCGExamResult,
    },
    {
        pathname: '/dashboard/class-groups/class-group-details/homework',
        component: TeacherCGHomework,
    },
    {
        pathname: '/dashboard/class-groups/class-group-details/students',
        component: StudentClassGroupList,
    },
    {
        pathname: '/dashboard/class-groups/class-group-details/feedback',
        component: Feedback,
    },
    {
        pathname: '/dashboard/class-groups/class-group-details/merits/sanctions',
        component: MeritsSanction,
    },
    {
        pathname: '/dashboard/message',
        component: CmsNotification,
    },
    {
        pathname: '/dashboard/attendance-details',
        component: Index,
    },
    { pathname: '/dashboard/subjects', component: DepartmentSubjects },
    { pathname: '/dashboard/subjects/add-new-subject', component: AddNewsubject },
    {
        pathname: '/dashboard/teacher-details/homework',
        component: TeacherHomework,
    },
];
