import React from 'react';
import { Typography } from '@material-ui/core';
import DeviceScroll from './DeviceScroll';

interface props{
    image?: string;
    msg?:string;
    containerName?:string;
}
const SectionThree: React.FunctionComponent<props> = ({image, msg, containerName}) => {
    return (
        <div className="section-three">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="left-part">
                        <DeviceScroll image={image} containerName={containerName}/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 d-flex">
                    <div className="right-part">
                        <Typography className="title">
                            {msg}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
