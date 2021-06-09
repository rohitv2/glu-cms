import React from 'react';
import { makeStyles } from '@material-ui/core';
import Reusable from './ReusableEduExp';
import { getTeacherExperienceApiCall } from '../../Redux/Actions/teacherAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    detailsText: {
        fontSize: '2.625rem',
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
        marginTop: '2.6875rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '6.0625rem',
        fontFamily: 'CircularXXWeb-Book',

        '&:hover': {
            cursor: 'pointer',
        },
    },
});

interface props {
    experience: any;
}

const Experience: React.FC<props> = ({ experience }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.detailsText}>Experience</div>
            {experience &&
                experience.length > 0 &&
                experience.map((item: any) => (
                    <Reusable
                        key={item.experienceId}
                        startDate={item.Experience.startDate.substring(0, 4)}
                        endDate={item.Experience.endDate ? item.Experience.endDate.substring(0, 4) : null}
                        institute={item.Experience.workPlace}
                        position={item.Experience.position}
                        experienceId={item.Experience.id}
                    />
                ))}
            <Link to="/tutor/tutor-edit/add-experience">
                <div style={{ textDecoration: 'none', color: 'black' }} className={classes.upload}>
                    Add more
                </div>
            </Link>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        experience: state.teacherReducer.teacherExperience,
    };
};

export default connect(mapStateToProps, { getTeacherExperienceApiCall })(Experience);
