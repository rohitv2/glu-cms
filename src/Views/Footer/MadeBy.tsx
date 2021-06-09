import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    showTC?:boolean;
    bgColor?:string;
}
const MadeBy:React.FunctionComponent<props> = ({showTC,bgColor}) => {
    return (
        <div className="set-footer-background" style={{backgroundColor:`{${bgColor}}`}}>
        <div className="row" style={{ marginBottom: '2rem' }}>
            <div className="col-md-6">
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
            <div className="col-md-6">
    <Typography className="glu">{showTC && 'T&C’s / Privacy & Cookies'} {showTC && <span>&nbsp;</span>} Glu © 2020</Typography>
            </div>
        </div>
        </div>
    );
};

export default MadeBy;
