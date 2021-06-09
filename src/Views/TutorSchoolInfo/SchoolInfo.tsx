import React, { useEffect, useState } from 'react';
import SchoolInfoHeader from './SchoolInfoHeader';
import SchoolInfoBody from './SchoolInfoBody';
import PageFooter from '../../components/PageFooter';

import { makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import useMenuList from '../../Hooks/useMenuList';
import { useDispatch } from 'react-redux';
import { getTutorSchoolInfo } from '../../Redux/Actions/teacherAction';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
});

const SchoolInfo = () => {
    const classes = useStyles();
    const menu = useMenuList('tutor');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTutorSchoolInfo());
    }, []);
    return (
        <div>
            <NavigationMenu
                menuList={menu}
                showBurgerNav={'hide'}
                tutorOptions={'show'}
                reverseButtons={'yes'}
                background={'secondary'}
            >
                <SchoolInfoHeader />
                <SchoolInfoBody />
                <div className="commonFooter" style={{ padding: '0 3rem' }}>
                    <PageFooter padding={false} />
                </div>
            </NavigationMenu>
        </div>
    );
};

export default SchoolInfo;
