import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, Add } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import TitleCardContainer from './TitleCardContainer';
import './routineTable.scss';
import FormRow from './FormRow';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface props {
    triggerModal: () => void;
}
const ECATable: React.FunctionComponent<props> = ({ triggerModal }) => {
    const routes = useHistory();
    const redirectBulk = () => {
        routes.push({
            pathname: '/dashboard/extra-curricular-activities-bulk-upload',
            state: {
                breadcrumb: '/dashboard/extra curricular activity/ bulk upload',
            },
        });
    };
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Extra Curricular Activity"
                    btnTitle="Add New Extra Curricular Activity"
                    bulkbtn={true}
                    bulkText="Bulk Upload"
                    btnIcon={<Add />}
                    trigger={triggerModal}
                    bulkTrigger={redirectBulk}
                />
            </CardContainer>
            <CardContainer>
                <div className="class-routine-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={false}
                        filterRender={
                            <div className="student-form-row  w-100">
                                <FormRow />
                                <Button className="filter-btn">Filter</Button>
                            </div>
                        }
                        columns={[
                            {
                                width: '15%',
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '75%',
                                title: 'Routine',
                                field: 'routine',
                                render: (rowData: any) => <TitleCardContainer data={rowData.routine} />,
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
                                class: 'Monday',
                                routine: {
                                    activity: 'singing',
                                    time: '10:00AM - 12:00PM',
                                    department: 'Art',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                            {
                                class: 'Tuesday',
                                routine: {
                                    activity: 'singing',
                                    time: '01:00AM - 2:00PM',
                                    department: 'Science',
                                    students: 'Govind, Rohit, Mohit',
                                },
                                action: '',
                            },
                            {
                                class: 'Wednesday',
                                routine: {
                                    activity: 'singing',
                                    time: '10:00AM - 12:00PM',
                                    department: 'Art',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                            {
                                class: 'Thursday',
                                routine: {
                                    activity: 'singing',
                                    time: '10:00AM - 12:00PM',
                                    department: 'Art',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                            {
                                class: 'Friday',
                                routine: {
                                    activity: 'singing',
                                    time: '10:00AM - 12:00PM',
                                    department: 'Art',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                            {
                                class: 'Saturday',
                                routine: {
                                    activity: 'singing',
                                    time: '10:00AM - 12:00PM',
                                    department: 'Art',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default ECATable;
