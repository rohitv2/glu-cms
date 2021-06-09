import React from 'react';
import MadeBy from '../Footer/MadeBy';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import CardHolder from './CardHolder';
import LeftDrawerMenuContent from '../../Containers/Menus/LeftDrawerMenuContent';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu menuList={menus} LeftDrawerMenuComponent={<LeftDrawerMenuContent userType="students" />}>
            <div className="school__fav">
                <DashboardWrapper>
                    <p className="heading">Favourites</p>
                    <p className="detail">
                        Save your favourite Upcoming Classes, Previous Classes and Tutors. Browse and acess them
                        quickly, all in one place.
                    </p>
                    <CardHolder heading="Upcoming Classes" />
                    <CardHolder heading="Previous Classes" />
                    <CardHolder heading="Tutors" />
                </DashboardWrapper>
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </NavigationMenu>
    );
};
export default Index;
