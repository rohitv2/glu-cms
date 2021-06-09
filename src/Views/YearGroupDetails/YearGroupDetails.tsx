import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, MailOutline } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';

interface props {
    classList?: any[];
    groupId?: number;
    classInfo?: any;
    hods: any;
}
const YearGroupDetails: React.FunctionComponent<props> = ({ classList, groupId, hods, classInfo }) => {
    const routes = useHistory();
    const handleToggler = () => {
        routes.push({
            pathname: '/dashboard/edit-form-group',
            state: {
                classId: groupId,
            },
        });
    };

    const handleFormEdit = (data: any) => {
        routes.push({
            pathname: '/dashboard/edit-form-group',
            state: {
                classId: groupId,
                details: data,
                edit: true,
            },
        });
    };

    const handleFormDetails = (data: any) => {
        routes.push({
            pathname: '/dashboard/edit-form-group',
            state: {
                classId: groupId,
                details: data,
                edit: false,
            },
        });
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title={`Year ${classInfo.yearGroup}`}
                    subtitle={`Head: ${hods?.join(', ')}`}
                    btnIcon={<Add />}
                    btnTitle="Add Form Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    trigger={handleToggler}
                />
            </CardContainer>
            <CardContainer>
                <BorderTableContainer>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '60%',
                                title: 'Form Group',
                                field: 'formGroup',
                            },
                            {
                                width: '15%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '20%',
                                title: 'Teacher',
                                field: 'teacher',
                            },
                            {
                                width: '5%',
                                title: '',
                                field: '',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        showDelete={false}
                                        showEdit={true}
                                        detailClick={() => {
                                            handleFormDetails(rowData);
                                        }}
                                        deleteClick={() => {}}
                                        editClick={() => handleFormEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={classList}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default YearGroupDetails;
