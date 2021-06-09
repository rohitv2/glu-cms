import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import image from '../../Assets/images';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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

const UpcomingClass = () => {
    const classes = useStyles();

    return (
        <div className={classes.imgBox}>
            <img src={image.maggie} alt="preview" className={classes.img} />
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '19px' }}>
                    <Typography className={classes.headText}>
                        <span style={{ marginRight: '6px' }}>
                            <FiberManualRecordIcon />
                        </span>
                        9.00-11.30am
                    </Typography>
                </div>

                <Typography className={classes.paraText}>
                    How to structure narrative in fiction English - Sarah Swan
                </Typography>
            </div>
        </div>
    );
};

export default UpcomingClass;
