import React from 'react';

interface props {
    children: React.ReactNode;
}
const FixedNavigation: React.FunctionComponent<props> = ({ children }) => {
    return <div className="fixed__navigation__container">{children}</div>;
};

export default FixedNavigation;
