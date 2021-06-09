import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import { menus } from '../../Helper/menus';
import commonImg from '../../Assets/images';

interface props {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
}
const Header: React.FunctionComponent<props> = ({
    name = 'GEMS School',
    address = ' Dubai, UAE',
    phone = '(+971) 4 123 6987',
    email = 'gemsschool.ae',
}) => {
    return (
        <NavigationMenu menuList={menus} absolute background="transparent">
            <div className="school__info__header">
                <DashboardWrapper>
                    <img src={commonImg.boy} className="pic" />
                    <p className="schoolName">{name}</p>
                    <p className="address">
                        {address}
                        <br /> {phone}
                    </p>
                    <p className="email">{email}</p>
                </DashboardWrapper>
            </div>
        </NavigationMenu>
    );
};
export default Header;
//
