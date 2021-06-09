export const checkValue = (value: string | number | null ): any => {
    if(value){
        return value;
    }else{
        return 'N/A';
    }
}