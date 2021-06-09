import moment from 'moment'

const formatExamFeedback = (data: any[],firstName: string,lastName: string) =>{
    return data?.map((item: any)=>({
        name : firstName + " " + lastName,
        comment : item.comment,
        date : moment(item?.commentedOn).format("MM/DD/YYYY"),
        title : "Exam:" + " " + item.title
    }))
}

const formatHwFeedback = (data: any[], firstName: string , lastName: string) =>{
    return data?.map((item: any)=>({
        name : firstName + " " + lastName,
        comment : item.comment,
        date : moment(item?.commentedOn).format("MM/DD/YYYY"),
        title : "Homework:" + " " + item.title
    }))
}

export const formatFeedbackData = (data: any[]) =>{
    let formatData =  data?.map(({examFeedbacks , firstName ,lastName , homeWorkFeedbacks}) =>({
        exam : formatExamFeedback(examFeedbacks,firstName,lastName),
        homeWork : formatHwFeedback(homeWorkFeedbacks,firstName,lastName)
    }))
    let dataArray = []
    for(let i=0 ; i<formatData.length ; i++){
        dataArray[i] = Object.values(formatData[i]).flat()
    }
    dataArray = [].concat(...Object.values(dataArray));
    let sortedArray = dataArray.sort((a, b) =>  moment(b.date) - moment(a.date))
    return sortedArray
}


const formatTutorExamFeedback =(data:any) =>{
    return data?.map((item: any)=>({
        name : item.firstNme + " " + item.lastName,
        comment : item.comment,
        date : moment(item?.commentedOn).format("MM/DD/YYYY"),
        title : "Exam:" + " " + item.title
    }))
}

const formatTutorHwFeedback =(data:any) =>{
    return data?.map((item: any)=>({
        name : item.firstName + " " + item.lastName,
        comment : item.comment,
        date : moment(item?.commentedOn).format("MM/DD/YYYY"),
        title : "Homework:" + " " + item.title
    }))
}

export const formatTutorFeedback = (data: any[]) =>{

    if(data.length > 0){
        let formatData =  data?.map(({examFeedbacks , homeWorkFeedbacks}) =>({
            exam : formatTutorExamFeedback(examFeedbacks),
            homeWork : formatTutorHwFeedback(homeWorkFeedbacks)
        }))
        let dataArray = []
        for(let i=0 ; i<formatData.length ; i++){
            dataArray[i] = Object.values(formatData[i]).flat()
        }
        dataArray = [].concat(...Object.values(dataArray));
        let sortedArray = dataArray.sort((a, b) =>  moment(b.date) - moment(a.date))
        return sortedArray
    }
}
