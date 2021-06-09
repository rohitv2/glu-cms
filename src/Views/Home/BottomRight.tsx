import React from 'react';
import { Typography } from '@material-ui/core';
import { Icons } from '../../Assets/Icons';

const BottomRight: React.FunctionComponent = () => {
    return (
        <div className="bottom-right-container">
            <Typography className="title">Coming to App Store and Google Play</Typography>
            <div>
                <img className="apple-icon" src={Icons.appleWhite} alt="" />
                <img className="google-icon" src={Icons.googleWhite} alt="" />
            </div>
        </div>
    );
};

export default BottomRight;
