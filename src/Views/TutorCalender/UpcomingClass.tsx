import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import  { commonImg } from '../../Assets/images';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { colors } from '../../Styles/colors';
import { useHistory } from 'react-router';
import { editableOrNot } from '../../Helper/editableOrNot';

const useStyles = makeStyles({
    imgBox: {
        display: 'flex',
        width: '100%',
    },
    img: {
        width: '8.5625rem',
        height: '6.7rem',
    },
    headText: {
        marginLeft: '3.125rem',
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        fontFamily: 'CircularXXWeb-Book',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    paraText: {
        marginLeft: '3.125rem',
        fontSize: '1.5625rem',
        width: '25rem',
        lineHeight: '1.875rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    smallBtnText: {
        color: '#5F5F5F',
        fontFamily: 'CircularXXWeb-Book',
    },
    editButton: {
        fontSize: '1.25rem',
        color: colors.darkGray,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    linkClick: {
        cursor: 'pointer',
    },
});

interface props {
    data: any;
}

const UpcomingClass: React.FC<props> = ({ data }) => {
    const classes = useStyles();
    const routes = useHistory();
    const handleRedirect = (data: any) => {
        routes.push({
            pathname: '/tutor/set-class',
            state: {
                editClass: data,
            },
        });
    };
    const redirect = (detailsData: any) => {
        routes.push({
            pathname: '/tutor/upcoming-class',
            state: {
                upcomingClassDetails: detailsData,
            },
        });
    };
    return (
        <div className={classes.imgBox}>
            <img src={data.coverImg ? data.coverImg : commonImg.photo} alt="preview" className={classes.img} />
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '19px' }}>
                    <Typography className={classes.headText}>
                        <div>
                            <span style={{ marginRight: '6px' }}>
                                <FiberManualRecordIcon />
                            </span>
                            {data.start} - {data.end}
                        </div>
                        {editableOrNot(data) && (
                            <Typography className={classes.editButton} onClick={() => handleRedirect(data)}>
                                Edit
                            </Typography>
                        )}
                    </Typography>
                </div>
                <div onClick={() => redirect(data)} className={classes.linkClick}>
                    <Typography className={classes.paraText}>{data.sessionName}</Typography>
                    <Typography className={classes.paraText}>{data.subjectName}</Typography>
                </div>
            </div>
        </div>
    );
};

export default UpcomingClass;
