import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import image from '../../Assets/images';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { flexibleCompare } from '@fullcalendar/react';

const useStyles = makeStyles({
    imgBox: {
        marginTop: '5rem',
        display: 'flex',
        width: '100%',
    },
    img: {
        width: '18.81rem',
    },
    headText: {
        marginLeft: '3.125rem',
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
});

const LiveClass = () => {
    const classes = useStyles();

    return (
        <div className={classes.imgBox}>
            <img src={image.maggie} alt="preview" className={classes.img} />
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '130px' }}>
                    <Typography className={classes.headText}>
                        <span style={{ marginRight: '4px' }}>
                            <FiberManualRecordIcon />
                        </span>
                        9.00-11.30am
                    </Typography>
                    <a href="#" className={classes.smallBtnText}>
                        Edit
                    </a>
                </div>

                <Typography className={classes.paraText}>
                    How to structure narrative in fiction English - Sarah Swan
                </Typography>
            </div>
        </div>
    );
};

export default LiveClass;
