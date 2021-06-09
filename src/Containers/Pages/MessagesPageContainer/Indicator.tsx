import React, { FC } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    indicator: {
        width: 11,
        height: 11,
        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
    },
    indicatorActive: {
        borderColor: '#00A800',
        background: '#00A800',
    },
});

interface IIndicator {
    active?: boolean;
}

const Indicator: FC<IIndicator> = ({ active }) => {
    const classes = useStyles();
    return (
        <span
            className={classNames(classes.indicator, {
                [classes.indicatorActive]: active,
            })}
        />
    );
};

export default Indicator;
