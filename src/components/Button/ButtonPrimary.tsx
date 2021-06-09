import React, { FC } from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { BaseProps } from '@material-ui/core/OverridableComponent';

const useStyles = makeStyles({
    root: {
        padding: 0,
        minWidth: 'fit-content',
        width: 'fit-content',
        height: 'fit-content',
        textTransform: 'unset',
        fontWeight: 400,
        color: ({ color }: any) => (color === 'primary' ? '#000' : '#5F5F5F'),
        '&:hover': {
            background: 'unset',
            color: ({ color }: any) => (color === 'primary' ? '#000' : '#5F5F5F'),
        },
    },
    outlined: {
        borderRadius: 0,
        padding: '0.3125rem 1.5625rem',
    },
    outlinedSecondary: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        paddingLeft: '2.8125rem',
        paddingRight: '2.8125rem',
    },
});

interface IButtonPrimary extends ButtonProps, BaseProps<any> {
    color?: 'primary' | 'secondary';
    outlinedVariant?: 1 | 2;
}

const ButtonPrimary: FC<IButtonPrimary> = ({ className, color, outlinedVariant, children, ...props }) => {
    const classes = useStyles({ color });
    return (
        <Button
            disableRipple
            className={classNames(classes.root, className)}
            classes={{
                outlined: classNames(classes.outlined, {
                    [classes.outlinedSecondary]: outlinedVariant === 2,
                }),
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

ButtonPrimary.defaultProps = {
    color: 'primary',
    outlinedVariant: 1,
};

export default ButtonPrimary;
