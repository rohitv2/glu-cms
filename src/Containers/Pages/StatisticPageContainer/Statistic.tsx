import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import PercentCard from '../../../components/Cards/PercentCard';
import { colors } from '../../../Styles/colors';
import LineChart from '../../../components/Charts/LineChart';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Statistic as IStatisticData } from '../types';

const useStyles = makeStyles({
    percentCardsContainer: {
        flexGrow: 1,
    },
});

interface IStatistic {
    title: string;
    data: IStatisticData;
}

const Statistic: FC<IStatistic> = ({ title, data }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container direction="column" item xs={5}>
                <Grid container direction="column">
                    <TitlePrimary>{title}</TitlePrimary>
                </Grid>
                <Grid container alignItems="center" className={classes.percentCardsContainer}>
                    <Grid container direction="column">
                        <PercentCard
                            title="Monthly students"
                            value={data.studentsAverage}
                            dif={data.studentsDifference}
                            color={colors.primary}
                            marginBottom
                        />
                        <PercentCard
                            title="Monthly sales"
                            value={data.salesAverage}
                            dif={`AED ${data.salesDifference}`}
                            color="rgba(0, 0, 0, 0.25)"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column" item xs={7}>
                <LineChart
                    height={250}
                    data={[
                        {
                            data: data.studentsChartData,
                            color: colors.primary,
                            dashStyle: 'Solid',
                        },
                        {
                            data: data.salesChartData,
                            color: 'rgba(0, 0, 0, 0.25)',
                            dashStyle: 'Solid',
                        },
                    ]}
                    xAxisLabels
                    xAxisCategories={['April', 'May', 'June']}
                />
            </Grid>
        </Grid>
    )
}

export default Statistic;
