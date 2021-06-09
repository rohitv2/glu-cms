import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/icons';

const ManageAccount = () => {
    return (
        <div className="manage__account__container">
            <div className="row">
                <div className="col-md-6 p-4">
                    <Typography className="title">
                        Help & <br /> Support
                    </Typography>
                </div>
                <div className="col-md-6 p-4">
                    <Typography variant="h4" className="heading">
                        How to manage <br /> your accont
                    </Typography>
                    <div className="link__container">
                        <i className="icon-Copy_Link"></i>
                        <Typography className="title">Copy link</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAccount;
