import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import image from '../../Assets/images';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        height: '9.125rem',
        fontFamily: 'CircularXXWeb-Book',
        cursor: "pointer",
    },
    dateBox: {
        marginRight: '9.8125rem',
    },
    medText: {
        fontSize: '1.5625rem',
        height: '2.0625rem',
        marginTop: '0.5625rem',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    headerTextBox: {
        marginRight: '9.1875rem',
    },
    imageBox: {
        marginRight: '9.8125rem',
        marginBottom: '6.25rem',
        display: 'inline',
        cursor: "pointer",
    },
});

interface props {
    nextClass?: any;
}

const Header: React.FC<props> = ({ nextClass }) => {
    const classes = useStyles();
    const routes = useHistory();

    const handleDetails = (data: any) => {
        routes.push({
            pathname: '/tutor/upcoming-class',
            state: {
                upcomingClassDetails: data,
            },
        });
    };
    return (
        <div style={{ display: 'flex', backgroundColor: '#F7F7F7' }}>
            <div className={classes.headerTextBox}>
                <Typography className={classes.headerText}>Next</Typography>
            </div>
            {nextClass && (
                <>
                    <div className={classes.imageBox} onClick={() => handleDetails(nextClass)}>
                            <img
                                src={nextClass.coverImg || image.tutorDashboard}
                                alt="sedimentary rocks"
                                width="535px"
                                height="411px"
                                style={{ objectFit: 'cover' }}
                            />
                    </div>
                    <div className={classes.dateBox} onClick={() => handleDetails(nextClass)}>
                        <Typography className={classes.headerText}>
                            {nextClass.date}
                            <br />
                            {nextClass.start}-
                            <br />
                            {nextClass.end}
                        </Typography>
                        <br />
                        <span className={classes.medText}>{nextClass.duration}</span>
                    </div>
                    <div>
                            <Typography className={classes.headerText} onClick={() => handleDetails(nextClass)}>
                                {nextClass.subjectName}
                                <br />
                                {nextClass.sessionName}
                            </Typography>
                         <br />

                        <div className={classes.medText}>{nextClass.booked}</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;
