import React from 'react';
import { Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {colors} from "../../Styles/colors";

const options = {
    chart: {
        type: 'spline',
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
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
        categories: [0, 5000, 10000, 15000, 20000],
        tickInterval: 5000,
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
            <span style="color:black; margin-left:5px;">$ ${this.y} </span></span></span></div>
            `
            return content;
        },
    },
    series: [
        {
            data: [0, 16000, 8000, 18000, 13000, 5000, 12000],
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
            data: [0, 6000, 1000, 7000, 17000, 18000, 2000],
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

export const SessionInsightsChart = () => {
    return (
        <>
            <div className="heading">
                <Typography className="head-text">Session Insights</Typography>
                <Typography className="head-dots">
                    <MoreVertIcon />
                </Typography>
            </div>
            <div className="revenue-content">
                <div className="revenue-week-stat">
                    <div className="col-md-3">
                        <Typography className="sub-text ">Session Taken</Typography>
                        <Typography className="revenue-count">
                            <span style={{backgroundColor: colors.primary}} className="current bullet-icon"></span>4,320
                        </Typography>
                    </div>
                    <div className="col-md-3">
                        <Typography className="sub-text ">Session Added</Typography>
                        <Typography className="revenue-count">
                            <span style={{backgroundColor: colors.grayPrimary}} className="previous bullet-icon"></span>5,320
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

export default SessionInsightsChart;
