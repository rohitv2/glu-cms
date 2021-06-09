import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

interface props{
    title: string
}
const SkillContainer: React.FunctionComponent<props> = ({title}) => {
    const [skills, setSkills] = useState<Array<string>>([
        'Physics, Quantum Physics',
        'Dynamics',
        'Kinetics',
        'Gravitaion',
    ]);
    return (
        <div className="skill-container">
            <Typography className="heading">{title}</Typography>
            <div className="skill-chip-container">
                {skills.map((item: string) => (
                    <div key={uuidv4()} className="skill-chip">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillContainer;
