import React from 'react';

interface props {
    children?: React.ReactNode;
}
const DashboardWrapper: React.FunctionComponent<props> = ({ children }) => {
    return <div className="dashboard__wrapper">{children}</div>;
};

export default DashboardWrapper;
