import React from 'react';
import {Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import ReviewList from './ReviewList';
import MadeBy from '../Footer/MadeBy';
import PageFooter from '../../components/PageFooter';
import { monthsOptions } from '../../Helper/options';
import FormControlSelect from '../../components/Form/FormControlSelect';
const useStyles = makeStyles({
    pageContainerContent: {
        paddingBottom: 0
    },
    whiteContainerRoot: {
        width: 'calc(100% + (3.125rem * 2))',
        position: 'relative',
        left: '-3.125rem',
        paddingTop: '6.25rem',
        padding: '6.25rem 3.125rem 0 3.125rem',
    },
    controlsContainer: {
      marginBottom: '5rem'
    },
    selectRoot: {
        marginRight: '7.375rem',
    },
    selectInputRoot: {
        width: 150
    },
    columnsContainerRoot: {
        marginBottom: '5.3125rem'
    },
    tagsContainer: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
        padding: '0 1.5625rem'
    },
    tagsWrapper: {
        marginBottom: '8rem'
    },
    tagsTitle: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        marginBottom: '1.5rem'
    },
    footerRoot: {
        paddingLeft: 0,
        paddingRight: 0
    }
});

const TutorClass: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const classes = useStyles();
    const ReviewListArray = [
        {
            typeName: 'Jonathan Lee',
            type: 'Student',
            rating: '4',
            review: 'How To Structure narrative',
            subject: 'English',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
        {
            typeName: 'Jonathan Lee',
            type: 'Student',
            rating: '4',
            review: 'How To Structure narrative',
            subject: 'English',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
        {
            typeName: 'Jonathan Lee',
            type: 'Student',
            rating: '4',
            review: 'How To Structure narrative',
            subject: 'English',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
        {
            typeName: 'Jonathan Lee',
            type: 'Student',
            rating: '4',
            review: 'How To Structure narrative',
            subject: 'English',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
    ];
    return (
        <>
            <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'} background="secondary">
                <div className="tutor_review_main_container">
                    <div className="tutor_review_banner">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="tutor_review_heading1wrapper">
                                        <Typography className="tutor_review_text">Latest Review</Typography>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="tutor_review_heading2wrapper">
                                        <Typography className="tutor_review_bigtext">George Lee, Parent 4/5</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="tutor_review_banner_subcontainer">
                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="class_rating">
                                            <div className="class_rating_star">
                                                <Typography className="tutor_review_text">4/5</Typography>
                                                <span>
                                                    <svg
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 16 16"
                                                        className="bi bi-star-fill"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </span>{' '}
                                            </div>
                                            <Typography className="tutor_review_extrasmalltext">
                                                Class Rating
                                            </Typography>
                                        </div>
                                        <div className="tutoring_rating">
                                            <div className="class_rating_star">
                                                <Typography className="tutor_review_text">4/5</Typography>
                                                <span>
                                                    <svg
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 16 16"
                                                        className="bi bi-star-fill"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </span>{' '}
                                            </div>
                                            <Typography className="tutor_review_extrasmalltext">
                                                Tutoring Rating
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0">
                                        <div className="tutor_review_descwrapper">
                                            <div className="tutor_review_parawrapper">
                                                <Typography className="tutor_review_paratext">
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                                    et ea rebum. Stet clita kasd gubergren.
                                                </Typography>
                                            </div>
                                            <div className="tutor_review_tutoringhistroy">
                                                <Typography className="tutor_review_smalltext">
                                                    Tutoring, History
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tutor_reviews_list">
                        <div className="horizontalline_new"></div>
                        <div className="tutor_reviews_list_container">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <Typography className="tutor_review_text">Reviews</Typography>
                                    </div>
                                    <div className="col-md-6 p-0 left_border">
                                        <div className="tutor_review_right_subcontainer_1">
                            <div className="show_formselect ">
                                            
                                    <FormControlSelect
                                        label="From"
                                        value="july"
                                        variant="outlined"
                                        labelPlacement="left"
                                        options={monthsOptions}
                                        onChange={console.log}
                                        rootClassName={classes.selectRoot}
                                        inputRootClassName={classes.selectInputRoot}
                                    />
                                    <FormControlSelect
                                        label="To"
                                        value="june"
                                        variant="outlined"
                                        labelPlacement="left"
                                        options={monthsOptions}
                                        onChange={console.log}
                                        inputRootClassName={classes.selectInputRoot}
                                    />
                                            </div>
                                            <div className="horizontalline_new"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="tutor_review_month_name">
                                            <Typography className="tutor_review_text">July</Typography>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0 left_border">
                                        <div className="tutor_review_right_subcontainer_2">
                                            {ReviewListArray.map((val, index) => (
                                                <div className="tutor_review_container_array">
                                                    <ReviewList
                                                        key={index}
                                                        desc={val.desc}
                                                        subject={val.subject}
                                                        type={val.type}
                                                        typeName={val.typeName}
                                                        rating={val.rating}
                                                        review={val.review}
                                                    />
                                                    {index !== ReviewListArray.length - 1 && (
                                                        <div className="horizontalline_new"></div>
                                                    )}
                                                </div>
                                            ))}

                                            <div className="see_all_reviews">
                                                <Link to="/">
                                                    <Typography className="see_text">See All</Typography>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonFooter">
                <PageFooter/>
            </div>
            </NavigationMenu>
        </>
    );
};

export default TutorClass;
