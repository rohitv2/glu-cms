import moment from "moment";

export const departmentFeedback = (feedbackDepartment: any) => {
    const data: any = [];
    feedbackDepartment.map((item: any) => {
        item.examFeedbacks.map((subItem: any) => {
            data.push({
                name: subItem?.firstName +' '+subItem?.lastName,
                date: moment(subItem?.commentedOn).format('MM/DD/YYYY'),
                title: 'Exam:' + subItem?.title,
                subjectName: subItem?.subjectName,
                comment: subItem?.comment,
            });
        });

        item.homeWorkFeedbacks.map((subItem: any) => {
            data.push({
                name: subItem?.firstName +' '+subItem?.lastName,
                date: moment(subItem?.commentedOn).format('MM/DD/YYYY'),
                title: 'Homework:' + subItem?.title,
                subjectName: subItem?.subjectName,
                comment: subItem?.comment,
            });
        });
    });
    return data;
};
