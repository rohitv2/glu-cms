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
const ClassRoutine: React.FunctionComponent<props> = ({ triggerModal }) => {
    const routes = useHistory();
    const redirectBulk = () => {
        routes.push({
            pathname: '/dashboard/timetable-bulk-upload',
            state: {
                breadcrumb: '/dashboard/timetable-bulk-upload',
            },
        });
    };
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Timetables"
                    bulkbtn={true}
                    bulkText="Bulk Upload"
                    btnTitle="Add New Timetable"
                    btnIcon={<Add />}
                    bulkTrigger={redirectBulk}
                    trigger={triggerModal}
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
                                    activity: 'Physics',
                                    time: '10:00AM - 12:00PM',
                                    teacher: 'Toni ferad',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                            {
                                class: 'Tuesday',
                                routine: {
                                    activity: 'Chemistry',
                                    time: '01:00AM - 2:00PM',
                                    teacher: 'john smith',
                                    students: 'Govind, Mohit',
                                },
                                action: '',
                            },
                            {
                                class: 'Wednesday',
                                routine: {
                                    activity: 'Biology',
                                    time: '10:00AM - 12:00PM',
                                    teacher: 'johns cena',
                                    students: 'year 1, B',
                                },
                                action: '',
                            },
                            {
                                class: 'Thursday',
                                routine: {
                                    activity: 'Maths',
                                    time: '10:00AM - 12:00PM',
                                    teacher: 'john smithArt',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                            {
                                class: 'Friday',
                                routine: {
                                    activity: 'Maths',
                                    time: '10:00AM - 12:00PM',
                                    teacher: 'john smith',
                                    students: 'year 1, A',
                                },
                                action: '',
                            },
                            {
                                class: 'Saturday',
                                routine: {
                                    activity: 'Maths',
                                    time: '10:00AM - 12:00PM',
                                    teacher: 'john smith',
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

export default ClassRoutine;
