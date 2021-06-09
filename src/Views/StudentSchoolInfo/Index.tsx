import React from 'react';

import DashboardWrapper from '../../Containers/DashboardWrapper';
import Header from './Header';
import Section from './Section';
import commonImg from '../../Assets/images';
import PageFooter from '../../components/PageFooter';

const Index: React.FunctionComponent = () => {
    return (
        <div className="school__info">
            <Header />
            <Section />
            <div className="commonFooter">
                <PageFooter padding={false} />
            </div>
        </div>
    );
};
export default Index;
