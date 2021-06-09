import React, { useState, useEffect } from 'react';
import {
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    Input,
} from '@material-ui/core';

interface props {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    name?: string;
    inputRef?: any;
}
const UnderLineAddornment: React.FunctionComponent<props> = ({ className, name, inputRef, value, label, onChange }) => {
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
    };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };
    useEffect(() => {
        value && setPassword(value);
    }, []);
    return (
        <FormControl className={`${className} mb-2`} variant="outlined" fullWidth>
            <InputLabel htmlFor="password-input">{label}</InputLabel>
            <Input
                name={name}
                inputRef={inputRef}
                id="password-input"
                type={isShowPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            className="eye-button"
                            aria-label="toggle password visibility"
                            onClick={handlePasswordVisibility}
                            edge="end"
                        >
                            {isShowPassword ? <i className="icon-Visible" /> : <i className="icon-Invisible" />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export default UnderLineAddornment;
