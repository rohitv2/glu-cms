import React, { useContext } from 'react';
import EducationInfoContainer from './EducationInfoContainer';
import OutlineButton from '../../components/Button/OutlineButton';
import { registerContext } from './Index';

interface props {
    handler: () => void;
    skip?: () => void;
}
const Education: React.FunctionComponent<props> = ({ handler, skip }) => {
    const context = useContext(registerContext);
    const getBtnText = () => {
        if (context.whoIam === 'student') {
            return 'Skip / Next';
        } else {
            return 'Next';
        }
    };
    const handleButton = ()=> {
        if(context.whoIam === 'student'){
            context.skip();
        }else{
            context.setNext();
        }
    }
    return (
        <div className="info__container">
            <EducationInfoContainer />
            <div className="mt-4">
                <OutlineButton text="Add" width="10rem" btnClick={context.setNext} />
            </div>
            <OutlineButton text={getBtnText()} width="10rem" mt="5rem" btnClick={handleButton} />
        </div>
    );
};

export default Education;
