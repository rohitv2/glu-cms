import React from 'react'
import { Typography } from '@material-ui/core';

interface props {
    imgSrc: string;
    date: string;
    time1: string;
    time2: string;
    subject: string;
    desc: string;
    subheading1: string;
    subheading2: string;
}

const SliderContent: React.FunctionComponent<props> = ({ imgSrc, date, time1, time2, subject, desc, subheading1, subheading2 }) => {
    return (
        <div className="row_main">
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-7">
                    <div className="card_image">
                        <img className="img-fluid" src={imgSrc} alt="" />
                    </div>
                </div>
            </div>
            <div className="card_text">
                <div className="row">
                    <div className="col-5">
                        <div className="card_text1">
                            <Typography className="card_text1_1">{date} </Typography>
                            <Typography className="card_text1_1">{time1}</Typography>
                            <Typography className="card_text1_1">{time2}</Typography>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="card_text2">
                            <Typography className="card_text2_2">{subject}</Typography>
                            <Typography className="card_text2_2">{desc}</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card_subtext">
                <div className="row">
                    <div className="col-5">
                        <Typography className="card_subtext_1">{subheading1}</Typography>
                    </div>
                    <div className="col-7">
                        <Typography className="card_subtext_1">{subheading2}</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderContent;