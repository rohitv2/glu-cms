import React from 'react';
import { FormControl, InputLabel, InputAdornment, IconButton, Input } from '@material-ui/core';

interface props {
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    icon?: React.ReactNode;
    type?:string;
    buttonClick?:()=> void
    disableRipple?:boolean
}
const UnderLineAddornmentSingleIcon: React.FunctionComponent<props> = ({ className, value, label, onChange, icon, type, buttonClick, disableRipple }) => {
    return (
        <FormControl className={`${className}`} variant="outlined" fullWidth>
            <InputLabel htmlFor="password-input">{label}</InputLabel>
            <Input
                id="password-input"
                type={type}
                value={value}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            className="eye-button"
                            aria-label="toggle password visibility"
                            onClick={buttonClick}
                            edge="end"
                            disableRipple={disableRipple}
                        >
                            {icon}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export default UnderLineAddornmentSingleIcon;
