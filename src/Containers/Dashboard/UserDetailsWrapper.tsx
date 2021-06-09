import React from 'react';

interface props {
    children?: React.ReactNode;
}
const UserDetailsWrapper: React.FunctionComponent<props> = ({ children }) => {
    return <div className="details-wrapper change_card_pd">
        {children}
    </div>;
};

export default UserDetailsWrapper;
