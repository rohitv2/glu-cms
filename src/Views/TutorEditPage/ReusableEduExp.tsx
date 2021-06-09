import React from 'react';
import { makeStyles } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';
import { deleteTeacherEducationApiCall, deleteTeacherExperienceApiCall } from '../../Redux/Actions/teacherAction';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

const useStyles = makeStyles({
    details: {
        width: '100%',
        position: 'relative',
    },
    labelText: {
        display: 'inline-block',
        marginTop: '1.9375rem',
        fontSize: '1.5625rem',
        font: 'normal normal normal 25px/30px CircularXXSub-RegularSubset',
        marginBottom: '0',
        fontFamily: 'CircularXXWeb-Book',
    },
    btnContainer: {
        display: 'inline-block',
        position: 'absolute',
        fontFamily: 'CircularXXWeb-Book',
        right: '0',
        top: '2rem',
    },
    infoText: {
        fontSize: '2.265rem',
        width: '23.81rem',
        lineHeight: 1,
        marginTop: '0.5625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    hr: {
        marginTop: '2.5rem',
    },
});
interface props {
    startDate: string;
    endDate: any;
    institute: string;
    position: string;
    educationId?: number;
    experienceId?: number;
    deleteTeacherEducationApiCall?: () => void;
    deleteTeacherExperienceApiCall?: () => void;
}

const ReusableEduExp: React.FC<props> = ({
    startDate,
    endDate,
    institute,
    position,
    experienceId,
    educationId,
    deleteTeacherEducationApiCall,
    deleteTeacherExperienceApiCall,
}) => {
    const classes = useStyles();

    const deleteFunction = ():any => {
        if (educationId) {
            return {
                func: deleteTeacherEducationApiCall,
                data: educationId,
            };
        }
        if (experienceId) {
            return {
                func: deleteTeacherExperienceApiCall,
                data: experienceId,
            };
        }
    };
    const executeDelete: () => object = deleteFunction();

    return (
        <div>
            <div className={classes.details}>
                <div className={classes.labelText}>{endDate ? `${startDate}-${endDate}` : `${startDate}-Now`}</div>
                <div className={classes.btnContainer}>
                    {educationId && (
                        <Link to={`/tutor/tutor-edit/education-edit-form/${educationId}`}>
                            <SmallTextButton text="Edit" />
                        </Link>
                    )}

                    {experienceId && (
                        <Link to={`/tutor/tutor-edit/experience-edit-form/${experienceId}`}>
                            <SmallTextButton text="Edit" />
                        </Link>
                    )}

                    <div style={{ marginLeft: '2rem', display: 'inline-block' }}>
                        <SmallTextButton
                            onClick={() => {
                                executeDelete.func(executeDelete.data);
                            }}
                            text="Delete"
                        />
                    </div>
                </div>
                <div className={classes.infoText}>
                    {institute}
                    <br />
                    {position}
                </div>
            </div>
            <hr className={classes.hr} />
        </div>
    );
};

export default connect(null, { deleteTeacherEducationApiCall, deleteTeacherExperienceApiCall })(ReusableEduExp);
