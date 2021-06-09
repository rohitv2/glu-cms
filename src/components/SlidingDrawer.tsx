import React from 'react';
import { Close } from '@material-ui/icons';
import { IconButton, Typography } from '@material-ui/core';

interface props {
    show: boolean;
    handler: () => void;
    children: React.ReactNode;
    title?: string;
}
const SlidingDrawer: React.FunctionComponent<props> = ({ show, handler, children, title }) => {
    return (
        <div className={`drawer__wrapper ${show ? 'full_drawer' : ''}`}>
            <div className={`drawer__right__Container ${show ? 'show' : ''}`}>
                <div className="button__row">
                    <IconButton className="close-icon-btn" onClick={handler}>
                        <Close className="icon" />
                    </IconButton>
                    <Typography className="title">{title}</Typography>
                </div>
                {children}
            </div>
        </div>
    );
};

export default SlidingDrawer;
