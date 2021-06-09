import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Controller } from 'react-hook-form';

interface SelectControllerProps {
    label?: string;
    options: string[];
    className?: string;
    name: string;
    control?: any;
    handler?:() => void;
}
const SelectController: React.FunctionComponent<SelectControllerProps> = ({ label, options, className, name, control, handler }) => {
    const [select, setSelect] = useState("");
    const handleSelect = (e: React.SyntheticEvent<EventTarget>) => {
        const value = (e.target as HTMLInputElement).value;
        setSelect(value);
    };
    return (
        <FormControl variant="outlined" className={className} fullWidth>
            <InputLabel id="select-field">{label}</InputLabel>
            <Controller
                as={
                    <Select labelId="select-field" value={select} onChange={handleSelect} label={label}>
                        {options.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                 }
                name={name}
                onBlur={handler}
                defaultValue=""
                control={control}
                rules={{ required: true }}
            /> 
        </FormControl>
    );
};

export default SelectController;
