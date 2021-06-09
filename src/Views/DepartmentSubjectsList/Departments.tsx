import React, { useState } from 'react';
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
    const [departmentData, setDepartmentData] = useState<any>([]);
    const [departmentId, setDepartmentId] = useState(-1);

    React.useEffect(() => {
        setDepartmentData(departmentList);
    }, [departmentList]);

    React.useEffect(() => {
        if (departmentList) {
            let filterDepartments = departmentList?.filter((item: any) => item.departmentId === departmentId);
            if (searchValue === '' || searchValue == null) {
                setDepartmentData(filterDepartments);
            } else {
                const searchData = filterDepartments.filter((data: { subjectName: string }) =>
                    data.subjectName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                );
                setDepartmentData(searchData);
            }
        }
    }, [searchValue]);

    const redirectDetails = () => {
        // routes.push('/dashboard/department-details');
    };
    const handleDelete = (id: number) => {
        dispatch(deleteDepartmentAPIcall(id));
    };
    const handleEdit = (data: any) => {
        routes.push({
            pathname: '/dashboard/subjects/add-new-subject',
            state: {
                data: data,
            },
        });
    };
    const handleRoute = () => {
        routes.push('/dashboard/subjects/add-new-subject');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleFilter = (value: any) => {
        setDepartmentId(value);
        if (value === -1) {
            setDepartmentData(departmentList);
        } else {
            let data = departmentList?.filter((item: any) => item.departmentId === value);
            setDepartmentData(data);
        }
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Subjects"
                    component="notification"
                    showNotification={true}
                    notificationIcon={<MailOutline />}
                    notificationText="Send notification"
                    btnIcon={<Add />}
                    btnTitle="Add new subject"
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
                                title: 'Subject',
                                field: 'subjectName',
                            },
                            {
                                width: '15%',
                                title: 'Subject Id',
                                field: 'subjectId',
                            },
                            {
                                width: '40%',
                                title: 'Department',
                                field: 'departmentName',
                            },

                            {
                                width: '15%',
                                title: 'Department Id',
                                field: 'departmentId',
                            },
                            {
                                width: '23%',
                                title: 'Action',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        showDelete={false}
                                        showEdit={true}
                                        detailClick={() => redirectDetails()}
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
