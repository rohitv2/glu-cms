import React, { FC, memo, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Grid from '@material-ui/core/Grid';
import { ChartDataElement } from '../types';

const initOptions = ({ chartWidth, chartHeight, column, data, xAxisLabels, xAxisCategories, barWidth }: IBarChart) => {
    return {
        chart: {
            backgroundColor: 'transparent',
            type: column ? 'column' : 'bar',
            width: chartWidth,
            height: chartHeight,
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
                    color: '#000 !important',
                },
            },
            categories: xAxisCategories,
        },
        yAxis: {
            title: {
                text: '',
            },
            labels: {
                enabled: false,
            },
        },
        plotOptions: {
            series: {
                pointWidth: barWidth,
                pointPadding: 1,
            },
        },
        legend: {
            enabled: false,
        },
        series: data,
    };
};

export interface IBarChart {
    chartWidth?: number;
    chartHeight?: number;
    column?: boolean;
    data: ChartDataElement[];
    xAxisLabels?: boolean;
    xAxisCategories?: number[] | string[];
    barWidth?: number;
}

const BarChart: FC<IBarChart> = ({ chartWidth, chartHeight, column, data, xAxisLabels, xAxisCategories, barWidth }) => {
    const [options, setOptions] = useState(
        initOptions({ chartWidth, chartHeight, column, data, xAxisLabels, xAxisCategories, barWidth })
    );

    useEffect(() => {
        setOptions(prevState => ({
            ...prevState,
            series: data
        }))
    }, [data])

    return (
        <Grid container>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
    );
};

BarChart.defaultProps = {
    barWidth: 20,
};

export default memo(BarChart);
