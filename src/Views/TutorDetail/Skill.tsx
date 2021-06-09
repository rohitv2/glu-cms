import React from 'react';
interface props {
    title: string;
}
const Skill: React.FunctionComponent<props> = ({ title }) => {
    return (
        <div className="box">
            <h3 className="title">{title}</h3>
        </div>
    );
};

export default Skill;
