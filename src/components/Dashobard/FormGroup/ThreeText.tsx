import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { colors } from '../../../Styles/colors';

const useStyles = makeStyles({
    headYear: {
        marginTop: '4.375rem',
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
        color: colors.black,
    },
    addedName: {
        borderBottom: `1px solid ${colors.lightGray}`,
        marginTop: '1rem',
    },
    addAnother: {
        color: colors.lightGray,
        cursor: 'pointer',
    },
});

interface props {
    headTitle?: string;
    title?: string;
    another?: string;
}
const ThreeText: React.FunctionComponent<props> = ({ headTitle, title, another }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography className={classNames(classes.title, classes.headYear)}>{headTitle}</Typography>
            <Typography className={classNames(classes.title, classes.addedName)}>{title}</Typography>
            <Typography className={classNames(classes.title, classes.addedName, classes.addAnother)}>
                {another}
            </Typography>
        </React.Fragment>
    );
};

export default ThreeText;
