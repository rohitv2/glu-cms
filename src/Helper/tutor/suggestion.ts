export function dataToSuggestion(data: any[]){
    return data.map(({ firstName,lastName ,id }) => ({
        skillName: firstName+' '+lastName,
        id: id,
    }));
}