import React from 'react';
import MadeBy from '../Footer/MadeBy';
import NavigationMenu from '../../components/NavigationMenu';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import { menus } from '../../Helper/menus';

interface props {
    topic: string;
    detail: string;
}

const NoFound: React.FunctionComponent<props> = ({ topic, detail }) => {
    return (
        <NavigationMenu menuList={menus}>
            <div className="school__nofav">
                <DashboardWrapper>
                    <p className="heading">{topic}</p>
                    <p className="detail">{detail}</p>
                    <p className="previous">
                        See <span className="previousBtn">Previous classes</span>
                    </p>
                </DashboardWrapper>
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </NavigationMenu>
    );
};
export default NoFound;
