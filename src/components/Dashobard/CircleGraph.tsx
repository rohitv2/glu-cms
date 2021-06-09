import React from 'react';
import Highcharts from 'highcharts';
import VariablePie from 'highcharts/modules/variable-pie';
import HighchartsReact from 'highcharts-react-official';
import { FiberManualRecord } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
VariablePie(Highcharts);

interface props {
    chartName: string;
    available: number;
    notavailalbe: number;
    marker1: string;
    marker2: string;
    goto?: () => void;
}
export const CircleGraph: React.FunctionComponent<props> = ({
    chartName,
    available,
    notavailalbe,
    marker1,
    marker2,
    goto,
}) => {
    const options = {
        chart: {
            type: '',
            width: 266,
            height: 266,
        },
        title: {
            text: '',
        },
        tooltip: {
            headerFormat: '',
            valuePrefix: '',
        },
        credits: {
            enabled: false,
        },
        series: [
            {
                states: {
                    hover: {
                        halo: {
                            opacity: 1,
                        },
                        brightness: 0,
                    },
                    inactive: {
                        opacity: 1,
                    },
                },
                area: {
                    shadow: true,
                },
                minPointSize: 1,
                innerSize: '73%',
                zMin: 0,
                name: chartName,
                type: 'variablepie',
                borderWidth: 0,
                data: [
                    {
                        y: notavailalbe,
                        z: 1,
                        color: '#5F5F5F',
                    },
                    {
                        y: available,
                        z: 1,
                        color: '#145DFF',
                    },
                ],
                dataLabels: {
                    enabled: false,
                },
                events: {
                    click: goto,
                },
            },
        ],
    };
    return (
        <div className="attendance-card  bg-white">
            <div className="row">
                <div className="col-md-5 d-flex algin-items-center justify-content-between flex-column">
                    <Typography className="heading" onClick={goto}>
                        {chartName} Record
                    </Typography>
                    <div className="marker-container">
                        <div className="present">
                            <FiberManualRecord className="icon" />
                            <Typography className="title">{marker1}</Typography>
                        </div>
                        <div className="absent">
                            <FiberManualRecord className="icon" />
                            <Typography className="title">{marker2}</Typography>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-end">
                    {available !== 0 && notavailalbe !== 0 && (
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CircleGraph;
