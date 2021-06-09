import React, { FC, RefObject, ReactNode, memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer, { IDrawer } from './Drawer';
import useOffsetHeight from '../Hooks/useOffsetHeight';

const useStyles = makeStyles({
    drawerContent: {
        paddingTop: ({ offsetHeight }: any) => offsetHeight,
        paddingBottom: '4.6875rem'
    }
});

interface ITopDrawerMenu extends IDrawer {
    containerRef: RefObject<HTMLDivElement>;
    children: ReactNode;
}

const ModalProps = {
    style: {
        zIndex: 1298
    }
}

const TopDrawerMenu: FC<ITopDrawerMenu> = ({ containerRef, children, ...props }) => {
    const offsetHeight = useOffsetHeight(containerRef);
    const classes = useStyles({ offsetHeight });

    return (
        <Drawer
            position="top"
            header={false}
            contentClassName={classes.drawerContent}
            ModalProps={ModalProps}
            {...props}
        >
            {children}
        </Drawer>
    );
};

export default memo(TopDrawerMenu);
