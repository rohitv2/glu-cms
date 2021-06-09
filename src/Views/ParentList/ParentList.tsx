import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, MailOutline } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { parentListTypes } from '../../Interfaces/parentModule';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { useDispatch } from 'react-redux';
import { deleteParentAPIcall } from '../../Redux/Actions/parentAction';
import UserTable from '../../components/Dashobard/Table/UserTable';
import CardTable from '../../components/Table/CardTable';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import commonImg from '../../Assets/images';
import ParentListFilter from './ParentListFilter';
import { gotoRoute } from '../../Helper/gotoRoute';

interface props {
    parentList: Array<parentListTypes>;
}
const ParentList: React.FunctionComponent<props> = ({ parentList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [parentListData, setParentList] = useState<any>([]);

    React.useEffect(() => {
        setParentList(parentList);
    }, [parentList]);

    React.useEffect(() => {
        if (searchValue === '' || searchValue == null) {
            setParentList(parentList);
        } else {
            const searchData = parentList.filter(
                (data) =>
                    data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                    data.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            );
            setParentList(searchData);
        }
    }, [searchValue]);

    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.parent.addNewParent,
            state: {
                breadcrumb: routeEndpoints.parent.addNewParentBread,
            },
        });
    };
    const redirectDetails = (id: number) => {
        routes.push({
            pathname: routeEndpoints.parent.details,
            state: {
                breadcrumb: routeEndpoints.parent.breadcrumb,
                id: id,
            },
        });
    };
    const handleEdit = (data: parentListTypes) => {
        routes.push({
            pathname: routeEndpoints.parent.addNewParent,
            state: {
                breadcrumb: routeEndpoints.parent.editParent,
                parentInfo: data,
            },
        });
    };
    const handleDelete = (deleteId: number) => {
        dispatch(deleteParentAPIcall(deleteId));
    };
    const handleNotification = () => {
        routes.push(gotoRoute.message);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Parents"
                    component="notification"
                    btnIcon={<Add />}
                    notificationIcon={<MailOutline />}
                    notificationText="Send notification"
                    notififcationClick={handleNotification}
                    showNotification={true}
                    btnTitle="Add New Parent"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <ParentListFilter searchOnchange={handleSearchChange} searchValue={searchValue} />
                    <div className="table__container">
                        <CardTable
                            showToolbar={false}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '60%',
                                    title: 'Name',
                                    field: 'name',
                                    render: (rowData: any) => (
                                        <TableUserProfile name={rowData.name} profile={rowData.profile} />
                                    ),
                                },
                                {
                                    width: '23%',
                                    title: 'No.of Children',
                                    field: 'childrens',
                                },
                                {
                                    width: '23%',
                                    title: 'Email address',
                                    field: 'email',
                                },
                                {
                                    width: '23%',
                                    render: (rowData: any) => (
                                        <ActionToolbar
                                            showDetail={true}
                                            showDelete={false}
                                            showEdit={true}
                                            detailClick={() => redirectDetails(rowData.id)}
                                            deleteClick={() => handleDelete(rowData.id)}
                                            editClick={() => handleEdit(rowData)}
                                        />
                                    ),
                                },
                            ]}
                            rowData={parentListData}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default ParentList;
