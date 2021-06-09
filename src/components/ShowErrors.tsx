import React from 'react';
import { colors, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        color: '#ff0303',
        marginTop: (props:any)=>props.mt ? props.mt : '-2.5rem' ,
        marginBottom: (props:any)=>props.mb? props.mb : '1rem',
    },
});

interface props {
    error: string;
    mb?: string;
    mt?: string;
}
const ShowErrors: React.FC<props> = ({ error, mb, mt }) => {
    const classes = useStyles({ mb, mt });
    return <Typography className={classes.title}>{error}</Typography>;
};

export default ShowErrors;
