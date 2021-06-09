import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    type?: string;
    fieldName?: string;
    fieldClass?: any;
    mt?: string;
    placeholder?: string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    value?:string | number;
    handleEnter?:(e:any)=>void;
    disalbed?:boolean;
    onBlur?:()=>void
}
const InputWithLabel: React.FunctionComponent<props> = ({ type, fieldName, fieldClass, mt, placeholder,value, onChange, handleEnter, disalbed, onBlur }) => {
    return (
        <div className={`input__with__label ${mt}`}>
            <Typography className={`fieldName ${fieldClass}`}>{fieldName}</Typography>
            <input type={type} className="inputfield" value={value}  onChange={onChange} placeholder={placeholder} onKeyDown={handleEnter} disabled={disalbed} onBlur={onBlur} />
        </div>
    );
};

export default InputWithLabel;
