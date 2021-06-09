import moment from 'moment'
export function dataToFormattedData(data: any[]){
        return data.map(({studentId, Student, comment,sanction,merit,status,timetableId ,Timetable }) => ({
            studentId: studentId,
            name: Student && Student.firstName + ' ' + Student.lastName,
            comment : comment,
            sanction : sanction,
            merit : merit,
            status: status,
            action : comment ? "edit" : "comment",
            t_id : timetableId,
            Time : Timetable && moment(Timetable.startTime,"HH:mm:ss").format("hh:mm") + "-" + moment(Timetable.endTime,"HH:mm:ss").format("hh:mma"),
            subjectName : Timetable && Timetable?.Subject?.subjectName
        }));
}
