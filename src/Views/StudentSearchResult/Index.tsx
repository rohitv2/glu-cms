import React from 'react';
import MadeBy from '../Footer/MadeBy';
import NavigationMenu from '../../components/NavigationMenu';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import CardHolder from '../StudentFavourite/CardHolder';
import { menus } from '../../Helper/menus';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu menuList={menus}>
            <div className="school__search">
                <DashboardWrapper>
                    <p className="heading">‘Photosynthesis’</p>

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
