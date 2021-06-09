import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import commonImg from '../../Assets/images';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';

interface colDataType {
    profile: string;
    name: string;
    department: string;
    designation: string;
    action: string;
}
const AccountantList: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/accountant/add-new-accountant',
            state: {
                breadcrumb: '/dashboard/student/Add New Accountant',
            },
        });
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Accountants"
                    btnIcon={<Add />}
                    btnTitle="Add accountant"
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
                                width: '20%',
                                title: 'Profile',
                                field: 'profile',
                                render: (rowData: colDataType) => (
                                    <img src={rowData.profile} style={{ width: 35, height: 35, borderRadius: '50%' }} />
                                ),
                            },
                            {
                                width: '30%',
                                title: 'Name',
                                field: 'name',
                            },
                            {
                                width: '30%',
                                title: 'Email',
                                field: 'email',
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
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                email: 'xyz@gmail.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                email: 'xyz@gmail.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                email: 'xyz@gmail.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                email: 'xyz@gmail.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                email: 'xyz@gmail.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                email: 'xyz@gmail.com',
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default AccountantList;
