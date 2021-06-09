import React from 'react';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

type optionsType = {
    id: number;
    value: string;
};

interface props {
    fieldName?: string;
    options: Array<optionsType>;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string | number ;
    mt?: string;
    disabled?: boolean;
}
const SelectWithLabelIdValue: React.FunctionComponent<props> = ({
    fieldName,
    value,
    mt,
    onChange,
    options,
    disabled,
}) => {
    return (
        <div className={`input__with__label ${mt}`}>
            <Typography className="fieldName">{fieldName}</Typography>
            <div className="select-w-icon">
                <select className="inputfield" disabled={disabled} value={value} onChange={onChange}>
                    <option value="">Select</option>
                    {options.map((item: optionsType, i: number) => (
                        <option key={i} value={item.id}>
                            {item.value}
                        </option>
                    ))}
                </select>
                <div className="icon-container">
                    <ExpandMore className="icon" />
                </div>
            </div>
        </div>
    );
};

export default SelectWithLabelIdValue;
