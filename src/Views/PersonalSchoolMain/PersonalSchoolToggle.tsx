import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import PersonalDashboard from '../PersonalSchool/PersonalDashboard';
import SchoolDashboard from '../PersonalSchool2/PersonalDashboard2';
import useMenuList from '../../Hooks/useMenuList';

const PersonalSchoolToggle: React.FunctionComponent = () => {
    const menu = useMenuList('tutor');
    useEffect(() => {
        const toggleState = localStorage.getItem('toggleState');
        if (!toggleState) {
            localStorage.setItem('toggleState', 'isPersonal');
        }
    }, []);
    localStorage.setItem('fromCalendar', 'false');
    const clickHandler = (clickState: any) => {
        localStorage.setItem('toggleState', clickState);
        setToggle(clickState);
    };
    const [toggle, setToggle] = useState(
        localStorage.getItem('toggleState') == null ? 'isPersonal' : localStorage.getItem('toggleState')
    );
    return (
        <NavigationMenu
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            background="secondary"
        >
            <div className="personal_school">
                <div className="personal-school-main">
                    <Typography
                        onClick={() => clickHandler('isPersonal')}
                        style={{ color: toggle == 'isPersonal' ? 'black' : '#8b8b8b' }}
                        className="mainHeading1"
                    >
                        Personal
                    </Typography>
                    <Typography
                        onClick={() => clickHandler('isSchool')}
                        style={{ color: toggle == 'isSchool' ? 'black' : '#8b8b8b' }}
                        className="mainHeading2"
                    >
                        School
                    </Typography>
                </div>
                {toggle === 'isPersonal' ? <PersonalDashboard /> : <SchoolDashboard />}
            </div>
        </NavigationMenu>
    );
};
export default PersonalSchoolToggle;
