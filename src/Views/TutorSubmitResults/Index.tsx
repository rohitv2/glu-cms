import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { makeStyles } from '@material-ui/core';
import PageFooter from '../../components/PageFooter';
import Head from './Head';
import Body from './Body';
import useMenuList from '../../Hooks/useMenuList';

const useStyles = makeStyles({
    mainPadding: {
        padding: '3.125rem',
        paddingBottom: '0',
        marginBottom: '0.625rem',
    },
    topMarg: {
        marginTop: '10rem',
        marginBottom: '3rem',
    },
    mainGrid: {
        position: 'relative',
    },
});

const Index: React.FC = () => {
    const menu = useMenuList('tutor')
    const classes = useStyles();
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className={classes.mainPadding}>
                <Head />
                <Body />
            </div>
            <div className="footer">
                <PageFooter />
            </div>
        </NavigationMenu>
    );
};

export default Index;
