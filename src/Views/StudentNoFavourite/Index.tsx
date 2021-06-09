import React from 'react';

import MadeBy from '../Footer/MadeBy';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';

import commonImg from '../../Assets/images';
import NoFound from '../StudentNoPreviousClass/NoFound';

const Index: React.FunctionComponent = () => {
    return (
        <>
            <NoFound topic="Favourites" detail="Looks like you need to add some favourites." />
        </>
    );
};
export default Index;
