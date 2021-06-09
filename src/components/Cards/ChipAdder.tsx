import React, { useState } from 'react';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import InputWithLabel from '../Inputs/InputWithLabel';
import { colors } from '../../Styles/colors';

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
    onChange?: (value:string) => void;
    data?: any;
}
const ChipAdder: React.FunctionComponent<props> = ({ fieldName, data, onChange }) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleEnter = (e: any) => {
        if (e.keyCode === 13) {
            if (onChange) {
                onChange(value);
                setValue('');
            }
        }
    };
    return (
        <Box component="div" className={classes.parent}>
            <InputWithLabel fieldName={fieldName} value={value} onChange={handleValue} handleEnter={handleEnter} />
            <Grid container alignItems="center" justify="flex-start">
                {data.map((item: any, i: number) => (
                    <Box key={i} component="div" className={classes.titleBox}>
                        <Typography className={classes.title}>{item}</Typography>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default ChipAdder;
