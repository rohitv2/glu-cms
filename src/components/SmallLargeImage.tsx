import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import { Typography } from '@material-ui/core';

interface props {
    orderOne?: number;
    orderTwo?: number;
    imageOne: string;
    imageTwo: string;
    titleOne?: React.ReactNode;
    titleTwo?: React.ReactNode;
    subtitleOne?: string;
    subtitleTwo?: string;
}
const SmallLargeImage: React.FunctionComponent<props> = ({
    orderOne,
    orderTwo,
    imageOne,
    imageTwo,
    titleOne,
    titleTwo,
    subtitleOne,
    subtitleTwo
}) => {
    return (
        <div className="row">
            <div className={`col-lg-6 order-${orderOne}  mb-3`}>
                <div className="small__large__Image__container">
                    <ImageThumbnail image={imageOne} title={titleOne} subtitle={subtitleOne} />
                    {/* <Typography variant="h6" className="title">
                        {titleOne}
                    </Typography> */}
                </div>
            </div>
            <div className={`col-lg-6 order-${orderTwo}  mb-3`}>
                <div className="vrboy__container">
                    <ImageThumbnail image={imageTwo} title={titleTwo} subtitle={subtitleTwo} />
                    {/* <Typography variant="h6" className="title">
                        {titleTwo}
                    </Typography> */}
                </div>
            </div>
        </div>
    );
};

export default SmallLargeImage;
