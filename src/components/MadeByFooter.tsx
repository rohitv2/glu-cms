import React from 'react';
import { Typography } from '@material-ui/core';

const MadeByFooter = () => {
    return (
        <div className="made__by__footer">
            <div className="row" style={{ marginBottom: '2rem' }}>
                <div className="col-9">
                    <Typography className="build-by">
                        Made by{' '}
                        <span>
                            <a href="https://madebysix.com/">Six</a>
                        </span>{' '}
                        &nbsp;&nbsp; Build by&nbsp;
                    <span>
                            <a href="https://www.antino.io/">Antino Labs</a>
                        </span>
                    </Typography>
                </div>
                <div className="col-3">
                    <Typography className="glu">Glu 2020</Typography>
                </div>
            </div>
        </div>
    );
};

export default MadeByFooter;
