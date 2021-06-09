import React from 'react';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const StudentFeeTable: React.FunctionComponent = () => {
    const data = [
        { month: 'January', status: 'Success' },
        { month: 'Fabruary', status: 'Success' },
        { month: 'March', status: 'Success' },
        { month: 'April', status: 'Success' },
        { month: 'May', status: 'Success' },
        { month: 'June', status: 'Pending' },
        { month: 'July', status: 'Waiting' },
        { month: 'August', status: 'Waiting' },
        { month: 'September', status: 'Waiting' },
        { month: 'October', status: 'Waiting' },
        { month: 'November', status: 'Waiting' },
        { month: 'December', status: 'Waiting' },
    ];
    return (
        <div className="data-container">
            <Typography className="heading">Fee Details</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={uuidv4()}>
                                <td>{item.month}</td>
                                <td
                                    style={{
                                        color:
                                            item.status === 'Pending'
                                                ? '#ff0000'
                                                : item.status === 'Success'
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

export default StudentFeeTable;
