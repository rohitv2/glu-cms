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
                {/* <div className="subject-form-row  w-100">
                    <FormRow />
                    <Button className="filter-btn">Filter</Button>
                </div> */}
                <CardTable
                    showToolbar={true}
                    showPagination={true}
                    columns={[
                        {
                            width: '23%',
                            title: 'Student',
                            field: 'student',
                        },
                        {
                            width: '23%',
                            title: 'Class',
                            field: 'class',
                        },
                        {
                            width: '23%',
                            title: 'Invoice',
                            field: 'invoice',
                        },
                        {
                            width: '23%',
                            title: 'Amount',
                            field: 'amount',
                        },
                        {
                            width: '23%',
                            title: 'Status',
                            field: 'status',
                            // render: (rowData: tableProps) => (
                            //     <Typography style={{ color: '#34F178', fontSize: '0.75rem' }}>
                            //         {rowData.status}
                            //     </Typography>
                            // ),
                        },
                        {
                            width: '23%',
                            title: 'Action',
                            field: 'action',
                            render: () => <ActionToolbar showDetail={true} showDelete={false} showEdit={true} />,
                        },
                    ]}
                    rowData={[
                        {
                            student: 'Ashish Gupta',
                            class: 'IV',
                            invoice: 'BXHD42H78G',
                            amount: 'AED 1200',
                            status: 'Sucess',
                        },
                        {
                            student: 'Ashish Gupta',
                            class: 'IV',
                            invoice: 'BXHD42H78G',
                            amount: 'AED 1200',
                            status: 'Sucess',
                        },
                        {
                            student: 'Ashish Gupta',
                            class: 'IV',
                            invoice: 'BXHD42H78G',
                            amount: 'AED 1200',
                            status: 'Sucess',
                        },
                        {
                            student: 'Ashish Gupta',
                            class: 'IV',
                            invoice: 'BXHD42H78G',
                            amount: 'AED 1200',
                            status: 'Sucess',
                        },
                        {
                            student: 'Ashish Gupta',
                            class: 'IV',
                            invoice: 'BXHD42H78G',
                            amount: 'AED 1200',
                            status: 'Sucess',
                        },
                        {
                            student: 'Ashish Gupta',
                            class: 'IV',
                            invoice: 'BXHD42H78G',
                            amount: 'AED 1200',
                            status: 'Sucess',
                        },
                    ]}
                />
            </div>
        </CardContainer>
    );
};

export default FormContainer;
