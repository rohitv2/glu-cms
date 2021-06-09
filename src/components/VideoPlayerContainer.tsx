import React from 'react';
const ReactPlayer = React.lazy(() => import('react-player'));

interface props {
    link: string;
    getCurrDuration?: (data: number) => void;
    getTotalLength?: (data: number) => void;
}

const VideoPlayerContainer: React.FunctionComponent<props> = ({ link, getCurrDuration, getTotalLength }) => {
    return (
        <div className="video__player">
            <ReactPlayer
                onProgress={getCurrDuration}
                onDuration={getTotalLength}
                className="video"
                url={link}
                controls={true}
                width="100%"
                height="85vh"
            />
        </div>
    );
};

export default VideoPlayerContainer;
