import React, { useEffect, useState } from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../../Utility/routeEndpoints';
import ActionToolbar from '../../../components/Dashobard/ActionToolbar';
import CardTable from '../../../components/Table/CardTable';
import TableUserProfile from '../../../components/Dashobard/TableUserProfile';
import Switch from '@material-ui/core/Switch';
import { activateDeactivateUser, getallParentsAPIcall } from '../../../Redux/Actions/superAdminActions';
import OutlineButton from '../../../components/Button/OutlineButton';
import Typography from '@material-ui/core/Typography';
import { colors } from '../../../Styles/colors';

interface props {
    parentsList: Array<string | number>;
}
const ParentsList: React.FunctionComponent<props> = ({ parentsList }) => {
    const [parent, setParent] = useState<any>([]);
    useEffect(() => {
        if (parentsList) {
            setParent(parentsList);
        }
    }, [parentsList]);
    const routes = useHistory();
    const dispatch = useDispatch();

    const handleDetails = (data: any) => {
        routes.push({
            pathname: '/admin/parent/detail',
            state: {
                studentDetailsParent: data,
            },
        });
    };

    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.school.addNewSchool,
            state: {
                breadcrumb: routeEndpoints.teacher.addNewTeacherBread,
            },
        });
    };
    const handleActiveInactive = (id: number, i: number) => {
        const data = [...parent];
        data[i].isActive = !data[i].isActive;
        setParent(data);
        dispatch(activateDeactivateUser(id, callGetParents));
    };
    const callGetParents = () => {
        dispatch(getallParentsAPIcall());
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                {/* <AddButton title="Parents" btnIcon={<Add />} btnTitle="Add New Parent" trigger={handleRoutes} /> */}
                <AddButton title="Parents" />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <div className="table__container">
                        <CardTable
                            width="23rem"
                            disableExport={true}
                            showToolbar={true}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            filterFlag={true}
                            columns={[
                                {
                                    width: '23%',
                                    title: 'First Name',
                                    field: 'firstName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Last Name',
                                    field: 'lastName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'No of Childrens',
                                    field: '',
                                    render: (rowData: any) => <Typography>{rowData.children.length}</Typography>,
                                },
                                {
                                    width: '23%',
                                    title: 'Phone Number',
                                    field: 'phoneNumber',
                                },
                                {
                                    width: '23%',
                                    title: 'Location',
                                    field: 'location',
                                },
                                {
                                    title: 'Email Verification',
                                    field: 'isEmailVerified',
                                    lookup: { true: 'Verified', 'N/A': 'Pending' },
                                    render: (rowData: any) =>
                                        rowData.isEmailVerified === true ? (
                                            <Typography style={{ color: 'green', fontSize: '1.25rem' }}>
                                                Verifiied
                                            </Typography>
                                        ) : (
                                            <Typography style={{ color: colors.primary, fontSize: '1.25rem' }}>
                                                Pending
                                            </Typography>
                                        ),
                                },
                                {
                                    width: '23%',
                                    title: 'Active/Inactive',
                                    field: 'isActive',
                                    lookup: { 'N/A': 'Inactive', true: 'Active' },
                                    render: (rowData: any) => (
                                        <Switch
                                            checked={rowData.isActive == true ? true : false}
                                            onChange={() => handleActiveInactive(rowData.userId, rowData.index)}
                                            color="primary"
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    ),
                                },
                                {
                                    width: '23%',
                                    title: 'View Details',
                                    field: '',
                                    render: (rowData: any) => (
                                        <OutlineButton text="View Details" btnClick={() => handleDetails(rowData)} />
                                    ),
                                },
                            ]}
                            rowData={parent}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default ParentsList;
