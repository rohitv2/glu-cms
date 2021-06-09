import React from 'react';
import { makeStyles } from '@material-ui/core';

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
    desig: string;
}

const ReusableEduExp: React.FC<props> = ({ startDate, endDate, institute, position, desig }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.details}>
                <div className={classes.labelText}>{endDate ? `${startDate}-${endDate}` : `${startDate}-Now`}</div>

                <div className={classes.infoText}>
                    {institute}
                    <br />
                    {position}
                    <br />
                    {desig}
                </div>
            </div>
            <hr className={classes.hr} />
        </div>
    );
};

export default ReusableEduExp;
