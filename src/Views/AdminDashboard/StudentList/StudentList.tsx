import React, { useEffect, useState } from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeendpoints } from '../../../Utility/routeendpoints';
import ActionToolbar from '../../../components/Dashobard/ActionToolbar';
import CardTable from '../../../components/Table/CardTable';
import TableUserProfile from '../../../components/Dashobard/TableUserProfile';
import Switch from '@material-ui/core/Switch';
import { getallStudentAPIcall, activateDeactivateUser } from '../../../Redux/Actions/superAdminActions';
import OutlineButton from '../../../components/Button/OutlineButton';
import { Typography } from '@material-ui/core';
import { colors } from '../../../Styles/colors';

interface props {
    studentList: Array<string | number>;
}
const StudentList: React.FunctionComponent<props> = ({ studentList }) => {
    const [students, setStudents] = useState<any>([]);
    useEffect(() => {
        if (studentList) {
            setStudents(studentList);
        }
    }, [studentList]);
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleDetails = (data: any) => {
        routes.push({
            pathname: '/admin/student/detail',
            state: {
                studentDetails: data,
            },
        });
    };
    const handleActiveInactive = (id: number, i: number) => {
        const data = [...students];
        data[i].isVerified = !data[i].isVerified;
        setStudents(data);
        dispatch(activateDeactivateUser(id, callGetParents));
    };
    const callGetParents = () => {
        dispatch(getallStudentAPIcall());
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                {/* <AddButton title="Videos" btnIcon={<Add />} btnTitle="Add New Video" trigger={handleRoutes} /> */}
                <AddButton title="Students" />
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
                                        rowData.isEmailVerified == true ? (
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
                            rowData={studentList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentList;
