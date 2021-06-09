import React from 'react';

interface props {
    children?: React.ReactNode;
}
const BorderTableContainer: React.FunctionComponent<props> = ({ children }) => {
    return (
        <div className="student-table">
            <div className="table__container bold__border_table">{children}</div>
        </div>
    );
};

export default BorderTableContainer;
