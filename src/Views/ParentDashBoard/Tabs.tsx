import React, { FC, memo, useCallback } from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    tabsRoot: {
        marginBottom: '2.4375rem',
        '& .MuiTabs-indicator': {
            display: 'none',
        },
    },
    tabRoot: {
        padding: '0 0.625rem',
        width: 'max-content',
        minWidth: 'max-content',
        marginRight: '0.625rem',
        fontSize: '2.625rem',
        textTransform: 'capitalize',
        fontWeight: 400,
    },
});

type TabsProps = {
    value: string;
    onChange: (value: string) => void;
};

const Tabs: FC<TabsProps> = ({ value, onChange }) => {
    const classes = useStyles();

    const handleChange = useCallback(
        (_, newValue) => {
            if (newValue) {
                onChange(newValue);
            }
        },
        [onChange]
    );

    return (
        <MuiTabs value={value} onChange={handleChange} className={classes.tabsRoot}>
            <Tab disableRipple label="Personal" value="personal" className={classes.tabRoot} />
            <Tab disableRipple label="School" value="school" className={classes.tabRoot} />
        </MuiTabs>
    );
};

export default memo(Tabs);
