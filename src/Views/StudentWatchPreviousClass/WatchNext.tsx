import React from 'react';
import HorizontalLine from '../../components/HorizontalLine';
import { Typography } from '@material-ui/core';
import ImageThumbnail from '../../components/ImageThumbnail';

interface props {
    nextWatch?: any;
    handleClick?: () => void;
}

const WatchNext: React.FC<props> = ({ nextWatch, handleClick }) => {
    return (
        <div className="watch__next__container">
            <HorizontalLine />
            <div className="row">
                <div className="col-md-6 mb-3">
                    <Typography className="heading">Watch Next</Typography>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="row">
                        <div className="col-md-6 mb-3" onClick={handleClick}>
                            <ImageThumbnail image={nextWatch?.coverImage} />
                        </div>
                        <div className="col-md-6 mb-3" onClick={handleClick}>
                            <div className="video__information__container">
                                <Typography className="heading set__margin">Watch Next</Typography>
                                <Typography className="heading">{nextWatch?.sessionName}</Typography>
                                <Typography className="sub__heading">{nextWatch?.price} / 45mins</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchNext;
