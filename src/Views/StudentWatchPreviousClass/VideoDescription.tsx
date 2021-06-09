import React from 'react';
import { Typography } from '@material-ui/core';
// import { PlayArrow, FavoriteBorder, Link } from '@material-ui/icons';
// import IconTextRow from '../../components/IconTextRow';
// import IconTextWrapper from '../../Containers/IconTextWrapper';
// import PlayButton from '../../components/Button/PlayButton';

interface props {
    name?: any;
    subject?: any;
    sessionName?: any;
}

const VideoDescription: React.FC<props> = ({ name, subject, sessionName }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <Typography className="title__name">{name}</Typography>
            </div>
            <div className="col-md-6">
                <div className="video__description">
                    <Typography className="heading">{subject}.</Typography>
                    <Typography className="heading">{sessionName}</Typography>

                    {/* <IconTextWrapper>
                        <PlayButton />
                        <IconTextRow icon={<FavoriteBorder className="icon" />} title="Favourite" />
                        <IconTextRow icon={<Link className="icon" />} title="Copy link" />
                    </IconTextWrapper> */}
                </div>
            </div>
        </div>
    );
};

export default VideoDescription;
