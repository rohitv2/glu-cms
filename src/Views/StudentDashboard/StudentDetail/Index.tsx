import React from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import { menus } from '../../../Helper/menus';
import MadeBy from '../../Footer/MadeBy';
import DashboardWrapper from '../../../Containers/DashboardWrapper';
import Heading from './Heading';
import commonImg from '../../../Assets/images';
import Education from './Education';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu menuList={menus}>
            <div className="dashboard">
                <DashboardWrapper>
                    <img src={commonImg.boyCropped} className="dashboard__wrapper__image" alt="girl" />
                    <Heading
                        name="Frank Howard"
                        about=" I’m Frank, a secondary Student at GEMS school in Dubai. Currently studying Maths, Business Studies
                    and History."
                        country=" Dubai, UAE"
                        contact="(+971) 4 554 0350 frankhwrd@gmail.com"
                    />
                    <Education />
                </DashboardWrapper>
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </NavigationMenu>
    );
};
export default Index;
