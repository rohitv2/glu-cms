import React, { FC, memo, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import './style.scss';
import { ChartDataElement } from '../types';

const useStyles = makeStyles({
    root: {
        paddingTop: '4.3125rem',
    },
});

const initOptions = ({ data, xAxisLabels, xAxisCategories, legendEnabled, width, height }: ILineChart) => ({
    chart: {
        width,
        height,
        className: 'students-dashboard__chart',
        backgroundColor: 'transparent'
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
            enabled: xAxisLabels,
            style: {
                color: '#000 !important'
            },
        },
        categories: xAxisCategories,
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
        enabled: legendEnabled,
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
    series: data,
})

export interface ILineChart {
    data: ChartDataElement[];
    width?: number | string;
    height?: number | string;
    legendEnabled?: boolean;
    xAxisLabels?: boolean;
    xAxisCategories?: number[] | string[];
}

const LineChart: FC<ILineChart> = ({ data, xAxisCategories, xAxisLabels, legendEnabled, width, height }) => {
    const [options, setOptions] = useState(initOptions({ data, xAxisCategories, xAxisLabels, legendEnabled, width, height }))
    const classes = useStyles();

    useEffect(() => {
        setOptions(prevState => ({
            ...prevState,
            series: data,
        }))
    }, [data])

    useEffect(() => {
        Highcharts.charts.forEach(c => c?.reflow())
    }, [])

    return (
        <Grid container className={classes.root}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
    );
};

export default memo(LineChart);
