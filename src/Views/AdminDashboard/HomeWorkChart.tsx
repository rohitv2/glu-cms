import React from 'react';
import { Typography } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { colors } from '../../Styles/colors';


const options = {
    chart: {
        type: 'column',
        height: 204,
        scrollablePlotArea: {
            minWidth: 300,
            scrollPositionX: 1,
        },
    },
    title: {
        text: '',
    },
    xAxis: {
        categories: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12" ],
        tickInterval: 0,
        plotLines: [
            {
                color: 'red',
                width: 2,
                value: 100,
            },
        ],
        legend: {
            enabled: false,
        },
    },
    yAxis: {
        categories: [0, 1000],
        tickInterval: 500,
        title: {
            text: null,
        },
    },
    credits: {
        enabled: false,
    },
    tooltip: {
        headerFormat: '',
        backgroundColor: 'transparent',
        shadow: false,
        borderColor: 'none',
        borderWidth: 0,
        useHTML: true,
        formatter: function () {
            var content = '';
            content += `
            <div ><div class="arrow"></div><span class="tooltip-7785">
            <span style="font-weight:900; font-size:1rem;">
            <span style="color:black; margin-left:5px;"> ${(this as any).y} </span></span></span></div>
            `;
            return content;
        },
    },
    series: [
        {
            data: [1000, 600, 200, 500, 800, 900, 1000, 500, 100, 300, 660, 980],
            color: colors.primary,
            lineWidth: 3.5,
            showInLegend: false,
            marker: {
                enabled: false,
                fillColor: '#fff',
                radius: 5,
                opacity: 1,
                lineWidth: 3,
                lineColor: '#707070',
                symbol: 'circle',
            },
        },
        {
            data: [0, 400, 800, 500, 200, 100, 0, 500, 900, 700, 340, 20],
            color: colors.grayPrimary,
            lineWidth: 1,
            showInLegend: false,
            marker: {
                enabled: false,
                fillColor: '#242E42',
                symbol: 'circle',
            },
        },
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px',
        },
    },
};

export const HomeWorkChart = () => {
    return (
        <>
            <div className="heading">
                <Typography className="head-text">Homework Completed</Typography>
            </div>
            <div className="revenue-content">
                <div className="revenue-week-stat">
                    <div className="col-md-3">
                        <Typography className="sub-text ">Homework completed</Typography>
                        <Typography className="revenue-count">
                            <span style={{ backgroundColor: colors.primary }} className="current bullet-icon"></span>
                            1000
                        </Typography>
                    </div>
                    <div className="col-md-3">
                        <Typography className="sub-text ">Homework not completed</Typography>
                        <Typography className="revenue-count">
                            <span
                                style={{ backgroundColor: colors.grayPrimary }}
                                className="previous bullet-icon"></span>
                            100
                        </Typography>
                    </div>
                </div>
                <div className="revenue-chart">
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
        </>
    );
};

export default HomeWorkChart;
