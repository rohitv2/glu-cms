import React from 'react';
import { Close } from '@material-ui/icons';
import { IconButton, Typography } from '@material-ui/core';
// import './style.scss';


const SlidingPushDrawerContent: React.FunctionComponent = () => {
    return (
        <div className="push__drawer__content">
                <Typography className="heading">Today</Typography>
                <div className="title__description">
                    <div className="first__row__title">
                        <Typography className="title">GEMS School</Typography>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Child 1 has been given after school detention between 3.30 and 4pm.
                        </Typography>
                    </div>
                    <div className="third__row__time">
                        <Typography className="subtitle">
                            Now
                        </Typography>
                    </div>
                    <hr/>                    
                </div>

                <div className="title__description message__request">
                    <div className="first__row__title">
                        <Typography className="title">Message Request </Typography>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Jen Holden is trying to send you a message.
                        </Typography>
                    </div>
                    <div className="accept__ignore__container">
                        <div>
                            <button>Accept</button>
                        </div>
                        <div>
                            <button>Reject</button>
                        </div>
                    </div>
                    <div className="third__row__time">
                        <Typography className="subtitle">
                            20sec ago
                        </Typography>
                    </div>
                    <hr/>   
                </div>

                <div className="title__description topped__up">
                    <div className="topped__up__with__close">
                        <div className="first__row__title">
                            <Typography className="title">Topped Up </Typography>
                        </div>
                        <IconButton className="close-icon-btn">
                            <Close className="icon" />
                        </IconButton>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Your wallet has been topped up with AED250
                        </Typography>
                    </div>
                    <div className="third__row__time">
                        <Typography className="subtitle">
                            2min ago
                        </Typography>
                    </div>
                    <hr/>   
                </div>

                <div className="title__description booking__confirmed">
                    <div className="first__row__title">
                        <Typography className="title">Booking confirmed </Typography>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Maths class with Ray Smith has been added to your calendar
                        </Typography>
                    </div>
                </div>

                <div className="clear__all">
                     <Typography className="subtitle">Clear all </Typography>
                </div>
        </div>
    );
};

export default React.memo(SlidingPushDrawerContent);
