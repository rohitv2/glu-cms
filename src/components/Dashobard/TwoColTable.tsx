import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    link: {
        fontSize: '1.25rem',
        lineHeight: '1.562rem',
        marginBottom: '0.7rem',
    },
});

interface props {
    color?: string;
    data?: Array<{ col1: string; col2: string | React.ReactNode }>;
    colHead1?: string;
    colHead2?: string;
    tableName?: string;
    colWidth1?: string;
    colWidth2?: string;
    height?: string;
    children?: React.ReactNode;
    rowClick?: (i: number) => void;
    showLink?: boolean;
    linkTo: string;
    pushState?:string;
    keyName?:string;
}
const TwoColTable: React.FunctionComponent<props> = ({
    color,
    data,
    colHead1,
    colHead2,
    tableName,
    colWidth1,
    colWidth2,
    height,
    children,
    rowClick,
    showLink,
    linkTo,
    pushState,
    keyName,
}) => {
    const classes = useStyles();
    const handleRowClick = (i: number) => {
        if (rowClick) {
            rowClick(i);
        }
    };

    return (
        <div className="data-container bg-white">
            <Grid container alignItems="center" justify="space-between">
                <Typography className="heading">{tableName}</Typography>
                {showLink && (
                    <Typography 
                        component={Link} 
                        to={{pathname : linkTo , state:{key: keyName && keyName, data: pushState && pushState}}} 
                        className={classes.link}>
                        View all
                    </Typography>
                )}
            </Grid>
            <div style={{ maxHeight: height }} className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: colWidth1 }}>{colHead1}</th>
                            <th>{colHead2}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: any, i: number) => (
                            <tr key={uuidv4()} onClick={() => handleRowClick(i)}>
                                <td style={{ width: colWidth1 }}>{item.col1}</td>
                                <td style={{ color, width: colWidth2 }}>{item.col2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {children}
        </div>
    );
};

export default TwoColTable;
