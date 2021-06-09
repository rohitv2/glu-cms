import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LineChart from '../../../../components/Charts/LineChart';
import PercentCard from '../../../../components/Cards/PercentCard';
import { colors } from '../../../../Styles/colors';

const useStyles = makeStyles({
    root: {
        paddingBottom: '6.125rem',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
    },
    titleBig: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
});

const ChartInfo: FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h4" className={classes.title}>
                        Maths Report
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h2" className={classes.titleBig}>
                        Overall Average
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container direction="column" justify="center" item xs={6}>
                    <PercentCard value="54%" dif="+3%" title="Your average" marginBottom />
                    <PercentCard value="45%" dif="-9%" title="Student average" color={colors.lightPrimary} />
                </Grid>
                <Grid item xs={6}>
                    <LineChart
                        data={[
                            {
                                name: 'Your average',
                                data: [0, 100, 70, 150, 100, 130],
                                color: colors.primary,
                                dashStyle: 'Solid',
                            },
                            {
                                name: 'Student average',
                                data: [30, 60, 50, 90, 20, 10],
                                color: colors.lightPrimary,
                                dashStyle: 'Solid',
                            },
                        ]}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(ChartInfo);
