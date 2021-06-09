import React from 'react';
import { IconButton, Button, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import OutlineButton from './Button/OutlineButton';
import { Icons } from '../Assets/Icons';


interface props{
    handleMenu: () => void
}
const MenuContainer: React.FunctionComponent<props> = ({handleMenu}) => {
    const routes = useHistory();
    const handleSignin = () => {
        routes.push('/login')
    }
    const handleSignup = () => {
        routes.push('/signup')
    }
    const handleHelp = () => {
        routes.push('/support')
    }
    return (
        <div className="menus-container">
            <div className="left">
                <ul>
                    {/* <li>
                        <IconButton onClick={handleMenu}>
                            <Menu />
                        </IconButton>
                    </li> */}
                    <li>
                        <OutlineButton btnClick={handleSignup} text="Sign Up"/>
                    </li>
                    <li>
                        <Button onClick={handleSignin}>Sign In</Button>
                    </li>
                    <li>
                        <Button onClick={handleHelp}>Help</Button>
                    </li>
                </ul>
            </div>
            <div className="right">
                <img className="title" src={Icons.logo}/>
            </div>
        </div>
    );
};

export default MenuContainer;
