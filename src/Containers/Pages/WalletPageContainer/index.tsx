import React, { FC } from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import Activity from './Activity';
import NoActivity from './NoActivity';
import useMenuList from '../../../Hooks/useMenuList';
import { UserType, WalletPage } from '../types';

interface IWalletPageContainer extends UserType, WalletPage {}

const WalletPageContainer: FC<IWalletPageContainer> = ({ userType, noActivity, data }) => {
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            userType={userType}
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
            showBurgerNav={userType === 'tutor' ? 'hide' : ''}
            tutorOptions={userType === 'tutor' ? 'show' : ''}
            reverseButtons={userType === 'tutor' ? 'yes' : ''}
        >
            {noActivity && <NoActivity userType={userType} />}
            {!noActivity && data && <Activity userType={userType} {...data} />}
        </NavigationMenu>
    );
};

WalletPageContainer.defaultProps = {
    noActivity: false
}

export default WalletPageContainer;
