import React, { useContext } from 'react';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { Typography } from '@material-ui/core';
import { registerContext } from './Index';
import { mobileCode } from '../../Helper/mobileCode';
import MobileCodeInput from '../../components/Inputs/MobileCodeInput';

interface props {
    onClick?: (value: string) => void;
}
const VerifyAccount: React.FunctionComponent<props> = ({ onClick }) => {
    const context = useContext(registerContext);
  
    return (
        <div className="info__container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <MobileCodeInput
                        className="custom-adornment-input mb-3"
                        label="Mobile Number"
                        options={mobileCode}
                        value={context.student.veriCode}
                        onChange={context.studentHandler.veriCode}
                    />
                </div>
                <div className="col-md-8 mb-3">
                    <UnderLineAddornmentSingleIcon
                        disableRipple={true}
                        buttonClick={context.sendCode}
                        label=""
                        type="number"
                        className="custom-adornment-input"
                        value={context.student.veriMobile}
                        onChange={context.studentHandler.veriMobile}
                        icon={<Typography className="text">Send Code</Typography>}
                    />
                </div>
            </div>
        </div>
    );
};

export default VerifyAccount;
