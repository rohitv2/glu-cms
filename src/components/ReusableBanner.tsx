import React from 'react';
import {  Typography } from '@material-ui/core';
interface props{
    heading?:string;
    description?:string;
}
const ReusableBanner: React.FunctionComponent<props> = ({heading,description}) => {
    return (
        <>
            <div className="reusable_banner">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="text1">{heading}</Typography>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="tutor_class_subcontainer_col1">
                            <Typography className="text2">{description}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReusableBanner;
