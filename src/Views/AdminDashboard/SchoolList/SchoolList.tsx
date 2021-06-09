import React, { useEffect, useState } from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeacherAPIcall } from '../../../Redux/Actions/teacherAction';
import { activateDeactivateUser, getallSchoolAPIcall } from '../../../Redux/Actions/superAdminActions';
import { routeEndpoints } from '../../../Utility/routeEndpoints';
import ActionToolbar from '../../../components/Dashobard/ActionToolbar';
import CardTable from '../../../components/Table/CardTable';
import Switch from '@material-ui/core/Switch';
import OutlineButton from '../../../components/Button/OutlineButton';
import Typography from '@material-ui/core/Typography';
import { colors } from '../../../Styles/colors';

interface props {
    schoolList: any;
}
const SchoolList: React.FunctionComponent<props> = ({ schoolList }) => {
    const [schools, setSchools] = useState<any>([]);
    useEffect(() => {
        if (schoolList) {
            setSchools(schoolList);
        }
    }, [schoolList]);
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.school.addNewSchool,
            state: {
                breadcrumb: routeEndpoints.teacher.addNewTeacherBread,
            },
        });
    };
    const handleDetails = (data: any) => {
        routes.push({
            pathname: '/admin/school/detail',
            state: {
                schoolDetails: data,
            },
        });
    };
    const handleActiveInactive = (id: number, i: number) => {
        const data = [...schools];
        data[i].isActive = !data[i].isActive;
        setSchools(data);
        dispatch(activateDeactivateUser(id, callGetSchool));
    };
    const callGetSchool = () => {
        dispatch(getallSchoolAPIcall());
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Schools" btnIcon={<Add />} btnTitle="Add New School" trigger={handleRoutes} />
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
                                    title: 'Name',
                                    field: 'schoolName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Website',
                                    field: 'website',
                                },
                                {
                                    width: '23%',
                                    title: 'PhoneNumber',
                                    field: 'phoneNumber',
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
                                            checked={rowData.isActive}
                                            onChange={() => handleActiveInactive(rowData.userId, rowData.index)}
                                            color="primary"
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    ),
                                },
                                {
                                    title: 'Action',
                                    field: 'docStatus',
                                    render: (rowData: any) => (
                                        <OutlineButton
                                            btnClick={() => handleDetails(rowData)}
                                            style={{ width: '12rem' }}
                                            text="View Details"
                                        />
                                    ),
                                },
                            ]}
                            rowData={schools}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default SchoolList;
