import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

interface props{
  className?: string;
  value?:string;
  onChange?: (value: string) => void
}
const AdornmentInput: React.FunctionComponent<props> = ({className, value, onChange}) => {
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
      };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if(onChange){
        onChange(e.target.value);
      }
    }
      useEffect(()=>{
        value && setPassword(value);
      }, [])
    return (
        <FormControl className={`${className} mb-2`} variant="outlined" fullWidth>
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <OutlinedInput
          id="password-input"
          label="Password"
          type={isShowPassword ? "text" : "password"}
          value={password}
          onChange={handlePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className="eye-button"
                aria-label="toggle password visibility"
                onClick={handlePasswordVisibility}
                edge="end"
              >
                {isShowPassword ? (
                  <VisibilityOffIcon className="off-eye" />
                ) : (
                  <VisibilityIcon className="on-eye" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
}

export default AdornmentInput;
