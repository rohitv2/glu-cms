import { Statistic } from '../../Containers/Pages/types';

function calcDiffString(diff: number): string {
    return diff > 0 ? `+${diff}` : `${diff}`;
}

export function dataToOverall({
    overallStudent,
    overallSales,
    salesDifference,
    salesAverage,
    studentDifference,
    studentAverage,
}: any): Statistic {
    return {
        studentsChartData: overallStudent,
        salesChartData: overallSales,
        salesDifference: calcDiffString(salesDifference || 0),
        salesAverage: salesAverage || 0,
        studentsDifference: calcDiffString(studentDifference || 0),
        studentsAverage: studentAverage || 0,
    };
}

export function dataToClass({
    classStudent,
    classSales,
    salesAverage,
    salesDifference,
    studentAverage,
    studentDifference,
}: any): Statistic {
    return {
        studentsChartData: classStudent,
        salesChartData: classSales,
        salesAverage: salesAverage || 0,
        salesDifference: calcDiffString(salesDifference || 0),
        studentsAverage: studentAverage || 0,
        studentsDifference: calcDiffString(studentDifference || 0),
    };
}

export function dataToTutor({
    tutorSales,
    tutorStudent,
    salesAverage,
    salesDifference,
    studentAverage,
    studentDifference,
}: any): Statistic {
    return {
        studentsChartData: tutorStudent,
        salesChartData: tutorSales,
        salesAverage: salesAverage || 0,
        salesDifference: calcDiffString(salesDifference || 0),
        studentsAverage: studentAverage || 0,
        studentsDifference: calcDiffString(studentDifference || 0),
    };
}
