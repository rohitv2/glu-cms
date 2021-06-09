import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import ImageThumbnail from '../../components/ImageThumbnail';
import Footer from '../Footer/Footer';
import FreqQuesAccordion from './FreqQuesAccordion';
import HeadingRowContainer from '../../components/HeadingRowContainer';

const HelpGuides = () => {
    return (
        <div className="theme-section">
            <HeadingRowContainer title="Help Guides" link="View All" />
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <ImageThumbnail image={commonImg.women} title="Accounts" subtitle="How to manage your accounts" />
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <ImageThumbnail
                                image={commonImg.spoongirl}
                                title="Settings"
                                subtitle="Getting to grips with your options"
                            />
                        </div>
                        <div className="col-md-6 mb-5">
                            <ImageThumbnail image={commonImg.boy} title="Payment" subtitle="Topping up your wallet" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 mb-5">
                    <ImageThumbnail
                        image={commonImg.smilegirl}
                        title="Features"
                        subtitle="Making the most of the Glu"
                    />
                </div>
                <div className="col-md-3 mb-5">
                    <ImageThumbnail
                        image={commonImg.spectsboy}
                        title="Whiteboard"
                        subtitle="Familiarising yourself with the tools"
                    />
                </div>
                <div className="col-md-3 mb-5">
                    <ImageThumbnail
                        image={commonImg.shorthair}
                        title="Classes"
                        subtitle="How to find what's right for you"
                    />
                </div>
                <div className="col-md-3 mb-5">
                    <ImageThumbnail image={commonImg.penpadgirl} title="Tutors" subtitle="Finding perfect match" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <ImageThumbnail
                                image={commonImg.penpadgirl}
                                title="Subscription"
                                subtitle="Getting a school setup"
                            />
                        </div>
                        <div className="col-md-6">
                            <ImageThumbnail
                                image={commonImg.smilegirl}
                                title="Favourites"
                                subtitle="Making the most of favourites"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ImageThumbnail
                        image={commonImg.boy}
                        title="Settings"
                        subtitle="Getting to grips with your options"
                    />
                </div>
            </div>
            <div className="accordion-container">
                <hr className="line" />
                <div className="row">
                    <div className="col-lg-6">
                        <Typography className="freq">FAQs</Typography>
                    </div>
                    <div className="col-lg-6">
                        <FreqQuesAccordion />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HelpGuides;
