export const endpoints = {
    login: 'auth/login',
    school: 'schools/school',
    schoolProfile: 'school/profile',
    student: 'school/student',
    getAllStudents: 'school/students',
    teacher: 'school/teacher',
    parent: 'school/guardian',
    class: 'class',
    singleClass: 'schools/class',
    section: 'section/',
    invitation: 'auth/invite',
    authRegister: 'auth/register',
    departments: 'school/department',
    sessions: 'school/session',
    sessionFilter: 'freelancer/teacher/record/session',
    subject: 'school/subject',
    timeTable: 'schools/routines',
    schoolTimeTable: 'school/timetable',
    emailSubscribe: 'auth/email',
    fileUpload: 'file-upload/signed-url/', // get req with /image.png
    uploadFileName: 'file-upload/uploads', // a
    register: 'auth/register',
    studentEdu: 'student/qualification',
    registerPhone: 'user/phone/',
    verifyOtp: 'user/verify/phone/',
    teahcerSkill: 'teacher/skill',
    // teahcerExperience: 'teacher/experience',
    teahcerEducation: 'teacher/qualification',
    techerExp: 'teacher/experience',
    teacherBio: 'auth/teacher/bio/',
    teacherFileUpload: 'file-upload/uploads/documents',
    parentChildAdd: 'guardian/children',
    forgotEmail: 'auth/forget/password',
    resetPassword: 'auth/reset/password/',
    teacherEdu: 'teacher/qualification',
    teacherHomework: 'teacher/homework',
    teacherHomeworks: 'teacher/homeworks',
    teacherHomeworkCount: 'teacher/homework/count',
    teacherRecommendation: 'teacher/recommend',
    teacherStudentLike: 'teacher/student/like',
    searchStudent: 'school/student/like',
    userDetails: 'user/profile',
    getUserProfile: 'user/profile',
    registerVerfiyUser: 'auth/verify/',
    updateProfile: 'user/profile',
    getStudentDetails: 'school/subject/student/',
    attendanceDetails: 'attendance/student/',
    studentExam: '/school/student/',
    studentHomework: '/school/status/homework/student/',
    teacherRecommendationCount: 'teacher/recommend/count',
    getAllSubject: '/school/class-groups',
    sendEmail: 'auth/send/email',
    userEmailVerififcation: 'auth/register/email/',
    childReject: 'auth/child/reject',
    teacherAttendace: 'attendance/teacher/',
    teacherStudentAttendace: 'attendance/student/',
    schoolCounts: 'school/stats',
    teacherExamResult: 'school/exam/term',
    teacherHomeworkcms: 'school/teacher/detail/homework/',
    studentSubjectHomework: 'school/homework-subjects/',
    markStudentHomework: 'teacher/homework',
    schoolParent: '/school/parent/',
    getTutorAvailability: 'teacher/weekly-schedule',
    subjectByDepartmentId: 'school/subject/department/',
    teacherByDepartmentId: 'school/teacher/subject/',
    classGroupAdd: 'school/class-groups',
    getAllYearGroup: 'class',
    getAllFormGroup: 'section',
    getAllSubjectGroup: 'subject',
    getAllTeacherExamList: 'teacher/exam/',
    getTutorDayOff: 'teacher/day-off',
    getTutorFees: 'teacher/fees',
    reviews: 'review/teachers/',
    reviewChallenge: 'review/challenge/',
    teacherUpcomingClass: '',
    getTeacherSubject: 'teacher/subject/',
    getTeacherFilteredSubject: 'teacher/exam?subjectId=',
    getSuggestedStudent: 'teacher/students/',
    teacherSales: 'teacher/sales',
    getStudentTimeTable: 'teacher/timetable/',
    getTurorTimeTable: 'teacher/timetable?date=',
    students: 'students',
    getTermList: 'teacher/terms/',
    tutorExam: 'teacher/exam/',
    tutorSessionsCount: 'freelancer/teacher/count/session',
    teacherSchoolInfo: 'teacher/school/profile',
    meritsanctionteacher: 'school/merit-sanction/teacher/',
    createTimeTable: 'school/timetable',
    tutorExamDetails: 'school/exam/term',
    recordSession: 'freelancer/teacher/record/session',
    allMeritSanction : 'school/merit-sanction',
    schoolSessionCount : 'teacher/count/session',
    classGroupHomework: 'school/class-groups/',
    classGroupStudents: 'school/class-groups/',
    classGroupAttendance: 'attendance/class-group/',
    classGroupsFeedback : 'school/class-groups',
    teacherFeedback : 'teacher-feedbacks',
    allTutorFeedBack :'teacher/feedbacks',
    schoolSubjectClassGroup: 'school/class-groups/subjects/',
    department: 'department',
    homeworkRecord: 'homework-records',
    schoolStudentClassGroup: 'school/students/class-groups/',
    terms: 'school/terms',
    examResult : 'exam-results'
};

export const studentsEndpoints = {
    getFeatureTeacher: 'review/featured/teachers',
    getUpcomingSessions: 'freelancer/student/session/upcoming',
    getPreviousSessions: 'freelancer/student/session/previous',
    previousClass: 'freelancer/student/session/',
    getFeatureSubject: 'freelancer/student/featured/subject',
    getHomework: 'student/status/homework/',
    getSubjects: 'freelancer/student/subject',
    getUpcomingClassesFilter: 'student/filter/upcomingSession/extraCurricular',
    education: 'student/qualification/',
    homeworkDetails: 'student/homework/detail/',
    homework: 'student/homework/',
    homeworkPhysically: 'student/homework/physical/',
    recommendations: 'student/count/recommend',
    recommendationStatus: 'student/recommend/',
    teacherProfile: 'freelancer/student/teacher/',
};

export const superAdminendpoints = {
    getAllSchools: 'superAdmin/schools',
    addSchool: 'superAdmin/schools',
    activateDeactivateSchool: 'superAdmin/user',
    getAllVideos: 'superAdmin/recorded/session',
    activateDeactivateVideo: 'superadmin/recorded-sessions',
    getAllTeachers: 'superadmin/freelancer-teachers',
    activateDeactivateTeacher: 'superAdmin/user',
    getAllStudents: 'superadmin/students?type=external',
    getAllParents: 'superadmin/guardians',
    getAllUsersCount: 'superadmin/users/count-list',
    teacherDetails: 'superadmin/teacher/',
    studentDetails: '/superAdmin/student/',
    schoolDetails: 'superAdmin/schools',
    parentDetails: '/superAdmin/parent',
    approveRejectTeacher: 'superadmin/unverified-freelancer-teachers',
};

export const freelanceTeacherEndpoints = {
    getSubject: 'freelancer/teacher/subject',
    recordClass: 'freelancer/teacher/record/session',
    getAllSession: 'freelancer/teacher/session',
    deleteSession: 'freelancer/teacher/session',
    getSchoolTeacherSubject: 'school/subject',
    techerSession: 'teacher/session'
};

export const schoolTeacherEndpoints = {
    addFormGroup: 'section/class',
    classGroup: 'teacher/class-groups',
    searchTeacher: 'school/teacher/like',
    homeworkTeacher: 'school/homework/teacher',
    examTeacher: 'school/exam/term',
    schoolTeacher: 'school/teachers/',
    department : 'department',
    cGroup : 'class-groups',
    timeTable : 'timetable'
};