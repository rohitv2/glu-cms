import React, { FC } from 'react';
import FormControlSelect from './FormControlSelect';
import { ChildrenSelectElement } from './types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    inputRoot: {
        borderBottom: 'none',
        minWidth: 'fit-content',
        '& i': {
            marginLeft: '0.8rem',
        },
    },
});

interface IFormControlChildrenSelect {
    data?: ChildrenSelectElement;
}

const FormControlChildrenSelect: FC<IFormControlChildrenSelect> = ({ data }) => {
    const classes = useStyles();

    if (!data) {
        return null;
    }

    const { selectedChild, childrenOptions, onSelectChild } = data;

    if (!childrenOptions || !onSelectChild) {
        return null;
    }

    return (
        <FormControlSelect
            name="child"
            value={selectedChild}
            options={childrenOptions}
            onChange={onSelectChild}
            fontSizeVariant={2}
            inputRootClassName={classes.inputRoot}
        />
    );
};

export default FormControlChildrenSelect;
