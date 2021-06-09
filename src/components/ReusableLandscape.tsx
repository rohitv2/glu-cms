import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface props {
    imgSrc?: string;
    date?: string;
    time1?: string;
    time2?: string;
    subject?: string;
    desc?: string;
    title1?: string;
    subheading1?: string;
    subheading2?: string;
    linkurl?: string;
    content?: ReactNode;
}

const ReusableLandscape: React.FunctionComponent<props> = ({
    imgSrc,
    date,
    time1,
    time2,
    subject,
    desc,
    title1,
    subheading1,
    subheading2,
    linkurl = '/tutor/tutor-upcoming-classes',
    content,
}) => {
    return (
        <>
            <div className="card_subtitle">
                <Link to={linkurl} style={{ color: '#2267FF', textDecoration: 'none' }}>
                    See upcomming
                </Link>
            </div>
            <div className="card_title">
                <Typography className="card_title_1">{title1}</Typography>
            </div>
            <div className="row_main">
                {content ? (
                    content
                ) : (
                    <>
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-7">
                                <div className="card_image">
                                    <img className="img-fluid" height="324" width="418px" src={imgSrc} alt="" />
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
                    </>
                )}
            </div>
        </>
    );
};

export default ReusableLandscape;
