import React, { ReactNode } from 'react';

interface cardProps {
    children?: ReactNode;
    mb?:string,
    exClass?:string
}
const CardContainer: React.FunctionComponent<cardProps> = ({ children, mb, exClass }) => {
    return <div className={`card-container ${mb} ${exClass}`}>{children}</div>;
};

export default CardContainer;
