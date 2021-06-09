import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { Button } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import { useHistory } from 'react-router';

const SyllabusList: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => [routes.push('/dashboard/add-syllabus')];
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Syllabus"
                    btnIcon={<Add />}
                    btnTitle="Add Syllabus"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        columns={[
                            {
                                width: '23%',
                                title: 'Title',
                                field: 'title',
                            },
                            {
                                width: '23%',
                                title: 'Syllabus',
                                field: 'syllabus',
                                render: () => (
                                    <Button
                                        style={{
                                            backgroundColor: colors.primary,
                                            color: colors.white,
                                            fontSize: 12,
                                            textTransform: 'capitalize',
                                            borderRadius: 7,
                                            padding: '0.4rem 1rem',
                                        }}
                                    >
                                        Download
                                    </Button>
                                ),
                            },
                            {
                                width: '23%',
                                title: 'Subject',
                                field: 'subject',
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
                                title: 'Final Syllabus',
                                syllabus: '',
                                subject: 'Computer',
                                action: '',
                            },
                            {
                                title: 'First Term Syllabus',
                                syllabus: '',
                                subject: 'Computer',
                                action: '',
                            },
                            {
                                title: 'Second Term Syllabus',
                                syllabus: '',
                                subject: 'Computer',
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default SyllabusList;
