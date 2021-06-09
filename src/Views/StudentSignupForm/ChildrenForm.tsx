import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { LocationSearching } from '@material-ui/icons';
import { registerContext } from './Index';
import { mobileCode } from '../../Helper/mobileCode';

const ChildrenForm: React.FunctionComponent = () => {
    const context = useContext(registerContext);
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <TextField
                        className="line-input"
                        value={context.student.firstName}
                        onChange={context.studentHandler.firstName}
                        label="First Name"
                        fullWidth
                    />
                </div>
                <div className="col-lg-6">
                    <TextField
                        className="line-input"
                        value={context.student.lastName}
                        onChange={context.studentHandler.lastName}
                        label="Last Name"
                        fullWidth
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        className="line-input"
                        value={context.student.email}
                        onChange={context.studentHandler.email}
                        label="Email Address"
                        fullWidth
                    />
                </div>
                <div className="col-lg-4">
                    <SelectFieldUnderline
                        className="custom-adornment-input"
                        label="Mobile Number"
                        options={["+91"]}
                        value={context.student.phoneCode}
                        getValue={(value: string) => {
                            context.studentHandler.phoneCode(value);
                        }}
                    />
                </div>
                <div className="col-lg-8">
                    <TextField
                        className="line-input remove_mb"
                        label=""
                        value={context.student.phoneNum}
                        onChange={context.studentHandler.phoneNum}
                        fullWidth
                    />
                </div>
                <div className="col-lg-12">
                    <UnderLineAddornmentSingleIcon
                        label="Location"
                        className="custom-adornment-input"
                        value={context.student.location}
                        onChange={context.studentHandler.location}
                        icon={<LocationSearching className="search-loc" />}
                    />
                </div>
            </div>
        </>
    );
};

export default ChildrenForm;
