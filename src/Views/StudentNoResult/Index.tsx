import React from 'react';
import MadeBy from '../Footer/MadeBy';
import NavigationMenu from '../../components/NavigationMenu';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import { menus } from '../../Helper/menus';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu menuList={menus}>
            <div className="school__no__result">
                <DashboardWrapper>
                    <p className="heading">‘Monoclonal antibodies’</p>

                    <p className="detail">Sorry, nothing has been found.</p>
                </DashboardWrapper>
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </NavigationMenu>
    );
};
export default Index;
