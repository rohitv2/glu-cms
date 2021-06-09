import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Img from '../../../../Assets/images';
import { teacherStyle } from './teacherStyle';
import { useDispatch, useSelector } from 'react-redux';
import { teacherDetailSuperAdmin, approveRejectTeacher } from '../../../../Redux/Actions/superAdminActions';
import Reusable from './../../StudentList/StudentDetail/ReusableEdExp';
import SkillChip from './SkillChip';

const useStyle = makeStyles(teacherStyle as any);

const TeacherDetail = () => {
    const [open, setOpen] = React.useState(false);
    const [reason, setReason] = useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(approveRejectTeacher(teacherData.id, { key: 2, email: teacherData.email, reason: reason }, history));
        setOpen(false);
    };

    const classes = useStyle();
    const [teacherData, setTeacherData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        phoneNumber: '',
        city: '',
        document: '',
        education: '',
        experience: '',
        id: '',
        status: '',
        isVerifiedByAdmin: '',
        rejectedReason: '',
        skills: '',
    });
    const teachetDetails = useSelector((state: any) => state.superAdminReducer.teacherDetails);
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('teacherDetails')) {
            dispatch(teacherDetailSuperAdmin((location as any)?.state?.teacherDetails?.teacherId));
        }
    }, []);
    useEffect(() => {
        if (teachetDetails) {
            const data = {
                firstName: teachetDetails.firstName,
                lastName: teachetDetails.lastName,
                bio: teachetDetails.bio,
                email: teachetDetails?.User?.email,
                phoneNumber: teachetDetails.phoneNumber,
                city: teachetDetails.location,
                document: teachetDetails.document,
                experience: teachetDetails.TeacherExperiences,
                education: teachetDetails.TeacherQualifications,
                id: teachetDetails.id,
                status: teachetDetails.status,
                isVerifiedByAdmin: teachetDetails.isVerifiedByAdmin,
                rejectedReason: teachetDetails.rejectReason,
                skills: teachetDetails.Skills,
            };
            setTeacherData(data);
        }
    }, [teachetDetails]);

    return (
        <Box component="div" className={classes.root}>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <DialogContentText>Please type a reason for rejecting document</DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="reason"
                            type="textarea"
                            fullWidth
                            onChange={(e) => {
                                setReason(e.target.value);
                            }}
                            value={reason}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <h1>Document Status</h1>
                    <div className={classes.documentContainer}>
                        {teacherData.document ? (
                            <img className={classes.image2} src={teacherData.document} alt="tutor" />
                        ) : (
                            'No documents uploaded'
                        )}
                    </div>
                    {teacherData.status == 'Approved' ? (
                        <div
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                                marginTop: '3rem',
                                marginRight: '1rem',
                                backgroundColor: '#bedebe',
                            }}
                            className={classes.upload}
                        >
                            Approved
                        </div>
                    ) : (
                        <div
                            style={{ textDecoration: 'none', color: 'black', marginTop: '3rem', marginRight: '1rem' }}
                            className={classes.upload}
                            onClick={() => {
                                dispatch(
                                    approveRejectTeacher(teacherData.id, { key: 1, email: teacherData.email }, history)
                                );
                            }}
                        >
                            Approve
                        </div>
                    )}

                    {teacherData.status == 'Rejected' ? (
                        <div
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                                marginTop: '3rem',
                                backgroundColor: '#f35454',
                            }}
                            className={classes.upload}
                        >
                            Rejected
                        </div>
                    ) : (
                        <div
                            style={{ textDecoration: 'none', color: 'black', marginTop: '3rem' }}
                            className={classes.upload}
                            onClick={() => {
                                handleClickOpen();
                            }}
                        >
                            Reject
                        </div>
                    )}
                    {teacherData.isVerifiedByAdmin && teacherData.status === 'Rejected' ? (
                        <div>
                            <div style={{ marginTop: '3rem' }} className={classes.bioText}>
                                Reason
                            </div>
                            <TextareaAutosize
                                id="bio"
                                value={teacherData.rejectedReason}
                                rowsMin={5}
                                className={classes.textareaClass}
                                disabled
                            />
                        </div>
                    ) : null}
                </Grid>

                <Grid item xs={6}>
                    <div className={classes.details}>
                        <h1>Tutor Details</h1>
                        <div className={classes.bio}>
                            <div className={classes.bioText}>Bio</div>
                            <TextareaAutosize
                                id="bio"
                                value={teacherData.bio}
                                rowsMin={5}
                                aria-label="minimum height"
                                className={classes.textareaClass}
                                disabled
                            />
                        </div>

                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="firstName" className={classes.inputLabel}>
                                    First Name
                                </label>
                                <input
                                    value={teacherData.firstName}
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
                                    value={teacherData.lastName}
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
                                value={teacherData.email}
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
                                        value={teacherData.phoneNumber ? teacherData.phoneNumber : 'N/A'}
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
                                value={teacherData.city ? teacherData.city : 'N/A'}
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
                        <div className={classes.detailsText} style={{ marginTop: '6rem' }}>
                            Education
                        </div>
                        {teacherData.education instanceof Array && teacherData.education.length > 0 ? (
                            teacherData.education.map((item: any) => {
                                return (
                                    <Reusable
                                        startDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                        endDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                        institute={item.QualificationDetail.school}
                                        position={item.QualificationDetail.fieldOfStudy}
                                        desig={item.QualificationDetail.qualification}
                                    />
                                );
                            })
                        ) : (
                            <span style={{ marginTop: '2rem' }}>No education data available</span>
                        )}

                        <div className={classes.detailsText} style={{ marginTop: '6rem' }}>
                            Experience
                        </div>
                        {teacherData.experience instanceof Array && teacherData.experience.length > 0 ? (
                            teacherData.experience.map((item: any) => {
                                return (
                                    <Reusable
                                        startDate={item.Experience.startDate.split('T')[0].split('-')[0]}
                                        endDate={item.Experience.startDate.split('T')[0].split('-')[0]}
                                        institute={item.Experience.workPlace}
                                        position={item.Experience.position}
                                        desig={item.Experience.department}
                                    />
                                );
                            })
                        ) : (
                            <span style={{ marginTop: '4rem' }}>No experience data available</span>
                        )}
                    </div>

                    <div className={classes.detailsText} style={{ marginTop: '6rem' }}>
                        Skills
                    </div>
                    {teacherData.skills instanceof Array && teacherData.skills.length > 0
                        ? teacherData.skills.map((skill: any) => {
                              return <SkillChip skill={skill.skillName} />;
                          })
                        : 'No skills data available'}
                </Grid>
            </Grid>
        </Box>
    );
};

export default TeacherDetail;
