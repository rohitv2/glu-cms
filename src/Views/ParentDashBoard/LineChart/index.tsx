import React, { FC, memo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../../../Styles/colors';
import './style.scss';

const useStyles = makeStyles({
    root: {
        paddingTop: '4.3125rem',
    },
});

const options = {
    chart: {
        className: 'students-dashboard__chart',
    },
    title: {
        text: '',
    },
    credits: {
        enabled: false,
    },
    xAxis: {
        title: {
            text: '',
        },
        labels: {
            enabled: false,
        },
        gridLineWidth: 1,
    },
    yAxis: {
        title: {
            text: '',
        },
        labels: {
            enabled: false,
        },
        gridLineWidth: 0,
    },
    legend: {
        align: 'left',
        itemDistance: 33,
        symbolPadding: 10,
        symbolWidth: 10,
        symbolRadius: 0,
        itemStyle: {
            color: '#000000',
            fontSize: '1.5625rem',
            fontWeight: 400,
            strokeDasharray: 0,
            width: 0,
            stroke: 'none',
        },
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false,
            },
        },
    },
    series: [
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
    ],
};

const LineChart: FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
    );
};

export default memo(LineChart);
