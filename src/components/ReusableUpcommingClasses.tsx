import React from 'react';
import { Typography } from '@material-ui/core';
import ImageThumbnail from './ImageThumbnail';
import TitleSubtitle from './TitleSubtitle';
import { FiberManualRecord } from '@material-ui/icons';

interface props {
    image: string;
    titleClass: string;
    titleLeft: React.ReactNode;
    titleRight: React.ReactNode;
    subtitleLeft: string;
    subtitlteRight: string;
}
const ReusableUpcommingClasses: React.FunctionComponent<props> = ({
    image,
    titleClass,
    titleLeft,
    titleRight,
    subtitleLeft,
    subtitlteRight,
}) => {
    return (
        <div className="upcoming__class">
            <div className="row w-100">
                <div className="col-md-6">
                    <ImageThumbnail image={image} />
                </div>
                <div className="col-md-6 d-flex">
                    <div className="justification">
                    <ul className="list">
                        <li><FiberManualRecord className="icon"/> {titleClass}</li>
                    </ul>
                    <div className="row">
                        <div className="col-md-6 mb-2 d-flex left">
                            <TitleSubtitle title={titleLeft} subtitle={subtitleLeft} />
                        </div>
                        <div className="col-md-6 mb-2 d-flex right">
                            <TitleSubtitle title={titleRight} subtitle={subtitlteRight} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReusableUpcommingClasses;
