import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { MailOutline } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import CardTable from '../../components/Table/CardTable';
import FormFilter from './FormFilter';
import { toast } from 'react-toastify';

interface props {
    groupList?: any[];
    filters?: any;
    handleFilter: (data: any) => void;
}
const FormGroup: React.FunctionComponent<props> = ({ groupList, filters, handleFilter }) => {
    const routes = useHistory();
    const [searchValue, setSearchValue] = useState('');
    const [groupListData, setGroupListData] = useState<any>([]);

    React.useEffect(() => {
        setGroupListData(groupList);
    }, [groupList]);

    React.useEffect(() => {
        if (searchValue === '' || searchValue == null) {
            setGroupListData(groupList);
        } else {
            const searchData = groupListData.filter((data: { name: string; formGroup: string }) =>
                data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            );
            setGroupListData(searchData);
        }
    }, [searchValue]);

    const handleToggler = () => {
        if (filters.class !== '') {
            routes.push({
                pathname: '/dashboard/edit-form-group',
                state: {
                    classId: filters.class,
                    sectionId: filters.section,
                },
            });
        } else {
            toast.success('Please select the year group first.');
        }
    };

    // const handleChangeInput = (e: any) => {
    //     setSearchValue(e);
    // };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Form Groups"
                    btnTitle="Add Form Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    trigger={handleToggler}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <FormFilter filterData={handleFilter} />
                    <div className="table__container">
                        <CardTable
                            showToolbar={false}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '70%',
                                    title: 'Name',
                                    field: 'name',
                                    render: (rowData: any) => (
                                        <TableUserProfile name={rowData.name} profile={rowData.profile} />
                                    ),
                                },
                                {
                                    width: '18%',
                                    title: 'Student ID',
                                    field: 'studentId',
                                },
                                {
                                    title: 'Form Group',
                                    field: 'formGroup',
                                },
                            ]}
                            rowData={groupListData}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default FormGroup;
