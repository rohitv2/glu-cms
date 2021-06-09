import React from 'react';
import { IconButton } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

const PlayButton = () => {
    return (
        <IconButton className="play__button">
            <PlayArrow className="icon" />
        </IconButton>
    );
};

export default PlayButton;
