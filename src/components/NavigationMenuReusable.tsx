import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, IconButton, Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { Search, Menu } from '@material-ui/icons';
import { BigMenu } from './BigMenu';
import commonImg from '../Assets/images';

export interface propsType {
    name: string;
    link: string;
}

interface props {
    menuList?: propsType[];
    customClass?: string;
    customBackgroundColor?: string;
    handler?: () => void;
    showMenuOptions?: boolean;
}
const NavigationMenuReusable: React.FunctionComponent<props> = ({
    menuList,
    handler,
    customClass,
    showMenuOptions,
    customBackgroundColor, // created by Vivek to add a custom background color.
}) => {
    const getMenuList = () => {
        if (menuList) {
            return (
                <>
                    <li>
                        <IconButton className="icon-button" onClick={handler}>
                            <Menu className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button">
                        <i className="icon-Search_Nav" />
                        </IconButton>
                    </li>
                    {menuList.map((item: propsType) => (
                        <li key={uuidv4()}>
                            <Link to={item.link}>
                                <Button className="link">{item.name}</Button>
                            </Link>
                        </li>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <li>
                        <Link to="/signup">
                            <Button className="outline-rec">Sign Up</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <Button>Sign In</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/help-support">
                            <Button>Help</Button>
                        </Link>
                    </li>
                </>
            );
        }
    };
    return (
        <div className="menu__type2__container">
            <div className={`navigation ${customBackgroundColor}`}>
                <ul className={customClass}>{getMenuList()}</ul>
                <Typography className={`heading ${customClass}`}>Glu</Typography>
            </div>
            {showMenuOptions && <BigMenu />}
        </div>
    );
};

export default NavigationMenuReusable;
