import React from 'react';

interface props{
    children: React.ReactNode
}
const WrapperScroller: React.FunctionComponent<props> = ({children}) => {
    return (
        <div className="wrapper__scroller">
            {children}
        </div>
    );
}

export default WrapperScroller;
