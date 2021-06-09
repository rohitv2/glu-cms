import React, { Fragment } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles, Typography } from '@material-ui/core';
import { commonImg } from '../../Assets/images';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        marginBottom: '2.46875rem',
        fontFamily: 'CircularXXWeb-Book',
        cursor: 'pointer',
    },

    dateBox: {
        marginRight: '11.6875rem',
    },
    dateBox2: {},
    medText: {
        fontSize: '1.5625rem',
        height: '100%',
        marginTop: '0.5625rem',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    headerTextBox: {
        marginRight: '6.875rem',
    },
    mainBox: {
        marginTop: '6.875rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1.53125rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },

    ////

    imageBox: {
        marginRight: '9.8125rem',

        display: 'inline',
        cursor: 'pointer',
    },

    image: {
        width: '26.0625rem',
        height: '20rem',
        objectFit: 'cover',
    },

    classContainer: {
        paddingBottom: '3.125rem',
        paddingTop: '3.125rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',

        '&:first-child': {
            paddingTop: 0,
        },

        '&:last-child': {
            borderBottom: 0,
        },
    },

    ////
});

interface props {
    btnTxt: string;
    totalClasses: any;
}

const UpcomingClasses: React.FC<props> = ({ btnTxt, totalClasses }) => {
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

    const parsedData = totalClasses.reduce((acc: any, cur: any) => {
        return {
            ...acc,
            [cur.month]: acc[cur.month] ? [...acc[cur.month], cur] : [cur],
        };
    }, {});

    return (
        <div>
            <div className={classes.mainBox}>
                <Typography className={classes.headerText}>
                    <div style={{ transform: 'translate(-4px,-5px)', display: 'inline-block' }}>
                        <FiberManualRecordIcon />
                    </div>
                    Upcoming Classes
                </Typography>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/tutor/set-class'}>
                    <div className={classes.upload}>{btnTxt}</div>
                </Link>
            </div>
            <hr style={{ marginBottom: '51px' }} />
            {Object.keys(parsedData).map((month, index) => (
                <Fragment key={index}>
                    <div style={{ display: 'flex' }}>
                        <div className={classes.headerTextBox}>
                            <Typography className={classes.headerText} style={{ minWidth: '250px' }}>
                                {month}
                            </Typography>
                        </div>
                        <Grid container direction="column">
                            {parsedData[month].map((item: any, index: number) => (
                                <Grid
                                    container
                                    wrap="nowrap"
                                    key={index}
                                    className={classes.classContainer}
                                    onClick={() => handleDetails(item)}
                                >
                                    <div className={classes.imageBox}>
                                        <img
                                            src={item.coverImg || commonImg.photo}
                                            alt="sedimentary rocks"
                                            className={classes.image}
                                        />
                                    </div>
                                    <div className={classes.dateBox} onClick={() => handleDetails(item)}>
                                        <Typography className={classes.headerText}>
                                            {item.date}
                                            <br />
                                            {item.start}-
                                            <br />
                                            {item.end}
                                        </Typography>
                                        <br />
                                        <span className={classes.medText}> {item.duration}</span>
                                    </div>
                                    <div className={classes.dateBox2}>
                                        <Typography className={classes.headerText} onClick={() => handleDetails(item)}>
                                            {item.subjectName}
                                            <br />
                                            {item.sessionName}
                                        </Typography>
                                        <br />

                                        <div className={classes.medText}>0 Booked</div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <hr style={{ marginBottom: '51px', marginTop: '51px' }} />
                </Fragment>
            ))}
        </div>
    );
};

export default UpcomingClasses;
