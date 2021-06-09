import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { Button, Typography } from '@material-ui/core';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';

interface tableProps {
    student: string;
    class: string;
    invoice: string;
    amount: string;
    status: string;
}
const FormContainer: React.FunctionComponent = () => {
    return (
        <CardContainer>
            <div className="subject-container">
                <CardTable
                    showToolbar={true}
                    showPagination={true}
                    columns={[
                        {
                            width: '20%',
                            title: 'Date',
                            field: 'date',
                        },
                        {
                            width: '20%',
                            title: 'Amount',
                            field: 'amount',
                        },
                        {
                            width: '30%',
                            title: 'Expense Category',
                            field: 'expenseCategory',
                        },
                        {
                            width: '10%',
                            title: 'Action',
                            field: 'action',
                            render: () => <ActionToolbar showDetail={true} showDelete={false} showEdit={true} />,
                        },
                    ]}
                    rowData={[
                        {
                            date: 'Mon, 15-Jun-2020',
                            amount: '$1,000',
                            expenseCategory: 'Transportation',
                            action: '',
                        },
                        {
                            date: 'Mon, 15-Jun-2020',
                            amount: '$1,000',
                            expenseCategory: 'Transportation',
                            action: '',
                        },
                        {
                            date: 'Mon, 15-Jun-2020',
                            amount: '$1,000',
                            expenseCategory: 'Transportation',
                            action: '',
                        },
                        {
                            date: 'Mon, 15-Jun-2020',
                            amount: '$1,000',
                            expenseCategory: 'Transportation',
                            action: '',
                        },
                        {
                            date: 'Mon, 15-Jun-2020',
                            amount: '$1,000',
                            expenseCategory: 'Transportation',
                            action: '',
                        },
                    ]}
                />
            </div>
        </CardContainer>
    );
};

export default FormContainer;
