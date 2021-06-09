import React from 'react';

interface props{
    children: React.ReactNode
}
const IconTextWrapper: React.FunctionComponent<props> = ({children}) => {
    return <div className="icon__text__container">
        {children}
    </div>;
};

export default IconTextWrapper;
