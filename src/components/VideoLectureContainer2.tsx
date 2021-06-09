import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import VideoPlayerContainer from './VideoPlayerContainer';
import moment from 'moment';

interface props {
    link?: any;
}

const VideoLectureContainer2: React.FunctionComponent<props> = ({ link }) => {
    const [time, setTime] = useState({ duration: '', played: '' });
    const handleDuration = (data: any) => {
        setTime({ ...time, played: moment.unix(data.playedSeconds).utc().format('mm:ss') });
    };
    const getTotalLength = (data: any) => {
        setTime({ ...time, duration: moment.unix(data).utc().format('mm:ss') });
    };
    return (
        <div className="lecture__video__player__container">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Typography className="timing">
                        {time.played}/{time.duration} <br />
                    </Typography>
                </div>
                <div className="col-md-10 p-0">
                    <VideoPlayerContainer
                        link={link}
                        getCurrDuration={handleDuration}
                        getTotalLength={getTotalLength}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoLectureContainer2;
