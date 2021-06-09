import React, { useEffect, useState } from 'react';
import UserDetailsWrapper from '../../../../Containers/Dashboard/UserDetailsWrapper';
import AttendenceRow from '../../../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../../../components/Dashobard/UserDetails/PresentRow';
import HeadingSubHeadingOneBtn from '../../../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';
import commonImg from '../../../../Assets/images';
import TableUserProfile from '../../../../components/Dashobard/TableUserProfile';
import CardTable from '../../../../components/Table/CardTable';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { checkValue } from '../../../../Helper/checkValue';
import { checkValueReturn0 } from '../../../../Helper/checkValueReturn0';
import {
    getAllStudentClassGroupAttendanceAPIcall,
    getClassGroupAttendanceByDateFilter,
} from '../../../../Redux/Actions/classAction';
import moment from 'moment';
import ActionToolbar from '../../../../components/Dashobard/ActionToolbar';

const Index = () => {
    const routes = useHistory();
    const [teacherdata, setTeacherdata] = useState<any>({ name: '', staffId: 0 });
    const [attendance, setAttendance] = useState({
        presentPercentage: 0,
        absentPrecentage: 0,
        absent: 0,
    });
    const [attendanceRow, setAttendanceRow] = useState({
        absent: 0,
        present: 0,
        absentPercentage: 0,
        presentPercentage: 0,
        onTime: 0,
        late: 0,
    });
    const [studentAttendance, setStudentAttendance] = useState([]);
    const teacherAttendance = useSelector((state: any) => state.classReducer.classGroupAttendance);
    const redirectDetails = (data: any) => {
        routes.push({
            pathname: '/dashboard/class-groups/class-group-details/perticular',
            state: {
                teacherData: teacherdata,
                studentData: data,
            },
        });
    };
    const findRoutes = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('teacherData')) {
                setTeacherdata((findRoutes as any).state.teacherData);
                dispatch(getAllStudentClassGroupAttendanceAPIcall((findRoutes as any).state.teacherData.classGroupId));
            }
        }
    }, []);
    const handleDateRange = (data: any) => {
        const startDate = moment(data[0].startDate).format('YYYY-MM-DD');
        const endDate = moment(data[0].endDate).format('YYYY-MM-DD');
        if (teacherdata?.classGroupId) {
            dispatch(getClassGroupAttendanceByDateFilter(teacherdata?.classGroupId, startDate, endDate));
        }
    };

    useEffect(() => {
        if (teacherAttendance) {
            setAttendance({
                ...attendance,
                presentPercentage: teacherAttendance.attendance,
                absentPrecentage: teacherAttendance.absentPrecentage,
                absent: teacherAttendance.absent,
            });
            setAttendanceRow({
                absent: teacherAttendance.absent,
                present: teacherAttendance.present,
                absentPercentage: teacherAttendance.absentPrecentage,
                presentPercentage: teacherAttendance.attendance,
                onTime: 0,
                late: 0,
            });
            const data = teacherAttendance.result.map((item: any) => {
                return {
                    name:
                        checkValue(item?.student?.Student?.firstName) +
                        ' ' +
                        checkValue(item?.student?.Student?.lastName),
                    studentId: checkValue(item?.student?.studentId),
                    profile: item?.student?.Student?.User?.profile
                        ? item?.student?.Student?.User?.profile
                        : commonImg.photo,
                    punctuality: checkValueReturn0(item?.presentPercentage),
                    attendance: checkValueReturn0(item?.presentPercentage),
                };
            });
            setStudentAttendance(data);
        }
    }, [teacherAttendance]);
    return (
        <UserDetailsWrapper>
            <HeadingSubHeadingOneBtn
                title="Attendace"
                subtitle={`${teacherdata.teachersName} - Classes - Year 8 B`}
                buttonText="Print"
                linkTo="/dashboard"
            />
            <AttendenceRow dateRange={handleDateRange} attendance={attendance} />
            <PresentRow attendance={attendanceRow} />
            <div className="row row__margin">
                <div className="col-md-12 colum__spacing">
                    <div className="p-4 bg-white">
                        <div className="student-table">
                            <div className="table__container">
                                <CardTable
                                    showToolbar={false}
                                    showPagination={true}
                                    selectable={false}
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
                                            width: '18%',
                                            title: 'Student ID',
                                            field: 'studentId',
                                        },
                                        {
                                            width: '18%',
                                            title: 'Attendance',
                                            field: 'attendance',
                                        },
                                        {
                                            width: '18%',
                                            title: 'Punctuality',
                                            field: 'punctuality',
                                        },
                                        {
                                            width: '23%',

                                            render: (rowData: any) => (
                                                <ActionToolbar
                                                    showDetail={true}
                                                    showDelete={false}
                                                    showEdit={true}
                                                    detailClick={() => redirectDetails(rowData)}
                                                    // deleteClick={() => handleDelete(rowData.id)}
                                                    // editClick={() => handleEdit(rowData)}
                                                />
                                            ),
                                        },
                                    ]}
                                    rowData={studentAttendance}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserDetailsWrapper>
    );
};

export default Index;
