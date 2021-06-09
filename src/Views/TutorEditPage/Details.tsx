import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, TextareaAutosize } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';
import { styles } from './muiStyle';
import { spinner } from '../../Redux/Actions/uiAction';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateTutorDetailAction,
    uploadUserProfilePhotoAction,
    getTeacherDetails,
} from '../../Redux/Actions/teacherAction';
import commonImg from '../../Assets/images';

import Axios from 'axios';

const useStyles = makeStyles((styles as any));

const Details: React.FC = () => {
    const tutorDetail = useSelector((state: any) => state.teacherReducer.teacherData);
    const dispatch = useDispatch();
    const classes = useStyles();
    let cc: any;
    let phNo: any;

    useEffect(() => {
        dispatch(getTeacherDetails());
    }, []);

    useEffect(() => {
        setFormData({
            firstName: tutorDetail ? tutorDetail.firstName : '',
            lastName: tutorDetail ? tutorDetail.lastName : '',
            email: tutorDetail ? tutorDetail.User.email : '',
            countryCode: tutorDetail ? cc : '',
            phoneNumber: tutorDetail ? phNo : '',
            location: tutorDetail ? tutorDetail.location : '',
            bio: tutorDetail ? tutorDetail.bio : '',
            profile: tutorDetail ? tutorDetail.User.profile : '',
        });
    }, [tutorDetail]);

    if (tutorDetail && tutorDetail.phoneNumber?.length === 14) {
        cc = tutorDetail.phoneNumber.substring(0, 4);
        phNo = tutorDetail.phoneNumber.substring(4);
    } else if (tutorDetail && tutorDetail.phoneNumber?.length === 13) {
        cc = tutorDetail.phoneNumber.substring(0, 3);
        phNo = tutorDetail.phoneNumber.substring(3);
    } else {
        phNo = tutorDetail && tutorDetail.phoneNumber;
    }

    const [formData, setFormData] = useState({
        firstName: tutorDetail ? tutorDetail.firstName : '',
        lastName: tutorDetail ? tutorDetail.lastName : '',
        email: tutorDetail ? tutorDetail.User.email : '',
        countryCode: tutorDetail ? cc : '',
        phoneNumber: tutorDetail ? phNo : '',
        location: tutorDetail ? tutorDetail.location : '',
        bio: tutorDetail ? tutorDetail.bio : '',
        profile: tutorDetail ? tutorDetail.User.profile : '',
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const [file, setFile] = useState<any>();
    const [fileName, setFileName] = useState(
        tutorDetail && formData.profile
            ? formData.profile.split('/')[formData.profile.split('/').length - 1]
            : 'Max size 50MB'
    );
    const [putUrl, setPutUrl] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const [change, setChange] = useState(false);

    return (
        <div className={classes.details}>
            <img
                src={
                    file?.name
                        ? URL.createObjectURL(file)
                        : formData.profile
                        ? formData.profile
                        : commonImg.glasswatergirl
                }
                alt="tutor"
                className={classes.image}
            />
            <div className={classes.addPhotoBox}>
                <Typography className={classes.addPhotoText}>Add a photo to your account</Typography>
                {/* <input type="file" name="fileToUpload" id="fileToUpload"></input> */}
                <input
                    onChange={async (e: any) => {
                        setFileName(e.target.files[0].name);
                        setFile(e.target.files[0]);
                        const url: any = await dispatch(uploadUserProfilePhotoAction(e.target.files[0].name));
                        setChange(true);
                        url && setProfileUrl(url?.url ? url.fileName : null);
                        url && setPutUrl(url?.url ? url.url : null);
                        url &&
                            setFormData({
                                ...formData,
                                profile: url.url.split('?')[0],
                            });
                    }}
                    style={{ display: 'none' }}
                    type="file"
                    id="file"
                ></input>
                <label className={classes.upload} htmlFor="file">
                    Upload
                </label>
                <div className={classes.smallText}>{fileName}</div>
            </div>
            <div className={classes.bio}>
                <div className={classes.bioText}>Bio</div>
                <TextareaAutosize
                    onChange={(e) => handleChange(e)}
                    id="bio"
                    value={formData.bio}
                    rowsMin={5}
                    className={classes.textareaClass}
                />
            </div>
            <div className={classes.detailsText}>Your Details</div>
            <div className={classes.name}>
                <div className={classes.firstName}>
                    <label htmlFor="firstName" className={classes.inputLabel}>
                        First Name
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        value={formData.firstName}
                        type="text"
                        id="firstName"
                        className={classes.inputBox}
                    ></input>
                </div>
                <div className={classes.lastName}>
                    <label htmlFor="lastName" className={classes.inputLabel}>
                        Last Name
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        value={formData.lastName}
                        type="text"
                        id="lastName"
                        className={classes.inputBox}
                    ></input>
                </div>
            </div>

            <div className={classes.email}>
                <label htmlFor="email" className={classes.inputLabel}>
                    Email
                </label>
                <input
                    onChange={(e) => handleChange(e)}
                    value={formData.email}
                    type="text"
                    id="email"
                    className={classes.inputBox}
                    readOnly
                ></input>
            </div>

            <div className={classes.mobile}>
                <div className={classes.preNum}>
                    <label htmlFor="countryCode" className={classes.inputLabel}>
                        Mobile No
                    </label>
                    <select
                        onChange={(e) => handleChange(e)}
                        value={formData.countryCode}
                        id="countryCode"
                        name="countryc"
                        className={classes.selectInputBox}
                    >
                        <option value="+971">+971</option>
                        <option value="+961">+961</option>
                        <option value="+951">+951</option>
                        <option value="+941">+941</option>
                    </select>
                </div>
                <div className={classes.mainNum}>
                    <input
                        onChange={(e) => handleChange(e)}
                        value={formData.phoneNumber}
                        type="number"
                        id="phoneNumber"
                        className={classes.inputBox}
                    ></input>
                </div>
            </div>

            <div className={classes.location}>
                <label htmlFor="location" className={classes.inputLabel}>
                    Location
                </label>
                <input
                    onChange={(e) => handleChange(e)}
                    value={formData.location}
                    type="text"
                    id="location"
                    className={classes.inputBox}
                ></input>
                <div className={classes.iconBox}>
                    {/* <LocationSearchingIcon /> */}
                    <i className="icon-Locate"></i>
                </div>
            </div>

            <div className={classes.password}>
                <label htmlFor="password" className={classes.inputLabel}>
                    Password
                </label>
                <input disabled type="password" id="password" className={classes.inputBox}></input>
                <div className={classes.iconBox2}>
                    <div className={classes.reset}>
                        <SmallTextButton text="Reset" />
                    </div>

                    {/* <VisibilityOffIcon /> */}
                    <i className="icon-Invisible"></i>
                </div>
            </div>
            <div
                onClick={async () => {
                    dispatch(spinner(true));
                    if (change) {
                        const resOfPut = await Axios.put(`https://cors-anywhere.herokuapp.com/${putUrl}`, file, {
                            headers: {
                                'x-amz-acl': 'public-read',
                                'Content-Type': 'image/jpeg',
                            },
                        });
                        if (resOfPut.status === 200) {
                           await Axios.put(
                                `https://glu-stage.antino.io/api/v1/file-upload/uploads`,
                                { fileName: profileUrl },
                                {
                                    headers: {
                                        Authorization: JSON.parse((localStorage as any).getItem('auth')).access_token,
                                    },
                                }
                            );
                        }
                    }

                    dispatch(updateTutorDetailAction(formData));
                }}
                style={{ textDecoration: 'none', color: 'black', marginTop: '3rem' }}
                className={classes.upload}
            >
                Save
            </div>
        </div>
    );
};

export default Details;
