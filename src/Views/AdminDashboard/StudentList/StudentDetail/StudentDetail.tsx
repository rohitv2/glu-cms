import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { studentStyle } from './studentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { studentDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import commonImg from '../../../../Assets/images';
import Reusable from './ReusableEdExp';

const useStyle = makeStyles(studentStyle as any);

const StudentDetail = () => {
    const classes = useStyle();
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        phoneNumber: '',
        city: '',
        education: '',
        image: '',
    });
    const studentDetails = useSelector((state: any) => state.superAdminReducer.studentDetails);
    // alert(JSON.stringify(studentDetails && studentDetails.GuardianStudent))
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('studentDetails')) {
            dispatch(studentDetailSuperAdmin((location as any)?.state?.studentDetails?.studentId));
        }
    }, []);
    useEffect(() => {
        if (studentDetails) {
            const data = {
                firstName: studentDetails.firstName,
                lastName: studentDetails.lastName,
                bio: studentDetails.bio,
                email: studentDetails ?.User ?.email,
                phoneNumber: studentDetails.phoneNumber,
                city: studentDetails.location,
                education: studentDetails.StudentQualifications,
                image: studentDetails.User.profile,
                parentStatus: studentDetails.parentStatus,
            };
            setStudentData(data);
        }
    }, [studentDetails]);

    return (
        <>
            <Box component="div" className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        {/* <h1>Student</h1> */}
                        <div>
                            <div className={classes.detailsText2} style={{ marginTop: '2rem' }}>
                                Student Details
                        </div>
                            <div className={classes.name}>
                                <div className={classes.firstName}>
                                    <label htmlFor="firstName" className={classes.inputLabel}>
                                        First Name
                                </label>
                                    <input
                                        value={studentData.firstName}
                                        type="text"
                                        id="firstName"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                </div>
                                <div className={classes.lastName}>
                                    <label htmlFor="lastName" className={classes.inputLabel}>
                                        Last Name
                                </label>
                                    <input
                                        value={studentData.lastName}
                                        type="text"
                                        id="lastName"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                </div>
                            </div>

                            <div className={classes.email}>
                                <label htmlFor="email" className={classes.inputLabel}>
                                    Email
                            </label>
                                <input
                                    value={studentData.email}
                                    type="text"
                                    id="email"
                                    className={classes.inputBox}
                                    disabled
                                ></input>
                            </div>

                            <div className={classes.mobile}>
                                <div className={classes.preNum}>
                                    <label htmlFor="mobile" className={classes.inputLabel}>
                                        Mobile No
                                </label>
                                    <div>
                                        <input
                                            value={studentData.phoneNumber}
                                            type="text"
                                            id="mobile"
                                            className={classes.inputBox}
                                            disabled
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.location}>
                                <label htmlFor="location" className={classes.inputLabel}>
                                    Location
                            </label>
                                <input
                                    value={studentData.city ? studentData.city : 'N/A'}
                                    type="text"
                                    id="location"
                                    className={classes.inputBox}
                                    disabled
                                ></input>
                                <div className={classes.iconBox}>
                                    {/* <LocationSearchingIcon /> */}
                                    <i className="icon-Locate"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div className={classes.detailsText}>Education</div>
                        {studentData.education instanceof Array &&
                            studentData.education.map((item: any) => {
                                return (
                                    <Reusable
                                        startDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                        endDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                        institute={item.QualificationDetail.school}
                                        position={item.QualificationDetail.fieldOfStudy}
                                        desig={item.QualificationDetail.qualification}
                                    />
                                );
                            })}
                    </Grid>
                </Grid>
            </Box>


            {studentDetails?.GuardianStudent != null ?

                <Box component="div" className={classes.root} style={{marginTop:"20px"}}>
                    <Grid container spacing={8}>
                        <Grid item xs={6}>
                            {/* <h1>Student</h1> */}
                            <div>
                                <div className={classes.detailsText2} style={{ marginTop: '2rem' }}>
                                    Parent Details
                        </div>
                                <div className={classes.name}>
                                    <div className={classes.firstName}>
                                        <label htmlFor="firstName" className={classes.inputLabel}>
                                            First Name
                                </label>
                                        <input
                                            value={studentDetails?.GuardianStudent.Guardian.firstName}
                                            type="text"
                                            id="firstName"
                                            className={classes.inputBox}
                                            disabled
                                        ></input>
                                    </div>
                                    <div className={classes.lastName}>
                                        <label htmlFor="lastName" className={classes.inputLabel}>
                                            Last Name
                                </label>
                                        <input
                                            value={studentDetails?.GuardianStudent.Guardian.lastName}
                                            type="text"
                                            id="lastName"
                                            className={classes.inputBox}
                                            disabled
                                        ></input>
                                    </div>
                                </div>

                                <div className={classes.mobile}>
                                    <div className={classes.preNum}>
                                        <label htmlFor="mobile" className={classes.inputLabel}>
                                            Mobile No
                                </label>
                                        <div>
                                            <input
                                                value={studentDetails?.GuardianStudent.Guardian.phoneNumber}
                                                type="text"
                                                id="mobile"
                                                className={classes.inputBox}
                                                disabled
                                            ></input>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.location}>
                                    <label htmlFor="location" className={classes.inputLabel}>
                                        Gender
                            </label>
                                    <input
                                        value={studentDetails?.GuardianStudent.Guardian.title}
                                        type="text"
                                        id="location"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                    <div className={classes.iconBox}>
                                        {/* <LocationSearchingIcon /> */}
                                        <i className="icon-Locate"></i>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                :
                ''
                    }
        </>
    );
};

export default StudentDetail;
