import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { connect } from 'react-redux';
import { getTeacherExperienceById, editExperienceApiCall } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router-dom';
import useMenuList from '../../Hooks/useMenuList';

const useStyles = makeStyles({
    footer: {
        marginTop: '5rem',
        position: 'absolute',
        top: '213rem',
    },
    mainPadding: {
        padding: '3.125rem',
        paddingBottom: '0',
        marginBottom: '0.625rem',
    },
    topMarg: {
        marginTop: '10rem',
        marginBottom: '3rem',
    },
    mainGrid: {
        position: 'relative',
    },
    details: {
        marginBottom: '5.3125rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    detailsText: {
        fontSize: '2.625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    name: {},
    firstName: {
        width: '48%',
        display: 'inline-block',
        marginRight: '4%',
        fontFamily: 'CircularXXWeb-Book',
    },
    lastName: {
        width: '48%',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    inputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        fontFamily: 'CircularXXWeb-Book',

        height: '3.19rem',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
    inputLabel: {
        display: 'block',
        marginTop: '1.9375rem',
        fontSize: '1.5625rem',
        font: 'normal normal normal 25px/30px CircularXXSub-RegularSubset',
        marginBottom: '0',
        fontFamily: 'CircularXXWeb-Book',
    },
    email: {
        marginTop: '2.5625rem',
        width: '100%',
        fontFamily: 'CircularXXWeb-Book',
    },
    mobile: {
        marginTop: '2.5625rem',
    },
    preNum: {
        width: '30%',
        display: 'inline-block',
        marginRight: '3%',
    },
    mainNum: {
        width: '67%',
        display: 'inline-block',
    },
    selectInputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        letterSpacing: '0px',
        height: '3.19rem',
        backgroundColor: 'transparent',
        fontFamily: 'CircularXXWeb-Book',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
    location: {
        marginTop: '2.5625rem',
        position: 'relative',
    },
    password: {
        marginTop: '2.5625rem',
        position: 'relative',
        fontFamily: 'CircularXXWeb-Book',
    },
    iconBox: {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translate(-1.1rem, 1.2rem)',
    },
    iconBox2: {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translate(-1.1rem, -0.5rem)',
        fontFamily: 'CircularXXWeb-Book',
    },
    reset: {
        transform: 'translate(-2rem, -1.5rem)',
        fontFamily: 'CircularXXWeb-Book',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '6.0625rem',
        fontFamily: 'CircularXXWeb-Book',

        '&:hover': {
            cursor: 'pointer',
        },
    },
    inputBoxDate: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '1.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        fontFamily: 'CircularXXWeb-Book',

        height: '3.19rem',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
});

interface props {
    match: any;
    getTeacherExperienceById:any;
    editExperienceApiCall:any;
}

const EditFormExp: React.FC<props> = ({ match, getTeacherExperienceById, editExperienceApiCall }) => {
    const menu = useMenuList('tutor');
    const classes = useStyles();

    const history = useHistory();

    const [formData, setFormData] = useState({
        workPlace: null,
        position: null,
        department: null,
        startDate: null,
        endDate: null,
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        const callFunc = async () => {
            const data = await getTeacherExperienceById(match.params.id);
            setFormData(() => {
                return {
                    workPlace: data.workPlace,
                    position: data.position,
                    department: data.department,
                    startDate: data.startDate.split('T')[0],
                    endDate: data.endDate.split('T')[0],
                };
            });
        };
        callFunc();
    }, []);

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <Grid container className={classes.mainPadding} spacing={6}>
                <Grid item md={6}>
                    <div className={classes.detailsText}>Edit Profile</div>
                </Grid>

                <Grid item md={6}>
                    <div className={classes.details}>
                        <div className={classes.detailsText}>Experience</div>
                        <div className={classes.email}>
                            <label htmlFor="workPlace" className={classes.inputLabel}>
                                Workplace
                            </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={formData.workPlace}
                                type="text"
                                id="workPlace"
                                className={classes.inputBox}
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="position" className={classes.inputLabel}>
                                Position
                            </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={formData.position}
                                type="text"
                                id="position"
                                className={classes.inputBox}
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="department" className={classes.inputLabel}>
                                Department
                            </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={formData.department}
                                type="text"
                                id="department"
                                className={classes.inputBox}
                            ></input>
                        </div>
                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="startDate" className={classes.inputLabel}>
                                    Start Date
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={formData.startDate}
                                    type="date"
                                    id="startDate"
                                    className={classes.inputBoxDate}
                                ></input>
                            </div>
                            <div className={classes.lastName}>
                                <label htmlFor="endDate" className={classes.inputLabel}>
                                    End Date
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={formData.endDate}
                                    type="date"
                                    id="endDate"
                                    className={classes.inputBoxDate}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            editExperienceApiCall(match.params.id, formData, history);
                        }}
                        style={{ textDecoration: 'none', color: 'black' }}
                        className={classes.upload}
                    >
                        Save
                    </div>
                </Grid>
            </Grid>
            <div className="commonFooter">
                <PageFooter />
            </div>
        </NavigationMenu>
    );
};

export default connect(null, { getTeacherExperienceById, editExperienceApiCall })(EditFormExp);
