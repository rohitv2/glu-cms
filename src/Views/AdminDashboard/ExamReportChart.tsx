import React from 'react';
import { Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { colors } from '../../Styles/colors';
import { Person } from '@material-ui/icons';

const options = {
    chart: {
        type: 'column',
        height: 300,
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
            <span style="color:black; margin-left:5px;"> ${this.y} </span></span></span></div>
            `;
            return content;
        },
    },
    series: [
        {
            data: [500, 600, 200, 500, 400, 500, 100, 300, 500, 350, 450, 480],
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
            data: [0, 10, 10, 5, 20, 10, 4, 1, 0, 5, 10, 12],
            color: colors.grayPrimary,
            lineWidth: 1,
            showInLegend: false,
            marker: {
                enabled: false,
                fillColor: '#242E42',
                symbol: 'circle',
            },
        },
        {
            type: 'pie',
            name: 'Total Result',
            data: [{
                y: 1000,
                color: "#007AFF"
            }, {
                y: 23,
                color: "#DCE1E3"
            }],
            center: [50, 30],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px',
        },
    },
};

export const ExamReportChart = () => {
    return (
        <>
            <div className="heading">
                <Typography className="head-text">Exam Result</Typography>
            </div>
            <div className="revenue-content">
                <div className="revenue-week-stat">
                    <div className="col-md-3">
                        <Typography className="sub-text ">Passed Student</Typography>
                        <Typography className="revenue-count">
                            <span style={{ backgroundColor: colors.primary }} className="current bullet-icon"></span>
                            4,320
                        </Typography>
                    </div>
                    <div className="col-md-3">
                        <Typography className="sub-text ">Failed Student</Typography>
                        <Typography className="revenue-count">
                            <span
                                style={{ backgroundColor: colors.grayPrimary }}
                                className="previous bullet-icon"></span>
                            5,320
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

export default ExamReportChart;
