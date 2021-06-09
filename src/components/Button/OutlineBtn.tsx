import React from 'react';
import { Button } from '@material-ui/core';

interface outlineBtnProps{
    title: string,
    color: string,
    icon?: any,
    trigger?: ()=> void
}
const OutlineBtn: React.FunctionComponent<outlineBtnProps> = ({title, color, icon, trigger}) => {
    return (
    <Button endIcon={icon} onClick={trigger} style={{border: `1px solid ${color}`, color:color, textTransform: "capitalize"}}>{title}</Button>
    );
}

export default OutlineBtn;
