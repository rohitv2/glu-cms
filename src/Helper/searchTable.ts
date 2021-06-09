export const searchTable = (data: any, keyset: string[], search: string) => {
    setTimeout(() => {
        const result = data.filter((item: any) => {
            for (let i = 0; i < keyset.length; i++) {
                if (item[keyset[i]].search(search)>-1) {
                    return item;
                }
            }
        });
        return result;

    }, 1000);
};
