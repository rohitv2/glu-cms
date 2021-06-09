import React, { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import MuiDrawer, { DrawerProps } from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from './Button/IconButton';
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    content: {
        width: ({ width, position }: any) => position === 'top' ? '100%' : width,
        padding: '0 3.125rem 1.75rem 3.125rem',
        minHeight: '-webkit-fit-content',
        height: ({ fullHeight }: any) => fullHeight ? '100%' : 'fit-content'
    },
    buttonContainer: {
        width: '100%',
        position: 'sticky',
        height: 145,
        top: 0,
        background: '#fff',
        zIndex: 1,
        paddingTop: '1.4375rem'
    },
    button: {
        position: 'absolute',
        top: '0.9375rem',
        left: ({ position }: any) => position === 'left' ? 'unset' : -12,
        right: ({ position }: any) => position === 'right' ? 'unset' : -12
    },
});

export interface DrawerBase {
    position?: 'left' | 'right' | 'top' | 'bottom';
    open: boolean;
    onClose: () => void;
}

export interface IDrawer extends DrawerProps {
    position?: 'left' | 'right' | 'top' | 'bottom';
    open: boolean;
    onClose: () => void;
    width?: number | string;
    headerComponent?: ReactNode;
    contentClassName?: string;
    rootClassName?: string;
    header?: boolean;
    fullHeight?: boolean;
    children?: ReactNode;
}

const Drawer: FC<IDrawer> = ({
    position = 'right',
    open = false,
    width = 500,
    header = true,
    onClose,
    headerComponent,
    contentClassName,
    rootClassName,
    fullHeight,
    children,
    ...props
}) => {
    const classes = useStyles({ width, position, fullHeight });
    return (
        <MuiDrawer anchor={position} open={open} variant="temporary" className={rootClassName} {...props}>
            <Grid container direction="column" wrap="nowrap" className={classNames(classes.content, contentClassName)}>
                {header && (
                    <Grid className={classes.buttonContainer}>
                        {headerComponent}
                        <IconButton className={classes.button} onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                )}
                {children}
            </Grid>
        </MuiDrawer>
    );
};

export default memo(Drawer);
