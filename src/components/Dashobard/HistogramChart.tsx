import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface props{
    goto?: (e:any)=>void;
    data: number[];
    xAxis: string[];
}
export const HistogramChart: React.FunctionComponent<props> = ({goto, data, xAxis}) => {
    const options = {
        chart: {
            type: 'column',
            height: 200,
            scrollablePlotArea: {
                minWidth: 300,
                scrollPositionX: 1,
            },
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: xAxis,
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
            tickInterval: 100,
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
                data: data,
                color: "#145DFF",
                lineWidth: 10,
                pointWidth: 30,
                showInLegend: false,
                marker: {
                    enabled: false,
                    fillColor: '#fff',
                    radius: 5,
                    opacity: 1,
                    lineWidth: 3,
                    lineColor: '#145DFF',
                    symbol: 'circle',
                },
                events: {
                    click: goto,
                },
            },
        ],
        navigation: {
            menuItemStyle: {
                fontSize: '10px',
            },
        },
    };
    return (
        <div className="exam-container">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default HistogramChart;
