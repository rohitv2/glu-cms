import React, { FC, ReactNode, memo } from 'react';
import MuiDrawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '../../components/Button/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    content: {
        width: ({ width }: { width: number }) => width,
        padding: '10rem 3.125rem 1.75rem 3.125rem',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        width: 'inherit',
        position: 'fixed',
        paddingTop: '1.75rem',
        paddingBottom: '3.125rem',
        top: 0,
        background: '#fff',
        zIndex: 1  
    },
    button: {
        position: 'relative',
        left: -12,
        '& svg': {
            fontSize: '2.325rem'
          }
    },
    font:{
        fontSize: '1.25rem',
        marginLeft: '-0.9rem'
    },
    noFont:{
        display: 'none'
    }

});

type DrawerProps = {
    position?: 'left' | 'right' | 'top' | 'bottom';
    open: boolean;
    onClose: () => void;
    width?: any;
    children: ReactNode;
    heading:boolean;
};

const Drawer: FC<DrawerProps> = ({
    position = 'right',
    open = false,
    width = "68.875rem",
    onClose,
    children,
    heading
}) => {
    const classes = useStyles({ width });
    return (
        <MuiDrawer anchor={position} open={open}>
            <Grid container direction="column" className={classes.content}>
                <Grid className={classes.buttonContainer}>
                    <IconButton className={classes.button} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <Typography className={heading ? classes.font : classes.noFont} variant="h6"></Typography>
                </Grid>
                {children}
            </Grid>
        </MuiDrawer>
    );
};

export default memo(Drawer);
