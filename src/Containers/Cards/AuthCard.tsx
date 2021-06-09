import React, { ReactNode } from 'react';

interface authProps{
    children?: ReactNode
}
const AuthCard: React.FunctionComponent<authProps> = ({children}) => {
    return (
        <div className="auth-container">
            {children}
        </div>
    );
}

export default AuthCard;
