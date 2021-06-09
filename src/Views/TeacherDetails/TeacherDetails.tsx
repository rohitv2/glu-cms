import React, { useEffect, useState } from 'react';
import commonImg from '../../Assets/images';
import { useSelector, useDispatch } from 'react-redux';
import { studentDetailsProps } from '../../Interfaces/studentModule';
import { useHistory, useLocation } from 'react-router-dom';
import ProfileTitle from '../../components/Dashobard/ProfileTitle';
import AttendenceRow from '../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../components/Dashobard/UserDetails/PresentRow';
import UserDetailsWrapper from '../../Containers/Dashboard/UserDetailsWrapper';
import UserTable from '../../components/Dashobard/Table/UserTable';
import { routeEndpoints } from '../../Utility/routeEndpoints';

const StudentDetails: React.FunctionComponent = () => {
    const studentInfo = useSelector((state: any) => state.studentReducer.studentDetails);
    const routes = useHistory();
    const dispatch = useDispatch();
    const data = [
        { col1: 'Computer', col2: 'James Arthur' },
        { col1: 'Biology', col2: 'Morgan Freeman' },
        { col1: 'Chemistry', col2: 'Jhonny Depp' },
        { col1: 'Physics', col2: 'Chris Hemsworth' },
    ];
    const redirectDetails = () => {
        routes.push({
            pathname: routeEndpoints.teacher.details,
            state: {
                breadcrumb: routeEndpoints.teacher.details,
            },
        });
    };
    const handleEdit = (data: any) => {
        routes.push({
            pathname: routeEndpoints.teacher.addNewTeacher,
            state: {
                breadcrumb: routeEndpoints.teacher.editTeacher,
                teacherInfo: data,
            },
        });
    };
    const handleDelete = (deleteId: number) => {};
    return (
        <UserDetailsWrapper>
            <ProfileTitle />
            <AttendenceRow />
            <PresentRow />
            <div className="row row__margin">
                <div className="col-md-12 colum__spacing">
                    <div className="p-4 bg-white">
                        <UserTable
                            showFilter={false}
                            redirectDetails={() => redirectDetails()}
                            handleEdit={(value: any) => handleEdit(value)}
                            handleDelete={(value: any) => handleDelete(value)}
                        />
                    </div>
                </div>
            </div>
        </UserDetailsWrapper>
    );
};

export default StudentDetails;
