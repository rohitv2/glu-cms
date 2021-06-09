import React, { useState } from 'react';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import InputWithLabel from '../Inputs/InputWithLabel';
import { colors } from '../../Styles/colors';
import SelectWithLabelIdValue from '../Inputs/SelectWithLabelIdValue';

const useStyles = makeStyles({
    parent: {
        width: '100%',
        marginTop: '1rem',
    },
    titleBox: {
        width: 'auto',
        padding: '0.5rem',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        border: `1px solid ${colors.lightGray}`,
        marginTop: '1rem',
    },
    title: {
        fontSize: '1.25rem',
        lineHeight: '1.25rem',
        fontWeight: 500,
        color: colors.black,
    },
});

interface props {
    fieldName?: string;
    onChange?: (value: string) => void;
    data?: any;
    dropdown: any;
}
const ChipAdderWithDropdown: React.FunctionComponent<props> = ({ fieldName, data, onChange, dropdown }) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
            setValue('');
        }
    };
    return (
        <Box component="div" className={classes.parent}>
            <SelectWithLabelIdValue fieldName={fieldName} value={value} options={dropdown} onChange={handleValue} />
            <Grid container alignItems="center" justify="flex-start">
                {data.map((item: any, i: number) => (
                    <Box key={i} component="div" className={classes.titleBox}>
                        <Typography className={classes.title}>{item.value}</Typography>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default ChipAdderWithDropdown;
