export const formatYearGroup = (data: any[]) =>{
    return data.map(({ data }) => ({
        id: data.id,
        value: data.title,
    }));
}

export const formatFormGroup = (data: any[]) =>{
  
    return data?.result?.ClassSections?.map((item: any) => ({
        id: item?.Section?.id, value: item?.Section?.sectionName 
    }));
}

export const formatDepartment = (data: any[]) =>{
    return data.map((item: any) => ({
        id: item.data.id,
        value: item.data.departmentName,
    }));
}

export const formatSubject = (data: any[]) =>{
    const subjectArray = <any>[]
    data?.forEach((item: any) => {
        item?.Subjects?.forEach((subItem: any) => {
            const subjects =  {
                id: (subItem.id),
                value: (subItem.subjectName),
            };
            subjectArray.push(subjects);
        });
    });

    return subjectArray
}

export const formatClass = (data: any[]) =>{
    return data.map((item: any) => ({
        id: item.id,
        value: item.classGroupName,
    }));
}
