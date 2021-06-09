import moment from 'moment';

export function dataToProgressBar(data: any[]) {
    return data.map(({ Subject, startTime, endTime, classRoomName, StudentTimetables, id }) => ({
        subjectName: Subject?.subjectName,
        time: moment(startTime, 'HH:mm:ss').format('hh:mm') + '-' + moment(endTime, 'HH:mm:ss').format('hh:mma'),
        roomName: classRoomName,
        progressBar: (StudentTimetables.length * 40) / 100,
        attendance: StudentTimetables.length + '/' + '40',
        timeTableId: id,
        startTime: moment(startTime, 'HH:mm:ss').format('hh:mma'),
    }));
}
