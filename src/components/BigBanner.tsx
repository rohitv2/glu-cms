import React from 'react';
import { Typography } from '@material-ui/core';
interface props{
    heading?:string;
    description?:string;
}
const TutorClass: React.FunctionComponent <props>= ({heading,description}) => {
    return (
        <div className="bigBanner_reusable">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="bigBanner_Text">{heading}</Typography>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="tutor_upcoming_bigBanner">
                            <Typography className="bigBannerDesc_Text">
                                {description}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorClass;
