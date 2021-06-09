import React, { useState } from 'react';
import { Box, makeStyles, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import classNames from 'classnames';

const useStyles = makeStyles({
    checkbox: {
        padding: '0.2rem',
    },
    root: {
        '&$checked': {
            color: colors.primary,
        },
    },
    formControl: {
        paddingLeft: '1.2rem',
    },
    styleFormControl: {
        marginBottom: 0,
        marginRight: 0,
        padding: '0.3rem 0',
        borderBottom: `1px solid ${colors.borderGray}`,
        '& .MuiFormControlLabel-label': {
            paddingLeft: '0.5rem',
        },
    },
    shiftNestedForm: {
        paddingLeft: '1rem',
    },
    parent: {
        padding: '2.5rem',
        paddingTop: 0,
    },
    title: {
        fontSize: '1.125rem',
        lineHeight: '2rem',
        color: colors.black,
        paddingLeft: '0.5rem',
        borderBottom: `1px solid ${colors.borderGray}`,
        marginBottom: '1.5rem',
    },
    cbParent: {
        // paddingLeft: '1rem',
    },
});

const CheckboxList: React.FunctionComponent = () => {
    const classes = useStyles();
    const [parentCheck, setParentCheck] = useState([false]);
    const [childCheck, setChildCheck] = useState([[false, false, false]]);
    const handleParent = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const checkData = [...parentCheck];
        checkData[i] = e.target.checked;
        setParentCheck(checkData);
        if (e.target.checked) {
            const newData = childCheck[i].map(() => {
                return true;
            });
            const newSetData = [...childCheck];
            newSetData[i] = newData;
            setChildCheck(newSetData);
        } else {
            const newData = childCheck[i].map(() => {
                return false;
            });
            const newSetData = [...childCheck];
            newSetData[i] = newData;
            setChildCheck(newSetData);
        }
    };
    const handleChild = (e: React.ChangeEvent<HTMLInputElement>, i: number, j: number) => {
        const checkData = [...childCheck[i]];
        checkData[j] = e.target.checked;
        const data = [...childCheck];
        data[i] = checkData;
        setChildCheck(data);
    };
    return (
        <React.Fragment>
            {parentCheck.map((item: boolean, i: number) => (
                <FormGroup key={i} className={classes.formControl}>
                    <FormControlLabel
                        control={<Checkbox name="at1" className={classes.checkbox} />}
                        className={classes.styleFormControl}
                        checked={item}
                        onChange={(e: any) => handleParent(e, i)}
                        label="Action Title 1"
                    />
                    <Box component="div" className={classes.cbParent}>
                        <FormGroup>
                            {childCheck[i].map((item: boolean, j: number) => (
                                <FormControlLabel
                                    control={<Checkbox className={classes.checkbox} />}
                                    className={classNames(classes.styleFormControl, classes.shiftNestedForm)}
                                    name={`sub${j}`}
                                    checked={item}
                                    onChange={(e: any) => handleChild(e, i, j)}
                                    label={`Sub-acion ${j + 1}`}
                                />
                            ))}
                        </FormGroup>
                    </Box>
                </FormGroup>
            ))}
        </React.Fragment>
    );
};

export default CheckboxList;
