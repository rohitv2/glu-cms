import moment from 'moment';
import { dataToClass } from './sales';

function studentData(data: any[]){
    return data.map(({studentId,Student,comment,percentage,id,examId})=>({
        id: id,
        examId : examId,
        studentId: studentId,
        name: Student && Student.firstName+" "+Student.lastName,
        comment: comment,
        percentage: percentage,
    }))
}

function subjectData(data: any){
    const {id,subjectName} = data;
    return{
        subjectId : id,
        subjectName: subjectName
    }
}

function termData(data: any){

    const {id,termName} = data;
    return{
        termId : id,
        termName: termName,
    }
}


export function structuredStatData (data: any){
    const { averageStudent,exam} = data
    if (exam){
    return{
        subject: subjectData(exam.Subject),
        student: studentData(exam.ExamStudents),
        topic: exam.title,
        desc: exam.description,
        averageStudent :  averageStudent != "NaN" ? averageStudent : "0.00",
        submittedDate : moment(exam.createdAt).format("DD/MM/YYYY"),
        id: exam.id,
        term: termData(exam.Term),
        classGroupId : exam.classGroupId,
    }
}
}


function studentIndividualData(examId: number,studentId: number,comment: string,percentage: number,id: number){
    return{
        examId:examId,
        studentId:studentId,
        comment:comment,
        percentage:percentage,
        id:id
    }
}

export const structuredStudentExamData = (data:any) =>{
    const { examId,studentId,id,comment,percentage,Exam} = data
    if(Exam){
    return{
        student : studentIndividualData(examId,studentId,comment,percentage,id),
        subject: subjectData(Exam.Subject),
        topic:Exam.title,
        description: Exam.description,
        submittedDate: moment(Exam.createdAt).format("DD/MM/YYYY"),
        term: termData(Exam.Term)
    }
    }
}  