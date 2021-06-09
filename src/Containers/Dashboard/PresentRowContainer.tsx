import React from 'react';

interface props {
    children?: React.ReactNode;
}
const PresentRowContainer: React.FunctionComponent<props> = ({ children }) => {
    return <div className="present_row">{children}</div>;
};

export default PresentRowContainer;
