export const routeEndpoints = {
    dashboard:'/dashboard/',
    student:{
        details:'/dashboard/student-details',
        breadcrumb: '/dashboard/student details',
        addNewStudent: '/dashboard/student/add-new-student',
        studentAdmission: '/dashboard/student/student Admission',
        editStudent: '/dashboard/student/Edit Student',
    },
    teacher:{
        details:'/dashboard/teacher-details',
        breadcrumb: '/dashboard/teacher details',
        addNewTeacher: '/dashboard/teacher/add-new-teacher',
        addNewTeacherBread: '/dashboard/teacher/Add New Teacher',
        editTeacher: '/dashboard/teacher/Edit Teacher',
    },
    parent:{
        details:'/dashboard/parent-details',
        breadcrumb: '/dashboard/parent details',
        addNewParent: '/dashboard/parent/add-new-parent',
        addNewParentBread: '/dashboard/parent/Add New Parent',
        editParent: '/dashboard/student/Edit Parent',
        bulkUpload: '/dashboard/parent/bulk-upload',
        bulkBread: '/dashboard/parent/parent Data Upload',
        parentList: '/dashboard/parents'
    },
    staff:{
        details:'/dashboard/staff-details',
    },

    school:{
        addNewSchool:'/admin/school/add-new-school',
        addNewTeacher:'/admin/teacher/add-new-teacher',
    }
}