import React from 'react';
import Highcharts from 'highcharts';
import VariablePie from 'highcharts/modules/variable-pie';
import HighchartsReact from 'highcharts-react-official';
import { FiberManualRecord } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import SelectField from '../../components/Inputs/SelectField';
import { months } from '../../Helper/months';
VariablePie(Highcharts);

interface props{
    chartName: string,
    available: number,
    notavailalbe: number,
    marker1: string,
    marker2: string
}
export const GraphChart: React.FunctionComponent<props> = ({chartName, available, notavailalbe, marker1, marker2}) => {
    const options = {
        chart: {
            type: '',
            width: 200,
            height: 200,
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
                innerSize: '50%',
                zMin: 0,
                name: chartName,
                type: 'variablepie',
                borderWidth: 0,
                data: [
                    {
                        y: available,
                        z: 1,
                        color: '#2474BC',
                    },
                    {
                        y: notavailalbe,
                        z: 1,
                        color: '#e0e0e0',
                    },
                ],
                dataLabels: {
                    enabled: false,
                },
            },
        ],
    };
    return (
        <div className="attendance-card">
            <Typography className="heading">{chartName} Record</Typography>
            <div className="marker-container">
                <div className="present">
                    <FiberManualRecord className="icon" />
                    <Typography className="title">{marker1}</Typography>
                </div>
                <div className="absent">
                    <FiberManualRecord className="icon" />
                    <Typography className="title">{marker2}</Typography>
                </div>
                <SelectField
                    className="custom-select-input w-50 ml-5"
                    options={months}
                    getValue={()=>{}}
                />
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default GraphChart;
