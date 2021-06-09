import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles(({
    clearFilter:{
        backgroundColor: colors.lighterPrimary,
        fontSize: '1.2rem'
    }
}))
interface selectFieldProps {
    label?: string;
    options: string[];
    className?: string;
    getValue: (value: string) => void;
    name?: string;
    value?: number | string;
    ref?: any;
    disabled?: boolean;
    clearFilter?: boolean;
    clearFilterMsg?: string;
}
const SelectFieldUnderlineIdValue: React.FunctionComponent<selectFieldProps> = ({
    label,
    value,
    options,
    disabled,
    className,
    getValue,
    name,
    ref,
    clearFilter,
    clearFilterMsg,
}) => {
    const classes = useStyles();
    const handleSelect = (e: React.SyntheticEvent<EventTarget>) => {
        const value = (e.target as HTMLInputElement).value;
        getValue(value);
    };

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
                onChange={(e) => handleSelect(e)}
                label={label}
            >
                {clearFilter && <MenuItem value={-1} className={classes.clearFilter} >{clearFilterMsg ? clearFilterMsg : 'Clear Filter'}</MenuItem>}
                {options.map((item: any, i: number) => (
                    <MenuItem key={i} value={item.id}>
                        {item.value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectFieldUnderlineIdValue;
