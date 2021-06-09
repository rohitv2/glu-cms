export const checkStatus = (merit: boolean,sanction: boolean) => {
    if(merit){
        return "Merit"
    }
    if(sanction){
        return "Sanction"
    }
}