import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface selectFieldProps {
    label?: string;
    options: string[];
    className?: string;
    getValue: (value: string) => void;
    name?: string;
    value?: number | string
    ref?: any,
    disabled?: boolean
}
const SelectField: React.FunctionComponent<selectFieldProps> = ({ label, value, options,disabled, className, getValue, name, ref }) => {
    const handleSelect = (e: React.SyntheticEvent<EventTarget>) => {
        const value = (e.target as HTMLInputElement).value;
        getValue(value);
    };
    return (
        <FormControl  variant="outlined" className={className} fullWidth>
            <InputLabel id="select-field">{label}</InputLabel>
            <Select disabled={disabled}  name={name} inputRef={ref}  labelId="select-field" value={value} onChange={handleSelect} label={label}>
                {options.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectField;
