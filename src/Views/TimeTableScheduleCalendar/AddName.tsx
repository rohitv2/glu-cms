import React, { useState } from 'react';
import { TextField, Typography, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import useGetAllGroup from '../../Hooks/schools/useGetAllGroup';

const useStyles = makeStyles({
    field: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        fontSize: '24px',
        marginLeft: '1rem',
        cursor: 'pointer',
    },
});

interface props {
    name?: (data: any) => void;
    valueName: string;
    getDropdownValue: (data: any) => void;
    yearValue: number | string;
    disabled: boolean;
}

const AddName: React.FC<props> = ({ name, valueName, getDropdownValue, yearValue, disabled }) => {
    const classes = useStyles();
    const [value, setValue] = useState<any>();
    const [edit, setEdit] = useState(false);
    const { yearGroupDropdownList } = useGetAllGroup('');
    const handleEdit = () => {
        setEdit(!edit);
    };
    const handleClear = () => {
        setEdit(!edit);
        setValue(valueName);
    };
    const handleSave = () => {
        setEdit(!edit);
        name && name(value);
    };
    React.useEffect(() => {
        setValue(valueName);
    }, [valueName]);

    return (
        <div className="student-header-container">
            <div className="student-header">
                <div className="img-container">
                    <div className="edit-container">
                        {edit ? (
                            <div className={classes.field}>
                                <TextField
                                    fullWidth
                                    placeholder={value}
                                    inputProps={{ style: { fontSize: '1.875rem', color: '#000', fontWeight: '500' } }}
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                    }}
                                />
                                <CheckIcon className={classes.icon} onClick={handleSave} />
                                <ClearIcon className={classes.icon} onClick={handleClear} />
                            </div>
                        ) : (
                            <Typography className="heading">{value}</Typography>
                        )}
                        {!edit ? <EditIcon className="edit-icon" onClick={handleEdit} /> : ''}
                    </div>
                </div>
                <div className="col-md-3 flex-end">
                    <SelectFieldUnderlineIdValue
                        disabled={disabled}
                        className="custom-sm-txt-dashbord"
                        label="Year Group"
                        value={yearValue}
                        options={yearGroupDropdownList ? (yearGroupDropdownList as []) : []}
                        getValue={getDropdownValue}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddName;
