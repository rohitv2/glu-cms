import React, { useMemo } from 'react';
import { createMenuList } from '../../../Helper/menus';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../../Containers/Menus/LeftDrawerMenuContent';
import Messages from '../../../components/Messages/Index';


export default function ParentMessages() {
    const menuList = useMemo(() => createMenuList("parent"), ["parent"])

    return (
        <NavigationMenu absolute background="transparent" menuList={menuList} LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={'parent'} />}>
            <Messages userType="parent"/>
        </NavigationMenu>
    )
}
