import React from 'react';
import { makeStyles } from '@material-ui/core';
import Reusable from './ReusableEduExp';
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

const Education = ({ education }:{education:any}) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.detailsText}>Education</div>
            {education &&
                education.length > 0 &&
                education.map((item: any) => (
                    <Reusable
                        key={item.qualificationId}
                        startDate={item.QualificationDetail.startDate.substring(0, 4)}
                        endDate={
                            item.QualificationDetail.endDate ? item.QualificationDetail.endDate.substring(0, 4) : null
                        }
                        institute={item.QualificationDetail.school}
                        position={item.QualificationDetail.qualification}
                        educationId={item.QualificationDetail.id}
                    />
                ))}

            <Link to="/tutor/tutor-edit/add-education">
                <div style={{ textDecoration: 'none', color: 'black' }} className={classes.upload}>
                    Add more
                </div>
            </Link>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        education: state.teacherReducer.teacherEducation,
    };
};

export default connect(mapStateToProps)(Education);
