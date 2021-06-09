import React from 'react';
interface props {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    className?: string;
}
const ContainerBox: React.FunctionComponent<props> = ({ title, icon, subtitle, className }) => {
    return (
        <div className={`box ${className}`}>
            <h3 className="title">{title}</h3>
            {icon}
            {subtitle}
        </div>
    );
};

export default ContainerBox;
