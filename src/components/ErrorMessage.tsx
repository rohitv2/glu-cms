import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    msg?: string
}
const ErrorMessage: React.FunctionComponent<props> = ({msg}) => {
    return (
        <Typography className="message-error">{msg}</Typography>
    );
}

export default ErrorMessage;
