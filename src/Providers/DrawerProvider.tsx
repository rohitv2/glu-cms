import React, { FC, ReactNode } from 'react';
import isNumber from 'lodash.isnumber';
import { DrawerProps } from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '../components/Drawer';

const formatTranslateValue = (value: number | string) => (isNumber(value) ? value + 'px' : value);

function createTransition(open: boolean, { create, duration }: any): string {
    return create('transform', {
        duration: open ? duration.leavingScreen : duration.enteringScreen,
    });
}

const useStyles = makeStyles(({ transitions }) => ({
    content: {
        transform: ({ open, animation, drawerWidth }: any) =>
            open && animation ? `translateX(-${formatTranslateValue(drawerWidth)})` : 'none',
        transition: ({ open }: any) => createTransition(open, transitions),
    },
}));

interface IDrawerProvider extends DrawerProps {
    open: boolean;
    onClose: () => void;
    drawerWidth?: number | string;
    drawerContent: ReactNode;
    drawerPosition?: 'left' | 'right' | 'top' | 'bottom';
    children: ReactNode;
    animation?: boolean;
}

const DrawerProvider: FC<IDrawerProvider> = ({
    open,
    onClose,
    drawerWidth = 500,
    drawerContent,
    drawerPosition,
    animation,
    children,
    ...props
}) => {
    const classes = useStyles({ open, drawerWidth, animation });
    return (
        <div>
            <Drawer open={open} onClose={onClose} width={drawerWidth} position={drawerPosition} {...props}>
                {drawerContent}
            </Drawer>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

DrawerProvider.defaultProps = {
    animation: true,
};

export default DrawerProvider;
