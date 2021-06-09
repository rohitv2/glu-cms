import React, { useContext } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, makeStyles } from '@material-ui/core';
import { registerContext } from './Index';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    ml: {
        marginLeft: '4rem',
    },
    icon: {
        color: colors.black,
    },
});

const Identity: React.FunctionComponent = () => {
    const classes = useStyles();
    const context = useContext(registerContext);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.identity = event.target.value;
        context.setState(data);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="whoareu"
                name="whoareu"
                value={context.state.teacher.identity}
                onChange={handleChange}
            >
                <FormControlLabel
                    value="dl"
                    className="title textBlack"
                    control={
                        <Radio
                            color="default"
                            checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                            icon={<i className={`icon-Circle ${classes.icon}`} />}
                        />
                    }
                    label="Drivers License"
                />
                <FormControlLabel
                    value="passport"
                    className="title textBlack"
                    control={
                        <Radio
                            color="default"
                            checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                            icon={<i className={`icon-Circle ${classes.icon}`} />}
                        />
                    }
                    label="Passport"
                />
                <FormControlLabel
                    value="nationalId"
                    className="title textBlack"
                    control={
                        <Radio
                            color="default"
                            checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                            icon={<i className={`icon-Circle ${classes.icon}`} />}
                        />
                    }
                    label="National ID"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default Identity;
