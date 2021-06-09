import React, { FC } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        fontSize: ({ small }: any) => small ? '0.6rem' : '1rem',
        marginRight: '0.625rem',
    },
});

interface IIconCircle {
    small?: boolean;
    rootClassName?: string;
}

const IconCircle: FC<IIconCircle> = ({ small, rootClassName }) => {
    const classes = useStyles({ small });
    return <i className={classNames('icon-Stop_Recording', classes.root, rootClassName)} />;
};

export default IconCircle;
