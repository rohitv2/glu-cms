import React from 'react';

interface props {
    children: React.ReactNode;
}
const SpaceWrapper: React.FunctionComponent<props> = ({ children }) => {
    return <div className="spacing no-mt">{children}</div>;
};

export default SpaceWrapper;
