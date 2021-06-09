import React from 'react';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

interface props {
    subjects?: any;
}
const TagContainer: React.FC<props> = ({ subjects }) => {
    return (
        <div className="tag__container">
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <Typography className="tag__title">Tags</Typography>
                    <div className="tag__chip__container">
                        {subjects &&
                            subjects.map((subject: string) => (
                                <div key={uuidv4()} className="tag__name">
                                    {subject}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagContainer;
