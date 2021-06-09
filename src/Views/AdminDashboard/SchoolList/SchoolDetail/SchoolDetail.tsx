import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { studentStyle } from './studentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { schoolDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import CardStatus from './CardStatus';
import { v4 as uuidv4 } from 'uuid';

const useStyle = makeStyles(studentStyle as any);

const StudentDetail = () => {
    const classes = useStyle();
    const [schoolData, setSchoolData] = useState({
        schoolName: '',
        profile: '',
        userId: '',
        phoneNumber: '',
        location: '',
        website: '',
        email: '',
        facebookUrl: '',
        twitterUrl: '',
        instagramUrl: '',
        linkedInUrl: '',
        youtubeUrl: '',
        bio: '',
        studentCount: '',
        guardianCount: '',
        teacherCount: '',


    });
    const schoolDetails = useSelector((state: any) => state.superAdminReducer.schoolDetails);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('schoolDetails')) {
            dispatch(schoolDetailSuperAdmin((location as any)?.state?.schoolDetails?.id));
        }
    }, []);
    useEffect(() => {
        if (schoolDetails) {
            const data = {
                schoolName: schoolDetails.school && schoolDetails.school.schoolName,
                profile: schoolDetails.school && schoolDetails.school.User.profile,
                userId: schoolDetails.school && schoolDetails.school.userId,
                phoneNumber: schoolDetails.school && schoolDetails.school.phoneNumber,
                location: schoolDetails.school && schoolDetails.school.location,
                website: schoolDetails.school && schoolDetails.school.website,
                email: schoolDetails.school && schoolDetails.school.User.email,
                facebookUrl: schoolDetails.school && schoolDetails.school.facebookUrl,
                twitterUrl: schoolDetails.school && schoolDetails.school.twitterUrl,
                instagramUrl: schoolDetails.school && schoolDetails.school.instagramUrl,
                linkedInUrl: schoolDetails.school && schoolDetails.school.linkedInUrl,
                youtubeUrl: schoolDetails.school && schoolDetails.school.youtubeUrl,
                bio: schoolDetails.school && schoolDetails.school.bio,
                studentCount: schoolDetails.studentCount,
                guardianCount: schoolDetails.guardianCount,
                teacherCount: schoolDetails.teacherCount,
            };
            setSchoolData(data);
        }
    }, [schoolDetails]);

    return (
        <Box component="div" className={classes.root}>
         <Grid container>
                <Grid item xs={6}>
                    <div style={{paddingLeft: '30px'}}>
                        {
                            schoolData.profile
                            ?
                            <img src={schoolData.profile} alt="tutor" style={{marginTop: "7rem"}} className={classes.image} />
                            :
                            ""
                        }
                        <div className={classes.detailsText}>School Details</div>
                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                School Name
                            </label>
                            <input
                                value={schoolData.schoolName}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Location
                            </label>
                            <input
                                value={schoolData.location}
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
                                        value={schoolData.phoneNumber}
                                        type="text"
                                        id="mobile"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Website
                            </label>
                            <input
                                value={schoolData.website}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Email
                            </label>
                            <input
                                value={schoolData.email}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Facbook
                            </label>
                            <input
                                value={schoolData.facebookUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Twitter
                            </label>
                            <input
                                value={schoolData.twitterUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Instagram
                            </label>
                            <input
                                value={schoolData.instagramUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                LinkedIn
                            </label>
                            <input
                                value={schoolData.linkedInUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Youtube
                            </label>
                            <input
                                value={schoolData.youtubeUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                <div className={classes.detailsText}></div>
                <div className="row row__margin" style={{paddingLeft: "100px"}}>
                        <div key={uuidv4()} style={{margin:"10px",
                            boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}} className="col-md-9 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading="Students" total={schoolData.studentCount} />
                            </div>
                        </div>

                        <div key={uuidv4()} style={{margin:"10px",
                            boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}} className="col-md-9 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading="Teachers" total={schoolData.teacherCount} />
                            </div>
                        </div>

                        <div key={uuidv4()} style={{margin:"10px",
                            boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}} className="col-md-9 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading="Parents" total={schoolData.guardianCount} />
                            </div>
                        </div>
                </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentDetail;
