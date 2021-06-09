import React from 'react';

interface props {
    children?: React.ReactNode;
    size:number
}
const RowColMargin: React.FunctionComponent<props> = ({ children, size }) => {
    return (
        <div className="row row__margin">
            <div className={`col-md-${size} colum-spacing`}>{children}</div>
        </div>
    );
};

export default RowColMargin;
