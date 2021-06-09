import React, { useState, useEffect } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, MailOutline } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';
import TeacherListFilter from '../TeacherList/TeacherLisFilter';

interface props {
    departmentList?: any;
}
const Departments: React.FunctionComponent<props> = ({ departmentList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [departmentId, setDepartmentId] = useState(-1);
    const [departmentData, setDepartmentData] = useState<any>([]);

    React.useEffect(() => {
        setDepartmentData(departmentList);
    }, [departmentList]);

    React.useEffect(() => {
        if (departmentList) {
            let filterDepartments = departmentList?.filter((item: any) => item.id === departmentId);
            if (searchValue === '' || searchValue == null) {
                setDepartmentData(filterDepartments);
            } else {
                const searchData = filterDepartments.filter((data: { department: string }) =>
                    data.department.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                );
                setDepartmentData(searchData);
            }
        }
    }, [searchValue]);

    const redirectDetails = (data: any) => {
        routes.push({
            pathname: '/dashboard/department-details',
            state: {
                details: data,
            },
        });
    };

    const handleDelete = (id: number) => {
        dispatch(deleteDepartmentAPIcall(id));
    };
    const handleEdit = (data: any) => {
        routes.push({
            pathname: '/dashboard/department/add-new-department',
            state: {
                data: data,
            },
        });
    };
    const handleRoute = () => {
        routes.push('/dashboard/department/add-new-department');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleFilter = (value: any) => {
        setDepartmentId(value);
        if (value === -1) {
            setDepartmentData(departmentList);
        } else {
            let data = departmentList?.filter((item: any) => item.id === value);
            setDepartmentData(data);
        }
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Departments"
                    component="notification"
                    showNotification={true}
                    notificationIcon={<MailOutline />}
                    notificationText="Send notification"
                    btnIcon={<Add />}
                    btnTitle="Add department"
                    trigger={handleRoute}
                />
            </CardContainer>
            <CardContainer>
                <TeacherListFilter
                    searchOnchange={handleSearchChange}
                    searchValue={searchValue}
                    getFilterValue={handleFilter}
                />

                <BorderTableContainer>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '40%',
                                title: 'Department',
                                field: 'department',
                            },
                            {
                                width: '15%',
                                title: 'No.of Students',
                                field: 'students',
                            },

                            {
                                width: '15%',
                                title: 'No.of Teachers',
                                field: 'teachers',
                            },
                            {
                                width: '23%',
                                title: 'Head of Department',
                                field: 'hod',
                            },
                            {
                                width: '23%',
                                title: 'Action',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        showDelete={false}
                                        showEdit={true}
                                        detailClick={() => redirectDetails(rowData)}
                                        // deleteClick={() => handleDelete(rowData.id)}
                                        editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={departmentData}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default Departments;
