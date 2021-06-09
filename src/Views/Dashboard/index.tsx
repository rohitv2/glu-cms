import React from 'react';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import Sidebar from '../../components/Dashobard/Sidebar';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import { getNavigationMenu } from '../../Routes/SidebarRoutes';
import { dashboardRoutes } from '../../Routes/Dashboard/routes';
import {v4 as uuidv4} from "uuid";

const index: React.FunctionComponent = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                <Sidebar NavigationMenu={getNavigationMenu()} />
                <div className="dashboard-content">
                    <Header title="Dashboard" icon={<DashboardIcon className="icon" />} />
                    <div className="dashboard-main-content">
                        <Switch>
                            {dashboardRoutes.map((route) => (
                                <Route exact key={uuidv4()} path={route.pathname} component={route.component} />
                            ))}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
