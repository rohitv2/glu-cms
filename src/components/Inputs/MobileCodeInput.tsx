import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        fontSize: '1.5rem',
    },
});

interface selectFieldProps {
    label?: string;
    options: any[];
    className?: string;
    onChange: (value: React.SyntheticEvent<any>) => void;
    name?: string;
    value?: string;
    ref?: any;
    disabled?: boolean;
}
const MobileCodeInput: React.FunctionComponent<selectFieldProps> = ({
    label,
    value,
    options,
    disabled,
    className,
    onChange,
    name,
    ref,
}) => {
    const classes = useStyles();

    const Icon = () => {
        return <i className="icon-Down" />;
    };
    return (
        <FormControl variant="standard" className={className} fullWidth>
            <InputLabel id="select-field">{label}</InputLabel>
            <Select
                disabled={disabled}
                name={name}
                inputRef={ref}
                placeholder="ddf"
                IconComponent={Icon}
                labelId="select-field"
                value={value}
                onChange={onChange}
                label={label}
            >
                {options.map((item: any, i: number) => (
                    <MenuItem className={classes.title} key={i} value={item.dial_code}>
                        {`${item.name} ${item.dial_code}`}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MobileCodeInput;
