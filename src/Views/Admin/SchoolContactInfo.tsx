import React, { useContext } from 'react';
import { TextField, Typography } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { adminContext } from './Admin';

const SchoolContactInfo: React.FunctionComponent = () => {
    const context = useContext<any>(adminContext);

    return (
        <div className="school-information-container">
            <div className="row">
                <div className="lanline_num__container">
                    <Typography className="title">Land Line Number</Typography>
                    <Typography className="add_btn">Add new number</Typography>
                </div>
                <div className="phone__container">
                    <div className="prefix">
                        <SelectFieldUnderline
                            value={'+91'}
                            className="custom-adornment-input2"
                            options={['+91', '+44']}
                            getValue={() => {}}
                        />
                    </div>
                    <div className="phone__number">
                        <TextField
                            className="line-input2"
                            value={context.contactInfo.phone}
                            onChange={context.phone}
                            fullWidth
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <TextField
                        className="line-input2"
                        label="Email Address"
                        value={context.contactInfo.email}
                        onChange={context.email}
                        fullWidth
                    />
                </div>
                <div className="col-md-12">
                    <TextField
                        className="line-input2"
                        label="Website"
                        value={context.contactInfo.website}
                        onChange={context.website}
                        fullWidth
                    />
                </div>
            </div>
        </div>
    );
};

export default SchoolContactInfo;
