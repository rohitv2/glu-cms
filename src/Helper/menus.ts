import { menuListItem, menuTypes } from '../Interfaces/menuTypes';
import { UserTypes } from '../Types/user';

export const menus: menuTypes[] = [
    { link: '', name: 'Home' },
    { link: '', name: 'Dashboard' },
    { link: '', name: 'Subjects' },
    { link: '', name: 'Messages' },
];

function createMenuListItem(name: string, link?: string, subjectsDrawer?: boolean): menuListItem {
    return { name, link, subjectsDrawer };
}

export function createLeftDrawerMenuList(userType: string): menuListItem[] {
    return [
        createMenuListItem('Live Classes', `/${userType}/live-classes`),
        createMenuListItem('Recorded Classes', `/${userType}/recorded-classes`),
        createMenuListItem('Tutors', `/${userType}/tutors`),
        createMenuListItem('Shop', `/${userType}/shop`),
    ];
}

export function createLeftDrawerMenuListSecondary(userType: string): menuListItem[] {
    return [
        createMenuListItem('Favourites', `/${userType}/favourites`),
        createMenuListItem('Help', `/${userType}/help`),
    ];
}

export function createMenuList(userType: UserTypes): menuListItem[] {
    if (userType === 'tutor') {
        return [
            createMenuListItem('Dashboard', `/${userType}/`),
            createMenuListItem('Set Class', `/${userType}/set-class`),
            createMenuListItem('Message', `/${userType}/messages`),
            createMenuListItem('Shop', `/${userType}/`),
        ];
    }
    return [
        createMenuListItem('Home', `/${userType}/home`),
        createMenuListItem('Dashboard', `/${userType}/dashboard`),
        createMenuListItem('Messages', `/${userType}/messages`),
        createMenuListItem('Subjects', '', true),
    ];
}
