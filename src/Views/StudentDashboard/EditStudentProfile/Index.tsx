import React from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import MadeBy from '../../Footer/MadeBy';
import DashboardWrapper from '../../../Containers/DashboardWrapper';
import Header from './Header';
import Detail from './Detail';
import SemiBox from './SemiBox';
import { studentMenus } from '../../../Helper/studentMenus';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu menuList={studentMenus}>
            <div className="dashboard__edit">
                <DashboardWrapper>
                    <Header name="Edit Profile" />
                    <Detail />
                    <h2 className="education">Education</h2>
                    <SemiBox
                        heading="Current Education"
                        sub1="Dane Court Grammar "
                        sub2=" A-Level"
                        sub3=" Maths, English, ICT"
                    />
                    <SemiBox
                        heading="Previous Education"
                        sub1="GEMS School "
                        sub2="GCSE"
                        sub3="English, Maths, French"
                    />
                    <button className="Addbtn">Add more</button>
                </DashboardWrapper>
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </NavigationMenu>
    );
};
export default Index;
