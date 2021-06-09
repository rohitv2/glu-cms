import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import WhiteCard from '../../../components/Cards/WhiteCard';
import WhiteCardParentHomeWork from '../../../components/Cards/WhiteCardParentHomeWork';
import WhiteCardParentReport from '../../../components/Cards/WhiteCardParentReport';

import WhiteCardParentTimeTable from '../../../components/Cards/WhiteCardParentTimeTable';
import WhiteCardParentSchoolInfo from '../../../components/Cards/WhiteCardParentSchoolInfo';

import LineChart from '../LineChart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
    },
});

const School: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container className={classes.container}>
                <WhiteCardParentReport
                    size={6}
                    title={'Class Reports\nMar-Aug'}
                    titleRightLink="See reports"
                    titleRightLinkTo="/parent/reports"
                    content={<LineChart />}
                />
              {/* <Link to="/parent/school-table"> */}
                <WhiteCardParentTimeTable size={3} title="School Timetable" description="Classes" value="5" />
            {/* </Link> */}
                <WhiteCardParentSchoolInfo size={3} title="School Info" description="Secondary" value="Dubai, UAE" titleRightLinkTo="/parent/school-info"/>
            </Grid>
            <Grid container className={classes.container}>
                <WhiteCardParentHomeWork size={3} title="Homework" description="Assignment" value="34" />
                <WhiteCard size={3} title="Recommended" description="Total" value="12" />
                <WhiteCard
                    size={6}
                    bigTitle
                    title={'Thursday 30th\nJuly\n2020'}
                    titleRightLink="See calendar"
                    titleRightLinkTo="/students/"
                />
            </Grid>
        </Grid>
    );
};

export default School;
