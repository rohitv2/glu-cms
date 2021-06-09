import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
interface props {
    heading?: string;
    subText?: string;
}
const PlayContainer: React.FunctionComponent<props> = ({ heading, subText }) => {
    return (
        <>
            <div className="reusable_resources_container">
                <div className="row">
                    <div className="col-md-12 ">
                        <Typography className="reusable_resources_text">{heading}</Typography>
                    </div>
                    <div className="play_section">
                        <div className="col-md-12 ">
                            <Typography className="reusable_resources_text">{subText}</Typography>
                        </div>
                        <div className="col-md-12">
                            <div className="play_container">
                                <div className="playBar">
                                    <div className="playProgress"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="play_text_container">
                                <div>
                                    <Typography className="play_text">
                                        <PlayArrowIcon
                                            style={{ position: 'relative', left: '-7px', fontSize: '2rem' }}
                                        />
                                        <span style={{ position: 'relative', left: '-7px', top: '1px' }}>Play</span>
                                    </Typography>
                                </div>
                                <div>
                                    <Typography className="play_text">
                                        <span style={{ position: 'relative', top: '1px' }}>/33</span>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayContainer;
