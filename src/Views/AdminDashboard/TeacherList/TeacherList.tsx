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
import { activateDeactivateUser, getallTeacherAPIcall } from '../../../Redux/Actions/superAdminActions';
import { Typography } from '@material-ui/core';
import { colors } from '../../../Styles/colors';
import OutlineButton from '../../../components/Button/OutlineButton';

interface props {
    teacherList: Array<string | number>;
}
const TeacherList: React.FunctionComponent<props> = ({ teacherList }) => {
    const [students, setTeachers] = useState<any>([]);
    useEffect(() => {
        if (teacherList) {
            setTeachers(teacherList);
        }
    }, [teacherList]);
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.school.addNewTeacher,
            state: {
                breadcrumb: routeEndpoints.school.addNewTeacher,
            },
        });
    };

    const handleDetails = (data: any) => {
        routes.push({
            pathname: '/admin/teacher/detail',
            state: {
                teacherDetails: data,
            },
        });
    };
    const handleActiveInactive = (id: number, i: number) => {
        const data = [...students];
        data[i].isActive = !data[i].isActive;
        setTeachers(data);
        dispatch(activateDeactivateUser(id, callGetParents));
    };
    const callGetParents = () => {
        dispatch(getallTeacherAPIcall());
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                {/* <AddButton title="Teachers" btnIcon={<Add />} btnTitle="Add New Teacher" trigger={handleRoutes} /> */}
                <AddButton title="Teachers" />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <div className="table__container">
                        <CardTable
                            width="23rem"
                            disableExport={true}
                            showToolbar={true}
                            showPagination={true}
                            selectable={false}
                            tableHeight="100vh"
                            columns={[
                                {
                                    title: 'First Name',
                                    field: 'firstName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    title: 'Last Name',
                                    field: 'lastName',
                                },

                                {
                                    title: 'Phone Number',
                                    field: 'phoneNumber',
                                },
                                {
                                    title: 'Location',
                                    field: 'location',
                                },
                                {
                                    title: 'Document Type',
                                    field: 'documentType',
                                    lookup: { Dl: 'Driving Licence', passport: 'Passport', nationalId: 'National ID' },
                                    render: (rowData: any) =>
                                        rowData.documentType === 'Dl' ? (
                                            <Typography style={{ fontSize: '1.25rem' }}>Driving Licence</Typography>
                                        ) : rowData.documentType === 'passport' ? (
                                            <Typography style={{ fontSize: '1.25rem' }}>Passport</Typography>
                                        ) : (
                                            <Typography style={{ fontSize: '1.25rem' }}>National ID</Typography>
                                        ),
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
                                    title: 'Document Status',
                                    field: 'docStatus',
                                    lookup: { Approved: 'Approved', Rejected: 'Rejected', Pending: 'Pending' },
                                    render: (rowData: any) =>
                                        rowData.status === 'Pending' ? (
                                            <Typography style={{ color: colors.primary, fontSize: '1.25rem' }}>
                                                Pending
                                            </Typography>
                                        ) : rowData.status === 'Approved' ? (
                                            <Typography style={{ color: 'green', fontSize: '1.25rem' }}>
                                                Approved
                                            </Typography>
                                        ) : rowData.status === 'Rejected' ? (
                                            <Typography style={{ color: 'red', fontSize: '1.25rem' }}>
                                                Rejected
                                            </Typography>
                                        ) : null,
                                },

                                {
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
                                    title: 'Action',
                                    field: '',
                                    render: (rowData: any) => (
                                        <OutlineButton
                                            btnClick={() => handleDetails(rowData)}
                                            style={{ width: '12rem' }}
                                            text="View Details"
                                        />
                                    ),
                                },
                            ]}
                            rowData={teacherList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default TeacherList;
