import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';
import { registerContext } from './Index';

interface props {
    title: string;
    data: any;
    handleEdit: (edit: number) => void;
}
const PreviewCard: React.FunctionComponent<props> = ({ title, data, handleEdit }) => {
    const context = useContext(registerContext);
    const deleteHanlder = (i: number) => {
        const data = { ...context.state };
        data.student.education.splice(i, 1);
        context.setState(data);
    };
    return (
        <div className="info__container">
            {data.map((item: any, i: number) => (
                <div className="preview">
                    <div className="button__title__row">
                        <Typography className="title">
                            {title} {i + 1}
                        </Typography>
                        <div className="button-group">
                            <Button disableElevation className="text-button" onClick={() => handleEdit(i)}>
                                Edit
                            </Button>
                            <Button disableElevation className="text-button" onClick={() => deleteHanlder(i)}>
                                Delete
                            </Button>
                        </div>
                    </div>
                    <Typography variant="h5" className="heading">
                        {item.schoolName}
                    </Typography>
                    <Typography variant="h5" className="heading">
                        {item.qualification}
                    </Typography>
                    <Typography variant="h5" className="heading">
                        {item.course}
                    </Typography>
                </div>
            ))}
            <div className="my-4">
                <OutlineButton text="Add More" width="10rem" btnClick={context.goBack} />
            </div>
            <OutlineButton text="Next" width="10rem" mt="3rem" btnClick={context.goNext} />
        </div>
    );
};

export default PreviewCard;
