import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { commonImg } from '../../Assets/images';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { colors } from '../../Styles/colors';
import { useHistory } from 'react-router';
import moment from 'moment';
import { editableOrNot } from '../../Helper/editableOrNot';

const useStyles = makeStyles({
    imgBox: {
        marginTop: '5rem',
        display: 'flex',
        width: '100%',
    },
    img: {
        width: '18.81rem',
        objectFit: 'cover',
    },
    headText: {
        marginLeft: '3.125rem',
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    headTextNoMl: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        fontFamily: 'CircularXXWeb-Book',
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
    data?: any;
}

const LiveClass: React.FC<props> = ({ data }) => {
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
            {data.hasOwnProperty('start') ? (
                <>
                    <img src={data.coverImg ? data.coverImg : commonImg.photo} alt="preview" className={classes.img} />
                    <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '130px' }}>
                            <Typography className={classes.headText}>
                                <span style={{ marginRight: '4px' }}>
                                    <FiberManualRecordIcon />
                                </span>
                                {data.start}-{data.end}
                            </Typography>
                            {editableOrNot(data) && (
                                <Typography className={classes.editButton} onClick={() => handleRedirect(data)}>
                                    Edit
                                </Typography>
                            )}
                        </div>
                        <div onClick={() => redirect(data)} className={classes.linkClick}>
                            <Typography className={classes.paraText}>{data.sessionName}</Typography>
                            <Typography className={classes.paraText}>{data.subjectName}</Typography>
                        </div>
                    </div>
                </>
            ) : (
                <Typography className={classes.headTextNoMl}>No data found</Typography>
            )}
        </div>
    );
};

export default LiveClass;
