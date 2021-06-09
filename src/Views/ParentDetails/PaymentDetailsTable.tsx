import React from 'react';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const SubjectListTable: React.FunctionComponent = () => {
    const data = [
        { Amount: 5000, balance: 2000, status: 'Half Paid' },
        { Amount: 8000, balance: 0, status: 'Paid' },
        { Amount: 5000, balance: 0, status: 'Paid' },
        { Amount: 5000, balance: 0, status: 'Paid' },
        { Amount: 0, balance: 5000, status: 'Unpaid' },
        { Amount: 0, balance: 5000, status: 'Unpaid' },
    ];
    return (
        <div className="data-container">
            <Typography className="heading">Payment Details</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Balance</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={uuidv4()}>
                                <td>{item.Amount}</td>
                                <td>{item.balance}</td>
                                <td
                                    style={{
                                        color:
                                            item.status === 'Unpaid'
                                                ? '#ff0000'
                                                : item.status === 'Paid'
                                                ? '#61e846'
                                                : '#adadad',
                                    }}>
                                    {item.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubjectListTable;
