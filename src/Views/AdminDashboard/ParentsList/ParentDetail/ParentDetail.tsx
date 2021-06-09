import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { studentStyle } from './studentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { parentDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import commonImg from '../../../../Assets/images';
import Reusable from './ReusableEdExp';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { studentDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import { useHistory } from 'react-router-dom';



const useStyle = makeStyles(studentStyle as any);
const StudentDetail = () => {
    const classes = useStyle();
    const [childrenMenuItemClicked, setMenuItemClicked] = React.useState(false);
    const [childrenMenuItem, setChildrenMenuItem] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const routes = useHistory();
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        phoneNumber: '',
        city: '',
        education: '',
        image: '',
        isEmailVerified: '',
        studentDetails: '',
    });

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    const [parentData, setParentData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        children: '',
    });
    const studentDetailsParent = useSelector((state: any) => state.superAdminReducer.studentDetailsParent);
    const studentDetails = useSelector((state: any) => state.superAdminReducer.studentDetails);

    const location = useLocation();
    const dispatch = useDispatch();
    const handleChange = (event:any) => {
        
        dispatch(studentDetailSuperAdmin(event.target.value));
         setMenuItemClicked(true);
         setChildrenMenuItem(event.target.value);
    };
  
    useEffect(() => {
        if (studentDetails) {
            const data = {
                firstName: studentDetails.firstName,
                lastName: studentDetails.lastName,
                bio: studentDetails.bio,
                email: studentDetails?.User?.email,
                phoneNumber: studentDetails.phoneNumber,
                city: studentDetails.location,
                education: studentDetails.StudentQualifications,
                image: studentDetails.User.profile,
                isEmailVerified: studentDetails.User.isEmailVerified,
                parentStatus: studentDetails.parentStatus
            };
            setStudentData(data);
        }
    }, [studentDetails]);

    useEffect(() => {
        if (location?.state?.hasOwnProperty('studentDetailsParent')) {
            dispatch(parentDetailSuperAdmin((location as any)?.state?.studentDetailsParent?.guardianId));
        }
    }, []);

    useEffect(() => {
        if (studentDetailsParent) {
            // alert(JSON.stringify(studentDetailsParent.GuardianStudents))
            const data = {
                firstName: studentDetailsParent.firstName,
                lastName: studentDetailsParent.lastName,
                email: studentDetailsParent?.User?.email,
                phoneNumber: studentDetailsParent.phoneNumber,
                city: studentDetailsParent.location,
                GuardianStudents: studentDetailsParent.GuardianStudents,
            };
            setParentData(data);
        }
    }, [studentDetailsParent]);


    return (
    <>
        <Box component="div" className={classes.root}>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <h1>Parent Details</h1>
                    <div>
                        {/* <img src={commonImg.scaffgirl} alt="tutor" className={classes.image} /> */}
                        {/* <div className={classes.detailsText}>Student Details</div> */}
                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="firstName" className={classes.inputLabel}>
                                    First Name
                                </label>
                                <input
                                    value={parentData.firstName}
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
                                    value={parentData.lastName}
                                    type="text"
                                    id="lastName"
                                    className={classes.inputBox}
                                    disabled
                                ></input>
                            </div>
                        </div>

                        <div className={classes.location}>
                            <label htmlFor="location" className={classes.inputLabel}>
                                Location
                            </label>
                            <input
                                value={parentData.city ? parentData.city : 'N/A'}
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

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Email
                            </label>
                            <input
                                value={parentData.email}
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
                                        value={parentData.phoneNumber}
                                        type="text"
                                        id="mobile"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>

<Box component="div" className={classes.root} style={{marginTop: "30px"}}>
<Grid container spacing={8}>
    <Grid item xs={6}>
        <h1>Child Details</h1>
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select Child</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={childrenMenuItem}
          onChange={handleChange}
        >
          {
          parentData.GuardianStudents && parentData.GuardianStudents.map((children:any) => (
                <MenuItem value={children.studentId}>{children.Student.firstName}</MenuItem>

              ))
          }
        </Select>
      </FormControl>
        </div>
    </Grid>
    {
      childrenMenuItemClicked
      ?  
  
    // <Box component="div" className={classes.root}>
            <Grid container spacing={8} style={{padding: "40px"}}>
                <Grid item xs={6}>
                    {/* <h1>Student</h1> */}
                    <div>
                        {/* <img
                            src={
                                studentDetails && studentDetails.User.profile
                                    ? studentDetails.User.profile
                                    : commonImg.scaffgirl
                            }
                            alt="tutor"
                            className={classes.image}
                        /> */}

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Parent Status
                            </label>
                            <input
                                value={studentData.parentStatus}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Email Verified Status
                            </label>
                            <input
                                value={studentData.isEmailVerified === true ? "Verified" : "Not Verified"}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
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
                {
                    studentData.education.length > 0
                    ?
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
                                />
                            );
                        })}
                </Grid>
                :
                ""

                }

            </Grid>
        // </Box>
        :
        ""
          }
</Grid>
</Box>
</>
    );
};

export default StudentDetail;
