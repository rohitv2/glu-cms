import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ClassCard from '../../components/Cards/ClassCard';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        paddingRight: '5rem',
        paddingBottom: '1em',
    },
    sliderRoot: {
        width: '100%',
    },
    sliderDots: {
        width: 'fit-content',
        position: 'absolute',
        bottom: 0,
        left: 0,
        '& li': {
            width: 100,
            height: 16,
            '& button': {
                width: '100%',
                height: '100%',
                padding: '7px 0',
                display: 'flex',
                alignItems: 'center',
                '&::after': {
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: 2,
                    background: 'rgba(0, 0, 0, 0.25)',
                    position: 'absolute',
                },
                '&::before': {
                    content: '""',
                    display: 'block',
                    width: '0%',
                    height: 2,
                    position: 'absolute',
                    top: 'unset',
                },
            },
            '&.slick-active': {
                '& button': {
                    '&::before': {
                        animation: 'progress 5s',
                        background: '#000',
                    },
                },
            },
        },
    },
});

const settings = {
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
};

const ClassesCarousel: FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Slider
                {...settings}
                dotsClass={classNames('slick-dots', classes.sliderDots)}
                className={classes.sliderRoot}
            >
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </Slider>
        </Grid>
    );
};

export default memo(ClassesCarousel);
