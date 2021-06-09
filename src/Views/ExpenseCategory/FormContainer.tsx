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
                                    width: '90%',
                                    title: 'Name',
                                    field: 'name',
                                },
                                {
                                    width: '10%',
                                    title: 'Action',
                                    field: 'action',
                                    render: () => <ActionToolbar showDetail={true} showDelete={false} showEdit={true}/>,
                                },
                            ]}
                            rowData={[
                                {
                                    name: 'Academic Support',
                                    action:''
                                },
                                {
                                    name: 'Institutional Support',
                                    action:''
                                },
                                {
                                    name: 'Operation and Maintenance of Plant',
                                    action:''
                                },
                                {
                                    name: 'Public Service',
                                    action:''
                                },
                                {
                                    name: 'Research',
                                    action:''
                                },
                                {
                                    name: 'Student Services',
                                    action:''
                                },
                                {
                                    name: 'Transportation',
                                    action:''
                                },
                            ]}
                        />
        </div>
    </CardContainer>
    );
}

export default FormContainer;
