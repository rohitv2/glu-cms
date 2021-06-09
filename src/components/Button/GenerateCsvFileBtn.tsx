import React from 'react';
import { Button } from '@material-ui/core';
import { CsvBuilder } from 'filefy';
import { GetApp } from '@material-ui/icons';

type props = {
    headers: Array<string>,
    filename: string
}
const GenerateCsvFileBtn: React.FunctionComponent<props> = ({headers, filename}) => {
    const handleExport = () => {
        const headColumn: Array<string> = headers;
        const rowData: [] = [];
        new CsvBuilder(filename).setColumns(headColumn).addRows(rowData).exportFile();
    };

    return (
        <Button onClick={handleExport} className="green-btn-light" endIcon={<GetApp />}>
            Generate CSV File
        </Button>
    );
};

export default GenerateCsvFileBtn;
