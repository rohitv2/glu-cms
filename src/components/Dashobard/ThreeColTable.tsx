import React from 'react';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

interface props {
    color?: string;
    data?: Array<{ col1: string; col2: string | React.ReactNode }>;
    colHead1?: string;
    colHead2?: string;
    colHead3?:string;
    tableName?: string;
    colWidth1?: string;
    colWidth2?: string;
    colWidth3?: string;
    height?: string;
    children?: React.ReactNode;
    rowClick?: () => void;
    padding?:string;
}
const ThreeColTable: React.FunctionComponent<props> = ({
    color,
    data,
    colHead1,
    colHead2,
    colHead3,
    tableName,
    colWidth1,
    colWidth2,
    colWidth3,
    height,
    children,
    rowClick,
    padding
}) => {
    const handleRowClick = (i: number) => {
        if (rowClick) {
            rowClick(i);
        }
    };
    
    return (
        <div style={{padding}} className="data-container bg-white">
            <Typography className="heading">{tableName}</Typography>
            <div style={{ maxHeight: height }} className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: colWidth1 }}>{colHead1}</th>
                            <th style={{ width: colWidth1 }}>{colHead2}</th>
                            <th style={{ width: colWidth1 }}>{colHead3}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: any, i: number) => (
                            <tr key={uuidv4()} onClick={() => handleRowClick(i)}>
                                <td style={{ width: colWidth1 }}>{item.col1}</td>
                                <td style={{ width: colWidth2 }}>{item.col2}</td>
                                <td style={{ width: colWidth3 }}>{item.col3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {children}
        </div>
    );
};

export default ThreeColTable;
