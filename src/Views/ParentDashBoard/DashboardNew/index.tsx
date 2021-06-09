import React, { FC } from 'react';
import DashboardPageContainer from '../../../Containers/Pages/DashboardPageContainer';

const ParentDashboard: FC = () => {
    return (
        <DashboardPageContainer userType="parent" />
    )
}

export default ParentDashboard;
