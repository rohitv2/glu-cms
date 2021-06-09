export const checkValueReturn0 = (value: string | number | null ): any => {
    if(value){
        return value;
    }else{
        return '0';
    }
}