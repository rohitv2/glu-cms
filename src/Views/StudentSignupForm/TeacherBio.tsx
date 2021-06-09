import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { registerContext } from './Index';
import OutlineButton from '../../components/Button/OutlineButton';

const TeacherBio: React.FunctionComponent = () => {
    const context = useContext(registerContext);
    const handleContext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const data = { ...context.state };
        data.teacher.bio = e.target.value;
        context.setState(data);
    };
    return (
        <div className="info__container">
            <Typography className="text mb-2">Bio</Typography>
            <textarea rows={5} className="text-area" value={context.state.teacher.bio} onChange={handleContext} />
            <div className="mt-4">
                <OutlineButton text="Next" width="10rem" btnClick={context.goNext} />
            </div>
        </div>
    );
};

export default TeacherBio;
