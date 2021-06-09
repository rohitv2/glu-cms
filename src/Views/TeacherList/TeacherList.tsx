import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import CardTable from '../../components/Table/CardTable';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import TeacherListFilter from './TeacherLisFilter';

interface colDataType {
    id: number;
    profile: string;
    first_name: string;
    last_name: string;
    gender: string;
    department: string;
    designation: string;
    action: string;
}
interface props {
    teacherList: Array<string | number>;
}
const TeacherList: React.FunctionComponent<props> = ({ teacherList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [departmentId, setDepartmentId] = useState(-1);
    const [teacherData, setTeacherData] = useState<any>([]);

    React.useEffect(() => {
        setTeacherData(teacherList);
    }, [teacherList]);

    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.teacher.addNewTeacher,
            state: {
                breadcrumb: routeEndpoints.teacher.addNewTeacherBread,
            },
        });
    };
    const redirectDetails = (data: any) => {
        routes.push({
            pathname: '/dashboard/teacher-details',
            state: {
                teacherData: data,
            },
        });
    };
    const handleEdit = (data: colDataType) => {
        routes.push({
            pathname: routeEndpoints.teacher.addNewTeacher,
            state: {
                teacherInfo: data,
            },
        });
    };
    const handleDelete = (deleteId: number) => {
        dispatch(deleteTeacherAPIcall(deleteId));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    React.useEffect(() => {
        if (teacherList) {
            let filteredTeachers = teacherList?.filter((item: any) => item.departmentId === departmentId);
            if (searchValue === '') {
                setTeacherData(filteredTeachers);
            } else {
                const data = filteredTeachers.filter((item: any) => {
                    if (
                        String(item.department).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1 ||
                        String(item.designation).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1 ||
                        String(item.staffId).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1 ||
                        String(item.name).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1
                    ) {
                        return item;
                    }
                });
                setTeacherData(data);
            }
        }
    }, [searchValue]);

    const handleFilter = (value: any) => {
        setDepartmentId(value);
        if (value === -1) {
            setTeacherData(teacherList);
        } else {
            let data = teacherList?.filter((item: any) => item.departmentId === value);
            setTeacherData(data);
        }
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Teachers" btnIcon={<Add />} btnTitle="Add New Teacher" trigger={handleRoutes} />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <TeacherListFilter
                        searchOnchange={handleSearchChange}
                        searchValue={searchValue}
                        getFilterValue={handleFilter}
                    />

                    <div className="table__container">
                        <CardTable
                            showToolbar={false}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '23%',
                                    title: 'Name',
                                    field: 'name',
                                    render: (rowData: any) => (
                                        <TableUserProfile name={rowData.name} profile={rowData.profile} />
                                    ),
                                },
                                {
                                    width: '23%',
                                    title: 'Staff ID',
                                    field: 'staffId',
                                },
                                {
                                    width: '23%',
                                    title: 'Department',
                                    field: 'department',
                                },
                                {
                                    width: '23%',
                                    title: 'Designation',
                                    field: 'designation',
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
                                            deleteClick={() => handleDelete(rowData.id)}
                                            editClick={() => handleEdit(rowData)}
                                        />
                                    ),
                                },
                            ]}
                            rowData={teacherData}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default TeacherList;
