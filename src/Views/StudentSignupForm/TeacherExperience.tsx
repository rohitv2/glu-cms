import React, { useContext } from 'react';
import ExperienceContainer from './ExperienceContainer';
import OutlineButton from '../../components/Button/OutlineButton';
import { registerContext } from './Index';

interface props{
    nextHandler?:() => void;
    skip?:()=>void;
}
const TeacherExperience: React.FunctionComponent<props> = ({nextHandler, skip}) => {
    const context = useContext(registerContext);
    return (
        <div className="info__container">
                <ExperienceContainer />
            <div className="mb-4"></div>
            <OutlineButton text="Add" width="10rem" btnClick={context.setNext} />
            <div className="mb-4"></div>
            <OutlineButton text="Next" width="10rem" mt="4rem" btnClick={context.setNext} />
        </div>
    );
};

export default TeacherExperience;
