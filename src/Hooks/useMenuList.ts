import { menuListItem } from '../Interfaces/menuTypes';
import { UserTypes } from '../Types/user';
import { useMemo } from 'react';
import { createMenuList } from '../Helper/menus';

function useMenuList(userType: UserTypes): menuListItem[] {
    return useMemo(() => createMenuList(userType), [userType]);
}

export function useMenuOptions(userType: UserTypes) {
    return useMemo(() => {
        return userType === 'tutor'
            ? {
                  showBurgerNav: 'hide',
                  tutorOptions: 'show',
                  reverseButtons: 'yes',
              }
            : {
                  showBurgerNav: '',
                  tutorOptions: '',
                  reverseButtons: '',
              };
    }, [userType]);
}

export default useMenuList;
