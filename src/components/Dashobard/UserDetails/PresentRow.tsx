import React, { useEffect, useState } from 'react';
import PresentRowContainer from '../../../Containers/Dashboard/PresentRowContainer';
import PresetGridCol from '../PresetGridCol';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { checkValueReturn0 } from '../../../Helper/checkValueReturn0';

interface props {
    attendance?: any;
}

const PresentRow: React.FC<props> = ({ attendance }) => {
    const [state, setState] = useState({
        presentPercent: '0',
        present: '0',
        absentPercent: '0',
        absent: '0',
        onTime: '0',
        late: '0',
    });
    useEffect(() => {
        if (attendance) {
            const data = {
                presentPercent: checkValueReturn0(attendance?.presentPercentage),
                present: checkValueReturn0(attendance?.present),
                absentPercent: checkValueReturn0(attendance?.absentPrecentage),
                absent: checkValueReturn0(attendance?.absent),
                onTime: checkValueReturn0(attendance?.onTime),
                late: checkValueReturn0(attendance?.late),
            };
            setState(data);
        }
    }, [attendance]);
    return (
        <CardContainer>
            <div className="preset_row">
                <div style={{ marginLeft: 0, marginRight: 0 }} className="row">
                    <div className="col-lg-6  bg-white p-0">
                        <div className="pd_right">
                            <PresentRowContainer>
                                <PresetGridCol present={`${state.presentPercent} %`} status="present" />
                                <PresetGridCol present={`${state.present} days`} status="present" />
                                <PresetGridCol present={`${state.absentPercent} %`} status="Absent" />
                            </PresentRowContainer>
                        </div>
                    </div>
                    <div className="col-lg-6  bg-white p-0">
                        <div className="pd_left">
                            <PresentRowContainer>
                                <PresetGridCol present={`${state.absent} days`} status="Absent" />
                                <PresetGridCol present={`${state.onTime} days`} status="On time" />
                                <PresetGridCol present={`${state.late} days`} status="Late" />
                            </PresentRowContainer>
                        </div>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};

export default PresentRow;
