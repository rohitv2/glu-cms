import React from 'react';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CarousalContent from './CarousalContent';


interface props {
    imgSrc: string;
    date: string;
    time1: string;
    time2: string;
    subject: string;
    desc: string;
    title1: string;
    title2: string;
    subheading1: string;
    subheading2: string;
}

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        paddingRight: '5rem',
        paddingBottom: '2em',
    },
    card_title_1:{
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        whiteSpace: 'pre-wrap',
        // marginBottom: '10px',
    },
    sliderRoot: {
        width: '100%',
        paddingTop: '5rem'
    },
});

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};


const Landscape: React.FunctionComponent<props> = ({ imgSrc, date, time1, time2, subject, desc, title1, title2, subheading1, subheading2 }) => {
    const classes = useStyles();
    return (
        <>

            <div className="card_subtitle">
                <Link to="/parent/upcoming-classes" style={{ color: '#2267FF' }}>
                    See upcomming
                </Link>
            </div>
            <div className="card_title">
                <Typography className={classes.card_title_1}>{title1}</Typography>
                <Typography className={classes.card_title_1}>{title2}</Typography>
            </div>

            <div className="parent__slider">
                <Slider {...settings} className={classes.sliderRoot}>
                    <CarousalContent
                        imgSrc={imgSrc}
                        date={date}
                        time1={time1}
                        time2={time2}
                        subject={subject}
                        desc={desc}
                        subheading1={subheading1}
                        subheading2={subheading2}
                    />
                    <CarousalContent
                        imgSrc={imgSrc}
                        date={date}
                        time1={time1}
                        time2={time2}
                        subject={subject}
                        desc={desc}
                        subheading1={subheading1}
                        subheading2={subheading2}
                    />
                    <CarousalContent
                        imgSrc={imgSrc}
                        date={date}
                        time1={time1}
                        time2={time2}
                        subject={subject}
                        desc={desc}
                        subheading1={subheading1}
                        subheading2={subheading2}
                    />
                    <CarousalContent
                        imgSrc={imgSrc}
                        date={date}
                        time1={time1}
                        time2={time2}
                        subject={subject}
                        desc={desc}
                        subheading1={subheading1}
                        subheading2={subheading2}
                    />
                </Slider>
            </div>

        </>
    );
};

export default Landscape;
