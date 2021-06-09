export interface rootReducerType {
    authReducer: authReducerType;
    uiReducer: uiReducerType;
    schoolReducer: schoolReducerType;
    studentReducer: studentReducerType;
    teacherReducer: teacherReducerType;
    parentReducer: parentReducerType;
    classReducer: classReducerType;
    subjectReducer: subjectReducerType;
    fileUploadReducer: FileUploadReducerType;
    cmsReducer: cmsReducerType;
}

export interface authReducerType {
    userData: any;
    registerData: any;
    verifyUser: any;
    childTokens: any;
}
export interface uiReducerType {
    loader: boolean;
}
export interface schoolReducerType {
    schoolData: any;
    departmentList: any;
    sessionList: any;
    timeTableList: any,
    teacherSearchLike: any
}
export interface studentReducerType {
    studentData: any;
    studentDetails: any;
    searchStudent: any;
    studentAttendance: any;
    examDetails: any;
    studentHwDetails: any;
    studentTermResult: any;
    studentMoreHomework: any;
}
export interface teacherReducerType {
    teacherList: any;
    teacherSkill: any;
    teacherExperience: any;
    teacherHomework: any;
    teacherEducation: any;
    teacherRecommendations: any;
    teacherPostRecommendation: any;
    teacherStudentLike: any;
    teacherRecommendationCount: any;
    teacherCreateHomework: any;
    tutorTimeTable: any;
    suggestedStudents: any;
    filterExamListBySubject: any;
    studentTimeTable: any;
    individualExamDetail: any;
    individualStudentExamDetail : any;
}
export interface parentReducerType {
    parentData: any;
    parentDetails: any;
}
export interface classReducerType {
    classList: any;
    sectionList: any;
    yearGroups: any;
    formGroups: any;
    teacherClassGroups: any;
    classGroupHomework: any
}

export interface subjectReducerType {
    subjectList: any;
    sujbectListByDepId: any;
    subjectGroupList: any;
    classGroupList: any;
}

export interface FileUploadReducerType {
    fileData: any;
}

export interface cmsReducerType {
    teacherAttendance: any;
    teacherStudentAttendance: any;
    teacherExamResult: any;
    teacherHomework: any;
    teacherListByDepId: any;
}
