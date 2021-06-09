import Papa from 'papaparse';

export const parseCsvFile = (file: File, storeDate: Function) => {
    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results: any) => {
            storeDate(results.data);
        },
    });
};