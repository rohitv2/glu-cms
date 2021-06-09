import React, { useState, useEffect, useContext } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import OutlineButton from '../../components/Button/OutlineButton';
import { registerContext } from './Index';

const useStyles = makeStyles({
    icon: {
        color: colors.black,
    },
    ml:{
        marginLeft: '4rem'
    }
});

interface props {
    whoAmIHandler: (value: string) => void;
}
const WhoIam: React.FunctionComponent<props> = ({ whoAmIHandler }) => {
    const context = useContext(registerContext);
    const classes = useStyles();
    const [value, setValue] = useState('student');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    useEffect(() => {
        whoAmIHandler(value);
    }, [value]);
    return (
        <div>
            <FormControl component="fieldset">
                <RadioGroup aria-label="whoareu" name="whoareu" value={value} onChange={handleChange}>
                    <FormControlLabel
                        value="student"
                        className={`title ${value === 'student' ? 'textBlack' : ''}`}
                        control={
                            <Radio
                                color="default"
                                checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                                icon={<i className={`icon-Circle ${classes.icon}`} />}
                            />
                        }
                        label="I am a Student"
                    />
                    <FormControlLabel
                        value="parent"
                        className={`title ${value === 'parent' ? 'textBlack' : ''}`}
                        control={
                            <Radio
                                color="default"
                                checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                                icon={<i className={`icon-Circle ${classes.icon}`} />}
                            />
                        }
                        label="I am a Parent"
                    />
                    <FormControlLabel
                        value="teacher"
                        className={`title ${value === 'teacher' ? 'textBlack' : ''}`}
                        control={
                            <Radio
                                color="default"
                                checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                                icon={<i className={`icon-Circle ${classes.icon}`} />}
                            />
                        }
                        label="I am a Tutor"
                    />
                </RadioGroup>
            </FormControl>
            <div className={classes.ml}>
            <OutlineButton text="Next" width="10rem" mt="3rem" btnClick={context.goNext} />
            </div>
        </div>
    );
};

export default WhoIam;
