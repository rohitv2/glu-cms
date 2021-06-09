import React, { useState } from 'react';
import { Close } from '@material-ui/icons';
import { IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface props {
    show: boolean;
    handler: () => void;
    menus: any[];
}
const SlidingMenu: React.FunctionComponent<props> = ({ show, handler, menus }) => {
    return (
        <div className={`Navigation__Menu__Container ${show ? 'show' : ''}`}>
            <IconButton className="close-icon-btn" onClick={handler}>
                <Close className="icon" />
            </IconButton>
            <div className="menu-list-container">
                <ul>
                    {menus.map((item: any) => (
                        <li key={uuidv4()}>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bottom-container">
                <Typography className="title"><Link to=''>Privacy policy</Link></Typography>
                &nbsp;&nbsp;&nbsp;
                <Typography className="title"><Link to=''>Terms & Conditions</Link></Typography>
            </div>
        </div>
    );
};

export default SlidingMenu;
